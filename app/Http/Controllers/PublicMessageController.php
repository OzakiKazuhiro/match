<?php

namespace App\Http\Controllers;

use App\Models\PublicMessage;
use App\Models\JobListing;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PublicMessageController extends Controller
{
    /**
     * 自分が投稿したメッセージが属する案件の一覧と各案件の最新メッセージを表示
     */
    public function index(Request $request): Response
    {
        try {
            // トランザクション開始（読み取り操作のみでもロックを取得するケースがあるため）
            DB::beginTransaction();
            
            $user = Auth::user();
            $search = $request->input('search');
            
            // 自分が投稿したパブリックメッセージがある案件IDを取得
            $jobListingIds = PublicMessage::where('user_id', $user->id);
            
            // 検索条件がある場合
            if ($search) {
                // 案件タイトルまたはメッセージ内容で検索
                $jobListingIds->where(function($query) use ($search) {
                    $query->whereHas('jobListing', function($q) use ($search) {
                        $q->where('title', 'like', "%{$search}%");
                    })
                    ->orWhere('message', 'like', "%{$search}%");
                });
            }
            
            $jobListingIds = $jobListingIds->pluck('job_listing_id')
                ->unique()
                ->values()
                ->toArray();
            
            // 該当する案件を取得して、最新メッセージと一緒にページネーションで返す
            if (count($jobListingIds) > 0) {
                $query = JobListing::with('user')
                    ->whereIn('id', $jobListingIds);
                
                // 検索クエリがある場合はさらにフィルタリング
                if ($search) {
                    $query->where(function($q) use ($search) {
                        $q->where('title', 'like', "%{$search}%");
                    });
                }
                
                $jobListingsPaginated = $query->paginate(20);
                
                // JOINを使用して最新メッセージと件数を一括取得
                $jobListingIds = $jobListingsPaginated->pluck('id')->toArray();
                
                // メッセージ数のサブクエリ
                $messageCounts = DB::table('public_messages')
                    ->select('job_listing_id', DB::raw('COUNT(*) as count'))
                    ->whereIn('job_listing_id', $jobListingIds)
                    ->groupBy('job_listing_id');
                
                // 最新メッセージを取得するサブクエリ
                $latestMessageDates = DB::table('public_messages')
                    ->select('job_listing_id', DB::raw('MAX(created_at) as latest_date'))
                    ->whereIn('job_listing_id', $jobListingIds)
                    ->groupBy('job_listing_id');
                
                // 最新メッセージの詳細をJOINで取得
                $messages = DB::table('public_messages as pm')
                    ->join(DB::raw('(' . $latestMessageDates->toSql() . ') as latest'), function($join) {
                        $join->on('pm.job_listing_id', '=', 'latest.job_listing_id')
                             ->on('pm.created_at', '=', 'latest.latest_date');
                    })
                    ->leftJoin('users', 'pm.user_id', '=', 'users.id')
                    ->select(
                        'pm.id', 
                        'pm.message', 
                        'pm.created_at', 
                        'pm.job_listing_id',
                        'users.id as user_id',
                        'users.name as user_name', 
                        'users.email as user_email',
                        'users.profile_photo_path as user_profile_photo_path'
                    )
                    ->mergeBindings($latestMessageDates);
                
                // メッセージ数とメッセージ内容を同時に取得
                $messagesWithCounts = DB::table(DB::raw('(' . $messages->toSql() . ') as messages'))
                    ->leftJoin(DB::raw('(' . $messageCounts->toSql() . ') as counts'), 
                               'messages.job_listing_id', '=', 'counts.job_listing_id')
                    ->select(
                        'messages.*',
                        'counts.count as total_messages'
                    )
                    ->mergeBindings($messages)
                    ->mergeBindings($messageCounts)
                    ->get()
                    ->keyBy('job_listing_id');
                
                // 結果を整形
                $jobListingsWithMessages = [];
                foreach ($jobListingsPaginated as $jobListing) {
                    $messageInfo = $messagesWithCounts->get($jobListing->id);
                    
                    // メッセージが存在する場合のみユーザー情報を構築
                    $userInfo = null;
                    if ($messageInfo && $messageInfo->user_id) {
                        $userInfo = [
                            'id' => $messageInfo->user_id,
                            'name' => $messageInfo->user_name,
                            'email' => $messageInfo->user_email,
                            'profile_photo_path' => $messageInfo->user_profile_photo_path
                        ];
                    }
                    
                    $jobListingsWithMessages[] = [
                        'job_listing' => $jobListing,
                        'latest_message' => $messageInfo ? [
                            'id' => $messageInfo->id,
                            'content' => $messageInfo->message,
                            'created_at' => $messageInfo->created_at,
                            'user' => $userInfo,
                        ] : null,
                        'total_messages' => $messageInfo ? $messageInfo->total_messages : 0,
                    ];
                }
                
                // ページネーション情報を保持しつつデータを整形
                $pagination = $jobListingsPaginated->toArray();
                unset($pagination['data']);
                
                // トランザクションコミット
                DB::commit();
                
                return Inertia::render('PublicMessages/Index', [
                    'jobListingsWithMessages' => $jobListingsWithMessages,
                    'pagination' => $pagination,
                    'filters' => [
                        'search' => $search,
                    ],
                ]);
            } else {
                // トランザクションコミット
                DB::commit();
                
                // 該当する案件がない場合は空のデータを返す
                return Inertia::render('PublicMessages/Index', [
                    'jobListingsWithMessages' => [],
                    'pagination' => [
                        'current_page' => 1,
                        'last_page' => 1,
                        'per_page' => 20,
                        'total' => 0,
                    ],
                    'filters' => [
                        'search' => $search,
                    ],
                ]);
            }
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('パブリックメッセージ一覧取得処理でエラー発生: ' . $e->getMessage());
            
            // エラー時は簡易的な画面を表示
            return Inertia::render('PublicMessages/Index', [
                'jobListingsWithMessages' => [],
                'pagination' => [
                    'current_page' => 1,
                    'last_page' => 1,
                    'per_page' => 20,
                    'total' => 0,
                ],
                'filters' => [
                    'search' => $search,
                ],
                'error' => 'メッセージの取得中にエラーが発生しました。再度お試しください。'
            ]);
        }
    }
    
    /**
     * 特定の案件のパブリックメッセージ詳細を表示
     */
    public function show(JobListing $jobListing): Response
    {
        try {
            // トランザクション開始（読み取り操作のみでもロックを取得するケースがあるため）
            DB::beginTransaction();
            
            // 案件の情報を取得
            $jobListing->load('user');
            
            // パブリックメッセージをページネーションで取得（新しい順、10件ずつ）
            $publicMessages = $jobListing->publicMessages()
                ->with('user')
                ->latest()
                ->paginate(10);
            
            // トランザクションコミット
            DB::commit();
            
            return Inertia::render('PublicMessages/Show', [
                'jobListing' => $jobListing,
                'publicMessages' => $publicMessages,
            ]);
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('パブリックメッセージ詳細取得処理でエラー発生: ' . $e->getMessage());
            
            // エラー時は簡易的な画面を表示
            return Inertia::render('PublicMessages/Show', [
                'jobListing' => $jobListing,
                'publicMessages' => [],
                'error' => 'メッセージの取得中にエラーが発生しました。再度お試しください。'
            ]);
        }
    }
} 