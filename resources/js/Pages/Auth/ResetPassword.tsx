import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Link } from "@inertiajs/react";

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

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout title="パスワードの再設定">
            <Head title="パスワードの再設定 - match" />

            <div className="p-auth__message">
                新しいパスワードを設定してください。安全のため、以前とは異なるパスワードをご使用ください。
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

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="p-auth__input"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError
                        message={errors.password}
                        className="p-auth__error"
                    />
                    <div className="p-auth__input-help">
                        ※パスワードは8文字以上で、半角英文字と数字を含める必要があります
                    </div>
                </div>

                <div className="p-auth__form-group">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="パスワード（確認用）"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="p-auth__input"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__actions">
                    <Link href={route("login")} className="p-auth__link">
                        ログイン画面に戻る
                    </Link>

                    <button
                        className="p-auth__button p-auth__button--primary"
                        disabled={processing}
                    >
                        パスワードを再設定する
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
