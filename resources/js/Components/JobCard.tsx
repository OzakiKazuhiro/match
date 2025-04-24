import React from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import { route } from "ziggy-js";

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
}

export default function JobCard({ job, auth }: JobCardProps) {
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

    return (
        <div className="p-job-listings__card">
            <div className="p-job-listings__card-header">
                <span
                    className={`p-job-listings__card-type p-job-listings__card-type--${
                        job.type === "one_time" ? "onetime" : "revenue"
                    }`}
                >
                    {jobTypeNames[job.type as keyof typeof jobTypeNames]}
                </span>
                {(job.budget_min || job.budget_max) && (
                    <span className="p-job-listings__card-budget">
                        {formatBudget(job.budget_min, job.budget_max)}
                    </span>
                )}
            </div>
            <div className="p-job-listings__card-content">
                <h3 className="p-job-listings__card-title">{job.title}</h3>
                <p className="p-job-listings__card-desc">{job.description}</p>
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
