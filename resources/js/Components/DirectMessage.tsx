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
 * 日付と時刻をフォーマットする関数
 */
const formatDateTime = (dateString: string): string => {
    return new Date(dateString).toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
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
    const dateTime = formatDateTime(message.created_at);

    // 送信者が削除されている場合のフォールバック
    const senderName = message.sender?.name || "削除されたユーザー";
    const senderAvatar = message.sender?.avatar;

    return (
        <div
            className={`p-messages__message-item ${
                isSentByCurrentUser
                    ? "p-messages__message-item--sent"
                    : "p-messages__message-item--received"
            }`}
        >
            {!isSentByCurrentUser && (
                <div className="p-messages__message-avatar">
                    {senderAvatar ? (
                        <img
                            src={getAvatarUrl(senderAvatar)}
                            alt={senderName}
                            onError={(e) => {
                                // 画像読み込みエラー時に頭文字を表示
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                if (target.parentElement) {
                                    target.parentElement.innerText =
                                        getInitials(senderName);
                                }
                            }}
                        />
                    ) : (
                        <span>{getInitials(senderName)}</span>
                    )}
                </div>
            )}

            <div className="p-messages__message-content">
                {!isSentByCurrentUser && (
                    <div className="p-messages__message-sender">
                        {senderName}
                    </div>
                )}

                <div className="p-messages__message-bubble-container">
                    <div
                        className={`p-messages__message-bubble p-messages__message-bubble--${
                            isSentByCurrentUser ? "sent" : "received"
                        }`}
                    >
                        {message.message}
                    </div>

                    <div className="p-messages__message-time">
                        {isSentByCurrentUser && message.is_read && (
                            <span className="p-messages__message-read">
                                既読
                            </span>
                        )}
                        {dateTime}
                    </div>
                </div>
            </div>
        </div>
    );
}
