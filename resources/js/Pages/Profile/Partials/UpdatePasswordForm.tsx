import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState, useEffect } from "react";
import { debounce } from "lodash";

export default function UpdatePasswordForm({
    className = "",
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    // パスワードのバリデーション状態
    const [passwordValidationMessage, setPasswordValidationMessage] = useState<
        string | null
    >(null);
    const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(
        null
    );

    // パスワードの表示/非表示
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

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
            setPasswordValidationMessage(
                "パスワードは50文字以内で入力してください。"
            );
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

    // パスワード入力のたびに検証実行（debounce適用）
    const debouncedValidatePassword = debounce(validatePassword, 300);

    // パスワードが変更されたときに検証を実行
    useEffect(() => {
        debouncedValidatePassword(data.password);

        return () => {
            debouncedValidatePassword.cancel();
        };
    }, [data.password]);

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        // パスワードが条件を満たしていない場合は送信しない
        if (passwordIsValid === false) {
            return;
        }

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="p-profile__section-title">パスワード変更</h2>

                <p className="p-profile__section-description">
                    安全性を保つため、パスワードを半角英数字8文字以上50文字以下で設定してください。
                </p>
            </header>

            <form onSubmit={updatePassword} className="p-profile__form">
                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="current_password"
                        value="現在のパスワード"
                        className="p-profile__form-label"
                    />

                    <div className="p-auth__input-wrapper">
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            type={showCurrentPassword ? "text" : "password"}
                            className="p-profile__form-input"
                            autoComplete="current-password"
                            maxLength={50}
                        />
                        <button
                            type="button"
                            className="p-auth__password-toggle"
                            onClick={() =>
                                setShowCurrentPassword(!showCurrentPassword)
                            }
                        >
                            {showCurrentPassword ? "非表示" : "表示"}
                        </button>
                    </div>

                    <InputError
                        message={errors.current_password}
                        className="p-profile__form-error"
                    />
                </div>

                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="password"
                        value="新しいパスワード"
                        className="p-profile__form-label"
                    />

                    <div className="p-auth__input-wrapper">
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type={showNewPassword ? "text" : "password"}
                            className={`p-profile__form-input ${
                                passwordIsValid === false
                                    ? "border-red-500"
                                    : ""
                            }`}
                            autoComplete="new-password"
                            maxLength={50}
                        />
                        <button
                            type="button"
                            className="p-auth__password-toggle"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                            {showNewPassword ? "非表示" : "表示"}
                        </button>
                    </div>

                    {passwordValidationMessage && (
                        <div className="p-profile__form-error">
                            {passwordValidationMessage}
                        </div>
                    )}

                    <InputError
                        message={errors.password}
                        className="p-profile__form-error"
                    />

                    <div className="p-auth__input-help">
                        ※パスワードは8文字以上50文字以下で、半角英文字と数字を含める必要があります。
                        {data.password.length >= 40 && (
                            <span
                                className={
                                    data.password.length > 50
                                        ? "text-red-500"
                                        : ""
                                }
                            >
                                {data.password.length}/50文字
                            </span>
                        )}
                    </div>
                </div>

                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="新しいパスワード（確認）"
                        className="p-profile__form-label"
                    />

                    <div className="p-auth__input-wrapper">
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type={showConfirmPassword ? "text" : "password"}
                            className={`p-profile__form-input ${
                                passwordIsValid === false &&
                                data.password_confirmation
                                    ? "border-red-500"
                                    : ""
                            }`}
                            autoComplete="new-password"
                            maxLength={50}
                        />
                        <button
                            type="button"
                            className="p-auth__password-toggle"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {showConfirmPassword ? "非表示" : "表示"}
                        </button>
                    </div>

                    <InputError
                        message={errors.password_confirmation}
                        className="p-profile__form-error"
                    />
                </div>

                <div className="p-profile__form-actions">
                    <PrimaryButton
                        disabled={processing || passwordIsValid === false}
                        className="p-profile__btn p-profile__btn--primary"
                    >
                        保存
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="p-profile__success-message">
                            保存しました
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
