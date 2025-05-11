import { useState, useEffect, useRef } from "react";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
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
    // メモの保存中状態を管理するState
    const [savingMemo, setSavingMemo] = useState<boolean>(false);
    // モーダル表示状態
    const [showMemoModal, setShowMemoModal] = useState<boolean>(false);
    // 編集中のメモ（下書き）
    const [draftMemo, setDraftMemo] = useState<string>("");
    // 自己紹介モーダル表示状態
    const [showBioModal, setShowBioModal] = useState<boolean>(false);
    // 自己紹介文を取得中かどうか
    const [loadingBio, setLoadingBio] = useState<boolean>(false);
    // 自己紹介文
    const [userBio, setUserBio] = useState<string>("");

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
        const newContent = e.target.value;
        setDraftMemo(newContent);
    };

    // メモを保存するAPI呼び出し関数
    const handleSaveMemo = async () => {
        setSavingMemo(true);
        try {
            // CSRFトークンの取得
            const csrfToken =
                document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content") || "";

            // メモ保存APIを呼び出し
            await axios.post(
                route("conversation.memo.store", conversationGroup.id),
                { content: draftMemo },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );

            // 保存成功したら表示用メモを更新
            setMemo(draftMemo);
            // モーダルを閉じる
            setShowMemoModal(false);
        } catch (error) {
            console.error("メモ保存エラー:", error);
            alert("メモの保存に失敗しました。");
        } finally {
            setSavingMemo(false);
        }
    };

    // モーダルを開くときに現在のメモを下書きにセット
    useEffect(() => {
        if (showMemoModal) {
            setDraftMemo(memo);
        }
    }, [showMemoModal, memo]);

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

        // メモの取得処理を追加
        const fetchMemo = async () => {
            try {
                const response = await axios.get(
                    route("conversation.memo.show", conversationGroup.id)
                );
                if (response.data.memo) {
                    setMemo(response.data.memo.content || "");
                }
            } catch (error) {
                console.error("メモ取得エラー:", error);
            }
        };

        fetchMemo();

        // 一定間隔で既読APIを呼び出し（ポーリング）
        const interval = setInterval(() => {
            markMessagesAsRead();
        }, 30000); // 30秒ごと

        // クリーンアップ関数
        return () => {
            clearInterval(interval);
        };
    }, [conversationGroup.id]);

    // 自己紹介文を取得する関数
    const fetchUserBio = async () => {
        if (!otherParticipant) return;

        setLoadingBio(true);
        try {
            // CSRFトークンの取得
            const csrfToken =
                document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute("content") || "";

            // ユーザー情報取得APIを呼び出し
            const response = await axios.get(
                route("user.profile", otherParticipant.id),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );

            if (response.data && response.data.user) {
                setUserBio(
                    response.data.user.bio || "自己紹介文はありません。"
                );
            } else {
                setUserBio("自己紹介文はありません。");
            }
        } catch (error) {
            console.error("プロフィール取得エラー:", error);
            setUserBio("自己紹介文の取得に失敗しました。");
        } finally {
            setLoadingBio(false);
        }
    };

    // 自己紹介モーダルを開く
    const handleOpenBioModal = () => {
        setShowBioModal(true);
        fetchUserBio();
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="p-messages__header">
                    <div className="p-messages__title">
                        {otherParticipant?.avatar ? (
                            <img
                                src={
                                    otherParticipant.avatar.startsWith("/")
                                        ? otherParticipant.avatar
                                        : `/${otherParticipant.avatar}`
                                }
                                alt={otherParticipant.name}
                                className="p-messages__header-avatar"
                            />
                        ) : (
                            <div className="p-messages__header-avatar-placeholder">
                                {otherParticipant?.name
                                    ?.charAt(0)
                                    .toUpperCase() || "?"}
                            </div>
                        )}
                        <span className="p-messages__header-text">
                            <span className="p-messages__header-name">
                                {otherParticipant?.name &&
                                otherParticipant.name.length > 10
                                    ? `${otherParticipant.name.substring(
                                          0,
                                          10
                                      )}...`
                                    : otherParticipant?.name ||
                                      "不明なユーザー"}
                            </span>
                            {conversationGroup.job_listing && (
                                <span className="p-messages__header-job">
                                    案件：【
                                    {conversationGroup.job_listing.title}】
                                </span>
                            )}
                        </span>
                    </div>
                    <a
                        href={route("messages.index")}
                        className="p-messages__back-button"
                    >
                        戻る
                    </a>
                </div>
            }
            showFooter={false}
        >
            <Head
                title={`${otherParticipant?.name || "不明なユーザー"} - ${
                    conversationGroup.job_listing
                        ? conversationGroup.job_listing.title
                        : "会話"
                }`}
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
                            <div className="p-messages__input-row">
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
                                    <button
                                        type="submit"
                                        className="p-messages__send-button"
                                        disabled={
                                            sending ||
                                            charCount > MAX_CHARS ||
                                            charCount === 0
                                        }
                                    >
                                        <span className="p-messages__send-button-text">
                                            送信
                                        </span>
                                    </button>
                                </div>
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
                                    {otherParticipant?.name &&
                                    otherParticipant.name.length > 10
                                        ? `${otherParticipant.name.substring(
                                              0,
                                              10
                                          )}...`
                                        : otherParticipant?.name ||
                                          "不明なユーザー"}
                                </h3>
                                {conversationGroup.job_listing && (
                                    <div className="p-messages__job-title">
                                        案件：【
                                        {conversationGroup.job_listing.title}】
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-messages__user-actions">
                            <button
                                onClick={handleOpenBioModal}
                                className="p-messages__bio-button"
                            >
                                自己紹介文を見る
                            </button>
                        </div>

                        {conversationGroup.job_listing && (
                            <div className="p-messages__job-actions">
                                <a
                                    href={route(
                                        "job-listings.show",
                                        conversationGroup.job_listing.id
                                    )}
                                    className="p-messages__job-link"
                                >
                                    案件詳細を見る
                                </a>
                            </div>
                        )}
                    </div>

                    {/* メモ欄 - 更新部分 */}
                    <div className="p-messages__memo-section">
                        <div className="p-messages__memo-header">
                            <h4 className="p-messages__memo-title">メモ</h4>
                            <span
                                className={`p-messages__memo-char-counter ${
                                    memo.length > MAX_CHARS * 0.9
                                        ? "p-messages__memo-char-counter--near-limit"
                                        : ""
                                }`}
                            >
                                {memo.length}/{MAX_CHARS}
                            </span>
                        </div>

                        <div className="p-messages__memo-content">
                            {memo ? (
                                <>
                                    <p className="p-messages__memo-text">
                                        {memo.length > 100
                                            ? `${memo.substring(0, 100)}...`
                                            : memo}
                                    </p>
                                    <button
                                        className="p-messages__memo-edit-button"
                                        onClick={() => setShowMemoModal(true)}
                                    >
                                        編集
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="p-messages__memo-add-button"
                                    onClick={() => setShowMemoModal(true)}
                                >
                                    メモを追加
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* メモ編集モーダル */}
            {showMemoModal && (
                <div
                    className="p-messages__modal-overlay"
                    onClick={() => setShowMemoModal(false)}
                >
                    <div
                        className="p-messages__modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-messages__modal-header">
                            <h3>メモを編集</h3>
                            <button
                                className="p-messages__modal-close"
                                onClick={() => setShowMemoModal(false)}
                                type="button"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-messages__modal-body">
                            <textarea
                                value={draftMemo}
                                onChange={handleMemoChange}
                                className="p-messages__modal-textarea"
                                placeholder="メモを入力（このメモはあなただけが見ることができます）"
                                maxLength={MAX_CHARS}
                            />
                            <div className="p-messages__modal-char-counter">
                                {draftMemo.length}/{MAX_CHARS}
                            </div>
                        </div>

                        <div className="p-messages__modal-footer">
                            <button
                                className="p-messages__modal-cancel"
                                onClick={() => setShowMemoModal(false)}
                                type="button"
                            >
                                キャンセル
                            </button>
                            <button
                                className="p-messages__modal-save"
                                onClick={handleSaveMemo}
                                disabled={draftMemo === memo || savingMemo}
                                type="button"
                            >
                                {savingMemo ? "保存中..." : "保存"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 自己紹介モーダル */}
            {showBioModal && (
                <div
                    className="p-messages__modal-overlay"
                    onClick={() => setShowBioModal(false)}
                >
                    <div
                        className="p-messages__modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-messages__modal-header">
                            <h3>
                                {otherParticipant?.name || "ユーザー"}の自己紹介
                            </h3>
                            <button
                                className="p-messages__modal-close"
                                onClick={() => setShowBioModal(false)}
                                type="button"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-messages__modal-body">
                            {loadingBio ? (
                                <div className="p-messages__loading">
                                    読み込み中...
                                </div>
                            ) : (
                                <div className="p-messages__bio-content">
                                    {userBio
                                        .split("\n")
                                        .map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                </div>
                            )}
                        </div>

                        <div className="p-messages__modal-footer">
                            <button
                                className="p-messages__modal-close-btn"
                                onClick={() => setShowBioModal(false)}
                                type="button"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
