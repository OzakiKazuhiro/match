import { Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import Modal from "@/Components/Modal";
import { route } from "ziggy-js";

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
    applications_count?: number; // 応募数
    created_at?: string;
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
    conversation_group_id?: number | null;
    [key: string]: any;
}

// アバターURLを取得する関数
const getAvatarUrl = (avatar: string | undefined): string => {
    if (!avatar) return "";

    // 既にhttpから始まる場合はそのまま返す
    if (avatar.startsWith("http")) {
        return avatar;
    }

    // すでにスラッシュで始まっている場合は、そのまま返す
    if (avatar.startsWith("/")) {
        return avatar;
    }

    // DBには「storage/avatars/ファイル名」で保存されているので、先頭に「/」を追加
    return `/${avatar}`;
};

export default function ApplicationsToMyJobs({
    auth,
    applications: rawApplications,
    myJobListings = [],
}: PageProps<{
    applications: any[];
    myJobListings?: JobListing[];
}>) {
    // タブの状態管理（新規追加）
    const [activeTab, setActiveTab] = useState<"applications" | "myJobs">(
        "applications"
    );

    // 各案件の展開状態を管理
    const [expandedJobs, setExpandedJobs] = useState<{
        [key: string]: boolean;
    }>({});

    // 自分の案件一覧の展開状態を管理
    const [expandedMyJobs, setExpandedMyJobs] = useState<{
        [key: number]: boolean;
    }>({});

    // 募集終了確認モーダル用の状態
    const [confirmingCloseId, setConfirmingCloseId] = useState<number | null>(
        null
    );

    // 承認モーダル用の状態
    const [confirmingAccept, setConfirmingAccept] = useState<number | null>(
        null
    );

    // 拒否モーダル用の状態
    const [confirmingDecline, setConfirmingDecline] = useState<number | null>(
        null
    );

    // 案件カードの開閉切り替え
    const toggleJobExpand = (jobId: string) => {
        setExpandedJobs((prev) => ({
            ...prev,
            [jobId]: !prev[jobId],
        }));
    };

    // 自分の案件カードの開閉切り替え
    const toggleMyJobExpand = (jobId: number) => {
        setExpandedMyJobs((prev) => ({
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

    // 承認確認モーダルを開く
    const confirmAccept = (applicationId: number) => {
        setConfirmingAccept(applicationId);
    };

    // 拒否確認モーダルを開く
    const confirmDecline = (applicationId: number) => {
        setConfirmingDecline(applicationId);
    };

    // 承認モーダルを閉じる
    const closeAcceptModal = () => {
        setConfirmingAccept(null);
    };

    // 拒否モーダルを閉じる
    const closeDeclineModal = () => {
        setConfirmingDecline(null);
    };

    // 承認処理
    const handleAccept = () => {
        if (confirmingAccept !== null) {
            router.patch(
                route("applications.update-status", [
                    confirmingAccept,
                    "accepted",
                ]),
                {},
                {
                    onSuccess: () => {
                        closeAcceptModal();
                    },
                }
            );
        }
    };

    // 拒否処理
    const handleDecline = () => {
        if (confirmingDecline !== null) {
            router.patch(
                route("applications.update-status", [
                    confirmingDecline,
                    "declined",
                ]),
                {},
                {
                    onSuccess: () => {
                        closeDeclineModal();
                    },
                }
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

    // 募集終了確認モーダルを開く
    const confirmJobClose = (jobId: number) => {
        setConfirmingCloseId(jobId);
    };

    // 募集終了確認モーダルを閉じる
    const closeModal = () => {
        setConfirmingCloseId(null);
    };

    // 募集終了の実行
    const handleJobClose = () => {
        if (confirmingCloseId !== null) {
            router.patch(
                route("job-listings.close", confirmingCloseId),
                {},
                {
                    onSuccess: () => {
                        // モーダルを閉じる
                        closeModal();
                        // ページをリロードして状態を更新
                        window.location.reload();
                    },
                }
            );
        }
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-applications__title">マイページ</div>}
        >
            <Head title="自分の案件への応募一覧" />

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
                        <Link
                            href={route("public-messages.index")}
                            className="p-applications__tab"
                        >
                            パブリックメッセージ
                        </Link>
                        <Link
                            href={route("messages.index")}
                            className="p-applications__tab"
                        >
                            ダイレクトメッセージ
                        </Link>
                    </div>

                    <div className="p-applications__content">
                        {/* コンテンツ内のタブ */}
                        <div className="p-applications__section-tabs">
                            <button
                                className={`p-applications__section-tab ${
                                    activeTab === "applications"
                                        ? "p-applications__section-tab--active"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("applications")}
                            >
                                自分の案件への応募一覧
                            </button>
                            <button
                                className={`p-applications__section-tab ${
                                    activeTab === "myJobs"
                                        ? "p-applications__section-tab--active"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("myJobs")}
                            >
                                自分の投稿案件一覧
                            </button>
                        </div>

                        {/* 自分の案件への応募一覧 */}
                        {activeTab === "applications" && (
                            <div className="p-applications__card">
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
                                            onClick={() =>
                                                window.location.reload()
                                            }
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
                                                    !jobApplications[0]
                                                        ?.jobListing
                                                ) {
                                                    return null;
                                                }

                                                const jobListing =
                                                    jobApplications[0]
                                                        .jobListing;
                                                const isExpanded =
                                                    expandedJobs[jobId] ||
                                                    false;
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
                                                                                                            src={getAvatarUrl(
                                                                                                                application
                                                                                                                    .user
                                                                                                                    .avatar
                                                                                                            )}
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
                                                                                                                if (
                                                                                                                    target.parentElement
                                                                                                                ) {
                                                                                                                    target.parentElement.innerText =
                                                                                                                        application.user.name
                                                                                                                            .charAt(
                                                                                                                                0
                                                                                                                            )
                                                                                                                            .toUpperCase();
                                                                                                                }
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
                                                                                                        confirmAccept(
                                                                                                            application.id
                                                                                                        )
                                                                                                    }
                                                                                                    className="p-applications__accept-button"
                                                                                                >
                                                                                                    承認する
                                                                                                </button>
                                                                                                <button
                                                                                                    onClick={() =>
                                                                                                        confirmDecline(
                                                                                                            application.id
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
                                                                                                    href={
                                                                                                        application.conversation_group_id
                                                                                                            ? route(
                                                                                                                  "messages.show",
                                                                                                                  application.conversation_group_id
                                                                                                              )
                                                                                                            : route(
                                                                                                                  "messages.index"
                                                                                                              )
                                                                                                    }
                                                                                                    className="p-applications__message-button"
                                                                                                >
                                                                                                    ダイレクトメッセージを送る
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
                                                                    {!jobListing.is_closed && (
                                                                        <button
                                                                            onClick={() =>
                                                                                confirmJobClose(
                                                                                    jobListing.id
                                                                                )
                                                                            }
                                                                            className="p-applications__close-job-button"
                                                                        >
                                                                            <span className="p-applications__button-text-pc">
                                                                                案件の募集を終了する
                                                                            </span>
                                                                            <span className="p-applications__button-text-sp">
                                                                                募集終了
                                                                            </span>
                                                                        </button>
                                                                    )}
                                                                    <Link
                                                                        href={route(
                                                                            "job-listings.show",
                                                                            jobListing.id
                                                                        )}
                                                                        className="p-applications__view-job-button"
                                                                    >
                                                                        <span className="p-applications__button-text-pc">
                                                                            案件詳細を見る
                                                                        </span>
                                                                        <span className="p-applications__button-text-sp">
                                                                            案件詳細
                                                                        </span>
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
                        )}

                        {/* 自分の投稿案件一覧 */}
                        {activeTab === "myJobs" && (
                            <div className="p-applications__card">
                                {myJobListings.length === 0 ? (
                                    <div className="p-applications__empty">
                                        <p className="p-applications__empty-message">
                                            まだ投稿した案件はありません。
                                        </p>
                                        <Link
                                            href={route("job-listings.create")}
                                            className="p-applications__browse-button"
                                        >
                                            案件を投稿する
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="p-applications__job-cards">
                                        {myJobListings.map((job) => {
                                            const isExpanded =
                                                expandedMyJobs[job.id] || false;
                                            const applicationsCount =
                                                job.applications_count || 0;

                                            return (
                                                <div
                                                    key={job.id}
                                                    className="p-applications__job-card"
                                                >
                                                    <div
                                                        className="p-applications__job-card-header"
                                                        onClick={() =>
                                                            toggleMyJobExpand(
                                                                job.id
                                                            )
                                                        }
                                                    >
                                                        <div className="p-applications__job-card-title-container">
                                                            <h2 className="p-applications__job-card-title">
                                                                {job.title}
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
                                                            {job.is_closed ? (
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
                                                            <div className="p-applications__job-details">
                                                                <div className="p-applications__job-meta">
                                                                    <div className="p-applications__job-type">
                                                                        種別:{" "}
                                                                        {job.type ===
                                                                        "one_time"
                                                                            ? "単発案件"
                                                                            : "レベニューシェア"}
                                                                    </div>
                                                                    {job.budget_min !==
                                                                        null &&
                                                                        job.budget_max !==
                                                                            null &&
                                                                        job.type ===
                                                                            "one_time" && (
                                                                            <div className="p-applications__job-budget">
                                                                                予算:{" "}
                                                                                {
                                                                                    job.budget_min
                                                                                }
                                                                                円〜
                                                                                {
                                                                                    job.budget_max
                                                                                }

                                                                                円
                                                                            </div>
                                                                        )}
                                                                    {job.created_at && (
                                                                        <div className="p-applications__job-date">
                                                                            投稿日:{" "}
                                                                            {formatDate(
                                                                                job.created_at
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                    <div className="p-applications__job-applications">
                                                                        応募数:{" "}
                                                                        {
                                                                            applicationsCount
                                                                        }
                                                                        件
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="p-applications__job-card-footer">
                                                                {!job.is_closed && (
                                                                    <button
                                                                        onClick={() =>
                                                                            confirmJobClose(
                                                                                job.id
                                                                            )
                                                                        }
                                                                        className="p-applications__close-job-button"
                                                                    >
                                                                        <span className="p-applications__button-text-pc">
                                                                            募集を終了する
                                                                        </span>
                                                                        <span className="p-applications__button-text-sp">
                                                                            募集終了
                                                                        </span>
                                                                    </button>
                                                                )}
                                                                <Link
                                                                    href={route(
                                                                        "job-listings.show",
                                                                        job.id
                                                                    )}
                                                                    className="p-applications__view-job-button"
                                                                >
                                                                    <span className="p-applications__button-text-pc">
                                                                        案件詳細を見る
                                                                    </span>
                                                                    <span className="p-applications__button-text-sp">
                                                                        案件詳細
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 募集終了確認モーダル */}
            <Modal
                show={confirmingCloseId !== null}
                onClose={closeModal}
                maxWidth="md"
            >
                <div className="p-modal__container">
                    <h2 className="p-modal__title">募集終了の確認</h2>

                    <p className="p-modal__text">
                        募集を終了すると、案件一覧から表示されなくなり、この操作は取り消せません。よろしいですか？
                    </p>

                    <div className="p-modal__buttons">
                        <button
                            type="button"
                            className="p-modal__button p-modal__button--cancel"
                            onClick={closeModal}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="p-modal__button p-modal__button--danger"
                            onClick={handleJobClose}
                        >
                            募集を終了する
                        </button>
                    </div>
                </div>
            </Modal>

            {/* 応募承認確認モーダル */}
            <Modal
                show={confirmingAccept !== null}
                onClose={closeAcceptModal}
                maxWidth="md"
            >
                <div className="p-modal__container">
                    <h2 className="p-modal__title">応募承認の確認</h2>

                    <p className="p-modal__text">
                        この応募を承認しますか？承認すると応募者に通知されます。
                    </p>

                    <div className="p-modal__buttons">
                        <button
                            type="button"
                            className="p-modal__button p-modal__button--cancel"
                            onClick={closeAcceptModal}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="p-modal__button p-modal__button--success"
                            onClick={handleAccept}
                        >
                            承認する
                        </button>
                    </div>
                </div>
            </Modal>

            {/* 応募拒否確認モーダル */}
            <Modal
                show={confirmingDecline !== null}
                onClose={closeDeclineModal}
                maxWidth="md"
            >
                <div className="p-modal__container">
                    <h2 className="p-modal__title">応募拒否の確認</h2>

                    <p className="p-modal__text">
                        この応募を見送りますか？この操作は取り消せません。
                    </p>

                    <div className="p-modal__buttons">
                        <button
                            type="button"
                            className="p-modal__button p-modal__button--cancel"
                            onClick={closeDeclineModal}
                        >
                            キャンセル
                        </button>

                        <button
                            type="button"
                            className="p-modal__button p-modal__button--danger"
                            onClick={handleDecline}
                        >
                            見送る
                        </button>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
