import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";

export default function UpdatePasswordForm({
    className = "",
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

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

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

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
                    安全性を保つため、パスワードを半角英数字８文字以上で設定してください。
                </p>
            </header>

            <form onSubmit={updatePassword} className="p-profile__form">
                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="current_password"
                        value="現在のパスワード"
                        className="p-profile__form-label"
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                        className="p-profile__form-input"
                        autoComplete="current-password"
                    />

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

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        className="p-profile__form-input"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password}
                        className="p-profile__form-error"
                    />
                </div>

                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="新しいパスワード（確認）"
                        className="p-profile__form-label"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                        className="p-profile__form-input"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="p-profile__form-error"
                    />
                </div>

                <div className="p-profile__form-actions">
                    <PrimaryButton
                        disabled={processing}
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
