import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage, router } from "@inertiajs/react";
import { FormEventHandler, useState, useRef, useEffect } from "react";
import { debounce } from "lodash";

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

    // 名前のバリデーション状態
    const [nameValidationMessage, setNameValidationMessage] = useState<
        string | null
    >(null);
    const [nameIsValid, setNameIsValid] = useState<boolean | null>(null);

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        name: user.name,
        email: user.email,
        avatar: null as File | null,
        remove_avatar: false as boolean,
    });

    // 名前のバリデーションを行う関数
    const validateName = (name: string) => {
        if (!name) {
            setNameIsValid(null);
            setNameValidationMessage(null);
            return;
        }

        if (name.length > 50) {
            setNameIsValid(false);
            setNameValidationMessage("お名前は50文字以内で入力してください。");
            return;
        }

        setNameIsValid(true);
        setNameValidationMessage(null);
    };

    // 名前入力のたびに検証実行
    const debouncedValidateName = debounce(validateName, 300);

    // 名前が変更されたときに検証を実行
    useEffect(() => {
        debouncedValidateName(data.name);

        return () => {
            debouncedValidateName.cancel();
        };
    }, [data.name]);

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

        // 名前が50文字を超えている場合は送信しない
        if (nameIsValid === false) {
            return;
        }

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
                        className={`p-profile__form-input ${
                            nameIsValid === false ? "border-red-500" : ""
                        }`}
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        maxLength={50}
                    />

                    {nameValidationMessage && (
                        <div className="p-profile__form-error">
                            {nameValidationMessage}
                        </div>
                    )}

                    <InputError
                        className="p-profile__form-error"
                        message={errors.name}
                    />

                    <div className="p-profile__input-help">
                        {data.name.length >= 40 && (
                            <span
                                className={
                                    data.name.length > 50 ? "text-red-500" : ""
                                }
                            >
                                {data.name.length}/50文字
                            </span>
                        )}
                    </div>
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
                        disabled={true}
                        required
                        autoComplete="username"
                    />

                    <div className="p-profile__input-help">
                        ※メールアドレスは変更できません。
                    </div>

                    <InputError
                        className="p-profile__form-error"
                        message={errors.email}
                    />

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="p-profile__verification-text">
                                メールアドレスが未認証です。
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    as="button"
                                    className="p-profile__resend-link"
                                >
                                    認証メールを再送信
                                </Link>
                                してください。
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="p-profile__alert-success">
                                    新しい認証リンクをあなたのメールアドレスに送信しました。
                                </div>
                            )}
                        </div>
                    )}
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
                            保存しました。
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
