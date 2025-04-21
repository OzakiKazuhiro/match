import { PropsWithChildren, ReactNode } from "react";
import AppHeader from "@/Components/AppHeader";
import PageHeader from "@/Components/PageHeader";

interface AppLayoutProps {
    header?: ReactNode;
    headerSubtitle?: string;
}

export default function AppLayout({
    header,
    headerSubtitle,
    children,
}: PropsWithChildren<AppLayoutProps>) {
    return (
        <div className="min-h-screen bg-f5f7fa">
            {/* ヘッダー */}
            <AppHeader />

            {/* ページヘッダー */}
            {header && <PageHeader title={header} subtitle={headerSubtitle} />}

            {/* メインコンテンツ */}
            <main className="main-content">{children}</main>

            {/* フッター */}
            <footer className="l-footer">
                <div className="l-footer__container">
                    <div className="l-footer__content">
                        <div>
                            <a href="/" className="l-footer__logo">
                                <span className="l-footer__logo-accent">
                                    match
                                </span>
                            </a>
                            <p className="l-footer__description">
                                エンジニア向けの案件マッチングサービス。
                                単発案件からレベニューシェア案件まで、
                                シンプルに探せて、すぐに応募できます。
                            </p>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">案件を探す</h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <a
                                        href="/job-listings?type=onetime"
                                        className="l-footer__link"
                                    >
                                        単発案件
                                    </a>
                                </li>
                                <li className="l-footer__link-item">
                                    <a
                                        href="/job-listings?type=revenue"
                                        className="l-footer__link"
                                    >
                                        レベニューシェア案件
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">アカウント</h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <a
                                        href="/dashboard"
                                        className="l-footer__link"
                                    >
                                        マイページ
                                    </a>
                                </li>
                                <li className="l-footer__link-item">
                                    <a
                                        href="/profile"
                                        className="l-footer__link"
                                    >
                                        プロフィール編集
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="l-footer__copyright">
                        &copy; {new Date().getFullYear()} match. All rights
                        reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
