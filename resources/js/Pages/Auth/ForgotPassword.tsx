import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import InputLabel from "@/Components/InputLabel";
import { Link } from "@inertiajs/react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout title="パスワードリセット">
            <Head title="パスワードリセット" />

            <div className="p-auth__message">
                パスワードをお忘れですか？メールアドレスを入力していただければ、パスワードリセットのリンクをメールでお送りします。
            </div>

            {status && <div className="p-auth__status">{status}</div>}

            <form onSubmit={submit} className="p-auth__form">
                <div className="p-auth__form-group">
                    <InputLabel htmlFor="email" value="メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="p-auth__input"
                        isFocused={true}
                        autoComplete="email"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError
                        message={errors.email}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__actions">
                    <a href={route("login")} className="p-auth__link">
                        ログイン画面に戻る
                    </a>

                    <button
                        className="p-auth__button p-auth__button--primary"
                        disabled={processing}
                    >
                        パスワードリセットリンクを送信
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
