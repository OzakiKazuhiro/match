<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreApplicationRequest;
use App\Models\JobListing;
use App\Models\Application;
use App\Models\ConversationGroup;
use App\Notifications\ApplicationReceived;
use App\Notifications\ApplicationAccepted;
use App\Notifications\ApplicationRejected;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class ApplicationController extends Controller
{
    // アプリケーションステータスの定数定義
    const STATUS_PENDING = 'pending';
    const STATUS_ACCEPTED = 'accepted';
    const STATUS_DECLINED = 'declined';

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
     * 応募資格をチェックする（storeメソッドで使用）
     */
    private function checkApplicationEligibility(JobListing $jobListing): void
    {
        if (Auth::id() === $jobListing->user_id || $jobListing->is_closed) {
            abort(403);
        }
    }

    /**
     * 既存の応募を検索する（storeメソッドで使用）
     */
    private function findExistingApplication(int $jobListingId, int $userId)
    {
        return Application::where('job_listing_id', $jobListingId)
            ->where('user_id', $userId)
            ->first();
    }

    /**
     * 案件への応募を保存
     */
    public function store(StoreApplicationRequest $request, JobListing $jobListing): RedirectResponse
    {
        // 自分の案件には応募できない & 募集終了した案件には応募できない
        $this->checkApplicationEligibility($jobListing);
        
        // 既に応募済みかチェック
        $existingApplication = $this->findExistingApplication($jobListing->id, Auth::id());
            
        if ($existingApplication) {
            session()->flash('message', '既にこの案件に応募しています');
            return redirect()->route('job-listings.show', $jobListing);
        }
        
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            // 応募情報と会話グループを一括で作成（追加したメソッドを使用）
            $application = Application::createWithConversationGroup(
                $jobListing,
                Auth::id(),
                ['message' => $request->validated()['message']]
            );
            
            // 案件投稿者に通知を送信
            $jobOwner = $jobListing->user;
            $jobOwner->notify(new ApplicationReceived($application));
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', '案件に応募しました。案件投稿者からの返信をお待ちください');
            
            return redirect()->route('job-listings.show', $jobListing);
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('応募処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '応募処理中にエラーが発生しました。再度お試しください。');
            return redirect()->back()->withInput();
        }
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
        
        // 承認された応募のIDを取得
        $acceptedApplicationIds = $applications->where('status', self::STATUS_ACCEPTED)->pluck('id')->toArray();
        $userIds = $applications->pluck('user_id')->toArray();
        
        // 会話グループIDを一括取得
        $conversationGroups = [];
        if (!empty($acceptedApplicationIds)) {
            // 会話グループを一括で取得
            $conversationGroups = DB::table('conversation_groups')
                ->select('id', 'job_owner_id', 'applicant_id', 'job_listing_id')
                ->whereIn('job_listing_id', $myJobIds)
                ->where(function($query) use ($userIds) {
                    $query->whereIn('applicant_id', $userIds);
                })
                ->get()
                ->groupBy(function($item) {
                    // job_listing_id と applicant_id の組み合わせでグループ化するキーを作成
                    return $item->job_listing_id . '_' . $item->applicant_id;
                });
        }
            
        // 各応募データに明示的にjobListingをセットし、会話グループIDも設定
        foreach ($applications as $application) {
            $jobListing = $jobListings->where('id', $application->job_listing_id)->first();
            if ($jobListing) {
                $application->setRelation('jobListing', $jobListing);
                
                // 承認された応募の場合、会話グループIDを設定
                if ($application->status === self::STATUS_ACCEPTED) {
                    $key = $application->job_listing_id . '_' . $application->user_id;
                    if (isset($conversationGroups[$key]) && !$conversationGroups[$key]->isEmpty()) {
                        $application->conversation_group_id = $conversationGroups[$key]->first()->id;
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
     * 応募のステータスを更新（承認/拒否）
     */
    public function updateStatus(Application $application, string $status): RedirectResponse
    {
        // 権限チェック（自分の案件への応募のみ更新可能）
        $jobListing = $application->jobListing;
        if (Auth::id() !== $jobListing->user_id) {
            return abort(403);
        }
        
        // ステータスの妥当性チェック
        if (!in_array($status, [self::STATUS_ACCEPTED, self::STATUS_DECLINED])) {
            return abort(400);
        }
        
        $application->update([
            'status' => $status
        ]);
        
        // 承認の場合、会話グループの存在を確認し、必要に応じて作成または更新
        $conversationGroupId = null;
        if ($status === self::STATUS_ACCEPTED) {
            // 会話グループを取得または作成（モデルのメソッドを使用）
            $conversationGroup = ConversationGroup::getOrCreateForApplication(
                $jobListing->id,
                $jobListing->user_id,
                $application->user_id
            );
            
            $conversationGroupId = $conversationGroup->id;
            
            // 応募データに会話グループIDを保存
            $application->conversation_group_id = $conversationGroupId;
            $application->save();
            
            // 応募者に承認通知を送信
            $applicant = $application->user;
            $applicant->notify(new ApplicationAccepted($application));
        } else if ($status === self::STATUS_DECLINED) {
            // 応募者に拒否通知を送信
            $applicant = $application->user;
            $applicant->notify(new ApplicationRejected($application));
        }
        
        $statusText = $status === self::STATUS_ACCEPTED ? '承認' : '拒否';
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