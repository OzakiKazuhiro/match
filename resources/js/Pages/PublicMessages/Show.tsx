import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/format";
import { route } from "ziggy-js";
import PublicMessage, { PublicMessageType } from "@/Components/PublicMessage";

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface JobListing {
    id: number;
    title: string;
    type: "one_time" | "revenue_share";
    description: string;
    created_at: string;
    user: User;
    public_messages: PublicMessageType[];
}

interface Props {
    jobListing: JobListing;
}

export default function Show({ jobListing }: Props) {
    console.log(jobListing);
    // データのチェック
    if (!jobListing) {
        return (
            <AuthenticatedLayout
                header={
                    <div className="p-public-messages-detail__title">
                        エラー
                    </div>
                }
            >
                <Head title="エラー - Match" />
                <div className="p-public-messages-detail">
                    <div className="p-public-messages-detail__container">
                        <p className="p-public-messages-detail__empty">
                            案件情報を読み込めませんでした。
                        </p>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="p-public-messages-detail__title">
                    パブリックメッセージ
                </div>
            }
        >
            <Head title={`${jobListing.title}のパブリックメッセージ - Match`} />

            <div className="p-public-messages-detail">
                <div className="p-public-messages-detail__container">
                    <div className="p-public-messages-detail__breadcrumb">
                        <Link
                            href={route("public-messages.index")}
                            className="p-public-messages-detail__breadcrumb-link"
                        >
                            パブリックメッセージ一覧
                        </Link>
                        <span className="p-public-messages-detail__breadcrumb-separator">
                            &gt;
                        </span>
                        <span className="p-public-messages-detail__breadcrumb-current">
                            {jobListing.title}
                        </span>
                    </div>

                    <div className="p-public-messages-detail__header">
                        <h1 className="p-public-messages-detail__title">
                            {jobListing.title}
                        </h1>
                        <div className="p-public-messages-detail__meta">
                            <span
                                className={`p-public-messages-detail__type p-public-messages-detail__type--${
                                    jobListing.type === "one_time"
                                        ? "onetime"
                                        : "revenue"
                                }`}
                            >
                                {jobListing.type === "one_time"
                                    ? "単発案件"
                                    : "レベニューシェア"}
                            </span>
                            <span className="p-public-messages-detail__date">
                                投稿日: {formatDate(jobListing.created_at)}
                            </span>
                        </div>
                        <div className="p-public-messages-detail__actions">
                            <Link
                                href={route("job-listings.show", jobListing.id)}
                                className="p-public-messages-detail__view-job-button"
                            >
                                案件詳細を見る
                            </Link>
                        </div>
                    </div>

                    <div className="p-public-messages-detail__messages">
                        <h2 className="p-public-messages-detail__section-title">
                            パブリックメッセージ（
                            {jobListing.public_messages?.length || 0}件）
                        </h2>

                        {jobListing.public_messages?.length > 0 ? (
                            <div className="p-public-messages-detail__messages-list">
                                {jobListing.public_messages.map((message) => (
                                    <PublicMessage
                                        key={message.id}
                                        message={message}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="p-public-messages-detail__empty">
                                まだパブリックメッセージはありません
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
