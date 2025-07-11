<?php

namespace App\Http\Controllers;

use App\Models\ConversationGroup;
use App\Models\DirectMessage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DirectMessageController extends Controller
{
    /**
     * Display a listing of the conversation groups.
     */
    public function index(Request $request): Response
    {
        $user = Auth::user();
        $search = $request->input('search');
        
        // 参加している会話グループをjob_listing_idも含めてグループ化して取得
        $query = ConversationGroup::with(['jobOwner', 'applicant', 'latestMessage.sender', 'jobListing'])
            ->where(function($query) use ($user) {
                $query->where('job_owner_id', $user->id)
                    ->orWhere('applicant_id', $user->id);
            });
            
        // 検索条件が指定されている場合
        if ($search) {
            $query->where(function($query) use ($search, $user) {
                // ユーザーが案件オーナーの場合は応募者の名前で検索
                $query->whereHas('applicant', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                })
                // ユーザーが応募者の場合は案件オーナーの名前で検索
                ->orWhereHas('jobOwner', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                })
                // 案件タイトルで検索
                ->orWhereHas('jobListing', function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%");
                })
                // 最新メッセージの内容で検索
                ->orWhereHas('latestMessage', function ($q) use ($search) {
                    $q->where('message', 'like', "%{$search}%");
                });
            });
        }
        
        // ページネーションを適用する前に、会話グループIDを取得
        $conversationGroupIds = $query->pluck('id')->toArray();
        
        // 未読メッセージ数を一括で取得するサブクエリを作成
        $unreadCounts = DB::table('direct_messages')
            ->select('conversation_group_id', DB::raw('COUNT(*) as unread_count'))
            ->whereIn('conversation_group_id', $conversationGroupIds)
            ->where('sender_id', '!=', $user->id)
            ->where('is_read', false)
            ->groupBy('conversation_group_id')
            ->pluck('unread_count', 'conversation_group_id')
            ->toArray();
        
        // ページネーションを適用（最新メッセージでソート）
        $conversationGroups = $query->orderBy('updated_at', 'desc')->paginate(20);
            
        // 各会話グループに未読メッセージ数を設定
        $conversationGroups->each(function ($group) use ($unreadCounts) {
            $group->unread_count = $unreadCounts[$group->id] ?? 0;
        });

        return Inertia::render('Messages/Index', [
            'conversationGroups' => $conversationGroups,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Show the messages in a conversation group.
     */
    public function show(ConversationGroup $conversationGroup): Response
    {
        // Check if the authenticated user is a participant of this conversation
        if (!$conversationGroup->hasParticipant(Auth::id())) {
            abort(403, 'Unauthorized action.');
        }

        $conversationGroup->load(['jobOwner', 'applicant', 'jobListing']);
        $messages = $conversationGroup->messages()
            ->with('sender')
            ->orderBy('created_at', 'asc')
            ->get();
            
        $participants = $conversationGroup->getAllParticipants();
        
        // 表示時に、自分宛のメッセージを既読にする
        $this->markMessagesAsRead($conversationGroup);

        return Inertia::render('Messages/Show', [
            'conversationGroup' => $conversationGroup,
            'messages' => $messages,
            'participants' => $participants,
        ]);
    }

    /**
     * Store a new message in the conversation.
     */
    public function store(Request $request, ConversationGroup $conversationGroup): JsonResponse|RedirectResponse
    {
        // Validate request
        $request->validate([
            'message' => 'required|string|max:1000',
        ]);

        // Check if the authenticated user is a participant of this conversation
        if (!$conversationGroup->hasParticipant(Auth::id())) {
            abort(403, 'Unauthorized action.');
        }

        try {
            // トランザクション開始
            DB::beginTransaction();
            
            // Create message
            $message = new DirectMessage([
                'sender_id' => Auth::id(),
                'message' => $request->message,
                'is_read' => false, // 初期状態は未読
            ]);

            $conversationGroup->messages()->save($message);
            $conversationGroup->touch(); // Update the updated_at timestamp
            
            // トランザクションコミット
            DB::commit();
            
            // Ajax リクエストの場合は JSON レスポンスを返す
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => true,
                    'message' => $message->load('sender'),
                ]);
            }

            // 通常のフォーム送信の場合はリダイレクト
            return redirect()->back();
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('メッセージ送信処理でエラー発生: ' . $e->getMessage());
            
            // Ajax リクエストの場合はJSONでエラー返却
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => false,
                    'message' => 'メッセージの送信に失敗しました。'
                ], 500);
            }
            
            // 通常のフォーム送信の場合はリダイレクト
            session()->flash('error', 'メッセージの送信に失敗しました。再度お試しください。');
            return redirect()->back()->withInput();
        }
    }

    /**
     * メッセージを既読にするAPIエンドポイント
     */
    public function markAsRead(Request $request, ConversationGroup $conversationGroup): JsonResponse
    {
        // 権限チェック
        if (!$conversationGroup->hasParticipant(Auth::id())) {
            abort(403, '権限がありません');
        }
        
        $this->markMessagesAsRead($conversationGroup);
        
        return response()->json([
            'success' => true
        ]);
    }
    
    /**
     * 会話グループ内の自分宛のメッセージを既読にする
     */
    private function markMessagesAsRead(ConversationGroup $conversationGroup): void
    {
        // 自分が送信者ではないメッセージ（＝自分宛のメッセージ）を既読にする
        $conversationGroup->messages()
            ->where('sender_id', '!=', Auth::id())
            ->where('is_read', false)
            ->update(['is_read' => true]);
    }
} 