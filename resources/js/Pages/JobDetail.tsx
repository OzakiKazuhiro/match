import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

interface Message {
    id: number;
    user: {
        name: string;
        avatar: string;
    };
    content: string;
    date: string;
}

// サンプルの案件データ
const jobData = {
    id: 1,
    title: "ReactとTypeScriptを使用したウェブアプリ開発",
    description:
        "既存のウェブアプリケーションをReactとTypeScriptを使用してリニューアルする案件です。レスポンシブ対応必須。アプリケーションは主に管理画面の機能改善が中心です。\n\n主な作業内容：\n・既存の管理画面のUI改善\n・新機能の追加（ダッシュボード機能、レポート機能）\n・モバイル対応のレスポンシブデザイン実装\n\n納期は相談可能ですが、おおよそ2ヶ月程度での完了を希望しています。定期的な進捗報告をお願いします。",
    type: "onetime",
    budget: "¥50,000 〜 ¥100,000",
    category: "ウェブ開発",
    date: "2023年5月15日",
    author: {
        id: 123,
        name: "田中太郎",
        avatar: "/images/avatars/avatar-1.jpg",
        rating: 4.8,
        jobsPosted: 12,
    },
    status: "open", // 'open', 'in_progress', 'closed'
    requiredSkills: [
        "React",
        "TypeScript",
        "レスポンシブデザイン",
        "UI/UX設計",
    ],
    preferredSkills: ["Next.js", "Tailwind CSS", "Storybook"],
    location: "リモート",
    applicationCount: 5,
    viewCount: 128,
};

// サンプルのメッセージデータ
const messagesData: Message[] = [
    {
        id: 1,
        user: {
            name: "佐藤健太",
            avatar: "/images/avatars/avatar-2.jpg",
        },
        content:
            "この案件に興味があります。管理画面のUI改善について、具体的にどのような課題があるか教えていただけますか？",
        date: "2023年5月16日 10:23",
    },
    {
        id: 2,
        user: {
            name: "田中太郎",
            avatar: "/images/avatars/avatar-1.jpg",
        },
        content:
            "ご質問ありがとうございます。現在の管理画面は機能は充実していますが、UIが直感的でなく、操作が複雑になっています。特にデータ入力フォームの使いやすさと、データ閲覧時の視認性を改善したいと考えています。",
        date: "2023年5月16日 14:45",
    },
    {
        id: 3,
        user: {
            name: "山田花子",
            avatar: "/images/avatars/avatar-3.jpg",
        },
        content:
            "レスポンシブ対応について質問です。現在のサイトはどの程度モバイル対応されていますか？また、対応が必要なのはどのサイズの画面までですか？",
        date: "2023年5月17日 09:12",
    },
    {
        id: 4,
        user: {
            name: "田中太郎",
            avatar: "/images/avatars/avatar-1.jpg",
        },
        content:
            "現在のサイトはPC向けのみで、モバイル対応はされていません。スマートフォン（最小幅320px）からデスクトップまでの対応をお願いしたいです。タブレットでの使用も想定しています。",
        date: "2023年5月17日 11:30",
    },
];

