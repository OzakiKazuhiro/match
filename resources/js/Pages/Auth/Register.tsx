import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout title="会員登録">
            <Head title="会員登録 - Match" />

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
                        className="p-auth__input"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError
                        message={errors.email}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__form-group">
                    <InputLabel htmlFor="password" value="パスワード" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="p-auth__input"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError
                        message={errors.password}
                        className="p-auth__error"
                    />
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
                        required
                    />

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
                        disabled={processing}
                    >
                        会員登録
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
