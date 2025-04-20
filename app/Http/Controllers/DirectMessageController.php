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

class DirectMessageController extends Controller
{
    /**
     * Display a listing of the conversation groups.
     */
    public function index(): Response
    {
        $user = Auth::user();
        $conversationGroups = ConversationGroup::with(['jobOwner', 'applicant', 'latestMessage.sender', 'jobListing'])
            ->where('job_owner_id', $user->id)
            ->orWhere('applicant_id', $user->id)
            ->orderBy('updated_at', 'desc')
            ->get();
            
        // 各会話グループの未読メッセージ数を計算
        $conversationGroups->each(function ($group) use ($user) {
            $group->unread_count = $group->messages()
                ->where('sender_id', '!=', $user->id)
                ->where('is_read', false)
                ->count();
        });

        return Inertia::render('Messages/Index', [
            'conversationGroups' => $conversationGroups,
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

        // Create message
        $message = new DirectMessage([
            'sender_id' => Auth::id(),
            'message' => $request->message,
            'is_read' => false, // 初期状態は未読
        ]);

        $conversationGroup->messages()->save($message);
        $conversationGroup->touch(); // Update the updated_at timestamp

        // Ajax リクエストの場合は JSON レスポンスを返す
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => true,
                'message' => $message->load('sender'),
            ]);
        }

        // 通常のフォーム送信の場合はリダイレクト
        return redirect()->back();
    }

    /**
     * Create a new conversation group with a user.
     */
    public function create(User $user): RedirectResponse
    {
        $currentUser = Auth::user();
        
        // Check if conversation already exists
        $existingConversation = ConversationGroup::where(function($query) use ($currentUser, $user) {
            $query->where('job_owner_id', $currentUser->id)
                  ->where('applicant_id', $user->id);
        })->orWhere(function($query) use ($currentUser, $user) {
            $query->where('job_owner_id', $user->id)
                  ->where('applicant_id', $currentUser->id);
        })->first();

        if ($existingConversation) {
            return redirect()->route('messages.show', $existingConversation);
        }

        // Create new conversation group
        $conversationGroup = ConversationGroup::create([
            'job_owner_id' => $currentUser->id,
            'applicant_id' => $user->id
        ]);

        return redirect()->route('messages.show', $conversationGroup);
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