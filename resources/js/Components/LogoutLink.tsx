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

        // ログアウト前に履歴を消去
        sessionStorage.setItem("logout_requested", "true");

        // POSTリクエストでログアウト処理を実行
        router.post(route("logout"));
    };

    return (
        <button onClick={handleLogout} className={className}>
            {children}
        </button>
    );
}
