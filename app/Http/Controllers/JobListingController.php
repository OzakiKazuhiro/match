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
        // クエリパラメータからフィルタータイプを取得
        $type = $request->input('type');
        
        // 認証されているユーザーの応募済み案件IDを取得
        $userApplications = [];
        $applicationStatuses = [];
        
        // 認証されているユーザーのお気に入り案件IDを取得
        $userFavorites = [];
        
        if (auth()->check()) {
            $user = auth()->user();
            
            // ユーザーの応募済み案件IDを取得
            $applications = $user->applications()->get();
            $userApplications = $applications->pluck('job_listing_id')->toArray();
            
            // ステータス情報も取得
            foreach ($applications as $application) {
                $applicationStatuses[$application->job_listing_id] = $application->status;
            }
            
            // ユーザーのお気に入り案件IDを取得
            $userFavorites = $user->favorites()->pluck('job_listing_id')->toArray();
        }
        
        // 案件一覧を取得
        $query = JobListing::with('user')
            ->orderBy('created_at', 'desc');
        
        // タイプフィルターの適用
        if ($type === 'one_time') {
            $query->where('type', 'one_time');
        } elseif ($type === 'revenue_share') {
            $query->where('type', 'revenue_share');
        }
        
        // ページネーション
        $jobListings = $query->paginate(12);
        
        return Inertia::render('JobListings', [
            'jobListings' => $jobListings,
            'filters' => [
                'type' => $type,
            ],
            'userApplications' => $userApplications,
            'applicationStatuses' => $applicationStatuses,
            'userFavorites' => $userFavorites,
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
    public function show(JobListing $jobListing)
    {
        // 閲覧数をインクリメント（セッションが無い場合のみ）
        $jobListing->incrementViewCount();
        
        // ユーザーが未ログインまたはメール未認証の場合、リダイレクト
        if (!auth()->check() || !auth()->user()->email_verified_at) {
            return redirect()->route('login')->with('status', 'メールアドレスの認証が必要です。');
        }
        
        $user = auth()->user();
        
        // 案件詳細を読み込み
        $jobListing->load('user', 'user.profile');
        
        // 公開メッセージを取得（ページネーション付き）
        $publicMessages = $jobListing->publicMessages()
            ->with('user', 'user.profile')
            ->orderBy('created_at', 'desc')
            ->paginate(5);
        
        // 応募済みかどうかを確認
        $hasApplied = $user->applications()
            ->where('job_listing_id', $jobListing->id)
            ->exists();
        
        // 応募のステータスを取得
        $application = $user->applications()
            ->where('job_listing_id', $jobListing->id)
            ->first();
        
        $applicationStatus = $application ? $application->status : null;
        
        // 編集可能かどうかを確認（投稿者自身かつ募集中の場合）
        $canEdit = $user->id === $jobListing->user_id && !$jobListing->is_closed;
        
        // 応募可能かどうかを確認（自分の案件ではなく、まだ応募していない場合）
        $canApply = $user->id !== $jobListing->user_id && !$hasApplied && !$jobListing->is_closed;
        
        // 総案件数を取得（ナビゲーション用）
        $totalJobListings = JobListing::count();
        
        // お気に入り状態を確認
        $isFavorited = $jobListing->isFavoritedBy($user);
        
        return Inertia::render('JobDetail', [
            'jobListing' => $jobListing,
            'publicMessages' => $publicMessages,
            'canEdit' => $canEdit,
            'canApply' => $canApply,
            'hasApplied' => $hasApplied,
            'applicationStatus' => $applicationStatus,
            'totalJobListings' => $totalJobListings,
            'isFavorited' => $isFavorited,
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