import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage, router } from "@inertiajs/react";
import { FormEventHandler, useState, useRef } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;
    const [previewUrl, setPreviewUrl] = useState<string | null>(
        user.avatar || null
    );
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        name: user.name,
        email: user.email,
        avatar: null as File | null,
    });

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setData("avatar", file);

            // プレビュー用のURLを作成
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleRemoveAvatar = () => {
        setData("avatar", null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // FormDataオブジェクトを手動で作成
        const formData = new FormData();
        formData.append("_method", "PATCH"); // Laravel method spoofing
        formData.append("name", data.name);
        formData.append("email", data.email);

        // アバター画像があれば追加
        if (data.avatar) {
            formData.append("avatar", data.avatar);
        }

        // routerを使用して直接送信
        router.post(route("profile.update"), formData, {
            forceFormData: true, // マルチパートフォームデータとして送信
            preserveScroll: true,
            onSuccess: () => {
                if (previewUrl && previewUrl.startsWith("blob:")) {
                    URL.revokeObjectURL(previewUrl);
                }
                setRecentlySuccessful(true);
                setTimeout(() => setRecentlySuccessful(false), 2000);
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    プロフィール情報
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    アカウントのプロフィール情報とメールアドレスを更新します。
                </p>
            </header>

            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                <div>
                    <InputLabel htmlFor="avatar" value="プロフィール画像" />

                    <div className="mt-2 flex items-center gap-4">
                        <div className="avatar-preview">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="アバタープレビュー"
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-gray-600">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <input
                                type="file"
                                id="avatar"
                                ref={fileInputRef}
                                onChange={handleAvatarChange}
                                className="hidden"
                                accept="image/*"
                            />
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
                                >
                                    画像を選択
                                </button>
                                {previewUrl && (
                                    <button
                                        type="button"
                                        onClick={handleRemoveAvatar}
                                        className="rounded bg-red-100 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-200"
                                    >
                                        削除
                                    </button>
                                )}
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                JPG、PNG、GIF、WEBP 形式。最大2MB。
                            </p>
                        </div>
                    </div>

                    <InputError className="mt-2" message={errors.avatar} />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="名前" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            メールアドレスが未確認です。
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                こちらをクリックして確認メールを再送信します。
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                新しい確認リンクがメールアドレスに送信されました。
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>保存</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm font-medium text-blue-600">
                            保存しました。
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
