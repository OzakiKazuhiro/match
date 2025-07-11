<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJobListingRequest;
use App\Http\Requests\StorePublicMessageRequest;
use App\Models\JobListing;
use App\Models\Category;
use App\Models\PublicMessage;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
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
        $type = $request->input('type');
        $sort = $request->input('sort', 'latest');
        $categoryId = $request->input('category');
        $search = $request->input('search');
        $favoritesOnly = $request->has('favorites_only');
        
        
        $userApplications = [];
        $applicationStatuses = [];
        $userFavorites = [];
        $user = null;
        
        if (auth()->check()) {
            $user = auth()->user();
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
        $query = JobListing::with(['user', 'category']);
        
        // 募集終了した案件を除外
        $query->where('is_closed', false);
        
        // タイプフィルターの適用
        if ($type === 'one_time') {
            $query->where('type', 'one_time');
        } elseif ($type === 'revenue_share') {
            $query->where('type', 'revenue_share');
        }
        
        // カテゴリフィルターの適用
        if ($categoryId && $categoryId !== 'all') {
            $query->where('category_id', $categoryId);
        }
        
        // 検索クエリの適用
        if ($search) {
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhereHas('category', function($query) use ($search) {
                      $query->where('name', 'like', "%{$search}%");
                  });
            });
        }
        
        // お気に入りフィルターの適用
        if ($favoritesOnly && $user) {
            $query->whereIn('id', $userFavorites);
        }
        
        // ソートオプションに基づいてクエリを調整
        switch ($sort) {
            case 'latest':
                // 新着順（デフォルト）
                $query->orderBy('created_at', 'desc');
                break;
            case 'oldest':
                // 古い順
                $query->orderBy('created_at', 'asc');
                break;
            case 'views':
                // 閲覧数順
                $query->orderBy('view_count', 'desc');
                break;
            case 'budget_high':
                // 予算の高い順（最大予算を基準）
                $query->orderByRaw('COALESCE(budget_max, budget_min, 0) DESC');
                break;
            case 'budget_low':
                // 予算の低い順（最小予算を基準、NULLは最後に）
                $query->orderByRaw('CASE WHEN budget_min IS NULL AND budget_max IS NULL THEN 1 ELSE 0 END')
                      ->orderByRaw('COALESCE(budget_min, budget_max, 999999999) ASC');
                break;
            default:
                // デフォルトは最新順
                $query->orderBy('created_at', 'desc');
                break;
        }
        
        // ページネーション
        $jobListings = $query->paginate(12)->withQueryString();
        
        // アクティブなカテゴリーのリストを取得
        $categories = Category::active()->ordered()->get();
        
        return Inertia::render('JobListings', [
            'jobListings' => $jobListings,
            'filters' => [
                'type' => $type,
                'sort' => $sort,
                'category' => $categoryId,
                'search' => $search,
                'favorites_only' => $favoritesOnly,
            ],
            'categories' => $categories,
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
        // アクティブなカテゴリーのリストを取得
        $categories = Category::active()->ordered()->get();
        
        return Inertia::render('PostJob', [
            'categories' => $categories,
        ]);
    }

    /**
     * 案件を保存
     */
    public function store(StoreJobListingRequest $request): RedirectResponse
    {
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            $user = Auth::user();
            
            // バリデーション済みデータから案件情報を作成
            $jobListing = $user->jobListings()->create($request->validated());
            
            // トランザクションコミット
            DB::commit();
            
            // 登録成功メッセージをフラッシュデータに追加
            session()->flash('message', '案件を投稿しました');
            
            return redirect()->route('job-listings.index');
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('案件投稿処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '案件の投稿に失敗しました。再度お試しください。');
            return redirect()->back()->withInput();
        }
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
        $jobListing->load(['user', 'category']);
        
        // 公開メッセージを取得（ページネーション付き）
        $publicMessages = $jobListing->publicMessages()
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(5);
        
        // 一度の操作でユーザーのこの案件に対する応募情報を取得
        $application = $user->applications()
            ->where('job_listing_id', $jobListing->id)
            ->first();
        
        $hasApplied = $application !== null;
        $applicationStatus = $application ? $application->status : null;
        
        // 編集可能かどうかを確認（投稿者自身かつ募集中の場合）
        $canEdit = $user->id === $jobListing->user_id && !$jobListing->is_closed;
        
        // 応募可能かどうかを確認（自分の案件ではなく、まだ応募していない場合）
        $canApply = $user->id !== $jobListing->user_id && !$hasApplied && !$jobListing->is_closed;
        
        // 投稿者が投稿した案件数を取得
        $totalJobListings = JobListing::where('user_id', $jobListing->user_id)->count();
        
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
        
        // 案件にカテゴリー情報を読み込み
        $jobListing->load('category');
        
        // アクティブなカテゴリーのリストを取得
        $categories = Category::active()->ordered()->get();
        
        return Inertia::render('EditJob', [
            'jobListing' => $jobListing,
            'categories' => $categories,
        ]);
    }

    /**
     * 案件を更新
     */
    public function update(StoreJobListingRequest $request, JobListing $jobListing): RedirectResponse
    {
        // 権限チェック
        $this->authorize('update', $jobListing);
        
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            // バリデーション済みデータで案件を更新
            $jobListing->update($request->validated());
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', '案件を更新しました');
            
            return redirect()->route('job-listings.show', $jobListing);
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('案件更新処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '案件の更新に失敗しました。再度お試しください。');
            return redirect()->back()->withInput();
        }
    }

    /**
     * 案件を削除
     */
    public function destroy(JobListing $jobListing): RedirectResponse
    {
        // 権限チェック
        $this->authorize('delete', $jobListing);
        
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            $jobListing->delete();
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', '案件を削除しました');
            
            return redirect()->route('dashboard');
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('案件削除処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '案件の削除に失敗しました。再度お試しください。');
            return redirect()->back();
        }
    }
    
    /**
     * パブリックメッセージを投稿
     */
    public function storeMessage(StorePublicMessageRequest $request, JobListing $jobListing): RedirectResponse
    {
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            PublicMessage::create([
                'job_listing_id' => $jobListing->id,
                'user_id' => Auth::id(),
                'message' => $request->validated()['message'],
            ]);
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', 'メッセージを投稿しました');
            
            return redirect()->back();
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('パブリックメッセージ投稿処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', 'メッセージの投稿に失敗しました。再度お試しください。');
            return redirect()->back()->withInput();
        }
    }
    
    /**
     * 案件を閉じる（募集終了）
     */
    public function close(JobListing $jobListing): RedirectResponse
    {
        // 権限チェック
        $this->authorize('update', $jobListing);
        
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            $jobListing->update(['is_closed' => true]);
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', '案件の募集を終了しました');
            
            return redirect()->route('job-listings.show', $jobListing);
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('案件クローズ処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '案件の募集終了処理に失敗しました。再度お試しください。');
            return redirect()->back();
        }
    }

    /**
     * パブリックメッセージを更新
     */
    public function updateMessage(Request $request, PublicMessage $message): RedirectResponse
    {
        // 権限チェック（投稿者本人のみ編集可能）
        if (Auth::id() !== $message->user_id) {
            abort(403);
        }
        
        // バリデーション
        $validated = $request->validate([
            'message' => 'required|string|max:500',
        ]);
        
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            $message->update([
                'message' => $validated['message'],
            ]);
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', 'メッセージを更新しました');
            
            return redirect()->back();
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('パブリックメッセージ更新処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', 'メッセージの更新に失敗しました。再度お試しください。');
            return redirect()->back()->withInput();
        }
    }
    
    /**
     * パブリックメッセージを削除
     */
    public function destroyMessage(PublicMessage $message): RedirectResponse
    {
        // 権限チェック（投稿者本人のみ削除可能）
        if (Auth::id() !== $message->user_id) {
            abort(403);
        }
        
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            $message->delete();
            
            // トランザクションコミット
            DB::commit();
            
            session()->flash('message', 'メッセージを削除しました');
            
            return redirect()->back();
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('パブリックメッセージ削除処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', 'メッセージの削除に失敗しました。再度お試しください。');
            return redirect()->back();
        }
    }
} 