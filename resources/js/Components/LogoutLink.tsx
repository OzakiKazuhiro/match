import React from "react";
import { router } from "@inertiajs/react";

interface LogoutLinkProps {
    className?: string;
    children: React.ReactNode;
}

export default function LogoutLink({ className, children }: LogoutLinkProps) {
    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();

        // POSTリクエストでログアウト処理を実行
        router.post(
            route("logout"),
            {},
            {
                onSuccess: () => {
                    // ログアウト成功後、location.replaceを使用して履歴からこのページを削除
                    // ログインページへリダイレクト
                    window.location.replace(route("login"));
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
