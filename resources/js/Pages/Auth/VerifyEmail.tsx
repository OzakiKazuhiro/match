import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import LogoutLink from "@/Components/LogoutLink";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout title="メール認証">
            <Head title="メール認証" />

            <div className="p-auth__verify-email">
                ご登録ありがとうございます！
                始める前に、先ほどお送りしたメールのリンクをクリックして、メールアドレスを確認していただけますか？
                メールが届いていない場合は、喜んで別のメールをお送りします。
            </div>

            {status === "verification-link-sent" && (
                <div className="p-auth__success-message">
                    登録時に入力されたメールアドレスに新しい確認リンクを送信しました。
                </div>
            )}

            <form onSubmit={submit}>
                <div className="p-auth__verify-actions">
                    <PrimaryButton disabled={processing}>
                        確認メールを再送信
                    </PrimaryButton>

                    <LogoutLink className="p-auth__logout-link">
                        ログアウト
                    </LogoutLink>
                </div>
            </form>
        </GuestLayout>
    );
}
