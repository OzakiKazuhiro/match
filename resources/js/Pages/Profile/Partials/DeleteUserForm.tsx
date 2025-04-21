import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

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
                    退会すると、すべてのデータが完全に削除されます。
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

                    <p className="p-profile__modal-text">
                        退会すると、すべてのデータが完全に削除されます。本当に退会する場合は、確認のためパスワードを入力してください。
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
                </form>
            </Modal>
        </section>
    );
}
