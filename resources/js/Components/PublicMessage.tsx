import React from "react";
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
export default function PublicMessage({ message }: PublicMessageProps) {
    return (
        <div className="p-job-detail__message">
            <div className="p-job-detail__message-header">
                <div className="p-job-detail__message-user">
                    {message.user.avatar ? (
                        <img
                            src={getAvatarUrl(message.user.avatar)}
                            alt={message.user.name}
                            className="p-job-detail__message-avatar"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "";
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.innerHTML =
                                        message.user.name
                                            .charAt(0)
                                            .toUpperCase();
                                }
                            }}
                        />
                    ) : (
                        <div className="p-job-detail__message-avatar-placeholder">
                            {message.user.name.charAt(0)}
                        </div>
                    )}
                    <span className="p-job-detail__message-name">
                        {message.user.name}
                    </span>
                </div>
                <span className="p-job-detail__message-date">
                    {formatMessageDate(message.created_at)}
                </span>
            </div>
            <div className="p-job-detail__message-content">
                {message.message}
            </div>
        </div>
    );
}
