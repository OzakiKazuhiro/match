# Laravel + Inertia.js + React で作る認証機能完全ガイド

## はじめに

Web アプリケーションにおいて、ユーザー認証機能は最も重要な基盤の一つです。今回は、Laravel 11 + Breeze + Inertia.js + React + TypeScript の技術スタックを使用して構築した「match」というエンジニア案件マッチングサービスの認証機能について、実際のコードを交えながら詳しく解説していきます。

この記事では、以下の 4 つの機能について説明します：

-   ユーザー登録
-   ログイン
-   ログアウト
-   パスワードリマインダー（パスワード忘れ対応）

## 技術スタック

-   **バックエンド**: Laravel 11 + Laravel Breeze
-   **フロントエンド**: React + TypeScript + Inertia.js
-   **スタイリング**: SCSS（FLOCSS 設計）
-   **バンドラー**: Webpack + Babel

## 1. ユーザー登録機能

### バックエンド実装

まず、ユーザー登録のコントローラーから見ていきましょう。

```php
// app/Http/Controllers/Auth/RegisteredUserController.php
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
     * ユーザー登録画面を表示
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * ユーザー登録処理
     */
    public function store(Request $request): RedirectResponse
    {
        // バリデーション
        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|string|lowercase|email|max:255',
            'password' => ['required', 'string', 'max:50', 'confirmed', Rules\Password::defaults()],
        ]);

        // メールアドレスの重複チェック
        $userExists = User::where('email', $request->email)->exists();

        if (!$userExists) {
            // 新規ユーザー作成
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // 登録イベントを発火（メール認証用）
            event(new Registered($user));

            // 自動ログイン
            Auth::login($user);

            return redirect(route('verification.notice', absolute: false));
        } else {
            // 既存メールアドレスの場合の処理
            $user = User::where('email', $request->email)->first();
            $user->notify(new \App\Notifications\AttemptedRegistration(
                $request->name,
                $request->ip()
            ));

            session()->flash('status', 'verification-link-sent');
            return redirect(route('verification.notice.guest', absolute: false));
        }
    }
}
```

**ポイント解説：**

1. **セキュリティ対策**: 既存のメールアドレスで登録を試みた場合、そのメールアドレスが存在することを隠すため、成功時と同様のメッセージを表示します。
2. **パスワードハッシュ化**: `Hash::make()`を使用してパスワードを安全にハッシュ化します。
3. **自動ログイン**: 登録成功後は自動的にログイン状態にします。

### フロントエンド実装

次に、React + TypeScript で作成された登録フォームを見てみましょう。

```typescript
// resources/js/Pages/Auth/Register.tsx
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import { debounce } from "lodash";
import { VALIDATION_MESSAGES } from "@/constants/validationMessages";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // バリデーション状態の管理
    const [nameIsValid, setNameIsValid] = useState<boolean | null>(null);
    const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(
        null
    );
    const [passwordsMatch, setPasswordsMatch] = useState<boolean | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    // 名前のリアルタイムバリデーション
    const validateName = (name: string) => {
        if (!name) {
            setNameIsValid(null);
            return;
        }

        if (name.length > 50) {
            setNameIsValid(false);
            return;
        }

        setNameIsValid(true);
    };

    // パスワードのリアルタイムバリデーション
    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordIsValid(null);
            return;
        }

        // 文字数制限チェック
        if (password.length > 50 || password.length < 8) {
            setPasswordIsValid(false);
            return;
        }

        // 全角文字チェック
        const hasFullWidthChars = /[^\x01-\x7E]/.test(password);
        if (hasFullWidthChars) {
            setPasswordIsValid(false);
            return;
        }

        // 英文字と数字の両方を含むかチェック
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if (!hasLetter || !hasNumber) {
            setPasswordIsValid(false);
            return;
        }

        setPasswordIsValid(true);
    };

    // デバウンス処理でパフォーマンス向上
    const debouncedValidateName = debounce(validateName, 300);
    const debouncedValidatePassword = debounce(validatePassword, 300);

    // パスワード一致チェック
    useEffect(() => {
        if (!data.password && !data.password_confirmation) {
            setPasswordsMatch(null);
            return;
        }

        setPasswordsMatch(data.password === data.password_confirmation);
    }, [data.password, data.password_confirmation]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // フロント側バリデーションチェック
        if (
            nameIsValid === false ||
            passwordIsValid === false ||
            passwordsMatch === false
        ) {
            return;
        }

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return <form onSubmit={submit}>{/* フォーム要素 */}</form>;
}
```

