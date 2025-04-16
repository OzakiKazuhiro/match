import { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { PropsWithChildren, ReactNode } from "react";

// 共通レイアウトコンポーネント（ログイン不要）
function Layout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const { auth } = usePage().props as PageProps;
    const user = auth?.user;

    return (
        <div className="min-h-screen bg-f5f7fa">
            {/* ヘッダー */}
            <header className="l-header">
                <div className="l-header__inner">
                    <Link href="/" className="l-header__logo">
                        <span className="l-header__logo-accent">match</span>
                    </Link>

                    <nav className="l-header__nav">
                        <Link
                            href="/job-listings"
                            className="l-header__nav-link"
                        >
                            案件一覧
                        </Link>
                        <Link href="/post-job" className="l-header__nav-link">
                            案件を投稿
                        </Link>
                        {auth?.user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="l-header__nav-link"
                                >
                                    マイページ
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="l-header__nav-link"
                                >
                                    ログアウト
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="l-header__nav-link"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    href="/register"
                                    className="l-header__nav-link l-header__nav-link--button"
                                >
                                    会員登録
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            {header && (
                <div className="p-dashboard__header">
                    <div className="p-dashboard__header-inner">{header}</div>
                </div>
            )}

            <main className="main-content">{children}</main>

            {/* フッター */}
            <footer className="l-footer">
                <div className="l-footer__container">
                    <div className="l-footer__content">
                        <div>
                            <Link href="/" className="l-footer__logo">
                                <span className="l-footer__logo-accent">
                                    match
                                </span>
                            </Link>
                            <p className="l-footer__description">
                                エンジニア向けの案件マッチングサービス。
                                単発案件からレベニューシェア案件まで、
                                シンプルに探せて、すぐに応募できます。
                            </p>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">案件を探す</h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/job-listings?type=onetime"
                                        className="l-footer__link"
                                    >
                                        単発案件
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/job-listings?type=revenue"
                                        className="l-footer__link"
                                    >
                                        レベニューシェア案件
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">アカウント</h3>
                            <ul className="l-footer__links">
                                {auth?.user ? (
                                    <>
                                        <li className="l-footer__link-item">
                                            <Link
                                                href="/dashboard"
                                                className="l-footer__link"
                                            >
                                                マイページ
                                            </Link>
                                        </li>
                                        <li className="l-footer__link-item">
                                            <Link
                                                href="/profile"
                                                className="l-footer__link"
                                            >
                                                プロフィール編集
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="l-footer__link-item">
                                            <Link
                                                href="/login"
                                                className="l-footer__link"
                                            >
                                                ログイン
                                            </Link>
                                        </li>
                                        <li className="l-footer__link-item">
                                            <Link
                                                href="/register"
                                                className="l-footer__link"
                                            >
                                                会員登録
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="l-footer__copyright">
                        &copy; {new Date().getFullYear()} match. All rights
                        reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

interface JobType {
    id: number;
    title: string;
    description: string;
    type: "onetime" | "revenue";
    budget?: string;
    date: string;
    author: string;
    category: string;
}

// サンプルデータ
const sampleJobs: JobType[] = [
    {
        id: 1,
        title: "ReactとTypeScriptを使用したウェブアプリ開発",
        description:
            "既存のウェブアプリケーションをReactとTypeScriptを使用してリニューアルする案件です。レスポンシブ対応必須。アプリケーションは主に管理画面の機能改善が中心です。",
        type: "onetime",
        budget: "¥50,000 〜 ¥100,000",
        date: "3日前",
        author: "田中太郎",
        category: "ウェブ開発",
    },
    {
        id: 2,
        title: "飲食店向けマッチングサービスの開発パートナー募集",
        description:
            "飲食店と農家を繋ぐマッチングサービスの開発パートナーを募集しています。バックエンド開発の経験者歓迎。収益は均等分配します。",
        type: "revenue",
        date: "1週間前",
        author: "佐藤健太",
        category: "サービス開発",
    },
    {
        id: 3,
        title: "Laravelを使用したECサイトの構築",
        description:
            "アパレルブランドのECサイトをLaravelで構築していただきます。決済システムの連携やユーザー管理システムの実装が主な業務内容です。",
        type: "onetime",
        budget: "¥200,000 〜 ¥300,000",
        date: "2日前",
        author: "鈴木一郎",
        category: "ECサイト",
    },
    {
        id: 4,
        title: "教育系アプリのUI/UXデザイン",
        description:
            "子供向け教育アプリのUI/UXデザインを担当していただける方を探しています。直感的で使いやすいインターフェースが求められます。",
        type: "onetime",
        budget: "¥100,000 〜 ¥150,000",
        date: "4日前",
        author: "山田花子",
        category: "デザイン",
    },
    {
        id: 5,
        title: "健康管理アプリの開発パートナー",
        description:
            "日々の健康管理を支援するアプリケーションの開発パートナーを募集しています。iOSとAndroid両方のネイティブアプリ開発経験者を優遇します。",
        type: "revenue",
        date: "2週間前",
        author: "伊藤誠",
        category: "アプリ開発",
    },
    {
        id: 6,
        title: "AWS環境構築と運用サポート",
        description:
            "スタートアップ企業向けにAWS環境の構築とその後の運用サポートをお願いします。セキュリティ対策も含めた包括的な提案が可能な方を希望します。",
        type: "onetime",
        budget: "¥150,000 〜 ¥250,000",
        date: "1週間前",
        author: "高橋洋子",
        category: "インフラ構築",
    },
];

export default function JobListings({ auth }: PageProps) {
    // 状態管理
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<
        "all" | "onetime" | "revenue"
    >("all");
    const [currentPage, setCurrentPage] = useState(1);

    // フィルタリングされた案件リスト
    const filteredJobs = sampleJobs.filter((job) => {
        // 検索クエリのフィルタリング
        const matchesQuery =
            searchQuery === "" ||
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.category.toLowerCase().includes(searchQuery.toLowerCase());

        // タイプのフィルタリング
        const matchesType = activeFilter === "all" || job.type === activeFilter;

        return matchesQuery && matchesType;
    });

    // 案件タイプの表示名
    const jobTypeNames = {
        onetime: "単発案件",
        revenue: "レベニューシェア",
    };

    return (
        <Layout header={<div className="p-job-listings__title">案件一覧</div>}>
            <Head title="案件一覧 - Match" />

            <div className="p-job-listings__header">
                <div className="p-job-listings__header-inner">
                    <h1 className="p-job-listings__title">案件を探す</h1>
                    <p className="p-job-listings__subtitle">
                        単発案件やレベニューシェア案件を探してみましょう。
                        あなたのスキルや希望に合った案件が見つかります。
                    </p>

                    {!auth?.user && (
                        <div className="p-job-listings__login-notice">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span>
                                案件詳細の閲覧には
                                <Link
                                    href="/login"
                                    className="p-job-listings__login-link"
                                >
                                    ログイン
                                </Link>
                                が必要です
                            </span>
                        </div>
                    )}

                    <div className="p-job-listings__search-box">
                        <form
                            className="p-job-listings__search-form"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="text"
                                className="p-job-listings__search-input"
                                placeholder="キーワードで検索（案件名、内容など）"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="p-job-listings__search-button"
                            >
                                検索
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="p-job-listings__container">
                <div className="p-job-listings__filter-bar">
                    <div className="p-job-listings__filter-tabs">
                        <div
                            className={`p-job-listings__filter-tab ${
                                activeFilter === "all"
                                    ? "p-job-listings__filter-tab--active"
                                    : ""
                            }`}
                            onClick={() => setActiveFilter("all")}
                        >
                            すべての案件
                        </div>
                        <div
                            className={`p-job-listings__filter-tab ${
                                activeFilter === "onetime"
                                    ? "p-job-listings__filter-tab--active"
                                    : ""
                            }`}
                            onClick={() => setActiveFilter("onetime")}
                        >
                            単発案件
                        </div>
                        <div
                            className={`p-job-listings__filter-tab ${
                                activeFilter === "revenue"
                                    ? "p-job-listings__filter-tab--active"
                                    : ""
                            }`}
                            onClick={() => setActiveFilter("revenue")}
                        >
                            レベニューシェア
                        </div>
                    </div>

                    <div className="p-job-listings__sort-dropdown">
                        <button className="p-job-listings__sort-button">
                            新着順
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {filteredJobs.length > 0 ? (
                    <div className="p-job-listings__grid">
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="p-job-listings__card">
                                <div className="p-job-listings__card-header">
                                    <span
                                        className={`p-job-listings__card-type p-job-listings__card-type--${job.type}`}
                                    >
                                        {jobTypeNames[job.type]}
                                    </span>
                                    {job.budget && (
                                        <span className="p-job-listings__card-budget">
                                            {job.budget}
                                        </span>
                                    )}
                                </div>
                                <div className="p-job-listings__card-content">
                                    <h3 className="p-job-listings__card-title">
                                        {job.title}
                                    </h3>
                                    <p className="p-job-listings__card-desc">
                                        {job.description}
                                    </p>
                                    <div className="p-job-listings__card-meta">
                                        <span className="p-job-listings__card-date">
                                            {job.date}
                                        </span>
                                        <span className="p-job-listings__card-author">
                                            投稿者: {job.author}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-job-listings__card-footer">
                                    <div className="p-job-listings__card-category">
                                        {job.category}
                                    </div>
                                    <Link
                                        href={
                                            auth?.user
                                                ? `/job/${job.id}`
                                                : `/login?redirect=/job/${job.id}`
                                        }
                                        className="p-job-listings__card-link"
                                    >
                                        詳細を見る
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-job-listings__no-results">
                        <div className="p-job-listings__no-results-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <h3 className="p-job-listings__no-results-text">
                            該当する案件が見つかりませんでした
                        </h3>
                        <p>
                            検索条件を変更するか、別のキーワードで再度検索してみてください。
                        </p>
                        <div className="u-mt-4">
                            <button
                                className="p-job-listings__no-results-button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveFilter("all");
                                }}
                            >
                                すべての案件を表示
                            </button>
                        </div>
                    </div>
                )}

                {/* ページネーション */}
                {filteredJobs.length > 0 && (
                    <div className="p-job-listings__pagination">
                        <button className="p-job-listings__pagination-button p-job-listings__pagination-button--disabled">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button className="p-job-listings__pagination-button p-job-listings__pagination-button--active">
                            1
                        </button>
                        <button className="p-job-listings__pagination-button">
                            2
                        </button>
                        <button className="p-job-listings__pagination-button">
                            3
                        </button>
                        <button className="p-job-listings__pagination-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* 特徴セクション */}
            <div className="p-job-listings__features">
                <h2 className="p-job-listings__features-title">
                    案件探しをもっと簡単に
                </h2>
                <div className="p-job-listings__features-grid">
                    <div className="p-job-listings__feature">
                        <div className="p-job-listings__feature-icon">
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                        </div>
                        <h3 className="p-job-listings__feature-title">
                            簡単応募
                        </h3>
                        <p className="p-job-listings__feature-text">
                            気になった案件にはワンクリックで応募。
                            複雑な手続きは必要ありません。
                        </p>
                    </div>

                    <div className="p-job-listings__feature">
                        <div className="p-job-listings__feature-icon">
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
                                <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3 className="p-job-listings__feature-title">
                            最新の案件情報
                        </h3>
                        <p className="p-job-listings__feature-text">
                            常に最新の案件情報を掲載。
                            新着通知を設定して、お気に入りの案件を見逃さないようにしましょう。
                        </p>
                    </div>

                    <div className="p-job-listings__feature">
                        <div className="p-job-listings__feature-icon">
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
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </div>
                        <h3 className="p-job-listings__feature-title">
                            案件投稿も簡単
                        </h3>
                        <p className="p-job-listings__feature-text">
                            あなたの案件を投稿して、優秀なエンジニアとマッチング。
                            シンプルな入力フォームで、すぐに案件を公開できます。
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
