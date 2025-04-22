import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/format";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

interface User {
    id: number;
    name: string;
    avatar?: string;
}

interface JobListing {
    id: number;
    title: string;
    type: "one_time" | "revenue_share";
    user: User;
}

interface PublicMessage {
    id: number;
    content: string;
    created_at: string;
    user: User;
}

interface JobListingWithMessage {
    job_listing: JobListing;
    latest_message: PublicMessage;
    total_messages: number;
}

interface Props {
    jobListingsWithMessages: JobListingWithMessage[];
}

export default function Index({ jobListingsWithMessages = [] }: Props) {
    return (
        <AuthenticatedLayout
            header={
                <div className="p-public-messages__title">
                    パブリックメッセージ一覧
                </div>
            }
        >
            <Head title="パブリックメッセージ一覧" />

            <div className="p-public-messages">
                <div className="p-public-messages__container">
                    {jobListingsWithMessages.length > 0 ? (
                        <div className="p-public-messages__list">
                            {jobListingsWithMessages.map((item) => (
                                <div
                                    key={item.job_listing.id}
                                    className="p-public-messages__item"
                                >
                                    <div className="p-public-messages__header">
                                        <Link
                                            href={route(
                                                "public-messages.show",
                                                item.job_listing.id
                                            )}
                                            className="p-public-messages__title"
                                        >
                                            {item.job_listing.title}
                                        </Link>
                                        <span
                                            className={`p-public-messages__type p-public-messages__type--${
                                                item.job_listing.type ===
                                                "one_time"
                                                    ? "onetime"
                                                    : "revenue"
                                            }`}
                                        >
                                            {item.job_listing.type ===
                                            "one_time"
                                                ? "単発案件"
                                                : "レベニューシェア"}
                                        </span>
                                    </div>
                                    <div className="p-public-messages__message">
                                        <div className="p-public-messages__message-header">
                                            <span className="p-public-messages__sender">
                                                {item.latest_message?.user
                                                    ?.name || "不明なユーザー"}
                                            </span>
                                            <span className="p-public-messages__date">
                                                {item.latest_message?.created_at
                                                    ? formatDate(
                                                          item.latest_message
                                                              .created_at
                                                      )
                                                    : "日付なし"}
                                            </span>
                                        </div>
                                        <div className="p-public-messages__content">
                                            {item.latest_message?.content ||
                                                "メッセージなし"}
                                        </div>
                                    </div>
                                    <div className="p-public-messages__footer">
                                        <Link
                                            href={route(
                                                "public-messages.show",
                                                item.job_listing.id
                                            )}
                                            className="p-public-messages__view-all"
                                        >
                                            すべてのメッセージを見る（
                                            {item.total_messages}件）
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="p-public-messages__empty">
                            パブリックメッセージはありません
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
