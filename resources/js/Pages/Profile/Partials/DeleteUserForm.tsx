import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const { auth, activeJobListings } = usePage().props as any;

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const hasActiveJobListings = activeJobListings > 0;

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`${className}`}>
            <header>
                <h2 className="p-profile__section-title">退会する</h2>

                <p className="p-profile__section-description">
                    退会すると、アカウント情報、プロフィール、パスワードなどの個人情報が削除されます。
                </p>
            </header>

            <DangerButton
                onClick={confirmUserDeletion}
                className="p-profile__btn p-profile__btn--danger"
            >
                退会する
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-profile__modal-body">
                    <h2 className="p-profile__modal-title">
                        本当に退会しますか？
                    </h2>

                    {hasActiveJobListings ? (
                        <div className="p-profile__modal-warning">
                            <p className="p-profile__modal-text p-profile__modal-text--warning">
                                現在、募集中の案件があります。退会する前に、すべての案件を「募集終了」にしてください。
                            </p>
                            <SecondaryButton
                                onClick={closeModal}
                                className="p-profile__btn p-profile__btn--secondary mt-4"
                            >
                                プロフィール編集に戻る
                            </SecondaryButton>
                        </div>
                    ) : (
                        <>
                            <p className="p-profile__modal-text">
                                退会すると、以下のデータが削除されます：
                            </p>
                            <ul className="p-profile__modal-list">
                                <li>
                                    アカウント情報（メールアドレス、パスワードなど）
                                </li>
                                <li>
                                    プロフィール情報（ユーザー名、アバター画像など）
                                </li>
                                <li>
                                    投稿した案件情報（現在募集終了している案件のみ）
                                </li>
                                <li>送受信したメッセージ履歴</li>
                            </ul>
                            <p className="p-profile__modal-text p-profile__modal-text--note">
                                ※ただし、システムログやバックアップには一部情報が残る場合があります。
                            </p>
                            <p className="p-profile__modal-text">
                                本当に退会する場合は、確認のためパスワードを入力してください。
                            </p>

                            <div className="p-profile__form-group">
                                <InputLabel
                                    htmlFor="password"
                                    value="パスワード"
                                    className="sr-only"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="p-profile__form-input"
                                    isFocused
                                    placeholder="パスワード"
                                    maxLength={50}
                                />

                                <InputError
                                    message={errors.password}
                                    className="p-profile__form-error"
                                />
                            </div>

                            <div className="p-profile__modal-actions">
                                <SecondaryButton
                                    onClick={closeModal}
                                    className="p-profile__btn p-profile__btn--secondary"
                                >
                                    キャンセル
                                </SecondaryButton>

                                <DangerButton
                                    className="p-profile__btn p-profile__btn--danger"
                                    disabled={processing}
                                >
                                    退会する
                                </DangerButton>
                            </div>
                        </>
                    )}
                </form>
            </Modal>
        </section>
    );
}
