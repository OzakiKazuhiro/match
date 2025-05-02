import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import dayjs from "dayjs";

interface Notification {
    id: string;
    type: string;
    notifiable_type: string;
    notifiable_id: number;
    data: {
        application_id: number;
        job_listing_id: number;
        job_listing_title: string;
        applicant_id?: number;
        applicant_name?: string;
        job_owner_id?: number;
        job_owner_name?: string;
        message?: string;
        conversation_group_id?: number;
    };
    read_at: string | null;
    created_at: string;
}

export default function NotificationsIndex({
    auth,
    notifications,
}: PageProps<{
    notifications: {
        data: Notification[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}>) {
    const { post, patch, processing } = useForm();

    const markAllAsRead = () => {
        patch(route("notifications.mark-all-as-read"));
    };

    const formatDate = (dateString: string) => {
        return dayjs(dateString).format("YYYY年MM月DD日 HH:mm");
    };

    const getNotificationDetails = (notification: Notification) => {
        const data = notification.data;
        const truncateName = (name: string | undefined) => {
            if (!name) return "不明なユーザー";
            return name.length > 10 ? `${name.substring(0, 10)}...` : name;
        };

        if (notification.type === "App\\Notifications\\ApplicationReceived") {
            const applicantName = truncateName(data.applicant_name);
            return {
                title: "新しい応募がありました",
                description: `「${data.job_listing_title}」に${applicantName}さんから応募がありました。`,
                url: route("applications.to-my-jobs"),
                actionText: "応募を確認する",
            };
        }

        if (notification.type === "App\\Notifications\\ApplicationAccepted") {
            const jobOwnerName = truncateName(data.job_owner_name);
            return {
                title: "応募が承認されました",
                description: `「${data.job_listing_title}」への応募が${jobOwnerName}さんに承認されました。`,
                url: route("messages.show", {
                    conversationGroup: data.conversation_group_id,
                }),
                actionText: "メッセージを確認する",
            };
        }

        return {
            title: "通知",
            description: "新しい通知があります。",
            url: "#",
            actionText: "詳細を見る",
        };
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-notifications__title">通知一覧</div>}
        >
            <Head title="通知一覧" />

            <div className="p-notifications">
                <div className="p-notifications__container">
                    <div className="p-notifications__header">
                        <h1 className="p-notifications__heading">通知一覧</h1>
                        {notifications.data.some(
                            (notification) => !notification.read_at
                        ) && (
                            <button
                                onClick={markAllAsRead}
                                disabled={processing}
                                className="p-notifications__mark-all-button"
                            >
                                すべて既読にする
                            </button>
                        )}
                    </div>

                    <div className="p-notifications__content">
                        {notifications.data.length === 0 ? (
                            <div className="p-notifications__empty">
                                <p className="p-notifications__empty-message">
                                    通知はありません
                                </p>
                            </div>
                        ) : (
                            <div className="p-notifications__list">
                                {notifications.data.map((notification) => {
                                    const details =
                                        getNotificationDetails(notification);

                                    return (
                                        <div
                                            key={notification.id}
                                            className={`p-notifications__item ${
                                                !notification.read_at
                                                    ? "p-notifications__item--unread"
                                                    : ""
                                            }`}
                                        >
                                            <div className="p-notifications__item-header">
                                                <h2 className="p-notifications__item-title">
                                                    {details.title}
                                                </h2>
                                                <span className="p-notifications__item-date">
                                                    {formatDate(
                                                        notification.created_at
                                                    )}
                                                </span>
                                            </div>
                                            <div className="p-notifications__item-body">
                                                <p className="p-notifications__item-description">
                                                    {details.description}
                                                </p>
                                                <div className="p-notifications__item-actions">
                                                    <Link
                                                        href={details.url}
                                                        className="p-notifications__item-action"
                                                    >
                                                        {details.actionText}
                                                    </Link>
                                                    {!notification.read_at && (
                                                        <Link
                                                            href={route(
                                                                "notifications.mark-as-read",
                                                                notification.id
                                                            )}
                                                            method="patch"
                                                            as="button"
                                                            className="p-notifications__item-mark-read"
                                                        >
                                                            既読にする
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* ページネーション */}
                        {notifications.links.length > 3 && (
                            <div className="p-notifications__pagination">
                                {notifications.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || "#"}
                                        className={`p-notifications__pagination-link ${
                                            link.active
                                                ? "p-notifications__pagination-link--active"
                                                : ""
                                        } ${
                                            !link.url
                                                ? "p-notifications__pagination-link--disabled"
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
            </div>
        </AuthenticatedLayout>
    );
}
