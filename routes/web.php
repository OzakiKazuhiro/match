<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JobListingController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DirectMessageController;
use App\Http\Controllers\NotificationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Top', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// 利用規約ページ
Route::get('/terms', function () {
    return Inertia::render('Terms');
})->name('terms');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// 案件関連ルート
Route::prefix('job-listings')->name('job-listings.')->group(function () {
    // 案件一覧（認証不要）
    Route::get('/', [JobListingController::class, 'index'])->name('index');
    
    // 認証が必要なルート
    Route::middleware(['auth'])->group(function () {
        // 案件投稿フォーム（先に配置して/{jobListing}と競合しないようにする）
        Route::get('/create', [JobListingController::class, 'create'])->name('create');
        
        // 案件登録処理
        Route::post('/', [JobListingController::class, 'store'])->name('store');
    });
    
    // 案件詳細（認証不要）- 後に配置
    Route::get('/{jobListing}', [JobListingController::class, 'show'])->name('show');
    
    // 認証が必要なルート - jobListingパラメータを含むルート
    Route::middleware(['auth'])->group(function () {
        // 案件編集フォーム
        Route::get('/{jobListing}/edit', [JobListingController::class, 'edit'])->name('edit');
        
        // 案件更新処理
        Route::put('/{jobListing}', [JobListingController::class, 'update'])->name('update');
        
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

// 案件投稿ページへのショートカットルート
Route::get('/post-job', function () {
    return redirect()->route('job-listings.create');
})->middleware(['auth'])->name('post-job');

// ダイレクトメッセージ関連ルート
Route::middleware('auth')->prefix('messages')->name('messages.')->group(function () {
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
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// 応募関連ルート
Route::middleware('auth')->prefix('applications')->name('applications.')->group(function () {
    // 自分が応募した案件一覧
    Route::get('/', [ApplicationController::class, 'index'])->name('index');
    
    // 自分の案件への応募一覧
    Route::get('/to-my-jobs', [ApplicationController::class, 'showApplicationsToMyJobs'])->name('to-my-jobs');
    
    // 応募ステータスの更新（承認/拒否）
    Route::patch('/{application}/{status}', [ApplicationController::class, 'updateStatus'])
        ->name('update-status')
        ->where('status', 'accepted|declined');
});

// 通知関連ルート
Route::middleware('auth')->prefix('notifications')->name('notifications.')->group(function () {
    // 通知一覧
    Route::get('/', [NotificationController::class, 'index'])->name('index');
    
    // 通知を既読にする
    Route::patch('/{id}/read', [NotificationController::class, 'markAsRead'])->name('mark-as-read');
    
    // すべての通知を既読にする
    Route::patch('/read-all', [NotificationController::class, 'markAllAsRead'])->name('mark-all-as-read');
    
    // 未読の通知数を取得するAPI
    Route::get('/unread-count', [NotificationController::class, 'getUnreadCount'])->name('unread-count');
});

require __DIR__.'/auth.php';