import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";

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
    description: string;
    budget_min: number | null;
    budget_max: number | null;
    user: User;
}

interface Application {
    id: number;
    status: "pending" | "accepted" | "declined";
    message: string;
}

export default function Apply({
    auth,
    jobListing,
    alreadyApplied,
    application,
}: PageProps<{
    jobListing: JobListing;
    alreadyApplied: boolean;
    application: Application | null;
}>) {
    const { data, setData, post, processing, errors } = useForm({
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("job-listings.apply.store", jobListing.id));
    };

    // 予算表示のフォーマット
    const formatBudget = () => {
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

    return (
        <AuthenticatedLayout
            header={<div className="p-apply__title">案件応募</div>}
        >
            <Head title={`「${jobListing.title}」への応募`} />

            <div className="p-apply">
                <div className="p-apply__container">
                    <div className="p-apply__breadcrumb">
                        <Link
                            href={route("job-listings.index")}
                            className="p-apply__breadcrumb-link"
                        >
                            案件一覧
                        </Link>
                        <span className="p-apply__breadcrumb-separator">
                            &gt;
                        </span>
                        <Link
                            href={route("job-listings.show", jobListing.id)}
                            className="p-apply__breadcrumb-link"
                        >
                            {jobListing.title}
                        </Link>
                        <span className="p-apply__breadcrumb-separator">
                            &gt;
                        </span>
                        <span className="p-apply__breadcrumb-current">
                            応募
                        </span>
                    </div>

                    <div className="p-apply__content">
                        <div className="p-apply__card">
                            <h1 className="p-apply__card-title">応募情報</h1>

                            <div className="p-apply__job-summary">
                                <h2 className="p-apply__job-title">
                                    {jobListing.title}
                                </h2>
                                <div className="p-apply__job-meta">
                                    <span className="p-apply__job-type">
                                        {jobListing.type === "one_time"
                                            ? "単発案件"
                                            : "レベニューシェア"}
                                    </span>
                                    {formatBudget() && (
                                        <span className="p-apply__job-budget">
                                            予算: {formatBudget()}
                                        </span>
                                    )}
                                </div>
                                <div className="p-apply__job-poster">
                                    投稿者: {jobListing.user.name}
                                </div>
                            </div>

                            {alreadyApplied ? (
                                <div className="p-apply__already-applied">
                                    <div className="p-apply__status">
                                        <span className="p-apply__status-label">
                                            応募状況:
                                        </span>
                                        <span className="p-apply__status-value">
                                            {getStatusText(application!.status)}
                                        </span>
                                    </div>
                                    <div className="p-apply__message">
                                        <h3 className="p-apply__message-title">
                                            あなたの応募メッセージ:
                                        </h3>
                                        <div className="p-apply__message-content">
                                            {application!.message}
                                        </div>
                                    </div>
                                    <div className="p-apply__action">
                                        <Link
                                            href={route(
                                                "job-listings.show",
                                                jobListing.id
                                            )}
                                            className="p-apply__back-button"
                                        >
                                            案件詳細に戻る
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-apply__form"
                                >
                                    <div className="p-apply__form-group">
                                        <label
                                            htmlFor="message"
                                            className="p-apply__form-label"
                                        >
                                            応募メッセージ
                                            <span className="p-apply__required">
                                                *
                                            </span>
                                        </label>
                                        <textarea
                                            id="message"
                                            className="p-apply__form-textarea"
                                            placeholder="案件に対するあなたの強みや、質問事項などをメッセージしてください"
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            rows={8}
                                            required
                                        ></textarea>
                                        {errors.message && (
                                            <InputError
                                                message={errors.message}
                                                className="p-apply__error"
                                            />
                                        )}
                                    </div>

                                    <div className="p-apply__actions">
                                        <Link
                                            href={route(
                                                "job-listings.show",
                                                jobListing.id
                                            )}
                                            className="p-apply__cancel-button"
                                        >
                                            キャンセル
                                        </Link>
                                        <button
                                            type="submit"
                                            className="p-apply__submit-button"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? "送信中..."
                                                : "応募する"}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
