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
        
        return Inertia::render('JobListings', [
            'jobListings' => $jobListings,
            'filters' => $request->only(['type']),
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
    public function show(JobListing $jobListing): Response
    {
        // 案件の投稿者情報とパブリックメッセージを取得
        $jobListing->load(['user', 'publicMessages.user']);
        
        // 閲覧数をインクリメント
        $jobListing->incrementViewCount();
        
        return Inertia::render('JobDetail', [
            'jobListing' => $jobListing,
            'canEdit' => Auth::check() && Auth::id() === $jobListing->user_id,
            'canApply' => Auth::check() && Auth::id() !== $jobListing->user_id && !$jobListing->is_closed,
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