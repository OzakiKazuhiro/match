import { useState, useRef, createRef } from "react";
import { Head, Link, useForm, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { route } from "ziggy-js";
import PublicMessage, { PublicMessageType } from "@/Components/PublicMessage";
import Modal from "@/Components/Modal";
import FavoriteButton from "@/Components/FavoriteButton";

/**
 * アバター画像のURLを適切な形式に変換する
 * URLが"/"で始まっていない場合は先頭に"/"を追加する
 */
const getAvatarUrl = (avatarPath: string | undefined): string => {
    if (!avatarPath) return "";

    // 既にstorageから始まる場合は重複を避ける
    if (avatarPath.startsWith("storage/")) {
        return `/${avatarPath}`;
    }

    // http or httpsから始まる場合はそのまま返す
    if (avatarPath.startsWith("http")) {
        return avatarPath;
    }

    // それ以外の場合はstorageパスを追加
    return `/storage/${avatarPath}`;
};

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    created_at?: string;
}

interface JobListingData {
    id: number;
    user_id: number;
    title: string;
    type: "one_time" | "revenue_share";
    description: string;
    budget_min: number | null;
    budget_max: number | null;
    category: string | null;
    location: string;
    skills: string[] | null;
    preferred_skills: string[] | null;
    is_closed: boolean;
    view_count: number;
    created_at: string;
    updated_at: string;
    user: User;
}

/**
 * ページネーション用のインターフェース
 * ページネーションをサポートするデータ構造
 */
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

/**
 * 案件詳細ページのメインコンポーネント
 */
