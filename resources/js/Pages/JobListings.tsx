import { useState, useRef, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import JobCard, { JobType } from "@/Components/JobCard";
import { route } from "ziggy-js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

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

    // 並び替えオプションの状態
    const [sortOption, setSortOption] = useState<string>("latest");
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    // モバイルメニュー関連の状態（未ログイン時のみ使用）
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    // メニューの表示状態が変更されたときの処理（未ログイン時のみ）
    useEffect(() => {
        if (!auth?.user) {
            if (mobileMenuOpen) {
                setMenuVisible(true);
                setAnimating(true);
                setTimeout(() => setAnimating(false), 300);
            } else if (menuVisible) {
                setAnimating(true);
                setTimeout(() => {
                    setMenuVisible(false);
                    setAnimating(false);
                }, 300);
            }
        }
    }, [mobileMenuOpen, auth?.user]);

    // メニュー外のクリックを検出してメニューを閉じる（未ログイン時のみ）
    useEffect(() => {
        if (!auth?.user) {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    mobileMenuRef.current &&
                    !mobileMenuRef.current.contains(event.target as Node) &&
                    mobileButtonRef.current &&
                    !mobileButtonRef.current.contains(event.target as Node) &&
                    menuVisible &&
                    !animating
                ) {
                    setMobileMenuOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [menuVisible, animating, auth?.user]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

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

    // 並び替えオプションの表示テキストを取得
    const getSortOptionText = (option: string): string => {
        switch (option) {
            case "latest":
                return "新着順";
            case "oldest":
                return "登録が古い順";
            case "views":
                return "閲覧数順";
            case "budget_high":
                return "予算の高い順";
            case "budget_low":
                return "予算の低い順";
            default:
                return "新着順";
        }
    };

    // 並び替えオプション変更時の処理
    const handleSortChange = (option: string) => {
        setSortOption(option);
        setShowSortDropdown(false);

        // 並び替えオプションをURLに反映（ただしリロードはしない）
        const url = new URL(window.location.href);
        url.searchParams.set("sort", option);
        window.history.pushState({}, "", url.toString());

        // クライアントサイドでの並び替え処理は実装済みのfilteredJobsに反映されるため
        // リロードする必要はありません
    };

    // クライアントサイドでの並び替え処理
    const sortedJobs = [...filteredJobs].sort((a, b) => {
        switch (sortOption) {
            case "latest":
                return (
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                );
            case "oldest":
                return (
                    new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime()
                );
            case "views":
                return (b.view_count || 0) - (a.view_count || 0);
            case "budget_high":
                const aMaxBudget = Math.max(
                    a.budget_max || 0,
                    a.budget_min || 0
                );
                const bMaxBudget = Math.max(
                    b.budget_max || 0,
                    b.budget_min || 0
                );
                return bMaxBudget - aMaxBudget;
            case "budget_low":
                // 予算が設定されていない場合（レベニューシェア）は最後に表示
                const aHasBudget =
                    (a.budget_min !== null && a.budget_min !== undefined) ||
                    (a.budget_max !== null && a.budget_max !== undefined);
                const bHasBudget =
                    (b.budget_min !== null && b.budget_min !== undefined) ||
                    (b.budget_max !== null && b.budget_max !== undefined);

                if (!aHasBudget && !bHasBudget) return 0;
                if (!aHasBudget) return 1;
                if (!bHasBudget) return -1;

                const aMinBudget = Math.min(
                    a.budget_min !== null && a.budget_min !== undefined
                        ? a.budget_min
                        : Infinity,
                    a.budget_max !== null && a.budget_max !== undefined
                        ? a.budget_max
                        : Infinity
                );
                const bMinBudget = Math.min(
                    b.budget_min !== null && b.budget_min !== undefined
                        ? b.budget_min
                        : Infinity,
                    b.budget_max !== null && b.budget_max !== undefined
                        ? b.budget_max
                        : Infinity
                );
                return aMinBudget - bMinBudget;
            default:
                return 0;
        }
    });

    // ページコンテンツ（共通部分）
    const pageContent = (
        <>
            <Head title="案件一覧 - Match" />

            <div className="p-job-listings__container">
                <div className="p-job-listings__header">
                    <div className="p-job-listings__header-inner">
                        <h1 className="p-job-listings__title">案件を探す</h1>

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
                                    <line
                                        x1="12"
                                        y1="16"
                                        x2="12.01"
                                        y2="16"
                                    ></line>
                                </svg>
                                <span>
                                    案件詳細の閲覧は
                                    <Link
                                        href="/login"
                                        className="p-job-listings__login-link"
                                    >
                                        ログイン
                                    </Link>
                                    が必要
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
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
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
                                onClick={() =>
                                    handleFilterChange("revenue_share")
                                }
                            >
                                レベニューシェア
                            </div>
                        </div>

                        <div className="p-job-listings__sort">
                            <div className="p-job-listings__sort-dropdown">
                                <button
                                    className="p-job-listings__sort-button"
                                    onClick={() =>
                                        setShowSortDropdown(!showSortDropdown)
                                    }
                                >
                                    <span>{getSortOptionText(sortOption)}</span>
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

                                {showSortDropdown && (
                                    <div className="p-job-listings__sort-options">
                                        <div
                                            className={`p-job-listings__sort-option ${
                                                sortOption === "latest"
                                                    ? "p-job-listings__sort-option--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleSortChange("latest")
                                            }
                                        >
                                            新着順
                                        </div>
                                        <div
                                            className={`p-job-listings__sort-option ${
                                                sortOption === "oldest"
                                                    ? "p-job-listings__sort-option--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleSortChange("oldest")
                                            }
                                        >
                                            登録が古い順
                                        </div>
                                        <div
                                            className={`p-job-listings__sort-option ${
                                                sortOption === "views"
                                                    ? "p-job-listings__sort-option--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleSortChange("views")
                                            }
                                        >
                                            閲覧数順
                                        </div>
                                        <div
                                            className={`p-job-listings__sort-option ${
                                                sortOption === "budget_high"
                                                    ? "p-job-listings__sort-option--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleSortChange("budget_high")
                                            }
                                        >
                                            予算の高い順
                                        </div>
                                        <div
                                            className={`p-job-listings__sort-option ${
                                                sortOption === "budget_low"
                                                    ? "p-job-listings__sort-option--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleSortChange("budget_low")
                                            }
                                        >
                                            予算の低い順
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="p-job-listings__grid">
                        {sortedJobs.length === 0 ? (
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
                                        <line
                                            x1="12"
                                            y1="8"
                                            x2="12"
                                            y2="12"
                                        ></line>
                                        <line
                                            x1="12"
                                            y1="16"
                                            x2="12.01"
                                            y2="16"
                                        ></line>
                                    </svg>
                                </div>
                                <h3 className="p-job-listings__no-results-text">
                                    該当する案件が見つかりませんでした
                                </h3>
                                <p className="p-job-listings__no-results-description">
                                    検索条件を変更するか、別のキーワードで再度検索してみてください。
                                </p>
                            </div>
                        ) : (
                            <>
                                {sortedJobs.map((job) => (
                                    <JobCard
                                        key={job.id}
                                        job={job}
                                        auth={auth}
                                    />
                                ))}
                            </>
                        )}
                    </div>

                    {jobListings.last_page > 1 && (
                        <div className="p-job-listings__pagination">
                            {/* ページネーションのマークアップ */}
                            {jobListings.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || "#"}
                                    className={`p-job-listings__pagination-link ${
                                        link.active
                                            ? "p-job-listings__pagination-link--active"
                                            : ""
                                    } ${
                                        !link.url
                                            ? "p-job-listings__pagination-link--disabled"
                                            : ""
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    // 認証状態によって異なるレイアウトを返す
    if (auth?.user) {
        // ログイン済みの場合はAuthenticatedLayoutを使用
        return (
            <AuthenticatedLayout
                header={<div className="p-job-listings__title">案件一覧</div>}
            >
                {pageContent}
            </AuthenticatedLayout>
        );
    } else {
        // 未ログインの場合はTop.tsxと同様のレイアウトを使用
        return (
            <>
                {/* ヘッダー */}
                <header className="l-header">
                    <div className="l-header__inner">
                        <Link href="/" className="l-header__logo">
                            <span className="l-header__logo-accent">match</span>
                        </Link>

                        <nav className="l-header__nav">
                            <Link
                                href="/job-listings"
                                className="l-header__nav-link l-header__nav-link--active"
                            >
                                案件一覧
                            </Link>
                            <Link
                                href="/post-job"
                                className="l-header__nav-link"
                            >
                                案件を投稿
                            </Link>
                            <Link href="/login" className="l-header__nav-link">
                                ログイン
                            </Link>
                            <Link
                                href="/register"
                                className="l-header__nav-link l-header__nav-link--button"
                            >
                                会員登録
                            </Link>
                        </nav>

                        <button
                            className="l-header__mobile-button"
                            onClick={toggleMobileMenu}
                            aria-label="メニューを開く"
                            ref={mobileButtonRef}
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
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* モバイルメニュー */}
                    {menuVisible && (
                        <div
                            className={`l-header__mobile-menu ${
                                mobileMenuOpen
                                    ? "menu-fade-in"
                                    : "menu-fade-out"
                            }`}
                            ref={mobileMenuRef}
                        >
                            <Link
                                href="/job-listings"
                                className="l-header__mobile-link l-header__mobile-link--active"
                            >
                                案件一覧
                            </Link>
                            <Link
                                href="/post-job"
                                className="l-header__mobile-link"
                            >
                                案件を投稿
                            </Link>
                            <Link
                                href="/login"
                                className="l-header__mobile-link"
                            >
                                ログイン
                            </Link>
                            <Link
                                href="/register"
                                className="l-header__mobile-link"
                            >
                                会員登録
                            </Link>
                        </div>
                    )}
                </header>

                {/* メインコンテンツ */}
                <main>{pageContent}</main>

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
                                <div className="l-footer__social">
                                    <a
                                        href="#"
                                        className="l-footer__social-icon"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="l-footer__heading">
                                    案件を探す
                                </h3>
                                <ul className="l-footer__links">
                                    <li className="l-footer__link-item">
                                        <Link
                                            href="/job-listings?type=one_time"
                                            className="l-footer__link"
                                        >
                                            単発案件
                                        </Link>
                                    </li>
                                    <li className="l-footer__link-item">
                                        <Link
                                            href="/job-listings?type=revenue_share"
                                            className="l-footer__link"
                                        >
                                            レベニューシェア案件
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="l-footer__heading">
                                    アカウント
                                </h3>
                                <ul className="l-footer__links">
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
                                </ul>
                            </div>
                        </div>

                        <div className="l-footer__copyright">
                            &copy; {new Date().getFullYear()} match. All rights
                            reserved.
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
