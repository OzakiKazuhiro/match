import { Link, usePage } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { PageProps } from "@/types";
import NotificationBadge from "@/Components/NotificationBadge";

export default function AppHeader() {
    const { auth } = usePage().props as PageProps;
    const user = auth?.user;
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
        <header className="l-header">
            <div className="l-header__inner">
                <Link href="/" className="l-header__logo">
                    <span className="l-header__logo-accent">match</span>
                </Link>

                <nav className="l-header__nav">
                    {auth?.user ? (
                        <>
                            <NotificationBadge />
                            <Link
                                href="/job-listings"
                                className="l-header__nav-link"
                            >
                                案件一覧
                            </Link>
                            <Link
                                href="/post-job"
                                className="l-header__nav-link"
                            >
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
                                        setShowingUserDropdown(
                                            !showingUserDropdown
                                        )
                                    }
                                    className="l-header__user-button"
                                >
                                    <div className="l-header__user-avatar">
                                        {user.avatar ? (
                                            <img
                                                src={
                                                    user.avatar.startsWith("/")
                                                        ? user.avatar
                                                        : `/${user.avatar}`
                                                }
                                                alt={`${user.name}のアバター`}
                                                onError={(e) => {
                                                    e.currentTarget.onerror =
                                                        null;
                                                    e.currentTarget.src = "";
                                                    if (
                                                        e.currentTarget
                                                            .parentElement
                                                    ) {
                                                        e.currentTarget.parentElement.innerHTML =
                                                            user.name
                                                                .charAt(0)
                                                                .toUpperCase();
                                                    }
                                                }}
                                            />
                                        ) : (
                                            user.name.charAt(0).toUpperCase()
                                        )}
                                    </div>
                                    <div className="l-header__user-info">
                                        <span className="l-header__login-status">
                                            ログイン中
                                        </span>
                                        <span className="l-header__user-name">
                                            {user.name.length > 10
                                                ? `${user.name.substring(
                                                      0,
                                                      10
                                                  )}...`
                                                : user.name}
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
                        </>
                    ) : (
                        <>
                            <Link
                                href="/job-listings"
                                className="l-header__nav-link"
                            >
                                案件一覧
                            </Link>
                            <Link
                                href="/post-job"
                                className="l-header__nav-link"
                            >
                                案件を投稿
                            </Link>
                            <Link href="/login" className="l-header__nav-link">
                                ログイン
                            </Link>
                            <Link
                                href="/register"
                                className="l-header__nav-link l-header__nav-link--button"
                            >
                                会員登録
                            </Link>
                        </>
                    )}
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
                    {auth?.user ? (
                        <>
                            <div className="l-header__mobile-user">
                                <div className="l-header__user-avatar">
                                    {user.avatar ? (
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
                                                        user.name
                                                            .charAt(0)
                                                            .toUpperCase();
                                                }
                                            }}
                                        />
                                    ) : (
                                        user.name.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <div className="l-header__mobile-user-info">
                                    <span className="l-header__mobile-user-name">
                                        {user.name}さん
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
                        </>
                    ) : null}
                    <Link
                        href="/job-listings"
                        className="l-header__mobile-link"
                    >
                        案件一覧
                    </Link>
                    <Link href="/post-job" className="l-header__mobile-link">
                        案件を投稿
                    </Link>
                    {auth?.user ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="l-header__mobile-link"
                            >
                                マイページ
                            </Link>
                            <Link
                                href="/profile/edit"
                                className="l-header__mobile-link"
                            >
                                プロフィール編集
                            </Link>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="l-header__mobile-link l-header__mobile-link--danger"
                            >
                                ログアウト
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="l-header__mobile-link"
                            >
                                ログイン
                            </Link>
                            <Link
                                href="/register"
                                className="l-header__mobile-link"
                            >
                                会員登録
                            </Link>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}