**フロントエンドのポイント：**

1. **リアルタイムバリデーション**: ユーザーが入力中にリアルタイムでバリデーションを実行
2. **デバウンス処理**: 入力のたびに処理が走らないよう、300ms の遅延を設定
3. **UX 向上**: パスワードの表示/非表示切り替え機能

### バリデーションメッセージの管理

```typescript
// resources/js/constants/validationMessages.ts
export const VALIDATION_MESSAGES = {
    required: {
        email: "メールアドレスを入力してください",
        password: "パスワードを入力してください",
        name: "お名前を入力してください",
    },
    invalid: {
        email: "有効なメールアドレスを入力してください",
        password_fullwidth:
            "パスワードに全角文字は使用できません。半角英数字のみを使用してください。",
        password_letter_number:
            "パスワードは半角英文字と数字を含める必要があります。",
    },
    mismatch: {
        password: "パスワードが一致しません",
    },
    max: {
        name: "お名前は50文字以内で入力してください",
        password: "パスワードは50文字以内で入力してください。",
    },
    min: {
        password: "パスワードは8文字以上で入力してください。",
    },
};
```

**メッセージ管理のメリット：**

-   一元管理により、メッセージの変更が容易
-   多言語対応時の準備
-   コードの可読性向上

## 2. ログイン機能

### バックエンド実装

```php
// app/Http/Controllers/Auth/AuthenticatedSessionController.php
class AuthenticatedSessionController extends Controller
{
    /**
     * ログイン画面を表示
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * ログイン処理
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // 認証処理
        $request->authenticate();

        // 退会済みユーザーのチェック
        $user = $request->user();
        if ($user && $user->trashed()) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return redirect()->route('login')
                ->withErrors(['email' => 'このアカウントは退会済みです。']);
        }

        // セッション再生成（セキュリティ対策）
        $request->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }
}
```

**ログイン処理のポイント：**

1. **セッション再生成**: セッション固定攻撃を防ぐため、ログイン成功時にセッション ID を再生成
2. **退会済みユーザーチェック**: ソフトデリートされたユーザーのログインを防止
3. **リダイレクト処理**: `redirect()->intended()` で、ログイン前にアクセスしようとしたページに自動リダイレクト

### フロントエンド実装

```typescript
// resources/js/Pages/Auth/Login.tsx
export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    // 簡易バリデーション
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const validateForm = (): boolean => {
        let isValid = true;

        if (!data.email) {
            setEmailError(VALIDATION_MESSAGES.required.email);
            isValid = false;
        } else if (!data.email.includes("@")) {
            setEmailError(VALIDATION_MESSAGES.invalid.email);
            isValid = false;
        } else {
            setEmailError(null);
        }

        if (!data.password) {
            setPasswordError(VALIDATION_MESSAGES.required.password);
            isValid = false;
        } else {
            setPasswordError(null);
        }

        return isValid;
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return <form onSubmit={submit}>{/* ログインフォーム */}</form>;
}
```

## 3. ログアウト機能

### バックエンド実装

```php
// app/Http/Controllers/Auth/AuthenticatedSessionController.php
/**
 * ログアウト処理
 */
public function destroy(Request $request): RedirectResponse
{
    // 認証を解除
    Auth::guard('web')->logout();

    // セッションを完全に破棄
    $request->session()->flush();
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    // ログインページにリダイレクト
    return redirect()->route('login')->with('status', 'logged_out');
}
```

**ログアウト処理のポイント：**

1. **完全なセッション破棄**: `flush()`, `invalidate()`, `regenerateToken()` で確実にセッションをクリア
2. **CSRF 対策**: トークンを再生成してセキュリティを確保

### フロントエンドでの履歴制御

ログアウト後にブラウザの戻るボタンで認証が必要なページに戻れないよう、特別な制御を実装しています。

