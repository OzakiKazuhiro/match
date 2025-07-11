<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JobListingController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DirectMessageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PublicMessageController;
use App\Http\Controllers\PrivacyController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Top', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

// 利用規約ページへ遷移
Route::get('/terms', function () {
    return Inertia::render('Terms');
})->name('terms');

// マイページへ遷移
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// 案件関連ルート
Route::prefix('job-listings')->name('job-listings.')->group(function () {
    // 案件一覧（認証不要）
    Route::get('/', [JobListingController::class, 'index'])->name('index');
    
    // 認証が必要なルート
    Route::middleware(['auth', 'verified'])->group(function () {
        // 案件投稿フォーム（先に配置して/{jobListing}と競合しないようにする）
        Route::get('/create', [JobListingController::class, 'create'])->name('create');
        
        // 案件登録処理
        Route::post('/', [JobListingController::class, 'store'])->name('store');
    });
    
    // 案件詳細（認証不要）- 後に配置
    Route::get('/{jobListing}', [JobListingController::class, 'show'])->name('show');
    
    // 認証が必要なルート - jobListingパラメータを含むルート
    Route::middleware(['auth', 'verified'])->group(function () {
        
        // 案件削除処理
        Route::delete('/{jobListing}', [JobListingController::class, 'destroy'])->name('destroy');
        
        // 案件を閉じる（募集終了）
        Route::patch('/{jobListing}/close', [JobListingController::class, 'close'])->name('close');
        
        // パブリックメッセージ投稿
        Route::post('/{jobListing}/messages', [JobListingController::class, 'storeMessage'])->name('messages.store');
        
        // 案件応募関連
        Route::get('/{jobListing}/apply', [ApplicationController::class, 'create'])->name('apply.create');
        Route::post('/{jobListing}/apply', [ApplicationController::class, 'store'])->name('apply.store');
    });
});

// パブリックメッセージ関連ルート
Route::middleware(['auth', 'verified'])->prefix('public-messages')->name('public-messages.')->group(function () {
    // 自分が投稿したパブリックメッセージの一覧
    Route::get('/', [PublicMessageController::class, 'index'])->name('index');
    
    // 特定の案件のパブリックメッセージ詳細
    Route::get('/{jobListing}', [PublicMessageController::class, 'show'])->name('show');
    
    // パブリックメッセージの編集
    Route::patch('/{message}', [JobListingController::class, 'updateMessage'])->name('update');
    
    // パブリックメッセージの削除
    Route::delete('/{message}', [JobListingController::class, 'destroyMessage'])->name('destroy');
});

// 案件投稿ページへのショートカットルート
Route::get('/post-job', function () {
    return redirect()->route('job-listings.create');
})->middleware(['auth', 'verified'])->name('post-job');

// ダイレクトメッセージ関連ルート
Route::middleware(['auth', 'verified'])->prefix('messages')->name('messages.')->group(function () {
    // メッセージ一覧
    Route::get('/', [DirectMessageController::class, 'index'])->name('index');
    
    // 特定の会話グループのメッセージ詳細
    Route::get('/{conversationGroup}', [DirectMessageController::class, 'show'])->name('show');
    
    // メッセージ送信
    Route::post('/{conversationGroup}', [DirectMessageController::class, 'store'])->name('store');
    
    // メッセージを既読にする
    Route::post('/{conversationGroup}/read', [DirectMessageController::class, 'markAsRead'])->name('mark-as-read');
});

// プロフィール関連ルート
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// 応募関連ルート
Route::middleware(['auth', 'verified'])->prefix('applications')->name('applications.')->group(function () {
    // 自分が応募した案件一覧
    Route::get('/', [ApplicationController::class, 'index'])->name('index');
    
    // 自分の案件への応募一覧
    Route::get('/to-my-jobs', [ApplicationController::class, 'showApplicationsToMyJobs'])->name('to-my-jobs');
    
    // 応募ステータスの更新（承認/拒否）
    Route::patch('/{application}/{status}', [ApplicationController::class, 'updateStatus'])
        ->name('update-status')
        ->where('status', 'accepted|declined');
});

// 自分の投稿案件一覧ルート
Route::middleware(['auth', 'verified'])->prefix('my-job-listings')->name('my-job-listings.')->group(function () {
    Route::get('/', [App\Http\Controllers\MyJobListingController::class, 'index'])->name('index');
});

// 通知関連ルート
Route::middleware(['auth', 'verified'])->prefix('notifications')->name('notifications.')->group(function () {
    // 通知一覧
    Route::get('/', [NotificationController::class, 'index'])->name('index');
    
    // 通知を既読にする
    Route::patch('/{id}/read', [NotificationController::class, 'markAsRead'])->name('mark-as-read');
    
    // すべての通知を既読にする
    Route::patch('/read-all', [NotificationController::class, 'markAllAsRead'])->name('mark-all-as-read');
    
    // 未読の通知数を取得するAPI
    Route::get('/unread-count', [NotificationController::class, 'getUnreadCount'])->name('unread-count');
});

// プライバシーポリシーページ
Route::get('/privacy', [PrivacyController::class, 'index'])->name('privacy');

// ユーザープロフィール情報を取得するAPI
Route::middleware(['auth', 'verified'])->get('/user/{id}/profile', function ($id) {
    $user = \App\Models\User::findOrFail($id);
    return response()->json([
        'user' => [
            'id' => $user->id,
            'name' => $user->name,
            'bio' => $user->bio,
        ]
    ]);
})->name('user.profile');

require __DIR__.'/auth.php';

// メールアドレス検証ルート
Route::post('/validate-email', [App\Http\Controllers\Auth\EmailValidationController::class, 'validateEmail'])->name('validate.email');

// メモ関連のルートを追加
Route::middleware(['auth'])->group(function () {
    // メモの保存と取得のためのルート
    Route::post('/conversations/{conversationGroup}/memo', [App\Http\Controllers\MemoController::class, 'store'])
        ->name('conversation.memo.store');
    Route::get('/conversations/{conversationGroup}/memo', [App\Http\Controllers\MemoController::class, 'show'])
        ->name('conversation.memo.show');
});

// お気に入り関連ルート
Route::middleware(['auth', 'verified'])->prefix('favorites')->name('favorites.')->group(function () {
    // お気に入り一覧
    Route::get('/', [FavoriteController::class, 'index'])->name('index');
    
    // お気に入り切り替え（追加/削除）
    Route::post('/{jobListing}', [FavoriteController::class, 'toggle'])->name('toggle');
});

// カテゴリー一覧を取得するルート
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');