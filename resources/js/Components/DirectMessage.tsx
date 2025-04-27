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
    is_read: boolean;
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

    // 既にhttpから始まる場合はそのまま返す
    if (avatar.startsWith("http")) {
        return avatar;
    }

    // すでにスラッシュで始まっている場合は、そのまま返す
    if (avatar.startsWith("/")) {
        return avatar;
    }

    // DBには「storage/avatars/ファイル名」で保存されているので、先頭に「/」を追加
    return `/${avatar}`;
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

    // 日時のフォーマット
    const formattedDate = new Date(message.created_at).toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });

    // 「年/月/日 時間:分」形式に変換
    const displayDate = formattedDate.replace(/\//g, "/").replace(/ /g, " ");

    // 送信者の表示名を設定
    const senderName = isSentByCurrentUser ? "あなた" : message.sender.name;

    // 送信者名と日時を組み合わせたテキスト
    const senderWithTime = `${senderName}：${displayDate}`;

    // アバター画像のURLをコンソールログに出力（デバッグ用）
    if (message.sender) {
        console.log("Sender:", JSON.stringify(message.sender));
        if (message.sender.avatar) {
            const avatarUrl = getAvatarUrl(message.sender.avatar);
            console.log("Avatar original:", message.sender.avatar);
            console.log("Avatar URL constructed:", avatarUrl);
        } else {
            console.log("No avatar found in sender object");
        }
    }

    return (
        <div
            className={`p-messages__message-wrapper p-messages__message-wrapper--${
                isSentByCurrentUser ? "sent" : "received"
            }`}
        >
            <div className="p-messages__message-content">
                {!isSentByCurrentUser && (
                    <div className="p-messages__avatar">
                        {message.sender.avatar ? (
                            <img
                                src={getAvatarUrl(message.sender.avatar)}
                                alt={message.sender.name}
                                onError={(e) => {
                                    // 画像読み込みエラー時に頭文字を表示
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    if (target.parentElement) {
                                        target.parentElement.innerText =
                                            getInitials(message.sender.name);
                                    }
                                    console.error(
                                        "アバター画像の読み込みに失敗:",
                                        getAvatarUrl(message.sender.avatar)
                                    );
                                }}
                            />
                        ) : (
                            <div className="p-messages__avatar-placeholder">
                                {getInitials(message.sender.name)}
                            </div>
                        )}
                    </div>
                )}
                <div
                    className={`p-messages__message-bubble p-messages__message-bubble--${
                        isSentByCurrentUser ? "sent" : "received"
                    }`}
                >
                    <p className="p-messages__message-text">
                        {message.message}
                    </p>
                </div>
            </div>

            <div
                className={`p-messages__message-meta p-messages__message-meta--${
                    isSentByCurrentUser ? "sent" : "received"
                }`}
            >
                <span className="p-messages__message-time">
                    {senderWithTime}
                    {isSentByCurrentUser && message.is_read && (
                        <span className="p-messages__message-status p-messages__message-status--read">
                            &nbsp;(既読)
                        </span>
                    )}
                </span>
            </div>
        </div>
    );
}
