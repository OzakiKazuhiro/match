import ApplicationLogo from "@/Components/ApplicationLogo";
import { PropsWithChildren } from "react";

interface GuestProps extends PropsWithChildren {
    title?: string;
}

export default function Guest({ children, title = "ログイン" }: GuestProps) {
    return (
        <div className="min-h-screen bg-f5f7fa">
            {/* ヘッダー */}
            <header className="l-header">
                <div className="l-header__inner">
                    <a href="/" className="l-header__logo">
                        <span className="l-header__logo-accent">match</span>
                    </a>
                </div>
            </header>

            <main className="main-content">
                <div className="p-auth__container">
                    <div className="p-auth__box">
                        <h1 className="p-auth__title">{title}</h1>
                        {children}
                    </div>
                </div>
            </main>

            {/* フッター */}
            <footer className="l-footer">
                <div className="l-footer__container">
                    <div className="l-footer__copyright">
                        &copy; {new Date().getFullYear()} match. All rights
                        reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
