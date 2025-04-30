import React from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import { route } from "ziggy-js";
import FavoriteButton from "./FavoriteButton";

// ジョブタイプの定義
export interface JobType {
    id: number;
    title: string;
    description: string;
    type: string;
    budget_min?: number | null;
    budget_max?: number | null;
    category?: string | null;
    created_at: string;
    updated_at: string;
    view_count?: number | null;
    user: {
        id: number;
        name: string;
        email: string;
        avatar?: string | null;
    } | null;
}

// プロップス定義
interface JobCardProps {
    job: JobType;
    auth: {
        user: User | null;
    } | null;
    userApplications?: number[];
    applicationStatuses?: { [key: number]: string };
    userFavorites?: number[];
}

export default function JobCard({
    job,
    auth,
    userApplications = [],
    applicationStatuses = {},
    userFavorites = [],
}: JobCardProps) {
    // ユーザーが応募済みかをチェック
    const hasApplied = userApplications.includes(job.id);

    // 応募のステータスを取得
    const applicationStatus = applicationStatuses[job.id] || "pending";

    // 案件タイプの表示名
    const jobTypeNames = {
        one_time: "単発案件",
        revenue_share: "レベニューシェア",
    };

    // ステータスのテキストを取得
    const getStatusText = (status: string) => {
        switch (status) {
            case "accepted":
                return "承認済み";
            default:
                return "応募中";
        }
    };

    // ステータスのクラスを取得
    const getStatusClass = (status: string) => {
        return status === "accepted"
            ? "p-job-listings__card-applied p-job-listings__card-applied--accepted"
            : "p-job-listings__card-applied";
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

    // お気に入り登録済みかをチェック
    const isFavorited = userFavorites.includes(job.id);

    return (
        <div className="p-job-listings__card">
            <div className="p-job-listings__card-header">
                <div className="p-job-listings__card-tags">
                    {hasApplied && (
                        <span className={getStatusClass(applicationStatus)}>
                            {getStatusText(applicationStatus)}
                        </span>
                    )}
                    <span
                        className={`p-job-listings__card-type p-job-listings__card-type--${
                            job.type === "one_time" ? "onetime" : "revenue"
                        }`}
                    >
                        {jobTypeNames[job.type as keyof typeof jobTypeNames]}
                    </span>
                </div>
                <div className="p-job-listings__card-header-right">
                    {(job.budget_min || job.budget_max) && (
                        <span className="p-job-listings__card-budget">
                            {formatBudget(job.budget_min, job.budget_max)}
                        </span>
                    )}
                </div>
            </div>
            <div className="p-job-listings__card-content">
                <h3 className="p-job-listings__card-title">{job.title}</h3>
                <p className="p-job-listings__card-desc">
                    {job.description.length > 100
                        ? `${job.description.substring(0, 100)}...`
                        : job.description}
                </p>
                <div className="p-job-listings__card-meta">
                    <div className="p-job-listings__card-meta-left">
                        <span className="p-job-listings__card-date">
                            {formatDate(job.created_at)}
                        </span>
                        {job.view_count !== null &&
                            job.view_count !== undefined && (
                                <span className="p-job-listings__card-views">
                                    閲覧数{job.view_count}
                                </span>
                            )}
                        {auth?.user &&
                            auth?.user.email_verified_at &&
                            isFavorited && (
                                <div className="p-job-listings__card-favorite-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </div>
                            )}
                    </div>
                    <span className="p-job-listings__card-author">
                        投稿者: {job.user?.name || "不明なユーザー"}
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
                        auth?.user && auth?.user.email_verified_at
                            ? route("job-listings.show", job.id)
                            : route("login", {
                                  redirect: route("job-listings.show", job.id),
                              })
                    }
                    className="p-job-listings__card-link"
                >
                    詳細を見る
                </Link>
            </div>
        </div>
    );
}
