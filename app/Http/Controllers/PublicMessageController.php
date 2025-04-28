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
     * 自分が投稿したパブリックメッセージの一覧を表示
     */
    public function index(): Response
    {
        $user = Auth::user();
        
        // 自分が投稿したパブリックメッセージを案件ごとにグループ化して取得
        $messages = PublicMessage::with(['jobListing', 'jobListing.user'])
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get()
            ->groupBy('job_listing_id');
            
        // 案件ごとに最新のメッセージだけを表示用に整形
        $jobListingsWithMessages = [];
        foreach ($messages as $jobListingId => $messageGroup) {
            $latestMessage = $messageGroup->first();
            $jobListing = $latestMessage->jobListing;
            
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
        
        return Inertia::render('PublicMessages/Index', [
            'jobListingsWithMessages' => $jobListingsWithMessages,
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