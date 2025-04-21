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
    const [removeAvatar, setRemoveAvatar] = useState(false);

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        name: user.name,
        email: user.email,
        avatar: null as File | null,
        remove_avatar: false as boolean,
    });

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setData("avatar", file);
            setData("remove_avatar", false);
            setRemoveAvatar(false);

            // プレビュー用のURLを作成
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleRemoveAvatar = () => {
        setData("avatar", null);
        setData("remove_avatar", true);
        setRemoveAvatar(true);
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
        formData.append("remove_avatar", data.remove_avatar ? "1" : "0");

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
                <h2 className="p-profile__section-title">プロフィール情報</h2>

                <p className="p-profile__section-description">
                    アカウントのプロフィール情報とメールアドレスを更新します。
                </p>
            </header>

            <form
                onSubmit={submit}
                className="p-profile__form"
                encType="multipart/form-data"
            >
                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="avatar"
                        value="プロフィール画像"
                        className="p-profile__form-label"
                    />

                    <div className="p-profile__avatar-container">
                        <div className="p-profile__avatar">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="アバタープレビュー"
                                />
                            ) : (
                                <div className="p-profile__avatar-placeholder">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>

                        <div className="p-profile__avatar-actions">
                            <input
                                type="file"
                                id="avatar"
                                ref={fileInputRef}
                                onChange={handleAvatarChange}
                                className="hidden"
                                accept="image/*"
                            />
                            <div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="p-profile__avatar-button p-profile__avatar-button--upload"
                                >
                                    画像を選択
                                </button>
                                {previewUrl && (
                                    <button
                                        type="button"
                                        onClick={handleRemoveAvatar}
                                        className="p-profile__avatar-button p-profile__avatar-button--remove"
                                    >
                                        削除
                                    </button>
                                )}
                            </div>
                            <p className="p-profile__avatar-note">
                                JPG、PNG、GIF、WEBP 形式。最大2MB。
                            </p>
                        </div>
                    </div>

                    <InputError
                        className="p-profile__form-error"
                        message={errors.avatar}
                    />
                </div>

                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="name"
                        value="名前"
                        className="p-profile__form-label"
                    />

                    <TextInput
                        id="name"
                        className="p-profile__form-input"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError
                        className="p-profile__form-error"
                        message={errors.name}
                    />
                </div>

                <div className="p-profile__form-group">
                    <InputLabel
                        htmlFor="email"
                        value="メールアドレス"
                        className="p-profile__form-label"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        className="p-profile__form-input"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="p-profile__form-error"
                        message={errors.email}
                    />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="p-profile__verification">
                        <p className="p-profile__verification-text">
                            メールアドレスが未確認です。
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="p-profile__verification-link"
                            >
                                こちらをクリックして確認メールを再送信します。
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="p-profile__verification-sent">
                                新しい確認リンクがメールアドレスに送信されました。
                            </div>
                        )}
                    </div>
                )}

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
                            保存しました。
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
