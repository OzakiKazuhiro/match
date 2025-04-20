import { Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";

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
}

interface Application {
    id: number;
    job_listing_id: number;
    user_id: number;
    message: string;
    status: "pending" | "accepted" | "declined";
    created_at: string;
    updated_at: string;
    jobListing?: JobListing;
    user: User;
}

export default function ApplicationsToMyJobs({
    auth,
    applications: rawApplications,
}: PageProps<{
    applications: any[];
}>) {
    // 各案件の展開状態を管理
    const [expandedJobs, setExpandedJobs] = useState<{
        [key: string]: boolean;
    }>({});

    // 案件カードの開閉切り替え
    const toggleJobExpand = (jobId: string) => {
        setExpandedJobs((prev) => ({
            ...prev,
            [jobId]: !prev[jobId],
        }));
    };

    const applications: Application[] = rawApplications.map((app) => ({
        ...app,
        jobListing: app.jobListing || app.job_listing,
    }));

    // 日付のフォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // ステータスの表示
    const getStatusText = (status: string) => {
        switch (status) {
            case "pending":
                return "応募中（確認待ち）";
            case "accepted":
                return "承認済み";
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

    // ステータス更新処理
    const handleStatusUpdate = (applicationId: number, status: string) => {
        if (
            confirm(
                `この応募を${
                    status === "accepted" ? "承認" : "拒否"
                }してよろしいですか？`
            )
        ) {
            router.patch(
                route("applications.update-status", [applicationId, status])
            );
        }
    };

    // 案件ごとにグループ化（jobListingが存在する応募のみ）
    const filteredApplications = applications.filter(
        (app) => app.jobListing != null
    );

    const groupedApplications: { [key: number]: Application[] } = {};

    filteredApplications.forEach((application) => {
        if (!groupedApplications[application.job_listing_id]) {
            groupedApplications[application.job_listing_id] = [];
        }
        groupedApplications[application.job_listing_id].push(application);
    });

    return (
        <AuthenticatedLayout
            header={<div className="p-applications__title">応募一覧</div>}
        >
            <Head title="自分の案件への応募一覧 - Match" />

            <div className="p-applications">
                <div className="p-applications__container">
                    <div className="p-applications__tabs">
                        <Link
                            href={route("applications.index")}
                            className="p-applications__tab"
                        >
                            応募した案件
                        </Link>
                        <Link
                            href={route("applications.to-my-jobs")}
                            className="p-applications__tab p-applications__tab--active"
                        >
                            自分の案件への応募
                        </Link>
                    </div>

                    <div className="p-applications__content">
                        <div className="p-applications__card">
                            <h1 className="p-applications__card-title">
                                自分の案件への応募一覧
                            </h1>

                            {applications.length === 0 ? (
                                <div className="p-applications__empty">
                                    <p className="p-applications__empty-message">
                                        まだあなたの案件への応募はありません。
                                    </p>
                                    <Link
                                        href={route("job-listings.create")}
                                        className="p-applications__browse-button"
                                    >
                                        案件を投稿する
                                    </Link>
                                </div>
                            ) : Object.keys(groupedApplications).length ===
                              0 ? (
                                <div className="p-applications__empty">
                                    <p className="p-applications__empty-message">
                                        応募データの読み込み中に問題が発生しました。
                                    </p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="p-applications__browse-button"
                                    >
                                        再読み込み
                                    </button>
                                </div>
                            ) : (
                                <div className="p-applications__job-cards">
                                    {Object.keys(groupedApplications).map(
                                        (jobId) => {
                                            const jobApplications =
                                                groupedApplications[
                                                    Number(jobId)
                                                ];

                                            // jobListingが存在するかチェック
                                            if (
                                                !jobApplications[0]?.jobListing
                                            ) {
                                                return null;
                                            }

                                            const jobListing =
                                                jobApplications[0].jobListing;
                                            const isExpanded =
                                                expandedJobs[jobId] || false;
                                            const applicationsCount =
                                                jobApplications.length;

                                            return (
                                                <div
                                                    key={jobId}
                                                    className="p-applications__job-card"
                                                >
                                                    <div
                                                        className="p-applications__job-card-header"
                                                        onClick={() =>
                                                            toggleJobExpand(
                                                                jobId
                                                            )
                                                        }
                                                    >
                                                        <div className="p-applications__job-card-title-container">
                                                            <h2 className="p-applications__job-card-title">
                                                                {
                                                                    jobListing.title
                                                                }
                                                            </h2>
                                                            <div className="p-applications__job-applications-count">
                                                                <span className="p-applications__count-badge">
                                                                    {
                                                                        applicationsCount
                                                                    }
                                                                </span>
                                                                <span className="p-applications__count-text">
                                                                    件の応募
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="p-applications__job-card-status-container">
                                                            {jobListing.is_closed ? (
                                                                <span className="p-applications__job-closed">
                                                                    募集終了
                                                                </span>
                                                            ) : (
                                                                <span className="p-applications__job-open">
                                                                    募集中
                                                                </span>
                                                            )}
                                                            <span
                                                                className={`p-applications__expand-icon ${
                                                                    isExpanded
                                                                        ? "expanded"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {isExpanded
                                                                    ? "▼"
                                                                    : "▶"}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {isExpanded && (
                                                        <div className="p-applications__job-card-content">
                                                            <div className="p-applications__list">
                                                                {jobApplications.map(
                                                                    (
                                                                        application
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                application.id
                                                                            }
                                                                            className="p-applications__item"
                                                                        >
                                                                            <div className="p-applications__item-header">
                                                                                <div className="p-applications__applicant-info">
                                                                                    {application.user && (
                                                                                        <>
                                                                                            <div className="p-applications__applicant-avatar">
                                                                                                {application
                                                                                                    .user
                                                                                                    .avatar ? (
                                                                                                    <img
                                                                                                        src={`/storage/${application.user.avatar}`}
                                                                                                        alt={
                                                                                                            application
                                                                                                                .user
                                                                                                                .name
                                                                                                        }
                                                                                                        className="p-applications__avatar-image"
                                                                                                        onError={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            // 画像読み込みエラー時に頭文字を表示
                                                                                                            const target =
                                                                                                                e.target as HTMLImageElement;
                                                                                                            target.style.display =
                                                                                                                "none";
                                                                                                            target.parentElement!.innerText =
                                                                                                                application.user.name
                                                                                                                    .charAt(
                                                                                                                        0
                                                                                                                    )
                                                                                                                    .toUpperCase();
                                                                                                        }}
                                                                                                    />
                                                                                                ) : (
                                                                                                    application.user.name
                                                                                                        .charAt(
                                                                                                            0
                                                                                                        )
                                                                                                        .toUpperCase()
                                                                                                )}
                                                                                            </div>
                                                                                            <div className="p-applications__applicant-details">
                                                                                                <div className="p-applications__applicant-name">
                                                                                                    {
                                                                                                        application
                                                                                                            .user
                                                                                                            .name
                                                                                                    }
                                                                                                </div>
                                                                                                <div className="p-applications__applicant-email">
                                                                                                    {
                                                                                                        application
                                                                                                            .user
                                                                                                            .email
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    )}
                                                                                </div>
                                                                                <div
                                                                                    className={`p-applications__status ${getStatusClass(
                                                                                        application.status
                                                                                    )}`}
                                                                                >
                                                                                    {getStatusText(
                                                                                        application.status
                                                                                    )}
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
                                                                                </div>
                                                                                <div className="p-applications__message">
                                                                                    <h3 className="p-applications__message-title">
                                                                                        応募メッセージ:
                                                                                    </h3>
                                                                                    <div className="p-applications__message-content">
                                                                                        {
                                                                                            application.message
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                                {application.status ===
                                                                                    "pending" &&
                                                                                    !jobListing.is_closed && (
                                                                                        <div className="p-applications__actions">
                                                                                            <button
                                                                                                onClick={() =>
                                                                                                    handleStatusUpdate(
                                                                                                        application.id,
                                                                                                        "accepted"
                                                                                                    )
                                                                                                }
                                                                                                className="p-applications__accept-button"
                                                                                            >
                                                                                                承認する
                                                                                            </button>
                                                                                            <button
                                                                                                onClick={() =>
                                                                                                    handleStatusUpdate(
                                                                                                        application.id,
                                                                                                        "declined"
                                                                                                    )
                                                                                                }
                                                                                                className="p-applications__decline-button"
                                                                                            >
                                                                                                見送る
                                                                                            </button>
                                                                                        </div>
                                                                                    )}

                                                                                {application.status ===
                                                                                    "accepted" && (
                                                                                    <div className="p-applications__accepted-message">
                                                                                        <p>
                                                                                            この応募は承認済みです。応募者と直接連絡を取り、詳細を相談しましょう。
                                                                                        </p>
                                                                                        <div className="p-applications__contact-info">
                                                                                            <p>
                                                                                                <strong>
                                                                                                    連絡先:{" "}
                                                                                                </strong>
                                                                                                {
                                                                                                    application
                                                                                                        .user
                                                                                                        ?.email
                                                                                                }
                                                                                            </p>
                                                                                            <Link
                                                                                                href={route(
                                                                                                    "messages.index"
                                                                                                )}
                                                                                                className="p-applications__message-button"
                                                                                            >
                                                                                                メッセージを送る
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="p-applications__job-card-footer">
                                                                <Link
                                                                    href={route(
                                                                        "job-listings.show",
                                                                        jobListing.id
                                                                    )}
                                                                    className="p-applications__view-job-button"
                                                                >
                                                                    案件詳細を見る
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
