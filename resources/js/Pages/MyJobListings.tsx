import { Head, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import Modal from "@/Components/Modal";
import { route } from "ziggy-js";
import TabNavigation from "@/Components/TabNavigation";

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

export default function MyJobListings({
    auth,
    myJobListings = [],
}: PageProps<{
    myJobListings?: JobListing[];
}>) {
    // 自分の案件一覧の展開状態を管理
    const [expandedMyJobs, setExpandedMyJobs] = useState<{
        [key: number]: boolean;
    }>({});

    // 募集終了確認モーダル用の状態
    const [confirmingCloseId, setConfirmingCloseId] = useState<number | null>(
        null
    );

    // 自分の案件カードの開閉切り替え
    const toggleMyJobExpand = (jobId: number) => {
        setExpandedMyJobs((prev) => ({
            ...prev,
            [jobId]: !prev[jobId],
        }));
    };

    // 日付のフォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

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
            header={
                <div className="p-applications__title">自分の投稿案件一覧</div>
            }
        >
            <Head title="自分の投稿案件一覧" />

            <div className="p-applications">
                <div className="p-applications__container">
                    <TabNavigation activeTab="my-job-listings.index" />

                    <div className="p-applications__content">
                        <div className="p-applications__card">
                            {myJobListings.length === 0 ? (
                                <div className="p-applications__empty">
                                    <p className="p-applications__empty-message">
                                        まだ投稿した案件はありません。
                                    </p>
                                    <a
                                        href={route("job-listings.create")}
                                        className="p-applications__browse-button"
                                    >
                                        案件を投稿する
                                    </a>
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
                                                            <a
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
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
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
        </AuthenticatedLayout>
    );
}
