import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { route } from "ziggy-js";
import PublicMessage, { PublicMessageType } from "@/Components/PublicMessage";

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
    public_messages: PublicMessageType[];
}

export default function JobDetail({
    auth,
    jobListing,
    canEdit,
    canApply,
}: PageProps<{
    jobListing: JobListingData;
    canEdit: boolean;
    canApply: boolean;
}>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const handleSubmitMessage = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("job-listings.messages.store", jobListing.id), {
            onSuccess: () => reset(),
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

    return (
        <AuthenticatedLayout
            header={<h2 className="p-job-detail__title">案件詳細</h2>}
        >
            <Head title={`${jobListing.title} - Match`} />

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
                                            投稿日:{" "}
                                            {formatDate(jobListing.created_at)}
                                        </span>
                                    </div>
                                    <h1 className="p-job-detail__title">
                                        {jobListing.title}
                                    </h1>
                                    {formatBudget() && (
                                        <div className="p-job-detail__budget">
                                            予算: {formatBudget()}
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
                                                作業場所:
                                            </span>
                                            <span className="p-job-detail__info-value">
                                                {jobListing.location}
                                            </span>
                                        </div>
                                        <div className="p-job-detail__info-item">
                                            <span className="p-job-detail__info-label">
                                                ステータス:
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
                                                閲覧数:
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
                                                <Link
                                                    href={route(
                                                        "job-listings.edit",
                                                        jobListing.id
                                                    )}
                                                    className="p-job-detail__message-button"
                                                >
                                                    編集する
                                                </Link>
                                                {!jobListing.is_closed && (
                                                    <Link
                                                        href={route(
                                                            "job-listings.close",
                                                            jobListing.id
                                                        )}
                                                        method="patch"
                                                        as="button"
                                                        className="p-job-detail__message-button"
                                                    >
                                                        募集を終了する
                                                    </Link>
                                                )}
                                            </>
                                        )}
                                        {canApply && !jobListing.is_closed && (
                                            <Link
                                                href={route(
                                                    "job-listings.apply.create",
                                                    jobListing.id
                                                )}
                                                className="p-job-detail__apply-button"
                                            >
                                                応募する
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
                                    {jobListing.public_messages &&
                                    jobListing.public_messages.length > 0 ? (
                                        jobListing.public_messages.map(
                                            (message) => (
                                                <PublicMessage
                                                    key={message.id}
                                                    message={message}
                                                />
                                            )
                                        )
                                    ) : (
                                        <div className="p-job-detail__no-messages">
                                            まだメッセージはありません。最初のメッセージを投稿しましょう。
                                        </div>
                                    )}
                                </div>

                                {auth.user && (
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
                                                className="p-job-detail__message-input"
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
                                            ></textarea>
                                            {errors.message && (
                                                <InputError
                                                    message={errors.message}
                                                    className="mt-2"
                                                />
                                            )}
                                            <button
                                                type="submit"
                                                className="p-job-detail__message-submit"
                                                disabled={processing}
                                            >
                                                {processing
                                                    ? "送信中..."
                                                    : "メッセージを送信"}
                                            </button>
                                        </form>
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

                        <div className="p-job-detail__sidebar">
                            {/* 投稿者情報 */}
                            <div className="p-job-detail__card p-job-detail__card--author">
                                <h2 className="p-job-detail__section-title">
                                    投稿者情報
                                </h2>
                                <div className="p-job-detail__author">
                                    <div className="p-job-detail__author-header">
                                        <div className="p-job-detail__author-avatar">
                                            {jobListing.user.avatar ? (
                                                <img
                                                    src={getAvatarUrl(
                                                        jobListing.user.avatar
                                                    )}
                                                    alt={jobListing.user.name}
                                                    className="p-job-detail__author-image"
                                                    onError={(e) => {
                                                        e.currentTarget.onerror =
                                                            null;
                                                        e.currentTarget.src =
                                                            "";
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
                                                    {jobListing.user.name.charAt(
                                                        0
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-job-detail__author-info">
                                            <div className="p-job-detail__author-name">
                                                {jobListing.user.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-job-detail__author-stats">
                                        <div className="p-job-detail__author-stat">
                                            <div className="p-job-detail__author-stat-label">
                                                投稿した案件
                                            </div>
                                            <div className="p-job-detail__author-stat-value">
                                                5件
                                            </div>
                                        </div>
                                        <div className="p-job-detail__author-stat">
                                            <div className="p-job-detail__author-stat-label">
                                                会員登録日
                                            </div>
                                            <div className="p-job-detail__author-stat-value">
                                                {formatDate(
                                                    jobListing.user
                                                        .created_at ||
                                                        jobListing.created_at
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* シェアボタン */}
                            <div className="p-job-detail__card p-job-detail__card--share">
                                <h2 className="p-job-detail__section-title">
                                    この案件をシェアする
                                </h2>
                                <div className="p-job-detail__share-buttons">
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                            jobListing.title
                                        )}&url=${encodeURIComponent(
                                            window.location.href
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-job-detail__share-button p-job-detail__share-button--twitter"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                        </svg>
                                        Twitter
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                            window.location.href
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-job-detail__share-button p-job-detail__share-button--facebook"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
