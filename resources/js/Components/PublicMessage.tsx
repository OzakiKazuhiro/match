import { useState } from "react";
import { User } from "@/types";
import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";

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
    currentUserId?: number;
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
const PublicMessage = ({ message, currentUserId }: PublicMessageProps) => {
    // 表示状態を管理するstate
    const [isExpanded, setIsExpanded] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editMessage, setEditMessage] = useState(message.message);

    // 自分のメッセージかどうか
    const isMyMessage = currentUserId && currentUserId === message.user_id;

    // メッセージの長さ定数
    const MAX_MESSAGE_LENGTH = 300; // 省略表示する文字数の閾値
    const isLongMessage = message.message.length > MAX_MESSAGE_LENGTH;

    // 編集モーダルを開く
    const openEditModal = () => {
        setEditMessage(message.message);
        setShowEditModal(true);
    };

    // 削除確認モーダルを開く
    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    // 編集をキャンセル
    const cancelEdit = () => {
        setShowEditModal(false);
    };

    // 削除をキャンセル
    const cancelDelete = () => {
        setShowDeleteModal(false);
    };

    // メッセージを更新
    const updateMessage = () => {
        router.patch(
            route("public-messages.update", message.id),
            {
                message: editMessage,
            },
            {
                onSuccess: () => {
                    setShowEditModal(false);
                },
            }
        );
    };

    // メッセージを削除
    const deleteMessage = () => {
        router.delete(route("public-messages.destroy", message.id), {
            onSuccess: () => {
                setShowDeleteModal(false);
            },
        });
    };

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
                            {message.created_at !== message.updated_at && (
                                <span className="p-public-message__edited">
                                    {" "}
                                    (編集済み)
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* 自分のメッセージの場合に表示する編集・削除ボタン */}
                {isMyMessage && (
                    <div className="p-public-message__actions">
                        <button
                            onClick={openEditModal}
                            className="p-public-message__action-button p-public-message__action-button--edit"
                        >
                            編集
                        </button>
                        <button
                            onClick={openDeleteModal}
                            className="p-public-message__action-button p-public-message__action-button--delete"
                        >
                            削除
                        </button>
                    </div>
                )}
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

            {/* 編集モーダル */}
            <Modal show={showEditModal} onClose={cancelEdit} maxWidth="md">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        メッセージを編集
                    </h2>

                    <div className="mt-4">
                        <textarea
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={editMessage}
                            onChange={(e) => setEditMessage(e.target.value)}
                            rows={6}
                        ></textarea>
                    </div>

                    <div className="mt-4 flex justify-end space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={cancelEdit}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={updateMessage}
                        >
                            更新する
                        </button>
                    </div>
                </div>
            </Modal>

            {/* 削除確認モーダル */}
            <Modal show={showDeleteModal} onClose={cancelDelete} maxWidth="md">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        メッセージを削除
                    </h2>

                    <p className="mt-3 text-sm text-gray-600">
                        このメッセージを削除しますか？この操作は取り消せません。
                    </p>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={cancelDelete}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            onClick={deleteMessage}
                        >
                            削除する
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PublicMessage;
