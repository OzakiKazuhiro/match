import { useState } from "react";
import { User } from "@/types";

// パブリックメッセージの型定義
export interface PublicMessageType {
    id: number;
    job_listing_id: number;
    user_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    user: User;
}

interface PublicMessageProps {
    message: PublicMessageType;
}

/**
 * アバターURLを取得する関数
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

/**
 * メッセージの日時フォーマット
 */
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

/**
 * パブリックメッセージコンポーネント
 * 案件詳細ページなどで表示される公開メッセージ
 */
const PublicMessage = ({ message }: PublicMessageProps) => {
    // 表示状態を管理するstate
    const [isExpanded, setIsExpanded] = useState(false);

    // メッセージの長さ定数
    const MAX_MESSAGE_LENGTH = 300; // 省略表示する文字数の閾値
    const isLongMessage = message.message.length > MAX_MESSAGE_LENGTH;

    // 日付のフォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // 省略表示用のメッセージテキスト
    const displayMessage =
        isLongMessage && !isExpanded
            ? `${message.message.substring(0, MAX_MESSAGE_LENGTH)}...`
            : message.message;

    return (
        <div className="p-public-message">
            <div className="p-public-message__header">
                <div className="p-public-message__user">
                    <div className="p-public-message__avatar">
                        {message.user.avatar ? (
                            <img
                                src={getAvatarUrl(message.user.avatar)}
                                alt={`${message.user.name}のプロフィール画像`}
                                className="p-public-message__avatar-image"
                                onError={(e) => {
                                    if (e.currentTarget.parentElement) {
                                        e.currentTarget.parentElement.innerHTML =
                                            message.user.name
                                                .charAt(0)
                                                .toUpperCase();
                                    }
                                }}
                            />
                        ) : (
                            <div className="p-public-message__avatar-placeholder">
                                {message.user.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="p-public-message__user-info">
                        <div className="p-public-message__name">
                            {message.user.name.length > 10
                                ? `${message.user.name.substring(0, 10)}...`
                                : message.user.name}
                        </div>
                        <div className="p-public-message__date">
                            {formatDate(message.created_at)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-public-message__body">
                {/* 改行を維持しながらメッセージを表示 */}
                <div className="p-public-message__content">
                    {displayMessage.split("\n").map((line, index) => (
                        <p key={index} className="p-public-message__line">
                            {line}
                        </p>
                    ))}
                </div>

                {/* 長いメッセージの場合に「続きを読む/閉じる」ボタンを表示 */}
                {isLongMessage && (
                    <button
                        className="p-public-message__toggle-button"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "閉じる" : "続きを読む"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default PublicMessage;
