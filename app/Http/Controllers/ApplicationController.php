<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreApplicationRequest;
use App\Models\JobListing;
use App\Models\Application;
use App\Models\ConversationGroup;
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
            ]);
        }
        
        session()->flash('message', '案件に応募しました。案件投稿者からの返信をお待ちください');
        
        return redirect()->route('job-listings.show', $jobListing);
    }
    
    /**
     * マイページでの応募一覧を表示
     */
    public function index(): Response
    {
        $applications = Application::where('user_id', Auth::id())
            ->with('jobListing.user')
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
        $applications = Application::whereHas('jobListing', function($query) {
                $query->where('user_id', Auth::id());
            })
            ->with(['jobListing', 'user'])
            ->latest()
            ->get();
            
        return Inertia::render('ApplicationsToMyJobs', [
            'applications' => $applications,
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
        
        $statusText = $status === 'accepted' ? '承認' : '拒否';
        session()->flash('message', "応募を{$statusText}しました");
        
        return redirect()->back();
    }
} 