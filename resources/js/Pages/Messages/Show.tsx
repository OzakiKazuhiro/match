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

type JobListing = {
    id: number;
    title: string;
    user_id: number;
    type: string;
    budget_min?: number;
    budget_max?: number;
    is_closed: boolean;
};

type ConversationGroup = {
    id: number;
    job_owner_id: number;
    applicant_id: number;
    job_owner: User;
    applicant: User;
    created_at: string;
    updated_at: string;
    job_listing: JobListing | null;
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
    // 文字数カウンター用のstate
    const [charCount, setCharCount] = useState(0);
    // 最大文字数（サーバー側のバリデーションに合わせる）
    const MAX_CHARS = 1000;
    // メモ欄のState
    const [memo, setMemo] = useState<string>("");

    // 会話相手を特定（自分以外の参加者）
    const otherParticipant = participants.find(
        (participant) => participant.id !== auth.user.id
    );

    const { data, setData, errors, reset } = useForm({
        message: "",
    });

    // メッセージを既読にするAPI呼び出し
    const markMessagesAsRead = async () => {
        try {
            // CSRFトークンの取得
            const csrfToken =
                document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content") || "";

            // 既読APIを呼び出し
            await axios.post(
                route("messages.mark-as-read", conversationGroup.id),
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );
        } catch (error) {
            console.error("既読設定エラー:", error);
        }
    };

    // メッセージが変更されたときに文字数をカウント
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        setCharCount(inputValue.length);
        setData("message", inputValue);
    };

    // メモが変更されたときのハンドラ
    const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMemo(e.target.value);
        // ここでメモをローカルストレージに保存するなどの処理を追加できます
        localStorage.setItem(`memo_${conversationGroup.id}`, e.target.value);
    };

    // メッセージ送信処理
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!data.message.trim() || sending) {
            return;
        }

        // 文字数制限チェック
        if (data.message.length > MAX_CHARS) {
            alert(`メッセージは${MAX_CHARS}文字以内で入力してください。`);
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
                setCharCount(0); // 文字数カウンターをリセット
            }
        } catch (error: any) {
            console.error("メッセージ送信エラー:", error);

            // エラーレスポンスのデータを取得して表示（デバッグ用）
            if (error.response && error.response.data) {
                console.error("エラー詳細:", error.response.data);

                if (
                    error.response.data.errors &&
                    error.response.data.errors.message
                ) {
                    alert(error.response.data.errors.message[0]);
                }
            }
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

    // 画面読み込み時にメッセージを既読にする
    useEffect(() => {
        // 初回ロード時に既読APIを呼び出し
        markMessagesAsRead();

        // ローカルストレージからメモを読み込む
        const savedMemo = localStorage.getItem(`memo_${conversationGroup.id}`);
        if (savedMemo) {
            setMemo(savedMemo);
        }

        // 一定間隔で既読APIを呼び出し（ポーリング）
        const interval = setInterval(() => {
            markMessagesAsRead();
        }, 30000); // 30秒ごと

        // クリーンアップ関数
        return () => {
            clearInterval(interval);
        };
    }, [conversationGroup.id]);

    return (
        <AuthenticatedLayout
            header={
                <div className="p-messages__header">
                    <div className="p-messages__title">
                        {conversationGroup.job_listing && (
                            <>{conversationGroup.job_listing.title} - </>
                        )}
                        {otherParticipant?.name || "不明なユーザー"}との会話
                    </div>
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
                title={`${
                    conversationGroup.job_listing
                        ? conversationGroup.job_listing.title + " - "
                        : ""
                }${otherParticipant?.name || "不明なユーザー"}との会話`}
            />

            <div className="p-messages__line-container">
                {/* 左側のチャット領域 */}
                <div className="p-messages__chat-container">
                    {/* メッセージ表示エリア */}
                    <div
                        ref={messagesContainerRef}
                        className="p-messages__conversation"
                    >
                        {messages.length === 0 ? (
                            <div className="p-messages__empty">
                                メッセージがまだありません。最初のメッセージを送信しましょう。
                            </div>
                        ) : (
                            messages.map((message) => (
                                <DirectMessage
                                    key={message.id}
                                    message={message}
                                    currentUserId={auth.user.id}
                                />
                            ))
                        )}
                    </div>

                    {/* 入力フォーム固定エリア */}
                    <div className="p-messages__input-container">
                        <form
                            onSubmit={handleSubmit}
                            className="p-messages__form"
                        >
                            <div className="p-messages__input-wrapper">
                                <textarea
                                    value={data.message}
                                    onChange={handleMessageChange}
                                    className="p-messages__textarea"
                                    placeholder="メッセージを入力..."
                                    required
                                    maxLength={MAX_CHARS}
                                />
                                <div className="p-messages__char-counter">
                                    <span
                                        className={
                                            charCount > MAX_CHARS * 0.9
                                                ? "p-messages__char-counter--near-limit"
                                                : ""
                                        }
                                    >
                                        {charCount}
                                    </span>
                                    <span className="p-messages__char-counter--max">
                                        /{MAX_CHARS}
                                    </span>
                                </div>
                                <InputError
                                    message={errors.message}
                                    className="c-form-error"
                                />
                            </div>
                            <div className="p-messages__submit-container">
                                <PrimaryButton
                                    type="submit"
                                    disabled={
                                        sending ||
                                        charCount > MAX_CHARS ||
                                        charCount === 0
                                    }
                                >
                                    送信
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>

                {/* 右側の情報パネル */}
                <div className="p-messages__info-panel">
                    {/* 相手の情報 */}
                    <div className="p-messages__user-info">
                        <div className="p-messages__user-header">
                            {otherParticipant?.avatar ? (
                                <img
                                    src={
                                        otherParticipant.avatar.startsWith("/")
                                            ? otherParticipant.avatar
                                            : `/${otherParticipant.avatar}`
                                    }
                                    alt={otherParticipant.name}
                                    className="p-messages__user-avatar"
                                />
                            ) : (
                                <div className="p-messages__user-avatar-placeholder">
                                    {otherParticipant?.name
                                        ?.charAt(0)
                                        .toUpperCase() || "?"}
                                </div>
                            )}
                            <div className="p-messages__user-details">
                                <h3 className="p-messages__user-name">
                                    {otherParticipant?.name || "不明なユーザー"}
                                </h3>
                                {conversationGroup.job_listing && (
                                    <div className="p-messages__job-title">
                                        {conversationGroup.job_listing.title}
                                    </div>
                                )}
                            </div>
                        </div>

                        {conversationGroup.job_listing && (
                            <div className="p-messages__job-actions">
                                <Link
                                    href={route(
                                        "job-listings.show",
                                        conversationGroup.job_listing.id
                                    )}
                                    className="p-messages__job-link"
                                >
                                    案件詳細を見る
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* メモ欄 */}
                    <div className="p-messages__memo-section">
                        <h4 className="p-messages__memo-title">メモ</h4>
                        <textarea
                            value={memo}
                            onChange={handleMemoChange}
                            className="p-messages__memo-textarea"
                            placeholder="メモを入力（自分だけが見ることができます）"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
