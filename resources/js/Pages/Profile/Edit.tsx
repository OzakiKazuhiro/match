import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={<h2 className="p-profile__title">プロフィール</h2>}
        >
            <Head title="プロフィール" />

            <div className="p-profile__container">
                <div className="p-profile__inner">
                    <div className="p-profile__card">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="p-profile__section"
                        />
                    </div>

                    <div className="p-profile__card">
                        <UpdatePasswordForm className="p-profile__section" />
                    </div>

                    <div className="p-profile__card">
                        <DeleteUserForm className="p-profile__section" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
