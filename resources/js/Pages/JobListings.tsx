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
    type: string;
    budget_min?: number | null;
    budget_max?: number | null;
    category?: string | null;
    created_at: string;
    updated_at: string;
    user: {
        id: number;
        name: string;
        email: string;
        avatar?: string;
    };
}

export default function JobListings({
    auth,
    jobListings,
    filters,
}: PageProps<{
    jobListings: {
        data: JobType[];
        current_page: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        from: number;
        to: number;
        total: number;
    };
    filters: {
        type?: string;
    };
}>) {
    // 状態管理
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<
        "all" | "one_time" | "revenue_share"
    >(filters.type ? (filters.type as any) : "all");

    // フィルタリングされた案件リスト
    const filteredJobs = jobListings.data.filter((job) => {
        // 検索クエリのフィルタリング
        const matchesQuery =
            searchQuery === "" ||
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (job.category &&
                job.category.toLowerCase().includes(searchQuery.toLowerCase()));

        // タイプフィルタリング（SPA対応）
        const matchesType = activeFilter === "all" || job.type === activeFilter;

        return matchesQuery && matchesType;
    });

    // 案件タイプの表示名
    const jobTypeNames = {
        one_time: "単発案件",
        revenue_share: "レベニューシェア",
    };

    // 予算表示のフォーマット
    const formatBudget = (
        budgetMin?: number | null,
        budgetMax?: number | null
    ) => {
        if (!budgetMin && !budgetMax) {
            return null;
        }

        if (budgetMin && budgetMax) {
            return `¥${budgetMin.toLocaleString()} 〜 ¥${budgetMax.toLocaleString()}`;
        } else if (budgetMin) {
            return `¥${budgetMin.toLocaleString()} 〜`;
        } else if (budgetMax) {
            return `〜 ¥${budgetMax.toLocaleString()}`;
        }
    };

    // 日付のフォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            return "今日";
        } else if (diffDays <= 7) {
            return `${diffDays}日前`;
        } else if (diffDays <= 30) {
            return `${Math.floor(diffDays / 7)}週間前`;
        } else {
            return date.toLocaleDateString("ja-JP");
        }
    };

    // タイプフィルターの変更（SPA対応）
    const handleFilterChange = (type: "all" | "one_time" | "revenue_share") => {
        setActiveFilter(type);

        // URL更新（SPA対応：history APIを使用）
        const url =
            type === "all"
                ? route("job-listings.index")
                : route("job-listings.index", { type });

        window.history.pushState({}, "", url);
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
                            onClick={() => handleFilterChange("all")}
                        >
                            すべての案件
                        </div>
                        <div
                            className={`p-job-listings__filter-tab ${
                                activeFilter === "one_time"
                                    ? "p-job-listings__filter-tab--active"
                                    : ""
                            }`}
                            onClick={() => handleFilterChange("one_time")}
                        >
                            単発案件
                        </div>
                        <div
                            className={`p-job-listings__filter-tab ${
                                activeFilter === "revenue_share"
                                    ? "p-job-listings__filter-tab--active"
                                    : ""
                            }`}
                            onClick={() => handleFilterChange("revenue_share")}
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
                                        className={`p-job-listings__card-type p-job-listings__card-type--${
                                            job.type === "one_time"
                                                ? "onetime"
                                                : "revenue"
                                        }`}
                                    >
                                        {
                                            jobTypeNames[
                                                job.type as keyof typeof jobTypeNames
                                            ]
                                        }
                                    </span>
                                    {(job.budget_min || job.budget_max) && (
                                        <span className="p-job-listings__card-budget">
                                            {formatBudget(
                                                job.budget_min,
                                                job.budget_max
                                            )}
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
                                            {formatDate(job.created_at)}
                                        </span>
                                        <span className="p-job-listings__card-author">
                                            投稿者: {job.user.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-job-listings__card-footer">
                                    {job.category && (
                                        <div className="p-job-listings__card-category">
                                            {job.category}
                                        </div>
                                    )}
                                    <Link
                                        href={
                                            auth?.user
                                                ? route(
                                                      "job-listings.show",
                                                      job.id
                                                  )
                                                : route("login", {
                                                      redirect: route(
                                                          "job-listings.show",
                                                          job.id
                                                      ),
                                                  })
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
                                    // URLも更新
                                    const url = route("job-listings.index");
                                    window.history.pushState({}, "", url);
                                }}
                            >
                                すべての案件を表示
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* 検索結果のサマリー表示 */}
            {filteredJobs.length > 0 && (
                <div className="p-job-listings__container">
                    <div className="p-job-listings__search-result">
                        <p className="p-job-listings__search-result-text">
                            {searchQuery
                                ? `「${searchQuery}」の検索結果: ${filteredJobs.length}件`
                                : `全${jobListings.total}件中 ${jobListings.from}〜${jobListings.to}件を表示`}
                        </p>
                    </div>
                </div>
            )}

            {/* ページネーション */}
            {jobListings.last_page > 1 && (
                <div className="p-job-listings__container">
                    <div className="p-job-listings__pagination">
                        {/* 「前へ」ボタン */}
                        <Link
                            href={jobListings.links[0].url || ""}
                            className={`p-job-listings__pagination-button ${
                                !jobListings.links[0].url
                                    ? "p-job-listings__pagination-button--disabled"
                                    : ""
                            }`}
                            preserveScroll
                        >
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
                        </Link>

                        {/* ページ番号ボタン - 最初と最後のリンク（前後のナビゲーション）を除外 */}
                        {jobListings.links.slice(1, -1).map((link, i) => (
                            <Link
                                key={i}
                                href={link.url || ""}
                                className={`p-job-listings__pagination-button ${
                                    link.active
                                        ? "p-job-listings__pagination-button--active"
                                        : ""
                                }`}
                                preserveScroll
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* 「次へ」ボタン */}
                        <Link
                            href={
                                jobListings.links[jobListings.links.length - 1]
                                    .url || ""
                            }
                            className={`p-job-listings__pagination-button ${
                                !jobListings.links[jobListings.links.length - 1]
                                    .url
                                    ? "p-job-listings__pagination-button--disabled"
                                    : ""
                            }`}
                            preserveScroll
                        >
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
                        </Link>
                    </div>
                </div>
            )}

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
