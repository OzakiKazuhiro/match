import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formatDate } from "@/utils/format";
import { route } from "ziggy-js";
import PublicMessage, { PublicMessageType } from "@/Components/PublicMessage";
import { router } from "@inertiajs/react";

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
}

// ページネーション用のインターフェースを追加
interface Paginator<T> {
    data: T[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
}

interface Props {
    jobListing: JobListing;
    publicMessages: Paginator<PublicMessageType>;
}

export default function Show({ jobListing, publicMessages }: Props) {
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
                            {publicMessages.total}件）
                        </h2>

                        {publicMessages.data.length > 0 ? (
                            <div className="p-public-messages-detail__messages-list">
                                {publicMessages.data.map((message) => (
                                    <PublicMessage
                                        key={message.id}
                                        message={message}
                                    />
                                ))}

                                {/* ページネーションUI */}
                                {publicMessages.last_page > 1 && (
                                    <div className="p-public-messages-detail__pagination">
                                        {publicMessages.current_page > 1 && (
                                            <button
                                                className="p-public-messages-detail__pagination-button"
                                                onClick={() =>
                                                    router.get(
                                                        route(
                                                            "public-messages.show",
                                                            jobListing.id
                                                        ),
                                                        {
                                                            page:
                                                                publicMessages.current_page -
                                                                1,
                                                        },
                                                        {
                                                            preserveState: true,
                                                            only: [
                                                                "publicMessages",
                                                            ],
                                                        }
                                                    )
                                                }
                                            >
                                                前へ
                                            </button>
                                        )}

                                        {/* カスタムページネーションリンク */}
                                        {(() => {
                                            const currentPage =
                                                publicMessages.current_page;
                                            const lastPage =
                                                publicMessages.last_page;

                                            let pages = [];

                                            // 常に最初のページを表示
                                            pages.push(
                                                <button
                                                    key={1}
                                                    className={`p-public-messages-detail__pagination-number ${
                                                        currentPage === 1
                                                            ? "p-public-messages-detail__pagination-number--active"
                                                            : ""
                                                    }`}
                                                    onClick={() => {
                                                        if (currentPage !== 1) {
                                                            router.get(
                                                                route(
                                                                    "public-messages.show",
                                                                    jobListing.id
                                                                ),
                                                                { page: 1 },
                                                                {
                                                                    preserveState:
                                                                        true,
                                                                    only: [
                                                                        "publicMessages",
                                                                    ],
                                                                }
                                                            );
                                                        }
                                                    }}
                                                >
                                                    1
                                                </button>
                                            );

                                            // 現在のページの周りのページを計算
                                            let startPage = Math.max(
                                                2,
                                                currentPage - 1
                                            );
                                            let endPage = Math.min(
                                                lastPage - 1,
                                                currentPage + 1
                                            );

                                            // 最初のページと省略記号の間に十分なスペースがない場合は調整
                                            if (startPage === 2) {
                                                endPage = Math.min(
                                                    lastPage - 1,
                                                    3
                                                );
                                            }

                                            // 最後のページと省略記号の間に十分なスペースがない場合は調整
                                            if (endPage === lastPage - 1) {
                                                startPage = Math.max(
                                                    2,
                                                    lastPage - 2
                                                );
                                            }

                                            // 省略記号を表示するかどうか
                                            if (startPage > 2) {
                                                pages.push(
                                                    <span
                                                        key="ellipsis1"
                                                        className="p-public-messages-detail__pagination-ellipsis"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                            }

                                            // 中間のページを表示
                                            for (
                                                let i = startPage;
                                                i <= endPage;
                                                i++
                                            ) {
                                                pages.push(
                                                    <button
                                                        key={i}
                                                        className={`p-public-messages-detail__pagination-number ${
                                                            currentPage === i
                                                                ? "p-public-messages-detail__pagination-number--active"
                                                                : ""
                                                        }`}
                                                        onClick={() => {
                                                            if (
                                                                currentPage !==
                                                                i
                                                            ) {
                                                                router.get(
                                                                    route(
                                                                        "public-messages.show",
                                                                        jobListing.id
                                                                    ),
                                                                    { page: i },
                                                                    {
                                                                        preserveState:
                                                                            true,
                                                                        only: [
                                                                            "publicMessages",
                                                                        ],
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        {i}
                                                    </button>
                                                );
                                            }

                                            // 省略記号を表示するかどうか
                                            if (endPage < lastPage - 1) {
                                                pages.push(
                                                    <span
                                                        key="ellipsis2"
                                                        className="p-public-messages-detail__pagination-ellipsis"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                            }

                                            // 最後のページが2ページ目以降なら表示
                                            if (lastPage > 1) {
                                                pages.push(
                                                    <button
                                                        key={lastPage}
                                                        className={`p-public-messages-detail__pagination-number ${
                                                            currentPage ===
                                                            lastPage
                                                                ? "p-public-messages-detail__pagination-number--active"
                                                                : ""
                                                        }`}
                                                        onClick={() => {
                                                            if (
                                                                currentPage !==
                                                                lastPage
                                                            ) {
                                                                router.get(
                                                                    route(
                                                                        "public-messages.show",
                                                                        jobListing.id
                                                                    ),
                                                                    {
                                                                        page: lastPage,
                                                                    },
                                                                    {
                                                                        preserveState:
                                                                            true,
                                                                        only: [
                                                                            "publicMessages",
                                                                        ],
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        {lastPage}
                                                    </button>
                                                );
                                            }

                                            return pages;
                                        })()}

                                        {publicMessages.current_page <
                                            publicMessages.last_page && (
                                            <button
                                                className="p-public-messages-detail__pagination-button"
                                                onClick={() =>
                                                    router.get(
                                                        route(
                                                            "public-messages.show",
                                                            jobListing.id
                                                        ),
                                                        {
                                                            page:
                                                                publicMessages.current_page +
                                                                1,
                                                        },
                                                        {
                                                            preserveState: true,
                                                            only: [
                                                                "publicMessages",
                                                            ],
                                                        }
                                                    )
                                                }
                                            >
                                                次へ
                                            </button>
                                        )}
                                    </div>
                                )}
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