export default function JobDetail({
    auth,
    jobListing,
    publicMessages,
    canEdit, // 現在のユーザーが案件を編集できるかどうか
    canApply, // 現在のユーザーが案件に応募できるかどうか
    hasApplied, // 現在のユーザーが既に応募しているかどうか
    applicationStatus = "pending", // 応募状態（pending:応募中, accepted:承認済み）
    totalJobListings, // 投稿者が投稿した案件の総数
    isFavorited, // 現在のユーザーがお気に入り登録しているかどうか
}: PageProps<{
    jobListing: JobListingData;
    publicMessages: Paginator<PublicMessageType>;
    canEdit: boolean;
    canApply: boolean;
    hasApplied: boolean;
    applicationStatus?: string;
    totalJobListings: number;
    isFavorited: boolean;
}>) {
    // パブリックメッセージのフォーム管理
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    // URLコピー機能のための状態管理
    const [copied, setCopied] = useState(false);
    const copyUrlInputRef = useRef<HTMLInputElement>(null);

    // URLをクリップボードにコピーする関数
    const copyToClipboard = () => {
        const currentUrl = window.location.href;

        // モダンブラウザ向けの実装を試す
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(currentUrl)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                })
                .catch(() => {
                    // モダンな方法が失敗した場合はフォールバック
                    fallbackCopyToClipboard(currentUrl);
                });
        } else {
            // Clipboard APIがサポートされていない場合はフォールバック
            fallbackCopyToClipboard(currentUrl);
        }
    };

    // フォールバックのコピー実装（テキストエリア経由）
    const fallbackCopyToClipboard = (text: string) => {
        try {
            // 一時的な要素を作成
            const textArea = document.createElement("textarea");
            textArea.value = text;

            // CSSで非表示にする
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);

            // テキストを選択してコピー
            textArea.focus();
            textArea.select();
            const successful = document.execCommand("copy");

            // 要素を削除
            document.body.removeChild(textArea);

            if (successful) {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            }
        } catch (err) {
            console.error("コピーに失敗しました:", err);
        }
    };

    // メッセージの最大文字数と入力チェック用の状態
    const MAX_MESSAGE_LENGTH = 500;
    const remainingChars = MAX_MESSAGE_LENGTH - data.message.length;
    const isOverLimit = remainingChars < 0;

    // ステータスのテキストを取得
    const getStatusText = (status: string) => {
        switch (status) {
            case "accepted":
                return "承認済み";
            default:
                return "応募中";
        }
    };

    // ステータスのクラスを取得
    const getStatusClass = (status: string) => {
        return status === "accepted"
            ? "p-job-detail__apply-button--applied p-job-detail__apply-button--accepted"
            : "p-job-detail__apply-button--applied";
    };

    const handleSubmitMessage = (e: React.FormEvent) => {
        e.preventDefault();

        // 文字数制限チェック
        if (data.message.length > MAX_MESSAGE_LENGTH) {
            return;
        }

        post(route("job-listings.messages.store", jobListing.id), {
            onSuccess: () => setData("message", ""),
        });
    };

    // 予算表示のフォーマット
    const formatBudget = () => {
        if (
            jobListing.type === "revenue_share" ||
            (!jobListing.budget_min && !jobListing.budget_max)
        ) {
            return null;
        }

        if (jobListing.budget_min && jobListing.budget_max) {
            return `¥${jobListing.budget_min.toLocaleString()} 〜 ¥${jobListing.budget_max.toLocaleString()}`;
        } else if (jobListing.budget_min) {
            return `¥${jobListing.budget_min.toLocaleString()} 〜`;
        } else if (jobListing.budget_max) {
            return `〜 ¥${jobListing.budget_max.toLocaleString()}`;
        }
    };

    // 作成日のフォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // メッセージの日時フォーマット
    const formatMessageDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const [confirmingClose, setConfirmingClose] = useState(false);
    const [confirmingApply, setConfirmingApply] = useState(false);
    const [showBioModal, setShowBioModal] = useState(false);

    // 募集終了確認モーダルを開く
    const confirmJobClose = () => {
        setConfirmingClose(true);
    };

    // 応募確認モーダルを開く
    const confirmApply = () => {
        setConfirmingApply(true);
    };

    // モーダルを閉じる
    const closeModal = () => {
        setConfirmingClose(false);
        setConfirmingApply(false);
    };

    // 自己紹介文を省略表示するための関数
    const truncateBio = (bio: string, maxLength: number = 50) => {
        if (bio.length <= maxLength) return bio;
        return bio.substring(0, maxLength) + "...";
    };

    // 自己紹介文の全文を表示するモーダルを開く
    const openBioModal = () => {
        setShowBioModal(true);
    };

    // 自己紹介文モーダルを閉じる
    const closeBioModal = () => {
        setShowBioModal(false);
    };

    // 募集終了の実行
    const handleJobClose = () => {
        router.patch(
            route("job-listings.close", jobListing.id),
            {},
            {
                onSuccess: () => closeModal(),
            }
        );
    };

    // 応募の実行
    const handleApply = () => {
        window.location.href = route(
            "job-listings.apply.create",
            jobListing.id
        );
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-job-detail__title">案件詳細</div>}
        >
            <Head title={`${jobListing.title}`} />

            <div className="p-job-detail">
                <div className="p-job-detail__container">
                    <div className="p-job-detail__breadcrumb">
                        <Link
                            href={route("job-listings.index")}
                            className="p-job-detail__breadcrumb-link"
                        >
                            案件一覧
                        </Link>
                        <span className="p-job-detail__breadcrumb-separator">
                            &gt;
                        </span>
                        <span className="p-job-detail__breadcrumb-current">
                            {jobListing.title}
                        </span>
                    </div>

                    <div className="p-job-detail__content">
                        <div className="p-job-detail__main">
                            {/* 案件情報 */}
                            <div className="p-job-detail__card">
                                <div className="p-job-detail__header">
                                    <div className="p-job-detail__meta">
                                        <span
                                            className={`p-job-detail__type p-job-detail__type--${
                                                jobListing.type === "one_time"
                                                    ? "onetime"
                                                    : "revenue"
                                            }`}
                                        >
                                            {jobListing.type === "one_time"
                                                ? "単発案件"
                                                : "レベニューシェア"}
                                        </span>
                                        {jobListing.category && (
                                            <span className="p-job-detail__category">
                                                {jobListing.category}
                                            </span>
                                        )}
                                        <span className="p-job-detail__date">
                                            投稿日：{" "}
                                            {formatDate(jobListing.created_at)}
                                        </span>
                                    </div>
                                    <h1 className="p-job-detail__title">
                                        {jobListing.title}
                                    </h1>
                                    {formatBudget() && (
                                        <div className="p-job-detail__budget">
                                            予算： {formatBudget()}
                                        </div>
                                    )}
                                </div>

                                <div className="p-job-detail__body">
                                    <div className="p-job-detail__description">
                                        {jobListing.description
                                            .split("\n")
                                            .map((paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="p-job-detail__paragraph"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                    </div>

                                    {jobListing.skills &&
                                        jobListing.skills.length > 0 && (
                                            <div className="p-job-detail__skills">
                                                <h3 className="p-job-detail__section-title">
                                                    必要なスキル
                                                </h3>
                                                <div className="p-job-detail__skill-tags">
                                                    {jobListing.skills.map(
                                                        (skill, index) => (
                                                            <span
                                                                key={index}
                                                                className="p-job-detail__skill-tag"
                                                            >
                                                                {skill}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {jobListing.preferred_skills &&
                                        jobListing.preferred_skills.length >
                                            0 && (
                                            <div className="p-job-detail__skills">
                                                <h3 className="p-job-detail__section-title">
                                                    あれば歓迎するスキル
                                                </h3>
                                                <div className="p-job-detail__skill-tags">
                                                    {jobListing.preferred_skills.map(
                                                        (skill, index) => (
                                                            <span
                                                                key={index}
                                                                className="p-job-detail__skill-tag p-job-detail__skill-tag--preferred"
                                                            >
                                                                {skill}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    <div className="p-job-detail__info">
                                        <div className="p-job-detail__info-item">
                                            <span className="p-job-detail__info-label">
                                                作業場所：
                                            </span>
                                            <span className="p-job-detail__info-value">
                                                {jobListing.location}
                                            </span>
                                        </div>
                                        <div className="p-job-detail__info-item">
                                            <span className="p-job-detail__info-label">
                                                ステータス：
                                            </span>
                                            <span
                                                className={`p-job-detail__info-value p-job-detail__status p-job-detail__status--${
                                                    jobListing.is_closed
                                                        ? "closed"
                                                        : "open"
                                                }`}
                                            >
                                                {jobListing.is_closed
                                                    ? "募集終了"
                                                    : "募集中"}
                                            </span>
                                        </div>
                                        <div className="p-job-detail__info-item">
                                            <span className="p-job-detail__info-label">
                                                閲覧数：
                                            </span>
                                            <span className="p-job-detail__info-value">
                                                {jobListing.view_count}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-job-detail__footer">
                                    <div className="p-job-detail__actions">
                                        {canEdit && (
                                            <>
                                                {!jobListing.is_closed && (
                                                    <>
                                                        <button
                                                            onClick={
                                                                confirmJobClose
                                                            }
                                                            className="p-job-detail__message-button"
                                                        >
                                                            募集を終了する
                                                        </button>
                                                    </>
                                                )}
                                            </>
                                        )}
                                        {!jobListing.is_closed &&
                                            (canApply || hasApplied) && (
                                                <Link
                                                    href={
                                                        hasApplied ? "#" : "#"
                                                    }
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (!hasApplied) {
                                                            confirmApply();
                                                        }
                                                    }}
                                                    className={`p-job-detail__apply-button ${
                                                        hasApplied
                                                            ? getStatusClass(
                                                                  applicationStatus
                                                              )
                                                            : ""
                                                    }`}
                                                >
                                                    {hasApplied
                                                        ? getStatusText(
                                                              applicationStatus
                                                          )
                                                        : "応募する"}
                                                </Link>
                                            )}
                                    </div>
                                </div>
                            </div>

                            {/* メッセージセクション */}
                            <div className="p-job-detail__card p-job-detail__card--messages">
                                <h2 className="p-job-detail__messages-title">
                                    パブリックメッセージ
                                </h2>
                                <div className="p-job-detail__messages">
                                    {publicMessages.data.length > 0 ? (
                                        <>
                                            {publicMessages.data.map(
                                                (message) => (
                                                    <PublicMessage
                                                        key={message.id}
                                                        message={message}
                                                        currentUserId={
                                                            auth.user.id
                                                        }
                                                    />
                                                )
                                            )}

                                            {/* ページネーションUI */}
                                            {publicMessages.last_page > 1 && (
                                                <div className="p-job-detail__pagination">
                                                    {publicMessages.current_page >
                                                        1 && (
                                                        <button
                                                            className="p-job-detail__pagination-button"
                                                            onClick={() =>
                                                                router.get(
                                                                    route(
                                                                        "job-listings.show",
                                                                        jobListing.id
                                                                    ),
                                                                    {
                                                                        page:
                                                                            publicMessages.current_page -
                                                                            1,
                                                                    },
                                                                    {
                                                                        preserveState:
                                                                            true,
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
                                                        const maxPagesToShow = 5; // 最大表示ページ数

                                                        let pages = [];

                                                        // 常に最初のページを表示
                                                        pages.push(
                                                            <button
                                                                key={1}
                                                                className={`p-job-detail__pagination-number ${
                                                                    currentPage ===
                                                                    1
                                                                        ? "p-job-detail__pagination-number--active"
                                                                        : ""
                                                                }`}
                                                                onClick={() => {
                                                                    if (
                                                                        currentPage !==
                                                                        1
                                                                    ) {
                                                                        router.get(
                                                                            route(
                                                                                "job-listings.show",
                                                                                jobListing.id
                                                                            ),
                                                                            {
                                                                                page: 1,
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
                                                                1
                                                            </button>
                                                        );

                                                        // 現在のページの周りのページを計算
                                                        let startPage =
                                                            Math.max(
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
                                                        if (
                                                            endPage ===
                                                            lastPage - 1
                                                        ) {
                                                            startPage =
                                                                Math.max(
                                                                    2,
                                                                    lastPage - 2
                                                                );
                                                        }

                                                        // 省略記号を表示するかどうか
                                                        if (startPage > 2) {
                                                            pages.push(
                                                                <span
                                                                    key="ellipsis1"
                                                                    className="p-job-detail__pagination-ellipsis"
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
                                                                    className={`p-job-detail__pagination-number ${
                                                                        currentPage ===
                                                                        i
                                                                            ? "p-job-detail__pagination-number--active"
                                                                            : ""
                                                                    }`}
                                                                    onClick={() => {
                                                                        if (
                                                                            currentPage !==
                                                                            i
                                                                        ) {
                                                                            router.get(
                                                                                route(
                                                                                    "job-listings.show",
                                                                                    jobListing.id
                                                                                ),
                                                                                {
                                                                                    page: i,
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
                                                                    {i}
                                                                </button>
                                                            );
                                                        }

                                                        // 省略記号を表示するかどうか
                                                        if (
                                                            endPage <
                                                            lastPage - 1
                                                        ) {
                                                            pages.push(
                                                                <span
                                                                    key="ellipsis2"
                                                                    className="p-job-detail__pagination-ellipsis"
                                                                >
                                                                    ...
                                                                </span>
                                                            );
                                                        }

                                                        // 最後のページが2ページ目以降なら表示
                                                        if (lastPage > 1) {
                                                            pages.push(
                                                                <button
                                                                    key={
                                                                        lastPage
                                                                    }
                                                                    className={`p-job-detail__pagination-number ${
                                                                        currentPage ===
                                                                        lastPage
                                                                            ? "p-job-detail__pagination-number--active"
                                                                            : ""
                                                                    }`}
                                                                    onClick={() => {
                                                                        if (
                                                                            currentPage !==
                                                                            lastPage
                                                                        ) {
                                                                            router.get(
                                                                                route(
                                                                                    "job-listings.show",
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
                                                            className="p-job-detail__pagination-button"
                                                            onClick={() =>
                                                                router.get(
                                                                    route(
                                                                        "job-listings.show",
                                                                        jobListing.id
                                                                    ),
                                                                    {
                                                                        page:
                                                                            publicMessages.current_page +
                                                                            1,
                                                                    },
                                                                    {
                                                                        preserveState:
                                                                            true,
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
                                        </>
                                    ) : (
                                        <div className="p-job-detail__no-messages">
                                            まだメッセージはありません。最初のメッセージを投稿しましょう。
                                        </div>
                                    )}
                                </div>

                                {auth.user && !jobListing.is_closed && (
                                    <div className="p-job-detail__message-form-wrapper">
                                        <h3 className="p-job-detail__message-form-title">
                                            メッセージを投稿
                                        </h3>
                                        <form
                                            onSubmit={handleSubmitMessage}
                                            className="p-job-detail__message-form"
                                        >
                                            <textarea
                                                id="message"
                                                className={`p-job-detail__message-input ${
                                                    isOverLimit
                                                        ? "p-job-detail__message-input--error"
                                                        : ""
                                                }`}
                                                placeholder="質問や応募の意思などをメッセージしてください"
                                                value={data.message}
                                                onChange={(e) =>
                                                    setData(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                                rows={4}
                                                required
                                                maxLength={MAX_MESSAGE_LENGTH}
                                            ></textarea>
                                            <div
                                                className={`p-job-detail__character-counter ${
                                                    isOverLimit
                                                        ? "p-job-detail__character-counter--error"
                                                        : ""
                                                }`}
                                            >
                                                {isOverLimit
                                                    ? "文字数制限を超えています"
                                                    : `残り ${remainingChars} 文字`}
                                            </div>
                                            {errors.message && (
                                                <InputError
                                                    message={errors.message}
                                                    className="mt-2"
                                                />
                                            )}
                                            <button
                                                type="submit"
                                                className="p-job-detail__message-submit"
                                                disabled={
                                                    processing || isOverLimit
                                                }
                                            >
                                                {processing
                                                    ? "送信中..."
                                                    : "メッセージを送信"}
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {auth.user && jobListing.is_closed && (
                                    <div className="p-job-detail__closed-message">
                                        <p>
                                            この案件は募集が終了しているため、新しいメッセージは投稿できません。
                                        </p>
                                    </div>
                                )}

                                {!auth.user && (
                                    <div className="p-job-detail__login-prompt">
                                        <p>
                                            メッセージを投稿するには、ログインしてください。
                                        </p>
                                        <Link
                                            href={route("login")}
                                            className="p-job-detail__apply-button"
                                        >
                                            ログイン
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* サイドバー */}
                        <div className="p-job-detail__sidebar">
                            {/* 投稿者情報 */}
                            <div className="p-job-detail__card p-job-detail__card--author">
                                <h2 className="p-job-detail__section-title">
                                    投稿者情報
                                </h2>
                                <div className="p-job-detail__author">
                                    <div className="p-job-detail__author-avatar">
                                        {jobListing.user.avatar ? (
                                            <img
                                                src={getAvatarUrl(
                                                    jobListing.user.avatar
                                                )}
                                                alt={`${jobListing.user.name}のプロフィール画像`}
                                                className="p-job-detail__author-image"
                                                onError={(e) => {
                                                    if (
                                                        e.currentTarget
                                                            .parentElement
                                                    ) {
                                                        e.currentTarget.parentElement.innerHTML =
                                                            jobListing.user.name
                                                                .charAt(0)
                                                                .toUpperCase();
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <div className="p-job-detail__author-avatar-placeholder">
                                                {jobListing.user.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-job-detail__author-info">
                                        <div className="p-job-detail__author-name">
                                            {jobListing.user.name.length > 10
                                                ? `${jobListing.user.name.substring(
                                                      0,
                                                      10
                                                  )}...`
                                                : jobListing.user.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-job-detail__author-stats">
                                    <div className="p-job-detail__author-stat">
                                        <div className="p-job-detail__author-stat-label">
                                            投稿した案件
                                        </div>
                                        <div className="p-job-detail__author-stat-value">
                                            {totalJobListings}件
                                        </div>
                                    </div>
                                </div>

                                {/* 自己紹介文の表示 */}
                                {jobListing.user.bio && (
                                    <div className="p-job-detail__author-bio">
                                        <h3 className="p-job-detail__author-bio-title">
                                            自己紹介
                                        </h3>
                                        <div className="p-job-detail__author-bio-content">
                                            {truncateBio(jobListing.user.bio)
                                                .split("\n")
                                                .map((paragraph, index) => (
                                                    <p
                                                        key={index}
                                                        className="p-job-detail__author-bio-paragraph"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            {jobListing.user.bio.length >
                                                50 && (
                                                <button
                                                    className="p-job-detail__author-bio-more"
                                                    onClick={openBioModal}
                                                >
                                                    もっと見る
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* シェアボタン */}
                            {!jobListing.is_closed && (
                                <div className="p-job-detail__card p-job-detail__card--share">
                                    <h2 className="p-job-detail__section-title">
                                        この案件をシェアする
                                    </h2>
                                    <div className="p-job-detail__share-buttons">
                                        <a
                                            href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                                                `【案件情報】${
                                                    jobListing.title
                                                } | ${
                                                    jobListing.type ===
                                                    "one_time"
                                                        ? "単発案件"
                                                        : "レベニューシェア"
                                                } | Match`
                                            )}&url=${encodeURIComponent(
                                                window.location.href
                                            )}&hashtags=${encodeURIComponent(
                                                "エンジニア,案件募集,match"
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-job-detail__share-button p-job-detail__share-button--twitter"
                                            onClick={() => {
                                                console.log(
                                                    "案件がシェアされました:",
                                                    jobListing.id
                                                );
                                            }}
                                        >
                                            <div className="p-job-detail__share-button-content">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="p-job-detail__share-icon"
                                                >
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                                <span className="p-job-detail__share-label">
                                                    Xでシェア
                                                </span>
                                            </div>
                                        </a>
                                    </div>

                                    {/* URLコピーボタン */}
                                    <div className="p-job-detail__share-buttons">
                                        <button
                                            onClick={copyToClipboard}
                                            className="p-job-detail__share-button p-job-detail__share-button--copy"
                                            title="URLをコピー"
                                        >
                                            <div className="p-job-detail__share-button-content">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="p-job-detail__share-icon"
                                                >
                                                    <rect
                                                        x="9"
                                                        y="9"
                                                        width="13"
                                                        height="13"
                                                        rx="2"
                                                        ry="2"
                                                    ></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg>
                                                <span className="p-job-detail__share-label">
                                                    URLをコピー
                                                </span>
                                            </div>
                                        </button>

                                        {/* コピー成功時の通知 */}
                                        {copied && (
                                            <div className="p-job-detail__copy-notification">
                                                URLをコピーしました!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {auth.user && !jobListing.is_closed && (
                                <div className="p-job-detail__card p-job-detail__card--favorite">
                                    <h2 className="p-job-detail__section-like-title">
                                        お気に入り登録する
                                    </h2>
                                    <FavoriteButton
                                        jobId={jobListing.id}
                                        initialIsFavorited={isFavorited}
                                        size="lg"
                                        className="p-job-detail__favorite-button"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 募集終了確認モーダル */}
            <Modal show={confirmingClose} onClose={closeModal} maxWidth="md">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        募集終了の確認
                    </h2>

                    <p className="mt-3 text-sm text-gray-600">
                        募集を終了すると、案件一覧から表示されなくなり、この操作は取り消せません。よろしいですか？
                    </p>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={closeModal}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            onClick={handleJobClose}
                        >
                            募集を終了する
                        </button>
                    </div>
                </div>
            </Modal>

            {/* 応募確認モーダル */}
            <Modal show={confirmingApply} onClose={closeModal} maxWidth="md">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        応募の確認
                    </h2>

                    <p className="mt-3 text-sm text-gray-600">
                        この案件に本当に応募しますか？一度、応募すると操作を取り消すことができません。
                    </p>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={closeModal}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={handleApply}
                        >
                            応募する
                        </button>
                    </div>
                </div>
            </Modal>

            {/* 自己紹介文モーダル */}
            <Modal show={showBioModal} onClose={closeBioModal} maxWidth="md">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                        {jobListing.user.name}さんの自己紹介
                    </h2>

                    <div className="p-job-detail__author-bio-modal-content">
                        {jobListing.user.bio &&
                            jobListing.user.bio
                                .split("\n")
                                .map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="mt-2 text-sm text-gray-600"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={closeBioModal}
                        >
                            閉じる
                        </button>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
