import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TabNavigation from "@/Components/TabNavigation";

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface JobListing {
    id: number;
    title: string;
    type: "one_time" | "revenue_share";
    budget_min: number | null;
    budget_max: number | null;
    is_closed: boolean;
    user: User;
}

interface Application {
    id: number;
    job_listing_id: number;
    user_id: number;
    message: string;
    status: "pending" | "accepted" | "declined";
    created_at: string;
    updated_at: string;
    jobListing: JobListing;
    [key: string]: any;
}

export default function Applications({
    applications,
}: PageProps<{
    applications: Application[];
}>) {
    // 日付のフォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    console.log("Applications:", applications);
    applications.forEach((app, index) => {
        console.log(`Application ${index} full:`, app);
        console.log(`Application ${index} job_listing_id:`, app.job_listing_id);
        console.log(`Application ${index} jobListing:`, app.jobListing);
        console.log(
            `Application ${index} jobListing?.title:`,
            app.jobListing?.title
        );
    });

    // ステータスの表示
    const getStatusText = (status: string) => {
        switch (status) {
            case "pending":
                return "応募中（確認待ち）";
            case "accepted":
                return "案件の投稿者により、採用が確定されました";
            case "declined":
                return "案件の投稿者により、採用が見送られました";
            default:
                return "";
        }
    };

    // スマホ表示用の短いステータステキスト
    const getShortStatusText = (status: string) => {
        switch (status) {
            case "pending":
                return "応募中";
            case "accepted":
                return "採用確定";
            case "declined":
                return "不採用";
            default:
                return "";
        }
    };

    // ステータスのクラス
    const getStatusClass = (status: string) => {
        switch (status) {
            case "pending":
                return "p-applications__status--pending";
            case "accepted":
                return "p-applications__status--accepted";
            case "declined":
                return "p-applications__status--declined";
            default:
                return "";
        }
    };

    // 予算表示のフォーマット
    const formatBudget = (jobListing: JobListing) => {
        if (
            jobListing.type === "revenue_share" ||
            (!jobListing.budget_min && !jobListing.budget_max)
        ) {
            return null;
        }

        if (jobListing.budget_min && jobListing.budget_max) {
            return `¥${jobListing.budget_min.toLocaleString()} 〜 ¥${jobListing.budget_max.toLocaleString()}`;
        } else if (jobListing.budget_min) {
            return `¥${jobListing.budget_min.toLocaleString()} 〜`;
        } else if (jobListing.budget_max) {
            return `〜 ¥${jobListing.budget_max.toLocaleString()}`;
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="p-applications__title">応募した案件一覧</div>
            }
        >
            <Head title="応募一覧" />

            <div className="p-applications">
                <div className="p-applications__container">
                    <TabNavigation activeTab="applications.index" />

                    <div className="p-applications__content">
                        <div className="p-applications__card">
                            <h1 className="p-applications__card-title">
                                応募した案件一覧
                            </h1>

                            {applications.length > 0 ? (
                                <div className="p-applications__list">
                                    {applications.map((application) => (
                                        <div
                                            key={application.id}
                                            className="p-applications__item"
                                        >
                                            <div className="p-applications__item-header">
                                                <div className="p-applications__job-info">
                                                    <a
                                                        href={route(
                                                            "job-listings.show",
                                                            application.job_listing_id
                                                        )}
                                                        className="p-applications__job-title"
                                                    >
                                                        {application.job_listing
                                                            ?.title ||
                                                            application
                                                                .jobListing
                                                                ?.title ||
                                                            "案件名不明"}
                                                    </a>
                                                    <div className="p-applications__job-meta">
                                                        <span
                                                            className={`p-applications__job-type p-applications__job-type--${
                                                                (application
                                                                    .job_listing
                                                                    ?.type ||
                                                                    application
                                                                        .jobListing
                                                                        ?.type) ===
                                                                "one_time"
                                                                    ? "onetime"
                                                                    : "revenue"
                                                            }`}
                                                        >
                                                            {(application
                                                                .job_listing
                                                                ?.type ||
                                                                application
                                                                    .jobListing
                                                                    ?.type) ===
                                                            "one_time"
                                                                ? "単発案件"
                                                                : "レベニューシェア"}
                                                        </span>
                                                        {(application.job_listing ||
                                                            application.jobListing) &&
                                                            formatBudget(
                                                                application.job_listing ||
                                                                    application.jobListing
                                                            ) && (
                                                                <span className="p-applications__job-budget">
                                                                    予算:{" "}
                                                                    {formatBudget(
                                                                        application.job_listing ||
                                                                            application.jobListing
                                                                    )}
                                                                </span>
                                                            )}
                                                        {(application
                                                            .job_listing
                                                            ?.user ||
                                                            application
                                                                .jobListing
                                                                ?.user) && (
                                                            <span className="p-applications__job-poster">
                                                                投稿者:{" "}
                                                                {
                                                                    (
                                                                        application
                                                                            .job_listing
                                                                            ?.user ||
                                                                        application
                                                                            .jobListing
                                                                            ?.user
                                                                    ).name
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className={`p-applications__status ${getStatusClass(
                                                        application.status
                                                    )}`}
                                                >
                                                    <span className="p-applications__status-text-pc">
                                                        {getStatusText(
                                                            application.status
                                                        )}
                                                    </span>
                                                    <span className="p-applications__status-text-sp">
                                                        {getShortStatusText(
                                                            application.status
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-applications__item-body">
                                                <div className="p-applications__meta">
                                                    <span className="p-applications__applied-date">
                                                        応募日:{" "}
                                                        {formatDate(
                                                            application.created_at
                                                        )}
                                                    </span>
                                                    {(application.job_listing
                                                        ?.is_closed ||
                                                        application.jobListing
                                                            ?.is_closed) && (
                                                        <span className="p-applications__closed-tag">
                                                            募集終了
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="p-applications__message">
                                                    <h3 className="p-applications__message-title">
                                                        応募メッセージ:
                                                    </h3>
                                                    <div className="p-applications__message-content">
                                                        {application.message}
                                                    </div>
                                                </div>
                                                <div className="p-applications__actions">
                                                    <a
                                                        href={route(
                                                            "job-listings.show",
                                                            application.job_listing_id
                                                        )}
                                                        className="p-applications__view-job"
                                                    >
                                                        案件を確認する
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-applications__empty">
                                    <p className="p-applications__empty-message">
                                        まだ応募した案件はありません。
                                    </p>
                                    <a
                                        href={route("job-listings.index")}
                                        className="p-applications__browse-button"
                                    >
                                        案件を探す
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
