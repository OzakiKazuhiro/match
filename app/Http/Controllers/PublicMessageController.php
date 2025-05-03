<?php

namespace App\Http\Controllers;

use App\Models\PublicMessage;
use App\Models\JobListing;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

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
        $publicMessageQuery = PublicMessage::where('user_id', $user->id);
        
        // 検索条件がある場合
        if ($search) {
            // 案件タイトルまたはメッセージ内容で検索
            $publicMessageQuery->where(function($query) use ($search) {
                $query->whereHas('jobListing', function($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%");
                })
                ->orWhere('message', 'like', "%{$search}%");
            });
        }
        
        $jobListingIds = $publicMessageQuery->pluck('job_listing_id')
            ->unique()
            ->values()
            ->toArray();
            
        // 案件ごとの最新メッセージ情報を取得
        $jobListingsWithMessages = [];
        foreach ($jobListingIds as $jobListingId) {
            $jobListing = JobListing::with('user')->findOrFail($jobListingId);
            
            // その案件の最新のパブリックメッセージを取得（投稿者に関係なく最新のもの）
            $latestMessage = PublicMessage::with('user')
                ->where('job_listing_id', $jobListingId)
                ->latest()
                ->first();
                
            // その案件に関連する全てのパブリックメッセージ数を取得
            $totalMessages = PublicMessage::where('job_listing_id', $jobListingId)->count();
            
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
        
        return Inertia::render('PublicMessages/Index', [
            'jobListingsWithMessages' => $jobListingsWithMessages,
            'filters' => [
                'search' => $search,
            ],
        ]);
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