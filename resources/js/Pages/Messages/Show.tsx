import { useState, useEffect, useRef } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import DirectMessage, { DirectMessageType } from "@/Components/DirectMessage";
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
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

export default function Show({
    auth,
    conversationGroup,
    messages: initialMessages,
    participants,
}: PageProps<{
    conversationGroup: ConversationGroup;
    messages: DirectMessageType[];
    participants: User[];
}>) {
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] =
        useState<DirectMessageType[]>(initialMessages);
    const [sending, setSending] = useState(false);

    // 会話相手を特定（自分以外の参加者）
    const otherParticipant = participants.find(
        (participant) => participant.id !== auth.user.id
    );

    const { data, setData, errors, reset } = useForm({
        message: "",
    });

    // メッセージ送信処理
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!data.message.trim() || sending) {
            return;
        }

        setSending(true);

        try {
            // CSRFトークンの取得
            const csrfToken =
                document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content") || "";

            // APIでメッセージを送信
            const response = await axios.post(
                route("messages.store", conversationGroup.id),
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );

            // 成功したら新しいメッセージを追加
            if (response.data && response.data.message) {
                const newMessage: DirectMessageType = {
                    ...response.data.message,
                    sender: auth.user,
                };

                setMessages([...messages, newMessage]);
                reset("message");
            }
        } catch (error) {
            console.error("メッセージ送信エラー:", error);
        } finally {
            setSending(false);
        }
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
                                <DirectMessage
                                    key={message.id}
                                    message={message}
                                    currentUserId={auth.user.id}
                                />
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
                                <PrimaryButton type="submit" disabled={sending}>
                                    {sending ? "送信中..." : "送信"}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
