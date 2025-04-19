import React from "react";
import { User } from "@/types";

// ダイレクトメッセージの型定義
export interface DirectMessageType {
    id: number;
    conversation_group_id: number;
    sender_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    sender: User;
}

interface DirectMessageProps {
    message: DirectMessageType;
    currentUserId: number;
}

/**
 * アバターURLを取得する関数
 */
const getAvatarUrl = (avatar: string | undefined): string => {
    if (!avatar) return "";

    // 既にstorageから始まる場合は重複を避ける
    if (avatar.startsWith("storage/")) {
        return `/${avatar}`;
    }

    // http or httpsから始まる場合はそのまま返す
    if (avatar.startsWith("http")) {
        return avatar;
    }

    // storage/avatarsで始まる場合は/を先頭に追加
    if (avatar.startsWith("avatars/")) {
        return `/storage/${avatar}`;
    }

    // ファイル名のみの場合はパスを構築する
    return `/storage/avatars/${avatar}`;
};

/**
 * ユーザー名からイニシャルを取得する関数
 */
const getInitials = (name: string): string => {
    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .substring(0, 2);
};

/**
 * ダイレクトメッセージコンポーネント
 * メッセージ一覧画面などで表示されるダイレクトメッセージ
 */
export default function DirectMessage({
    message,
    currentUserId,
}: DirectMessageProps) {
    const isSentByCurrentUser = message.sender_id === currentUserId;

    return (
        <div
            className={`p-messages__message ${
                isSentByCurrentUser
                    ? "p-messages__message--sent"
                    : "p-messages__message--received"
            }`}
        >
            {!isSentByCurrentUser && (
                <div className="p-messages__avatar">
                    {message.sender.avatar ? (
                        <img
                            src={getAvatarUrl(message.sender.avatar)}
                            alt={message.sender.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                            {getInitials(message.sender.name)}
                        </div>
                    )}
                </div>
            )}
            <div
                className={`p-messages__bubble ${
                    isSentByCurrentUser
                        ? "p-messages__bubble--sent"
                        : "p-messages__bubble--received"
                }`}
            >
                {!isSentByCurrentUser && (
                    <p className="p-messages__sender-name">
                        {message.sender.name}
                    </p>
                )}
                <p className="p-messages__message-text">{message.message}</p>
                <p className="p-messages__message-time">
                    {new Date(message.created_at).toLocaleString("ja-JP", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>
        </div>
    );
}
