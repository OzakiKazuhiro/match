import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { route } from "ziggy-js";

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface DirectMessage {
    id: number;
    sender_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    sender: User;
    is_read: boolean;
}

interface JobListing {
    id: number;
    title: string;
    user_id: number;
    type: string;
    budget_min?: number;
    budget_max?: number;
    is_closed: boolean;
}

interface ConversationGroup {
    id: number;
    job_owner_id: number;
    applicant_id: number;
    job_owner: User;
    applicant: User;
    latest_message: DirectMessage | null;
    unread_count: number;
    job_listing: JobListing | null;
}

// 簡単な時間フォーマット関数
function formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds}秒前`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes}分前`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours}時間前`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays}日前`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths}ヶ月前`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears}年前`;
}

// アバターURLを取得する関数
function getAvatarUrl(avatar: string | undefined): string {
    if (!avatar) return "";
    // storage/avatarsで始まる場合は/を先頭に追加
    if (avatar.startsWith("storage/avatars/")) {
        return `/${avatar}`;
    }
    // ファイル名のみの場合はパスを構築する
    return `/storage/avatars/${avatar}`;
}

// ユーザー名からイニシャルを取得する関数
function getInitials(name: string): string {
    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .substring(0, 2);
}

export default function Index({
    auth,
    conversationGroups,
}: PageProps<{ conversationGroups: ConversationGroup[] }>) {
    const currentUserId = auth.user.id;

    return (
        <AuthenticatedLayout
            header={
                <div className="p-messages__title">
                    ダイレクトメッセージ一覧
                </div>
            }
        >
            <Head title="match - ダイレクトメッセージ一覧" />

            <div className="p-messages">
                <div className="p-messages__container">
                    <div className="p-messages__tabs">
                        <Link
                            href={route("applications.index")}
                            className="p-messages__tab"
                        >
                            応募した案件
                        </Link>
                        <Link
                            href={route("applications.to-my-jobs")}
                            className="p-messages__tab"
                        >
                            自分の案件への応募
                        </Link>
                        <Link
                            href={route("public-messages.index")}
                            className="p-messages__tab"
                        >
                            パブリックメッセージ
                        </Link>
                        <Link
                            href={route("messages.index")}
                            className="p-messages__tab p-messages__tab--active"
                        >
                            ダイレクトメッセージ
                        </Link>
                    </div>

                    {conversationGroups.length === 0 ? (
                        <p className="p-messages__empty">
                            ダイレクトメッセージはありません
                        </p>
                    ) : (
                        <div className="p-messages__list">
                            {conversationGroups.map((group) => {
                                // 自分以外の参加者を特定
                                const otherParticipant =
                                    group.job_owner_id === currentUserId
                                        ? group.applicant
                                        : group.job_owner;

                                return (
                                    <div
                                        key={group.id}
                                        className="p-messages__item"
                                    >
                                        <div className="p-messages__header">
                                            <div className="p-messages__person-info">
                                                <div className="p-messages__avatar">
                                                    {otherParticipant.avatar ? (
                                                        <img
                                                            src={getAvatarUrl(
                                                                otherParticipant.avatar
                                                            )}
                                                            alt={
                                                                otherParticipant.name
                                                            }
                                                            className="p-messages__avatar-image"
                                                        />
                                                    ) : (
                                                        <div className="p-messages__avatar-placeholder">
                                                            {getInitials(
                                                                otherParticipant.name
                                                            )}
                                                        </div>
                                                    )}
                                                    {group.unread_count > 0 && (
                                                        <span className="p-messages__unread-badge">
                                                            {group.unread_count}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="p-messages__person-details">
                                                    <div className="p-messages__person-name">
                                                        {otherParticipant.name}
                                                    </div>
                                                    {group.job_listing && (
                                                        <div className="p-messages__person-job">
                                                            案件：【
                                                            {
                                                                group
                                                                    .job_listing
                                                                    .title
                                                            }
                                                            】
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-messages__message">
                                            <div className="p-messages__message-header">
                                                <div className="p-messages__message-content">
                                                    <span className="p-messages__sender">
                                                        {group.latest_message
                                                            ?.sender_id ===
                                                        currentUserId
                                                            ? "あなた："
                                                            : `${
                                                                  group
                                                                      .latest_message
                                                                      ?.sender
                                                                      .name ||
                                                                  "不明なユーザー"
                                                              }：`}
                                                    </span>
                                                    <span
                                                        className={`p-messages__preview ${
                                                            group.unread_count >
                                                            0
                                                                ? "p-messages__preview--unread"
                                                                : ""
                                                        }`}
                                                    >
                                                        {group.latest_message
                                                            ? group
                                                                  .latest_message
                                                                  .message
                                                            : "メッセージはありません"}
                                                    </span>
                                                </div>
                                                {group.latest_message && (
                                                    <span className="p-messages__date">
                                                        {formatTimeAgo(
                                                            group.latest_message
                                                                .created_at
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-messages__footer">
                                            <Link
                                                href={`/messages/${group.id}`}
                                                className="p-messages__view-all"
                                            >
                                                すべての会話を見る
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
