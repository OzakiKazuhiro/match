import { Link, usePage } from "@inertiajs/react";
import {
    PropsWithChildren,
    ReactNode,
    useState,
    useRef,
    useEffect,
} from "react";
import NotificationBadge from "@/Components/NotificationBadge";

export default function Authenticated({
    header,
    children,
    showFooter = true,
}: PropsWithChildren<{ header?: ReactNode; showFooter?: boolean }>) {
    const user = usePage().props.auth.user;
    const [showingUserDropdown, setShowingUserDropdown] = useState(false);
    const [showingMobileMenu, setShowingMobileMenu] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    // ユーザードロップダウン外のクリックを検出
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userDropdownRef.current &&
                !userDropdownRef.current.contains(event.target as Node)
            ) {
                setShowingUserDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // モバイルメニュー外のクリックを検出
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // ボタン自体は例外（ボタンクリックはトグル動作のため）
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                mobileButtonRef.current &&
                !mobileButtonRef.current.contains(event.target as Node)
            ) {
                setShowingMobileMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen bg-f5f7fa">
            {/* ヘッダー */}
            <header className="l-header">
                <div className="l-header__inner">
                    <Link href="/" className="l-header__logo">
                        <span className="l-header__logo-accent">match</span>
                    </Link>

                    <nav className="l-header__nav">
                        <NotificationBadge />
                        <Link
                            href="/job-listings"
                            className="l-header__nav-link"
                        >
                            案件一覧
                        </Link>
                        <Link href="/post-job" className="l-header__nav-link">
                            案件を投稿
                        </Link>
                        <Link
                            href={route("dashboard")}
                            className="l-header__nav-link"
                        >
                            マイページ
                        </Link>
                        <div
                            className="l-header__user-menu"
                            ref={userDropdownRef}
                        >
                            <button
                                onClick={() =>
                                    setShowingUserDropdown(!showingUserDropdown)
                                }
                                className="l-header__user-button"
                            >
                                <div className="l-header__user-avatar">
                                    {user?.avatar ? (
                                        <img
                                            src={
                                                user.avatar.startsWith("/")
                                                    ? user.avatar
                                                    : `/${user.avatar}`
                                            }
                                            alt={`${user.name}のアバター`}
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = "";
                                                if (
                                                    e.currentTarget
                                                        .parentElement
                                                ) {
                                                    e.currentTarget.parentElement.innerHTML =
                                                        user?.name
                                                            ?.charAt(0)
                                                            .toUpperCase() ||
                                                        "U";
                                                }
                                            }}
                                        />
                                    ) : (
                                        user?.name?.charAt(0).toUpperCase() ||
                                        "U"
                                    )}
                                </div>
                                <div className="l-header__user-info">
                                    <span className="l-header__login-status">
                                        ログイン中
                                    </span>
                                    <span className="l-header__user-name">
                                        {user?.name && user.name.length > 10
                                            ? `${user.name.substring(0, 10)}...`
                                            : user?.name || "ユーザー"}
                                        さん
                                    </span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {showingUserDropdown && (
                                <div className="l-header__dropdown">
                                    <Link
                                        href={route("dashboard")}
                                        className="l-header__dropdown-item"
                                    >
                                        マイページ
                                    </Link>
                                    <Link
                                        href={route("profile.edit")}
                                        className="l-header__dropdown-item"
                                    >
                                        プロフィール編集
                                    </Link>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="l-header__dropdown-item l-header__dropdown-item--danger"
                                    >
                                        ログアウト
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>

                    <button
                        className="l-header__mobile-button"
                        onClick={() => setShowingMobileMenu(!showingMobileMenu)}
                        ref={mobileButtonRef}
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
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* モバイルメニュー */}
                {showingMobileMenu && (
                    <div className="l-header__mobile-menu" ref={mobileMenuRef}>
                        <div className="l-header__mobile-user">
                            <div className="l-header__user-avatar">
                                {user?.avatar ? (
                                    <img
                                        src={
                                            user.avatar.startsWith("/")
                                                ? user.avatar
                                                : `/${user.avatar}`
                                        }
                                        alt={`${user.name}のアバター`}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "";
                                            if (e.currentTarget.parentElement) {
                                                e.currentTarget.parentElement.innerHTML =
                                                    user?.name
                                                        ?.charAt(0)
                                                        .toUpperCase() || "U";
                                            }
                                        }}
                                    />
                                ) : (
                                    user?.name?.charAt(0).toUpperCase() || "U"
                                )}
                            </div>
                            <div className="l-header__mobile-user-info">
                                <span className="l-header__mobile-user-name">
                                    {user?.name && user.name.length > 10
                                        ? `${user.name.substring(0, 10)}...`
                                        : user?.name || "ユーザー"}
                                    さん
                                </span>
                                <span className="l-header__mobile-login-status">
                                    ログイン中
                                </span>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="l-header__mobile-link"
                        >
                            通知
                        </Link>
                        <Link
                            href="/job-listings"
                            className="l-header__mobile-link"
                        >
                            案件一覧
                        </Link>
                        <Link
                            href="/post-job"
                            className="l-header__mobile-link"
                        >
                            案件を投稿
                        </Link>
                        <Link
                            href={route("dashboard")}
                            className="l-header__mobile-link"
                        >
                            マイページ
                        </Link>
                        <Link
                            href={route("profile.edit")}
                            className="l-header__mobile-link"
                        >
                            プロフィール編集
                        </Link>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="l-header__mobile-link l-header__mobile-link--danger"
                        >
                            ログアウト
                        </Link>
                    </div>
                )}
            </header>

            {/* ページヘッダー */}
            {header && (
                <div className="p-dashboard__header">
                    <div className="p-dashboard__header-inner">{header}</div>
                </div>
            )}

            {/* メインコンテンツ */}
            <main>{children}</main>

            {/* フッター - showFooterオプションが真の場合のみ表示 */}
            {showFooter && (
                <footer className="l-footer">
                    <div className="l-footer__container">
                        <div className="l-footer__content">
                            <div>
                                <Link href="/" className="l-footer__logo">
                                    <span className="l-footer__logo-accent">
                                        match
                                    </span>
                                </Link>
                                <p className="l-footer__description">
                                    エンジニア向けの案件マッチングサービス。
                                    単発案件からレベニューシェア案件まで、
                                    シンプルに探せて、すぐに応募できます
                                </p>
                            </div>

                            <div>
                                <h3 className="l-footer__heading">案件関連</h3>
                                <ul className="l-footer__links">
                                    <li className="l-footer__link-item">
                                        <Link
                                            href="/job-listings"
                                            className="l-footer__link"
                                        >
                                            案件一覧
                                        </Link>
                                    </li>
                                    <li className="l-footer__link-item">
                                        <Link
                                            href="/post-job"
                                            className="l-footer__link"
                                        >
                                            案件を投稿
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="l-footer__heading">
                                    アカウント
                                </h3>
                                <ul className="l-footer__links">
                                    <li className="l-footer__link-item">
                                        <Link
                                            href={route("dashboard")}
                                            className="l-footer__link"
                                        >
                                            マイページ
                                        </Link>
                                    </li>
                                    <li className="l-footer__link-item">
                                        <Link
                                            href={route("profile.edit")}
                                            className="l-footer__link"
                                        >
                                            プロフィール編集
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="l-footer__heading">
                                    規約・ポリシー
                                </h3>
                                <ul className="l-footer__links">
                                    <li className="l-footer__link-item">
                                        <Link
                                            href={route("terms")}
                                            className="l-footer__link"
                                        >
                                            利用規約
                                        </Link>
                                    </li>
                                    <li className="l-footer__link-item">
                                        <Link
                                            href={route("privacy")}
                                            className="l-footer__link"
                                        >
                                            プライバシーポリシー
                                        </Link>
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
            )}
        </div>
    );
}
