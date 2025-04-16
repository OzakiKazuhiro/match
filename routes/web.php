<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JobListingController;
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
    });
});

// 案件投稿ページへのショートカットルート
Route::get('/post-job', function () {
    return redirect()->route('job-listings.create');
})->middleware(['auth'])->name('post-job');

// プロフィール関連ルート
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';