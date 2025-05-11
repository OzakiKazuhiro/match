import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useState, useEffect } from "react";
import { debounce } from "lodash";
import { VALIDATION_MESSAGES } from "@/constants/validationMessages";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    // パスワードのバリデーション状態
    const [passwordValidationMessage, setPasswordValidationMessage] = useState<
        string | null
    >(null);
    const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(
        null
    );

    // パスワードの表示/非表示を管理する状態
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);

    // パスワードのバリデーションを行う関数
    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordIsValid(null);
            setPasswordValidationMessage(null);
            return;
        }

        // 50文字以上の長さをチェック
        if (password.length > 50) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(VALIDATION_MESSAGES.max.password);
            return;
        }

        // 全角文字を含むかチェック
        const hasFullWidthChars = /[^\x01-\x7E]/.test(password);
        if (hasFullWidthChars) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(
                VALIDATION_MESSAGES.invalid.password_fullwidth
            );
            return;
        }

        // 8文字以上の長さをチェック
        if (password.length < 8) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(VALIDATION_MESSAGES.min.password);
            return;
        }

        // 半角英文字を含むかチェック
        const hasLetter = /[a-zA-Z]/.test(password);
        // 数字を含むかチェック
        const hasNumber = /[0-9]/.test(password);

        if (!hasLetter || !hasNumber) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(
                VALIDATION_MESSAGES.invalid.password_letter_number
            );
            return;
        }

        // すべての条件を満たしている場合
        setPasswordIsValid(true);
        setPasswordValidationMessage(null);
    };

    // パスワード入力のたびに検証実行
    const debouncedValidatePassword = debounce(validatePassword, 300);

    // パスワードが変更されたときに検証を実行
    useEffect(() => {
        debouncedValidatePassword(data.password);

        return () => {
            debouncedValidatePassword.cancel();
        };
    }, [data.password]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // パスワードが条件を満たしていない場合は送信しない
        if (passwordIsValid === false) {
            return;
        }

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout title="パスワードの再設定">
            <Head title="パスワードの再設定 - match" />

            <div className="p-auth__message">
                新しいパスワードを設定してください。セキュリティ向上のため、以前とは異なるパスワードの使用を推奨します（同じパスワードも設定可能です）。
            </div>

            <form onSubmit={submit} className="p-auth__form">
                <div className="p-auth__form-group">
                    <InputLabel htmlFor="email" value="メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="p-auth__input"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError
                        message={errors.email}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__form-group">
                    <InputLabel htmlFor="password" value="新しいパスワード" />

                    <div className="p-auth__input-wrapper">
                        <TextInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className={`p-auth__input ${
                                passwordIsValid === false
                                    ? "border-red-500"
                                    : ""
                            }`}
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
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

                    {passwordValidationMessage && (
                        <div className="p-auth__error">
                            {passwordValidationMessage}
                        </div>
                    )}

                    <InputError
                        message={errors.password}
                        className="p-auth__error"
                    />
                    <div className="p-auth__input-help">
                        ※パスワードは8文字以上50文字以下で、半角英文字と数字を含める必要があります
                    </div>
                </div>

                <div className="p-auth__form-group">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="パスワード（確認用）"
                    />

                    <div className="p-auth__input-wrapper">
                        <TextInput
                            id="password_confirmation"
                            type={
                                showPasswordConfirmation ? "text" : "password"
                            }
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className={`p-auth__input ${
                                passwordIsValid === false &&
                                data.password_confirmation
                                    ? "border-red-500"
                                    : ""
                            }`}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            maxLength={50}
                        />
                        <button
                            type="button"
                            className="p-auth__password-toggle"
                            onClick={() =>
                                setShowPasswordConfirmation(
                                    !showPasswordConfirmation
                                )
                            }
                        >
                            {showPasswordConfirmation ? "非表示" : "表示"}
                        </button>
                    </div>

                    <InputError
                        message={errors.password_confirmation}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__actions">
                    <a href={route("login")} className="p-auth__link">
                        ログイン画面に戻る
                    </a>

                    <button
                        className="p-auth__button p-auth__button--primary"
                        disabled={processing || passwordIsValid === false}
                    >
                        パスワードを再設定する
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
