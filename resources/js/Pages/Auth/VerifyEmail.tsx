import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout title="メール認証">
            <Head title="メール認証 - Match" />

            <div className="mb-4 text-sm text-gray-600">
                ご登録ありがとうございます！
                始める前に、先ほどお送りしたメールのリンクをクリックして、メールアドレスを確認していただけますか？
                メールが届いていない場合は、喜んで別のメールをお送りします。
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    登録時に入力されたメールアドレスに新しい確認リンクを送信しました。
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        確認メールを再送信
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        ログアウト
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
