import { useState } from "react";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import JobCard, { JobType } from "@/Components/JobCard";
import { route } from "ziggy-js";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";

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

    return (
        <AppLayout header="案件一覧">
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

                        <div className="p-job-listings__sort-dropdown">
                            <button
                                className="p-job-listings__sort-button"
                                onClick={() =>
                                    setShowSortDropdown(!showSortDropdown)
                                }
                            >
                                {getSortOptionText(sortOption)}
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
                                    <button
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
                                    </button>
                                    <button
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
                                    </button>
                                    <button
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
                                    </button>
                                    <button
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
                                    </button>
                                    <button
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
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {filteredJobs.length > 0 ? (
                        <div className="p-job-listings__grid">
                            {sortedJobs.map((job) => (
                                <JobCard key={job.id} job={job} auth={auth} />
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
                                    jobListings.links[
                                        jobListings.links.length - 1
                                    ].url || ""
                                }
                                className={`p-job-listings__pagination-button ${
                                    !jobListings.links[
                                        jobListings.links.length - 1
                                    ].url
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
            </div>
        </AppLayout>
    );
}
