import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/format";
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

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Pagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
}

interface Filters {
    search?: string;
}

interface Props {
    jobListingsWithMessages: JobListingWithMessage[];
    pagination: Pagination;
    filters?: Filters;
}

export default function Index({
    jobListingsWithMessages = [],
    pagination,
    filters = {},
}: Props) {
    const [searchQuery, setSearchQuery] = useState(filters.search || "");

    // 検索処理の実装
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        // 現在のURLを取得
        const url = new URL(window.location.href);

        // 検索クエリをセット
        if (searchQuery) {
            url.searchParams.set("search", searchQuery);
        } else {
            url.searchParams.delete("search");
        }

        // 他のページにいる場合はページを1に戻す
        if (url.searchParams.has("page")) {
            url.searchParams.delete("page");
        }

        // ページ遷移（サーバーリクエスト）
        window.location.href = url.toString();
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="p-public-messages__header-wrapper">
                    <div className="p-public-messages__title">
                        パブリックメッセージ一覧
                    </div>
                    <div className="p-public-messages__header-search">
                        <form
                            className="p-public-messages__header-search-form"
                            onSubmit={handleSearch}
                        >
                            <input
                                type="text"
                                className="p-public-messages__header-search-input"
                                placeholder="案件名で検索"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="p-public-messages__header-search-button"
                            >
                                検索
                            </button>
                        </form>
                    </div>
                </div>
            }
        >
            <Head title="パブリックメッセージ一覧" />

            <div className="p-public-messages">
                <div className="p-public-messages__container">
                    <div className="p-public-messages__tabs">
                        <Link
                            href={route("applications.index")}
                            className="p-public-messages__tab"
                        >
                            応募した案件
                        </Link>
                        <Link
                            href={route("applications.to-my-jobs")}
                            className="p-public-messages__tab"
                        >
                            自分の案件への応募
                        </Link>
                        <Link
                            href={route("public-messages.index")}
                            className="p-public-messages__tab p-public-messages__tab--active"
                        >
                            パブリックメッセージ
                        </Link>
                        <Link
                            href={route("messages.index")}
                            className="p-public-messages__tab"
                        >
                            ダイレクトメッセージ
                        </Link>
                    </div>

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
                                            className="p-public-messages__job-title"
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
                            {filters.search
                                ? "検索条件に一致するメッセージはありません"
                                : "パブリックメッセージはありません"}
                        </p>
                    )}

                    {/* ページネーション */}
                    {pagination.last_page > 1 && pagination.links && (
                        <div className="p-public-messages__pagination">
                            {pagination.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || "#"}
                                    className={`p-public-messages__pagination-link ${
                                        link.active
                                            ? "p-public-messages__pagination-link--active"
                                            : ""
                                    } ${
                                        !link.url
                                            ? "p-public-messages__pagination-link--disabled"
                                            : ""
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
