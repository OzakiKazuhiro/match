<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|string|lowercase|email|max:255',
            'password' => ['required', 'string', 'max:50', 'confirmed', Rules\Password::defaults()],
        ]);

        // メールアドレスが既に存在するか確認
        $userExists = User::where('email', $request->email)->exists();

        if (!$userExists) {
            // 新規登録の場合のみユーザー作成・ログイン
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            event(new Registered($user));
            Auth::login($user);
            
            // 認証済みユーザー用のルートにリダイレクト
            return redirect(route('verification.notice', absolute: false));
        } else {
            // 既存メールアドレスの場合は、そのユーザーに通知メールを送信
            $user = User::where('email', $request->email)->first();
            $user->notify(new \App\Notifications\AttemptedRegistration(
                $request->name,
                $request->ip()
            ));
            
            // 新規登録と同様に認証画面に遷移させる（ログインはしない）
            session()->flash('status', 'verification-link-sent');
            
            // ゲスト用のルートにリダイレクト
            return redirect(route('verification.notice.guest', absolute: false));
        }
    }
}