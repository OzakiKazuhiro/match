import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    CalendarIcon,
    ChatBubbleLeftIcon,
    DocumentTextIcon,
    InboxIcon,
    DocumentMagnifyingGlassIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            header={<div className="p-dashboard__title">マイページ</div>}
        >
            <Head title="マイページ" />

            <div className="p-dashboard__container">
                <div className="p-dashboard__card-grid">
                    <a
                        href={route("my-job-listings.index")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--cyan">
                                <DocumentMagnifyingGlassIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    自分の投稿案件一覧
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    あなたが投稿した案件一覧を確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            一覧を見る
                        </div>
                    </a>

                    <a
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
                    </a>

                    <a
                        href={route("applications.index")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--green">
                                <InboxIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    応募した案件の確認
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    あなたが応募した案件一覧を確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            一覧を見る
                        </div>
                    </a>

                    <a
                        href={route("applications.to-my-jobs")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--purple">
                                <CalendarIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    応募を受けた案件の確認
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    あなたの案件への応募一覧を確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            一覧を見る
                        </div>
                    </a>

                    <a
                        href={route("public-messages.index")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--orange">
                                <ChatBubbleBottomCenterTextIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    パブリックメッセージの確認
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    自分が関わったパブリックメッセージを確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            メッセージを確認
                        </div>
                    </a>

                    <a
                        href={route("messages.index")}
                        className="p-dashboard__menu-card"
                    >
                        <div className="p-dashboard__menu-card-content">
                            <div className="p-dashboard__menu-card-icon p-dashboard__menu-card-icon--yellow">
                                <ChatBubbleLeftIcon className="p-dashboard__menu-card-icon-svg" />
                            </div>
                            <div className="p-dashboard__menu-card-text">
                                <h3 className="p-dashboard__menu-card-title">
                                    ダイレクトメッセージの確認
                                </h3>
                                <p className="p-dashboard__menu-card-description">
                                    他のユーザーとのダイレクトメッセージを確認できます
                                </p>
                            </div>
                        </div>
                        <div className="p-dashboard__menu-card-action">
                            メッセージを確認
                        </div>
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
