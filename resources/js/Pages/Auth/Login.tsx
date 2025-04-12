import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

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

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout title="ログイン">
            <Head title="ログイン - Match" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

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
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
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
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

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
                        <Link
                            href={route("password.request")}
                            className="p-auth__forgot-link"
                        >
                            パスワードをお忘れですか？
                        </Link>
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
                        <Link href={route("register")} className="p-auth__link">
                            こちら
                        </Link>
                        から登録できます
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
