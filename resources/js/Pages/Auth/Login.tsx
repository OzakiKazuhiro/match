import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { VALIDATION_MESSAGES } from "@/constants/validationMessages";

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
        remember: false as boolean,
    });

    // パスワードの表示/非表示
    const [showPassword, setShowPassword] = useState(false);

    // 簡易バリデーション状態
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    // フォーム送信前の簡易バリデーション
    const validateForm = (): boolean => {
        let isValid = true;

        // メールアドレスの簡易チェック
        if (!data.email) {
            setEmailError(VALIDATION_MESSAGES.required.email);
            isValid = false;
        } else if (!data.email.includes("@")) {
            setEmailError(VALIDATION_MESSAGES.invalid.email);
            isValid = false;
        } else {
            setEmailError(null);
        }

        // パスワードの簡易チェック
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

        // 送信前にフロント側で簡易バリデーション
        if (!validateForm()) {
            return;
        }

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout title="ログイン">
            <Head title="ログイン" />

            {status && <div className="p-auth__status-message">{status}</div>}

            <form onSubmit={submit} className="p-auth__form">
                <div className="p-auth__form-group">
                    <InputLabel htmlFor="email" value="メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className={`p-auth__input ${
                            emailError ? "p-auth__input--error" : ""
                        }`}
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => {
                            setData("email", e.target.value);
                            setEmailError(null); // 入力時にエラーをクリア
                        }}
                    />

                    {emailError && (
                        <div className="p-auth__error">{emailError}</div>
                    )}

                    <InputError
                        message={errors.email}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__form-group">
                    <InputLabel htmlFor="password" value="パスワード" />

                    <div className="p-auth__input-wrapper">
                        <TextInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className={`p-auth__input ${
                                passwordError ? "p-auth__input--error" : ""
                            }`}
                            autoComplete="current-password"
                            onChange={(e) => {
                                setData("password", e.target.value);
                                setPasswordError(null); // 入力時にエラーをクリア
                            }}
                            maxLength={50}
                        />
                        <button
                            type="button"
                            className="p-auth__password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "非表示" : "表示"}
                        </button>
                    </div>

                    {passwordError && (
                        <div className="p-auth__error">{passwordError}</div>
                    )}

                    <InputError
                        message={errors.password}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__remember">
                    <label className="p-auth__remember-label">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData(
                                    "remember",
                                    (e.target.checked || false) as false
                                )
                            }
                        />
                        <span className="p-auth__remember-text">
                            ログイン状態を保持する
                        </span>
                    </label>
                </div>

                <div className="p-auth__actions">
                    {canResetPassword && (
                        <a
                            href={route("password.request")}
                            className="p-auth__forgot-link"
                        >
                            パスワードをお忘れですか？
                        </a>
                    )}

                    <button
                        className="p-auth__button p-auth__button--primary"
                        disabled={processing}
                    >
                        ログイン
                    </button>
                </div>

                <div className="p-auth__register-link">
                    <p>
                        アカウントをお持ちでない方は
                        <a href={route("register")} className="p-auth__link">
                            こちら
                        </a>
                        から登録できます
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
