import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [emailValidationMessage, setEmailValidationMessage] = useState<
        string | null
    >(null);
    const [emailIsValid, setEmailIsValid] = useState<boolean | null>(null);
    const [isValidatingEmail, setIsValidatingEmail] = useState(false);

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

    // メールアドレスの重複チェックを行う関数
    const validateEmail = async (email: string) => {
        if (!email || !email.includes("@") || email.length < 5) {
            setEmailIsValid(null);
            setEmailValidationMessage(null);
            return;
        }

        setIsValidatingEmail(true);

        try {
            // CSRFトークンを取得
            const csrfToken =
                document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content") || "";

            // axiosを使ってリクエストを送信
            const response = await axios.post(
                route("validate.email"),
                { email },
                {
                    headers: {
                        "X-CSRF-TOKEN": csrfToken,
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json",
                    },
                }
            );

            // レスポンスから結果を取得
            if (response.data) {
                setEmailIsValid(response.data.valid);
                setEmailValidationMessage(
                    response.data.valid ? null : response.data.message
                );

                // console.log("検証結果:", response.data); // デバッグ用
            }
        } catch (error) {
            console.error("Email validation error:", error);
            setEmailIsValid(null);
            setEmailValidationMessage(
                "メールアドレスの検証中にエラーが発生しました。"
            );
        } finally {
            setIsValidatingEmail(false);
        }
    };

    // debounceを使用して連続したAPIリクエストを防止
    const debouncedValidateEmail = debounce(validateEmail, 500);

    // メールアドレスが変更されたときに検証を実行
    useEffect(() => {
        // メールフィールドが空の場合はメッセージをクリア
        if (!data.email) {
            setEmailValidationMessage(null);
            setEmailIsValid(null);
            return;
        }

        // メールアドレスがある程度有効な形式の場合のみ検証を実行
        if (data.email.includes("@") && data.email.length >= 5) {
            debouncedValidateEmail(data.email);
        }

        return () => {
            debouncedValidateEmail.cancel();
        };
    }, [data.email]);

    // パスワードのバリデーションを行う関数
    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordIsValid(null);
            setPasswordValidationMessage(null);
            return;
        }

        // 全角文字を含むかチェック
        const hasFullWidthChars = /[^\x01-\x7E]/.test(password);
        if (hasFullWidthChars) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(
                "パスワードに全角文字は使用できません。半角英数字のみを使用してください。"
            );
            return;
        }

        // 8文字以上の長さをチェック
        if (password.length < 8) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(
                "パスワードは8文字以上で入力してください。"
            );
            return;
        }

        // 半角英文字を含むかチェック
        const hasLetter = /[a-zA-Z]/.test(password);
        // 数字を含むかチェック
        const hasNumber = /[0-9]/.test(password);

        if (!hasLetter || !hasNumber) {
            setPasswordIsValid(false);
            setPasswordValidationMessage(
                "パスワードは半角英文字と数字を含める必要があります。"
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

        // メールアドレスが重複している場合は送信しない
        if (emailIsValid === false) {
            return;
        }

        // パスワードが条件を満たしていない場合は送信しない
        if (passwordIsValid === false) {
            return;
        }

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
            //↑セキュリティー向上のため
        });
    };

    return (
        <GuestLayout title="会員登録">
            <Head title="会員登録 - match" />

            <form onSubmit={submit} className="p-auth__form">
                <div className="p-auth__form-group">
                    <InputLabel htmlFor="name" value="お名前" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="p-auth__input"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError
                        message={errors.name}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__form-group">
                    <InputLabel htmlFor="email" value="メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className={`p-auth__input ${
                            emailIsValid === false ? "border-red-500" : ""
                        }`}
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    {isValidatingEmail && (
                        <div className="p-auth__input-help">
                            メールアドレスを確認中...
                        </div>
                    )}

                    {emailValidationMessage && (
                        <div className="p-auth__error">
                            {emailValidationMessage}
                        </div>
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
                                passwordIsValid === false
                                    ? "border-red-500"
                                    : ""
                            }`}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
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
                        ※パスワードは8文字以上で、半角英文字と数字を含める必要があります。
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
                            required
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
                    <Link href={route("login")} className="p-auth__forgot-link">
                        すでにアカウントをお持ちの方
                    </Link>

                    <button
                        className="p-auth__button p-auth__button--primary"
                        disabled={
                            processing ||
                            emailIsValid === false ||
                            passwordIsValid === false
                        }
                    >
                        会員登録
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
