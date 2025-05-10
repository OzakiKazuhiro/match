import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { VALIDATION_MESSAGES } from "@/constants/validationMessages";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // 名前のバリデーション状態
    const [nameValidationMessage, setNameValidationMessage] = useState<
        string | null
    >(null);
    const [nameIsValid, setNameIsValid] = useState<boolean | null>(null);

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

    // パスワード一致バリデーション状態
    const [passwordMatchMessage, setPasswordMatchMessage] = useState<
        string | null
    >(null);
    const [passwordsMatch, setPasswordsMatch] = useState<boolean | null>(null);

    // 名前のバリデーションを行う関数
    const validateName = (name: string) => {
        if (!name) {
            setNameIsValid(null);
            setNameValidationMessage(null);
            return;
        }

        if (name.length > 50) {
            setNameIsValid(false);
            setNameValidationMessage(VALIDATION_MESSAGES.max.name);
            return;
        }

        setNameIsValid(true);
        setNameValidationMessage(null);
    };

    // 名前入力のたびに検証実行
    const debouncedValidateName = debounce(validateName, 300);

    // 名前が変更されたときに検証を実行
    useEffect(() => {
        debouncedValidateName(data.name);

        return () => {
            debouncedValidateName.cancel();
        };
    }, [data.name]);

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
            }
        } catch (error) {
            console.error("Email validation error:", error);
            setEmailIsValid(null);
            setEmailValidationMessage(
                VALIDATION_MESSAGES.error.email_validation
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

    // パスワード一致チェック
    useEffect(() => {
        if (!data.password && !data.password_confirmation) {
            setPasswordsMatch(null);
            setPasswordMatchMessage(null);
            return;
        }
        if (data.password !== data.password_confirmation) {
            setPasswordsMatch(false);
            setPasswordMatchMessage(VALIDATION_MESSAGES.mismatch.password);
        } else {
            setPasswordsMatch(true);
            setPasswordMatchMessage(null);
        }
    }, [data.password, data.password_confirmation]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // 名前が50文字を超えている場合は送信しない
        if (nameIsValid === false) {
            return;
        }

        // メールアドレスが重複している場合は送信しない
        if (emailIsValid === false) {
            return;
        }

        // パスワードが条件を満たしていない場合は送信しない
        if (passwordIsValid === false) {
            return;
        }

        // パスワード一致チェック
        if (passwordsMatch === false) {
            return;
        }

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout title="会員登録">
            <Head title="会員登録" />

            <form onSubmit={submit} className="p-auth__form">
                <div className="p-auth__form-group">
                    <InputLabel htmlFor="name" value="お名前" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className={`p-auth__input ${
                            nameIsValid === false ? "border-red-500" : ""
                        }`}
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        maxLength={50}
                    />

                    {nameValidationMessage && (
                        <div className="p-auth__error">
                            {nameValidationMessage}
                        </div>
                    )}

                    <InputError
                        message={errors.name}
                        className="p-auth__error"
                    />

                    <div className="p-auth__input-help">
                        {data.name.length >= 40 && (
                            <span
                                className={
                                    data.name.length > 50 ? "text-red-500" : ""
                                }
                            >
                                {data.name.length}/50文字
                            </span>
                        )}
                    </div>
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
                        ※パスワードは8文字以上50文字以下で、半角英文字と数字を含める必要があります。
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
                                (passwordIsValid === false &&
                                    data.password_confirmation) ||
                                passwordsMatch === false
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

                    {passwordMatchMessage && (
                        <div className="p-auth__error">
                            {passwordMatchMessage}
                        </div>
                    )}

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
