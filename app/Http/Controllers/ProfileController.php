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

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        
        // 基本情報の更新
        $user->fill($request->validated());

        // メールアドレス変更時は確認ステータスをリセット
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }
        
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

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}