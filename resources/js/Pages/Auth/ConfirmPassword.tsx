import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="パスワード確認" />

            <div className="p-auth__confirm-password-message">
                このアプリケーションの安全な領域です。続ける前にパスワードを確認してください。
            </div>

            <form onSubmit={submit}>
                <div className="p-auth__confirm-password-form-group">
                    <InputLabel htmlFor="password" value="パスワード" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="p-auth__input"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError
                        message={errors.password}
                        className="p-auth__error"
                    />
                </div>

                <div className="p-auth__confirm-password-actions">
                    <PrimaryButton
                        className="p-auth__confirm-password-button"
                        disabled={processing}
                    >
                        確認
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
