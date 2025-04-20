import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";

export default function NotificationBadge() {
    const [unreadCount, setUnreadCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    // 未読通知数を取得する
    const fetchUnreadCount = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                route("notifications.unread-count")
            );
            setUnreadCount(response.data.count);
        } catch (error) {
            console.error("通知数の取得に失敗しました", error);
        } finally {
            setLoading(false);
        }
    };

    // コンポーネントマウント時と30秒ごとに更新
    useEffect(() => {
        fetchUnreadCount();

        const interval = setInterval(() => {
            fetchUnreadCount();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return null;
    }

    return (
        <Link
            href={route("notifications.index")}
            className="l-header__notification-link"
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
                className="l-header__notification-icon"
            >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            {unreadCount > 0 && (
                <span className="l-header__notification-badge">
                    {unreadCount}
                </span>
            )}
        </Link>
    );
}
