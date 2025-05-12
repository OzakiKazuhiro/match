import React from "react";
import { router } from "@inertiajs/react";

interface LogoutLinkProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function LogoutLink({
    className,
    onClick,
    children,
}: LogoutLinkProps) {
    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();

        // メニューを閉じる処理を実行
        if (onClick) {
            onClick();
        }

        // POSTリクエストでログアウト処理を実行
        router.post(
            route("logout"),
            {},
            {
                onSuccess: () => {
                    // 履歴を完全にクリア
                    window.history.pushState(null, "", window.location.href);
                    window.history.replaceState(null, "", window.location.href);
                    window.history.go(-window.history.length);

                    // ログインページへリダイレクト
                    window.location.href = route("login");
                },
            }
        );
    };

    return (
        <button onClick={handleLogout} className={className}>
            {children}
        </button>
    );
}