```typescript
// resources/js/Pages/Auth/Login.tsx
useEffect(() => {
    if (status === "logged_out") {
        console.log("ログアウト検出: 履歴制御を開始");

        const clearHistory = () => {
            const { protocol, host, pathname } = window.location;
            const url = `${protocol}//${host}${pathname}`;
            window.history.replaceState(null, "", url);

            // 複数回の履歴エントリを追加
            for (let i = 0; i < 10; i++) {
                window.history.pushState(null, "", url);
            }
        };

        clearHistory();

        // ブラウザの戻るボタン対策
        const handlePopState = () => {
            clearHistory();
            window.location.reload();
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }
}, [status]);
```

## 4. パスワードリマインダー機能

### パスワードリセットリンク送信

```php
// app/Http/Controllers/Auth/PasswordResetLinkController.php
/**
 * パスワードリセットリンク送信処理
 */
public function store(Request $request): RedirectResponse
{
    $request->validate([
        'email' => 'required|email',
    ]);

    // パスワードリセットリンク送信
    $status = Password::sendResetLink(
        $request->only('email')
    );

    // セキュリティ対策：メールアドレスの存在有無に関わらず同じメッセージを返す
    return back()->with('status', 'ご入力いただいたメールアドレス宛にパスワード再設定用のメールを送信しました。');
}
```

### 新しいパスワード設定

```php
// app/Http/Controllers/Auth/NewPasswordController.php
/**
 * 新しいパスワード設定処理
 */
public function store(Request $request): RedirectResponse
{
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => ['required', 'string', 'max:50', 'confirmed', Rules\Password::defaults()],
    ]);

    // パスワードリセット実行
    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user) use ($request) {
            $user->forceFill([
                'password' => Hash::make($request->password),
                'remember_token' => Str::random(60),
            ])->save();

            event(new PasswordReset($user));
        }
    );

    if ($status == Password::PASSWORD_RESET) {
        return redirect()->route('login')->with('status', __($status));
    }

    throw ValidationException::withMessages([
        'email' => [trans($status)],
    ]);
}
```

## ルーティング設定

```php
// routes/auth.php
Route::middleware('guest')->group(function () {
    // ユーザー登録
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store'])
        ->middleware(['throttle:6,1']); // レート制限: 1分間に6回まで

    // ログイン
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    // パスワードリセット
    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');
    Route::post('reset-password', [NewPasswordController::class, 'store'])->name('password.store');
});

Route::middleware('auth')->group(function () {
    // ログアウト
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    // その他の認証済みユーザー向けルート
});
```

**ルーティングのポイント：**

1. **ミドルウェア分離**: `guest` と `auth` でアクセス制御を明確に分離
2. **レート制限**: `throttle:6,1` で 1 分間に 6 回までのリクエスト制限を設定
3. **セキュリティ**: 認証が必要なルートは `auth` ミドルウェアで保護

## セキュリティ対策のまとめ

1. **パスワードハッシュ化**: bcrypt を使用した安全なハッシュ化
2. **CSRF 保護**: Laravel の標準 CSRF 保護機能を活用
3. **セッション管理**: ログイン時のセッション再生成、ログアウト時の完全破棄
4. **レート制限**: ブルートフォース攻撃対策
5. **情報漏洩防止**: メールアドレスの存在確認を防ぐ仕組み
6. **退会済みユーザー対策**: ソフトデリートされたユーザーのログイン防止

## まとめ

今回は、Laravel + Inertia.js + React を使用した認証機能の実装について詳しく解説しました。

**重要なポイント：**

-   **セキュリティファースト**: 常にセキュリティを最優先に考慮した実装
-   **UX 重視**: リアルタイムバリデーションや適切なエラーメッセージでユーザビリティを向上
-   **保守性**: コードの分離と定数管理で保守しやすい構造
-   **パフォーマンス**: デバウンス処理などでパフォーマンスを最適化

これらの実装パターンは、他の Web アプリケーション開発でも応用できる汎用的な手法です。特に、セキュリティ対策とユーザビリティのバランスを取ることが、実用的な Web アプリケーション開発において重要になります。

次回は、案件投稿・一覧表示機能について詳しく解説予定です。お楽しみに！
