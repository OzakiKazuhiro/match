<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJobListingRequest;
use App\Http\Requests\UpdateJobListingRequest;
use App\Http\Requests\StorePublicMessageRequest;
use App\Models\JobListing;
use App\Models\PublicMessage;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class JobListingController extends Controller
{
    use AuthorizesRequests;

    /**
     * 案件一覧を表示
     */
    public function index(Request $request): Response
    {
        // 案件種別による絞り込み
        $query = JobListing::query()->with('user');
        
        if ($request->has('type')) {
            // typeパラメータのマッピング
            $typeMap = [
                'onetime' => 'one_time',
                'revenue' => 'revenue_share'
            ];
            
            $type = $request->type;
            // URLが古い形式（onetimeやrevenue）の場合、新しい形式にマッピング
            if (isset($typeMap[$type])) {
                $type = $typeMap[$type];
            }
            
            $query->where('type', $type);
        }
        
        // 閉じられていない案件のみ表示
        $query->where('is_closed', false);
        
        // 並び順（デフォルトは新しい順）に並べて6件ずつページネーション
        $jobListings = $query->latest()->paginate(6);
        
        // ユーザーの応募状況を取得
        $userApplications = [];
        $applicationStatuses = [];
        
        if (Auth::check()) {
            $applications = \App\Models\Application::where('user_id', Auth::id())
                ->get(['job_listing_id', 'status']);
                
            $userApplications = $applications->pluck('job_listing_id')->toArray();
            
            // 応募ステータスのマッピングを作成
            foreach ($applications as $application) {
                $applicationStatuses[$application->job_listing_id] = $application->status;
            }
        }
        
        return Inertia::render('JobListings', [
            'jobListings' => $jobListings,
            'filters' => $request->only(['type']),
            'userApplications' => $userApplications,
            'applicationStatuses' => $applicationStatuses,
        ]);
    }

    /**
     * 案件投稿フォームを表示
     */
    public function create(): Response
    {
        return Inertia::render('PostJob');
    }

    /**
     * 案件を保存
     */
    public function store(StoreJobListingRequest $request): RedirectResponse
    {
        $user = Auth::user();
        
        // バリデーション済みデータから案件情報を作成
        $jobListing = $user->jobListings()->create($request->validated());
        
        // 登録成功メッセージをフラッシュデータに追加
        session()->flash('message', '案件を投稿しました');
        
        return redirect()->route('job-listings.index');
    }

    /**
     * 案件の詳細を表示
     */
    public function show(JobListing $jobListing): Response|RedirectResponse
    {
        // メール認証が必要なルートであることを確認
        if (Auth::check() && !Auth::user()->hasVerifiedEmail()) {
            return redirect()->route('verification.notice');
        }
        
        // 案件の投稿者情報を取得
        $jobListing->load('user');
        
        // パブリックメッセージをページネーションで取得（10件ずつ）
        $publicMessages = $jobListing->publicMessages()
            ->with('user')
            ->latest()
            ->paginate(10);
        
        // 投稿者の総案件数を取得
        $totalJobListings = JobListing::where('user_id', $jobListing->user_id)->count();
        
        // 閲覧数をインクリメント
        $jobListing->incrementViewCount();
        
        // ユーザーが既に応募したかどうかとステータスをチェック
        $hasApplied = false;
        $applicationStatus = 'pending';
        
        if (Auth::check()) {
            $application = \App\Models\Application::where('job_listing_id', $jobListing->id)
                ->where('user_id', Auth::id())
                ->first();
                
            $hasApplied = $application !== null;
            
            if ($application) {
                $applicationStatus = $application->status;
            }
        }
        
        return Inertia::render('JobDetail', [
            'jobListing' => $jobListing,
            'publicMessages' => $publicMessages, // ページネーション情報を含むパブリックメッセージ
            'canEdit' => Auth::check() && Auth::id() === $jobListing->user_id,
            'canApply' => Auth::check() && Auth::id() !== $jobListing->user_id && !$jobListing->is_closed,
            'hasApplied' => $hasApplied,
            'applicationStatus' => $applicationStatus,
            'totalJobListings' => $totalJobListings,
        ]);
    }

    /**
     * 案件編集フォームを表示
     */
    public function edit(JobListing $jobListing): Response
    {
        // 権限チェック
        $this->authorize('update', $jobListing);
        
        return Inertia::render('EditJob', [
            'jobListing' => $jobListing,
        ]);
    }

    /**
     * 案件を更新
     */
    public function update(UpdateJobListingRequest $request, JobListing $jobListing): RedirectResponse
    {
        $jobListing->update($request->validated());
        
        session()->flash('message', '案件を更新しました');
        
        return redirect()->route('job-listings.show', $jobListing);
    }

    /**
     * 案件を削除
     */
    public function destroy(JobListing $jobListing): RedirectResponse
    {
        // 権限チェック
        $this->authorize('delete', $jobListing);
        
        $jobListing->delete();
        
        session()->flash('message', '案件を削除しました');
        
        return redirect()->route('dashboard');
    }
    
    /**
     * パブリックメッセージを投稿
     */
    public function storeMessage(StorePublicMessageRequest $request, JobListing $jobListing): RedirectResponse
    {
        PublicMessage::create([
            'job_listing_id' => $jobListing->id,
            'user_id' => Auth::id(),
            'message' => $request->validated()['message'],
        ]);
        
        session()->flash('message', 'メッセージを投稿しました');
        
        return redirect()->back();
    }
    
    /**
     * 案件を閉じる（募集終了）
     */
    public function close(JobListing $jobListing): RedirectResponse
    {
        // 権限チェック
        $this->authorize('update', $jobListing);
        
        $jobListing->update(['is_closed' => true]);
        
        session()->flash('message', '案件の募集を終了しました');
        
        return redirect()->route('job-listings.show', $jobListing);
    }
} 