export default function JobDetail({
    auth,
    job = jobData,
    messages = messagesData,
}: PageProps & {
    job?: typeof jobData;
    messages?: Message[];
}) {
    const [messageInput, setMessageInput] = useState("");

    const handleSubmitMessage = (e: React.FormEvent) => {
        e.preventDefault();
        // メッセージ送信処理（実際はAPIリクエストなど）
        setMessageInput("");
        alert("メッセージが送信されました");
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-job-detail__title">案件詳細</div>}
        >
            <Head title={`${job.title} - Match`} />

            <div className="p-job-detail">
                <div className="p-job-detail__container">
                    <div className="p-job-detail__breadcrumb">
                        <Link
                            href="/job-listings"
                            className="p-job-detail__breadcrumb-link"
                        >
                            案件一覧
                        </Link>
                        <span className="p-job-detail__breadcrumb-separator">
                            &gt;
                        </span>
                        <span className="p-job-detail__breadcrumb-current">
                            {job.title}
                        </span>
                    </div>

                    <div className="p-job-detail__content">
                        <div className="p-job-detail__main">
                            {/* 案件情報 */}
                            <div className="p-job-detail__card">
                                <div className="p-job-detail__header">
                                    <div className="p-job-detail__meta">
                                        <span
                                            className={`p-job-detail__type p-job-detail__type--${job.type}`}
                                        >
                                            {job.type === "onetime"
                                                ? "単発案件"
                                                : "レベニューシェア"}
                                        </span>
                                        <span className="p-job-detail__category">
                                            {job.category}
                                        </span>
                                        <span className="p-job-detail__date">
                                            投稿日: {job.date}
                                        </span>
                                    </div>
                                    <h1 className="p-job-detail__title">
                                        {job.title}
                                    </h1>
                                    {job.budget && (
                                        <div className="p-job-detail__budget">
                                            予算: {job.budget}
                                        </div>
                                    )}
                                </div>

                                <div className="p-job-detail__body">
                                    <div className="p-job-detail__description">
                                        {job.description
                                            .split("\n")
                                            .map((paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="p-job-detail__paragraph"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                    </div>

                                    <div className="p-job-detail__skills">
                                        <h3 className="p-job-detail__section-title">
                                            必要なスキル
                                        </h3>
                                        <div className="p-job-detail__skill-tags">
                                            {job.requiredSkills.map(
                                                (skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="p-job-detail__skill-tag"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {job.preferredSkills &&
                                        job.preferredSkills.length > 0 && (
                                            <div className="p-job-detail__skills">
                                                <h3 className="p-job-detail__section-title">
                                                    あれば歓迎するスキル
                                                </h3>
                                                <div className="p-job-detail__skill-tags">
                                                    {job.preferredSkills.map(
                                                        (skill, index) => (
                                                            <span
                                                                key={index}
                                                                className="p-job-detail__skill-tag p-job-detail__skill-tag--preferred"
                                                            >
                                                                {skill}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    <div className="p-job-detail__info-grid">
                                        <div className="p-job-detail__info-item">
                                            <div className="p-job-detail__info-label">
                                                作業場所
                                            </div>
                                            <div className="p-job-detail__info-value">
                                                {job.location}
                                            </div>
                                        </div>
                                        <div className="p-job-detail__info-item">
                                            <div className="p-job-detail__info-label">
                                                応募者数
                                            </div>
                                            <div className="p-job-detail__info-value">
                                                {job.applicationCount}人
                                            </div>
                                        </div>
                                        <div className="p-job-detail__info-item">
                                            <div className="p-job-detail__info-label">
                                                閲覧数
                                            </div>
                                            <div className="p-job-detail__info-value">
                                                {job.viewCount}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-job-detail__actions">
                                    <button className="p-job-detail__apply-button">
                                        この案件に応募する
                                    </button>
                                    <button className="p-job-detail__message-button">
                                        投稿者にメッセージを送る
                                    </button>
                                </div>
                            </div>

                            {/* パブリックメッセージ */}
                            <div className="p-job-detail__card p-job-detail__card--messages">
                                <h2 className="p-job-detail__section-title p-job-detail__messages-title">
                                    質問と回答
                                </h2>
                                <div className="p-job-detail__messages">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className="p-job-detail__message"
                                        >
                                            <div className="p-job-detail__message-header">
                                                <div className="p-job-detail__message-user">
                                                    <div className="p-job-detail__message-avatar">
                                                        {/* アバター画像が存在しない場合のフォールバック */}
                                                        <div className="p-job-detail__message-avatar-placeholder">
                                                            {message.user.name.charAt(
                                                                0
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="p-job-detail__message-name">
                                                        {message.user.name}
                                                    </div>
                                                </div>
                                                <div className="p-job-detail__message-date">
                                                    {message.date}
                                                </div>
                                            </div>
                                            <div className="p-job-detail__message-content">
                                                {message.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-job-detail__message-form-wrapper">
                                    <h3 className="p-job-detail__message-form-title">
                                        質問を投稿する
                                    </h3>
                                    <form
                                        className="p-job-detail__message-form"
                                        onSubmit={handleSubmitMessage}
                                    >
                                        <textarea
                                            className="p-job-detail__message-input"
                                            placeholder="案件に関する質問を入力してください"
                                            value={messageInput}
                                            onChange={(e) =>
                                                setMessageInput(e.target.value)
                                            }
                                            required
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="p-job-detail__message-submit"
                                        >
                                            質問を送信
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="p-job-detail__sidebar">
                            {/* 投稿者情報 */}
                            <div className="p-job-detail__card p-job-detail__card--author">
                                <h2 className="p-job-detail__section-title">
                                    投稿者情報
                                </h2>
                                <div className="p-job-detail__author">
                                    <div className="p-job-detail__author-header">
                                        <div className="p-job-detail__author-avatar">
                                            {/* アバター画像が存在しない場合のフォールバック */}
                                            <div className="p-job-detail__author-avatar-placeholder">
                                                {job.author.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="p-job-detail__author-info">
                                            <div className="p-job-detail__author-name">
                                                {job.author.name}
                                            </div>
                                            <div className="p-job-detail__author-rating">
                                                <span className="p-job-detail__author-stars">
                                                    {"★".repeat(
                                                        Math.floor(
                                                            job.author.rating
                                                        )
                                                    )}
                                                    {job.author.rating % 1 !==
                                                        0 && "☆"}
                                                    {"☆".repeat(
                                                        5 -
                                                            Math.ceil(
                                                                job.author
                                                                    .rating
                                                            )
                                                    )}
                                                </span>
                                                <span className="p-job-detail__author-rating-value">
                                                    {job.author.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-job-detail__author-stats">
                                        <div className="p-job-detail__author-stat">
                                            <div className="p-job-detail__author-stat-label">
                                                投稿した案件
                                            </div>
                                            <div className="p-job-detail__author-stat-value">
                                                {job.author.jobsPosted}件
                                            </div>
                                        </div>
                                        <div className="p-job-detail__author-stat">
                                            <div className="p-job-detail__author-stat-label">
                                                会員登録日
                                            </div>
                                            <div className="p-job-detail__author-stat-value">
                                                2022年10月
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/profile/${job.author.id}`}
                                        className="p-job-detail__author-profile-link"
                                    >
                                        プロフィールを見る
                                    </Link>
                                </div>
                            </div>

                            {/* シェアボタン */}
                            <div className="p-job-detail__card p-job-detail__card--share">
                                <h2 className="p-job-detail__section-title">
                                    この案件をシェアする
                                </h2>
                                <div className="p-job-detail__share-buttons">
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                            job.title
                                        )}&url=${encodeURIComponent(
                                            window.location.href
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-job-detail__share-button p-job-detail__share-button--twitter"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                        </svg>
                                        Twitter
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                            window.location.href
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-job-detail__share-button p-job-detail__share-button--facebook"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        Facebook
                                    </a>
                                </div>
                            </div>

                            {/* 関連案件 */}
                            <div className="p-job-detail__card p-job-detail__card--related">
                                <h2 className="p-job-detail__section-title">
                                    関連する案件
                                </h2>
                                <div className="p-job-detail__related-jobs">
                                    <Link
                                        href="/job/2"
                                        className="p-job-detail__related-job"
                                    >
                                        <div className="p-job-detail__related-job-title">
                                            Webサイトのレスポンシブ対応
                                        </div>
                                        <div className="p-job-detail__related-job-meta">
                                            <span className="p-job-detail__related-job-type">
                                                単発案件
                                            </span>
                                            <span className="p-job-detail__related-job-budget">
                                                ¥30,000 〜 ¥50,000
                                            </span>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/job/3"
                                        className="p-job-detail__related-job"
                                    >
                                        <div className="p-job-detail__related-job-title">
                                            ECサイトの機能追加
                                        </div>
                                        <div className="p-job-detail__related-job-meta">
                                            <span className="p-job-detail__related-job-type">
                                                単発案件
                                            </span>
                                            <span className="p-job-detail__related-job-budget">
                                                ¥100,000 〜 ¥150,000
                                            </span>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/job/4"
                                        className="p-job-detail__related-job"
                                    >
                                        <div className="p-job-detail__related-job-title">
                                            フィットネスアプリ開発パートナー
                                        </div>
                                        <div className="p-job-detail__related-job-meta">
                                            <span className="p-job-detail__related-job-type">
                                                レベニューシェア
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
