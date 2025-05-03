<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreApplicationRequest;
use App\Models\JobListing;
use App\Models\Application;
use App\Models\ConversationGroup;
use App\Notifications\ApplicationReceived;
use App\Notifications\ApplicationAccepted;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ApplicationController extends Controller
{
    /**
     * 案件への応募フォームを表示
     */
    public function create(JobListing $jobListing): Response
    {
        // 自分の案件には応募できない & 募集終了した案件には応募できない
        if (Auth::id() === $jobListing->user_id || $jobListing->is_closed) {
            return abort(403);
        }
        
        // 既に応募済みかチェック
        $existingApplication = Application::where('job_listing_id', $jobListing->id)
            ->where('user_id', Auth::id())
            ->first();
        
        return Inertia::render('Apply', [
            'jobListing' => $jobListing->load('user'),
            'alreadyApplied' => $existingApplication !== null,
            'application' => $existingApplication,
        ]);
    }
    
    /**
     * 案件への応募を保存
     */
    public function store(StoreApplicationRequest $request, JobListing $jobListing): RedirectResponse
    {
        // 自分の案件には応募できない & 募集終了した案件には応募できない
        if (Auth::id() === $jobListing->user_id || $jobListing->is_closed) {
            return abort(403);
        }
        
        // 既に応募済みかチェック
        $existingApplication = Application::where('job_listing_id', $jobListing->id)
            ->where('user_id', Auth::id())
            ->first();
            
        if ($existingApplication) {
            session()->flash('message', '既にこの案件に応募しています');
            return redirect()->route('job-listings.show', $jobListing);
        }
        
        // 応募情報を保存
        $application = Application::create([
            'job_listing_id' => $jobListing->id,
            'user_id' => Auth::id(),
            'message' => $request->validated()['message'],
            'status' => 'pending', // 初期状態は「保留中」
        ]);
        
        // 会話グループがなければ作成（投稿者と応募者間）
        $conversationGroup = ConversationGroup::where(function($query) use ($jobListing) {
                $query->where('job_owner_id', $jobListing->user_id)
                      ->where('applicant_id', Auth::id());
            })
            ->orWhere(function($query) use ($jobListing) {
                $query->where('job_owner_id', Auth::id())
                      ->where('applicant_id', $jobListing->user_id);
            })
            ->first();
            
        if (!$conversationGroup) {
            $conversationGroup = ConversationGroup::create([
                'job_owner_id' => $jobListing->user_id, // 案件投稿者
                'applicant_id' => Auth::id(), // 応募者
                'job_listing_id' => $jobListing->id, // 関連する案件
            ]);
        } else if ($conversationGroup->job_listing_id === null) {
            // 既存の会話グループに案件IDが設定されていない場合は更新
            $conversationGroup->update(['job_listing_id' => $jobListing->id]);
        }
        
        // 案件投稿者に通知を送信
        $jobOwner = $jobListing->user;
        $jobOwner->notify(new ApplicationReceived($application));
        
        session()->flash('message', '案件に応募しました。案件投稿者からの返信をお待ちください');
        
        return redirect()->route('job-listings.show', $jobListing);
    }
    
    /**
     * マイページでの応募一覧を表示
     */
    public function index(): Response
    {
        $applications = Application::where('user_id', Auth::id())
            ->with(['jobListing.user'])
            ->latest()
            ->get();
            
        return Inertia::render('Applications', [
            'applications' => $applications,
        ]);
    }
    
    /**
     * 自分が投稿した案件への応募一覧を表示
     */
    public function showApplicationsToMyJobs(): Response
    {
        // 自分の案件一覧を取得
        $myJobIds = JobListing::where('user_id', Auth::id())->pluck('id');
        
        // 全ての自分の案件データを取得（応募がない案件も含む）
        $allMyJobListings = JobListing::where('user_id', Auth::id())
            ->withCount('applications')
            ->orderBy('created_at', 'desc')
            ->get();
        
        if ($myJobIds->isEmpty()) {
            return Inertia::render('ApplicationsToMyJobs', [
                'applications' => [],
                'myJobListings' => [] // 空の配列を渡す
            ]);
        }
        
        // まず案件データを確実に取得
        $jobListings = JobListing::whereIn('id', $myJobIds)->get();
        
        // 応募データを取得（Eager Loadingで関連データも取得）
        $applications = Application::whereIn('job_listing_id', $myJobIds)
            ->with(['user'])
            ->latest()
            ->get();
            
        // 各応募データに明示的にjobListingをセット
        foreach ($applications as $application) {
            $jobListing = $jobListings->where('id', $application->job_listing_id)->first();
            if ($jobListing) {
                $application->setRelation('jobListing', $jobListing);
                
                // 承認された応募の場合、会話グループIDを検索して設定
                if ($application->status === 'accepted') {
                    $conversationGroup = ConversationGroup::where(function($query) use ($jobListing, $application) {
                        $query->where('job_owner_id', $jobListing->user_id)
                              ->where('applicant_id', $application->user_id);
                    })
                    ->orWhere(function($query) use ($jobListing, $application) {
                        $query->where('job_owner_id', $application->user_id)
                              ->where('applicant_id', $jobListing->user_id);
                    })
                    ->first();
                    
                    if ($conversationGroup) {
                        $application->conversation_group_id = $conversationGroup->id;
                    }
                }
            }
        }
        
        return Inertia::render('ApplicationsToMyJobs', [
            'applications' => $applications,
            'myJobListings' => $allMyJobListings // 全ての自分の案件データを追加
        ]);
    }
    
    /**
     * 応募ステータスを更新（承認/拒否）
     */
    public function updateStatus(Application $application, string $status): RedirectResponse
    {
        // 権限チェック（自分の案件への応募のみ更新可能）
        $jobListing = $application->jobListing;
        if (Auth::id() !== $jobListing->user_id) {
            return abort(403);
        }
        
        // ステータスの妥当性チェック
        if (!in_array($status, ['accepted', 'declined'])) {
            return abort(400);
        }
        
        $application->update([
            'status' => $status
        ]);
        
        // 承認の場合、会話グループの存在を確認し、必要に応じて作成または更新
        $conversationGroupId = null;
        if ($status === 'accepted') {
            // 会話グループを検索（案件投稿者と応募者間、かつ同じ案件）
            $conversationGroup = ConversationGroup::where(function($query) use ($jobListing, $application) {
                    $query->where('job_owner_id', $jobListing->user_id)
                          ->where('applicant_id', $application->user_id)
                          ->where('job_listing_id', $jobListing->id);
                })
                ->first();
                
            if (!$conversationGroup) {
                // 会話グループがなければ作成
                $conversationGroup = ConversationGroup::create([
                    'job_owner_id' => $jobListing->user_id, // 案件投稿者
                    'applicant_id' => $application->user_id, // 応募者
                    'job_listing_id' => $jobListing->id, // 関連する案件
                ]);
            }
            
            $conversationGroupId = $conversationGroup->id;
            
            // 応募データに会話グループIDを保存
            $application->conversation_group_id = $conversationGroupId;
            $application->save();
            
            // 応募者に承認通知を送信
            $applicant = $application->user;
            $applicant->notify(new ApplicationAccepted($application));
        }
        
        $statusText = $status === 'accepted' ? '承認' : '拒否';
        session()->flash('message', "応募を{$statusText}しました");
        
        // 会話グループIDをセッションに追加
        if ($conversationGroupId) {
            session()->flash('conversation_group_id', $conversationGroupId);
        }
        
        return redirect()->back();
    }
    
    /**
     * 案件への応募詳細ページを表示
     */
    public function show(Application $application): Response
    {
        // 権限チェック
        if (Auth::id() !== $application->user_id && Auth::id() !== $application->jobListing->user_id) {
            abort(403, '閲覧権限がありません。');
        }
        
        // Eager Loadingで関連データを取得
        $application->load(['jobListing.user', 'user']);
        
        return Inertia::render('Applications/Show', [
            'application' => $application,
        ]);
    }
} 