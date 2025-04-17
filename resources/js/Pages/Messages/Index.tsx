import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

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
}

interface ConversationGroup {
    id: number;
    job_owner_id: number;
    applicant_id: number;
    job_owner: User;
    applicant: User;
    latest_message: DirectMessage | null;
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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    メッセージ
                </h2>
            }
        >
            <Head title="メッセージ" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {conversationGroups.length === 0 ? (
                                <p>メッセージはありません。</p>
                            ) : (
                                <ul className="divide-y divide-gray-200">
                                    {conversationGroups.map((group) => {
                                        // 自分以外の参加者を特定
                                        const otherParticipant =
                                            group.job_owner_id === currentUserId
                                                ? group.applicant
                                                : group.job_owner;

                                        return (
                                            <li key={group.id} className="py-4">
                                                <Link
                                                    href={`/messages/${group.id}`}
                                                    className="block hover:bg-gray-50"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        {otherParticipant.avatar ? (
                                                            <img
                                                                src={getAvatarUrl(
                                                                    otherParticipant.avatar
                                                                )}
                                                                alt={
                                                                    otherParticipant.name
                                                                }
                                                                className="h-12 w-12 rounded-full"
                                                            />
                                                        ) : (
                                                            <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                                                                {getInitials(
                                                                    otherParticipant.name
                                                                )}
                                                            </div>
                                                        )}
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                                {
                                                                    otherParticipant.name
                                                                }
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate">
                                                                {group.latest_message
                                                                    ? `${
                                                                          group
                                                                              .latest_message
                                                                              .sender
                                                                              .id ===
                                                                          currentUserId
                                                                              ? "あなた: "
                                                                              : ""
                                                                      }${
                                                                          group
                                                                              .latest_message
                                                                              .message
                                                                      }`
                                                                    : "メッセージがありません"}
                                                            </p>
                                                        </div>
                                                        {group.latest_message && (
                                                            <div className="text-xs text-gray-500">
                                                                {formatTimeAgo(
                                                                    group
                                                                        .latest_message
                                                                        .created_at
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
