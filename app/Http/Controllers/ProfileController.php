<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\JobListing;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = $request->user();
        
        // 募集中の案件数を取得
        $activeJobListings = 0;
        if ($user) {
            $activeJobListings = JobListing::where('user_id', $user->id)
                ->where('is_closed', false)
                ->count();
        }
        
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'activeJobListings' => $activeJobListings,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        
        // 基本情報の更新（メールアドレスは除外）
        $user->fill([
            'name' => $request->name,
            'bio' => $request->bio,
            // emailは更新しない
        ]);

        // メールアドレスの変更は許可しないので、email_verified_atの変更処理を削除
        
        // アバター画像の処理
        if ($request->hasFile('avatar')) {
            // 古いアバターを削除
            if ($user->avatar) {
                // storage/ から始まるパスの場合、先頭を削除
                $oldPath = str_replace('storage/', '', $user->avatar);
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            
            // 新しいアバターを保存
            $path = $request->file('avatar')->store('avatars', 'public');
            $user->avatar = 'storage/' . $path; // 保存パスを設定
        } elseif ($request->boolean('remove_avatar')) {
            // アバター削除リクエストがある場合
            if ($user->avatar) {
                // storage/ から始まるパスの場合、先頭を削除
                $oldPath = str_replace('storage/', '', $user->avatar);
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            $user->avatar = null; // アバターをnullに設定
        }

        $user->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();
        
        // 募集中の案件があるかチェック
        $hasActiveJobListings = JobListing::where('user_id', $user->id)
            ->where('is_closed', false)
            ->exists();
        
        if ($hasActiveJobListings) {
            return back()->withErrors([
                'general' => '退会する前に、すべての募集中の案件を終了または削除してください。',
            ]);
        }

        // アバター画像の削除
        if ($user->avatar) {
            $avatarPath = str_replace('storage/', '', $user->avatar);
            if (Storage::disk('public')->exists($avatarPath)) {
                Storage::disk('public')->delete($avatarPath);
            }
            $user->avatar = null;
        }
        
        // ユーザー情報の匿名化（個人情報保護のため）
        $user->name = '退会したユーザー';
        // SoftDeletesを使用するため、メールアドレス匿名化は不要
        // $user->original_email = $user->email;
        // $user->email = 'deleted_' . time() . '_' . substr(md5($user->email), 0, 8) . '@example.com';
        $user->save();
        
        // 論理削除を実行
        $user->delete();

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}