<?php

namespace App\Http\Controllers;

use App\Models\PublicMessage;
use App\Models\JobListing;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PublicMessageController extends Controller
{
    /**
     * 自分が投稿したメッセージが属する案件の一覧と各案件の最新メッセージを表示
     */
    public function index(Request $request): Response
    {
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
            
            // 各案件の最新メッセージ情報を取得
            $jobListingsWithMessages = [];
            foreach ($jobListingsPaginated as $jobListing) {
                // その案件の最新のパブリックメッセージを取得（投稿者に関係なく最新のもの）
                $latestMessage = PublicMessage::with('user')
                    ->where('job_listing_id', $jobListing->id)
                    ->latest()
                    ->first();
                    
                // その案件に関連する全てのパブリックメッセージ数を取得
                $totalMessages = PublicMessage::where('job_listing_id', $jobListing->id)->count();
                
                $jobListingsWithMessages[] = [
                    'job_listing' => $jobListing,
                    'latest_message' => [
                        'id' => $latestMessage->id,
                        'content' => $latestMessage->message, // メッセージ内容はカラム名が異なる
                        'created_at' => $latestMessage->created_at,
                        'user' => $latestMessage->user,
                    ],
                    'total_messages' => $totalMessages,
                ];
            }
            
            // ページネーション情報を保持しつつデータを整形
            $pagination = $jobListingsPaginated->toArray();
            unset($pagination['data']);
            
            return Inertia::render('PublicMessages/Index', [
                'jobListingsWithMessages' => $jobListingsWithMessages,
                'pagination' => $pagination,
                'filters' => [
                    'search' => $search,
                ],
            ]);
        } else {
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
    }
    
    /**
     * 特定の案件のパブリックメッセージ詳細を表示
     */
    public function show(JobListing $jobListing): Response
    {
        // 案件の情報を取得
        $jobListing->load('user');
        
        // パブリックメッセージをページネーションで取得（新しい順、10件ずつ）
        $publicMessages = $jobListing->publicMessages()
            ->with('user')
            ->latest()
            ->paginate(10);
        
        return Inertia::render('PublicMessages/Show', [
            'jobListing' => $jobListing,
            'publicMessages' => $publicMessages,
        ]);
    }
} 