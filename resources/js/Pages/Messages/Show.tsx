import { useState, useEffect, useRef } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
};

type Message = {
    id: number;
    conversation_group_id: number;
    sender_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    sender: User;
};

type ConversationGroup = {
    id: number;
    job_owner_id: number;
    applicant_id: number;
    created_at: string;
    updated_at: string;
    job_owner: User;
    applicant: User;
};

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

export default function Show({
    auth,
    conversationGroup,
    messages,
    participants,
}: PageProps<{
    conversationGroup: ConversationGroup;
    messages: Message[];
    participants: User[];
}>) {
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    // 会話相手を特定（自分以外の参加者）
    const otherParticipant = participants.find(
        (participant) => participant.id !== auth.user.id
    );

    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    // メッセージ送信処理
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("messages.store", conversationGroup.id), {
            onSuccess: () => {
                reset("message");
            },
        });
    };

    // メッセージが追加されたらスクロール位置を最下部に移動
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <AuthenticatedLayout
            header={
                <div className="p-messages__header">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {otherParticipant?.name || "不明なユーザー"}との会話
                    </h2>
                    <Link
                        href={route("messages.index")}
                        className="p-messages__back-button"
                    >
                        戻る
                    </Link>
                </div>
            }
        >
            <Head
                title={`${otherParticipant?.name || "不明なユーザー"}との会話`}
            />

            <div className="p-messages__container">
                <div className="p-messages__card">
                    <div className="p-messages__card-body">
                        <div
                            ref={messagesContainerRef}
                            className="p-messages__conversation"
                        >
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`p-messages__message ${
                                        message.sender_id === auth.user.id
                                            ? "p-messages__message--sent"
                                            : "p-messages__message--received"
                                    }`}
                                >
                                    {message.sender_id !== auth.user.id && (
                                        <div className="p-messages__avatar">
                                            {message.sender.avatar ? (
                                                <img
                                                    src={getAvatarUrl(
                                                        message.sender.avatar
                                                    )}
                                                    alt={message.sender.name}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                                                    {getInitials(
                                                        message.sender.name
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <div
                                        className={`p-messages__bubble ${
                                            message.sender_id === auth.user.id
                                                ? "p-messages__bubble--sent"
                                                : "p-messages__bubble--received"
                                        }`}
                                    >
                                        <p className="p-messages__message-text">
                                            {message.message}
                                        </p>
                                        <p className="p-messages__message-time">
                                            {new Date(
                                                message.created_at
                                            ).toLocaleString("ja-JP", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-messages__card">
                    <div className="p-messages__card-body">
                        <form
                            onSubmit={handleSubmit}
                            className="p-messages__form"
                        >
                            <div className="c-form-group">
                                <label
                                    htmlFor="message"
                                    className="c-form-label"
                                >
                                    メッセージ
                                </label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    rows={3}
                                    className="p-messages__textarea"
                                    required
                                />
                                <InputError
                                    message={errors.message}
                                    className="c-form-error"
                                />
                            </div>
                            <div className="p-messages__submit-container">
                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                >
                                    送信
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
