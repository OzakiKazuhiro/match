import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    CalendarIcon,
    ChatBubbleLeftIcon,
    DocumentTextIcon,
    InboxIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    マイページ
                </h2>
            }
        >
            <Head title="マイページ" />

            <div className="p-dashboard__container">
                <div className="p-dashboard__card-grid">
                    <Link
                        href={route("job-listings.create")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--blue">
                                <DocumentTextIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    案件を投稿する
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    単発案件やレベニューシェア案件を登録できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            今すぐ投稿
                        </div>
                    </Link>

                    <Link
                        href={route("applications.index")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--green">
                                <InboxIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    応募した案件
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    あなたが応募した案件一覧を確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            一覧を見る
                        </div>
                    </Link>

                    <Link
                        href={route("applications.to-my-jobs")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--purple">
                                <CalendarIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    応募を受けた案件
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    あなたの案件への応募一覧を確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            詳細を見る
                        </div>
                    </Link>

                    <Link
                        href={route("messages.index")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--yellow">
                                <ChatBubbleLeftIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    メッセージ
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    他のユーザーとのメッセージをチェックできます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            メッセージを確認
                        </div>
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
