import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

export default function Top({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    // メニューの表示状態が変更されたときの処理
    useEffect(() => {
        if (mobileMenuOpen) {
            setMenuVisible(true);
            setAnimating(true);
            setTimeout(() => setAnimating(false), 300);
        } else if (menuVisible) {
            setAnimating(true);
            setTimeout(() => {
                setMenuVisible(false);
                setAnimating(false);
            }, 300);
        }
    }, [mobileMenuOpen]);

    // メニュー外のクリックを検出してメニューを閉じる
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // ボタン自体のクリックは無視（トグル動作は別のハンドラで処理）
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                mobileButtonRef.current &&
                !mobileButtonRef.current.contains(event.target as Node) &&
                menuVisible &&
                !animating
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuVisible, animating]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <Head title="Match - エンジニア案件マッチングサービス" />

            {/* ヘッダー */}
            <header className="l-header">
                <div className="l-header__inner">
                    <Link href="/" className="l-header__logo">
                        <span className="l-header__logo-accent">match</span>
                    </Link>

                    {auth?.user && (
                        <div className="l-header__login-status">
                            <div className="l-header__user-avatar">
                                {auth.user.avatar ? (
                                    <img
                                        src={auth.user.avatar}
                                        alt={`${auth.user.name}のアバター`}
                                    />
                                ) : (
                                    auth.user.name.charAt(0).toUpperCase()
                                )}
                            </div>
                            <span>{auth.user.name}</span>
                        </div>
                    )}

                    <nav className="l-header__nav">
                        <Link
                            href="/job-listings"
                            className="l-header__nav-link"
                        >
                            案件一覧
                        </Link>
                        <Link href="/post-job" className="l-header__nav-link">
                            案件を投稿
                        </Link>
                        {auth?.user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="l-header__nav-link"
                                >
                                    マイページ
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="l-header__nav-link"
                                >
                                    ログアウト
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="l-header__nav-link"
                                >
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
                        onClick={toggleMobileMenu}
                        aria-label="メニューを開く"
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
                {menuVisible && (
                    <div
                        className={`l-header__mobile-menu ${
                            mobileMenuOpen ? "menu-fade-in" : "menu-fade-out"
                        }`}
                        ref={mobileMenuRef}
                    >
                        {auth?.user && (
                            <div className="l-header__mobile-user">
                                <div className="l-header__user-avatar">
                                    {auth.user.avatar ? (
                                        <img
                                            src={auth.user.avatar}
                                            alt={`${auth.user.name}のアバター`}
                                        />
                                    ) : (
                                        auth.user.name.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <div className="l-header__mobile-user-info">
                                    <div className="l-header__mobile-user-name">
                                        {auth.user.name}
                                    </div>
                                    <div className="l-header__mobile-login-status">
                                        ログイン中
                                    </div>
                                </div>
                            </div>
                        )}

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

                        {auth?.user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="l-header__mobile-link"
                                >
                                    マイページ
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

            <main className="main-content">
                <div className="p-top__container">
                    {/* ヒーローセクション */}
                    <section className="p-top__hero">
                        <h1 className="p-top__title">
                            シンプルなエンジニア案件マッチングサービス
                        </h1>
                        <div className="p-top__service-name">match</div>
                        <p className="p-top__subtitle">
                            単発案件やサービス立ち上げ案の投稿・応募が簡単にできる、エンジニア向けマッチングサービスです。
                            手軽に案件の投稿・応募ができ、シンプルな操作で案件を見つけることができます。
                        </p>
                        <div className="p-top__buttons">
                            <Link
                                href="/register"
                                className="p-top__button p-top__button--primary"
                            >
                                無料で会員登録
                            </Link>
                            <Link
                                href="/job-listings"
                                className="p-top__button"
                            >
                                案件を探す
                            </Link>
                        </div>
                    </section>

                    {/* キャッチフレーズ */}
                    <h2 className="p-top__section-title p-top__section-title--catchphrase">
                        エンジニアとアイデア・
                        <br className="p-top__catchphrase-break" />
                        誰でも簡単につながる
                    </h2>

                    {/* 特徴セクション */}
                    <section className="p-top__features">
                        <div className="p-top__feature">
                            <div className="p-top__feature-icon">
                                <img
                                    src="/images/features/easy-case-submission.webp"
                                    alt="簡単に案件投稿"
                                    width="60"
                                    height="60"
                                />
                            </div>
                            <h3 className="p-top__feature-title">
                                簡単に案件投稿
                            </h3>
                            <p className="p-top__feature-text">
                                複雑な入力項目はなく、シンプルな画面でエンジニア向けの案件を投稿できます。
                                単発案件とレベニューシェア案件の両方に対応しています。
                            </p>
                        </div>

                        <div className="p-top__feature">
                            <div className="p-top__feature-icon">
                                <img
                                    src="/images/features/direct-communication.webp"
                                    alt="直接コミュニケーション"
                                    width="60"
                                    height="60"
                                />
                            </div>
                            <h3 className="p-top__feature-title">
                                直接コミュニケーション
                            </h3>
                            <p className="p-top__feature-text">
                                案件投稿者と応募者が直接メッセージのやり取りができます。
                                パブリックなメッセージと一対一のダイレクトメッセージの両方に対応しています。
                            </p>
                        </div>

                        <div className="p-top__feature">
                            <div className="p-top__feature-icon">
                                <img
                                    src="/images/features/easy-sharing.webp"
                                    alt="気軽にシェア"
                                    width="60"
                                    height="60"
                                />
                            </div>
                            <h3 className="p-top__feature-title">
                                気軽にシェア
                            </h3>
                            <p className="p-top__feature-text">
                                案件をＸ（旧Twitter）などのSNSで簡単に共有できます。
                                気になる案件を多くの人に共有して、マッチングの可能性を広げましょう。
                            </p>
                        </div>
                    </section>

                    {/* お悩み解決セクション */}
                    <section className="p-top__solutions">
                        <h2 className="p-top__section-title">
                            こんなお悩みを解決！
                        </h2>
                        <div className="p-top__solution-list">
                            <div className="p-top__solution-item">
                                <div className="p-top__solution-image">
                                    <img
                                        src="/images/features/apply-for-projects.webp"
                                        alt="エンジニアでなくても案件に応募可能"
                                        width="280"
                                        height="200"
                                    />
                                </div>
                                <h3 className="p-top__solution-title">
                                    エンジニアでなくても案件の投稿可能！
                                </h3>
                                <p className="p-top__solution-text">
                                    アイデアをWebで形にしたい人であれば、主婦でも誰でも気軽に、会員登録して投稿可能！
                                </p>
                                <Link
                                    href="/post-job"
                                    className="p-top__solution-button"
                                >
                                    案件を投稿する
                                </Link>
                            </div>

                            <div className="p-top__solution-item">
                                <div className="p-top__solution-image">
                                    <img
                                        src="/images/features/find-projects-quickly.webp"
                                        alt="エンジニアは希望の案件がすぐに見つかる"
                                        width="280"
                                        height="200"
                                    />
                                </div>
                                <h3 className="p-top__solution-title">
                                    エンジニアは希望の案件がすぐに見つかる！
                                </h3>
                                <p className="p-top__solution-text">
                                    シンプルな作りのおかげで、案件をすぐに見つけることが可能！案件に関する質問もアプリ内で気軽に解決！
                                </p>
                                <Link
                                    href="/job-listings"
                                    className="p-top__solution-button"
                                >
                                    案件を探す
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* 人気の案件例セクション */}
                    <section className="p-top__popular-jobs">
                        <h2 className="p-top__section-title">人気の案件例</h2>
                        <div className="p-top__job-list">
                            {/* 案件カード1 */}
                            <div className="p-top__job-card">
                                <div className="p-top__job-header">
                                    <span className="p-top__job-type p-top__job-type--onetime">
                                        単発案件
                                    </span>
                                    <span className="p-top__job-budget">
                                        ¥50,000 〜 ¥100,000
                                    </span>
                                </div>
                                <div className="p-top__job-content">
                                    <h3 className="p-top__job-title">
                                        Reactを使用したウェブアプリケーションの開発
                                    </h3>
                                    <p className="p-top__job-desc">
                                        既存のウェブアプリケーションをReactを使用してリニューアルするお仕事です。レスポンシブ対応必須、TypeScriptの経験がある方歓迎します。
                                    </p>
                                    <div className="p-top__job-footer">
                                        <span className="p-top__job-date">
                                            3日前
                                        </span>
                                        <Link
                                            href="/job/1"
                                            className="p-top__job-link"
                                        >
                                            詳細を見る
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* 案件カード2 */}
                            <div className="p-top__job-card">
                                <div className="p-top__job-header">
                                    <span className="p-top__job-type p-top__job-type--revenue">
                                        レベニューシェア
                                    </span>
                                    <span className="p-top__job-budget">
                                        収益分配
                                    </span>
                                </div>
                                <div className="p-top__job-content">
                                    <h3 className="p-top__job-title">
                                        新しいマッチングサービスの開発パートナー募集
                                    </h3>
                                    <p className="p-top__job-desc">
                                        飲食店と農家を繋ぐマッチングサービスの開発パートナーを募集しています。バックエンド開発の経験者歓迎。収益は均等分配します。
                                    </p>
                                    <div className="p-top__job-footer">
                                        <span className="p-top__job-date">
                                            1週間前
                                        </span>
                                        <Link
                                            href="/job/2"
                                            className="p-top__job-link"
                                        >
                                            詳細を見る
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* 案件カード3 */}
                            <div className="p-top__job-card">
                                <div className="p-top__job-header">
                                    <span className="p-top__job-type p-top__job-type--onetime">
                                        単発案件
                                    </span>
                                    <span className="p-top__job-budget">
                                        ¥200,000 〜 ¥300,000
                                    </span>
                                </div>
                                <div className="p-top__job-content">
                                    <h3 className="p-top__job-title">
                                        Laravelを使用したECサイトの構築
                                    </h3>
                                    <p className="p-top__job-desc">
                                        アパレルブランドのECサイトをLaravelで構築していただきます。決済システムの連携やユーザー管理システムの実装が主な業務内容です。
                                    </p>
                                    <div className="p-top__job-footer">
                                        <span className="p-top__job-date">
                                            2日前
                                        </span>
                                        <Link
                                            href="/job/3"
                                            className="p-top__job-link"
                                        >
                                            詳細を見る
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="u-text-center u-mt-4">
                            <Link
                                href="/job-listings"
                                className="c-button c-button--outline"
                            >
                                すべての案件を見る
                            </Link>
                        </div>
                    </section>

                    {/* ユーザーの声セクション */}
                    <section className="p-top__testimonials">
                        <div className="p-top__container">
                            <h2 className="p-top__section-title">
                                ユーザーの声
                            </h2>
                            <div className="p-top__testimonial-list">
                                <div className="p-top__testimonial">
                                    <div className="p-top__testimonial-quote">
                                        "
                                    </div>
                                    <p className="p-top__testimonial-content">
                                        作りたかったWebアプリの開発パートナーを見つけることができました。
                                        <span className="highlight">
                                            一対一のダイレクトメッセージ機能が特に便利
                                        </span>
                                        で、スムーズなコミュニケーションが取れています。
                                    </p>
                                    <div className="p-top__testimonial-author">
                                        <div className="p-top__testimonial-avatar">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                        </div>
                                        <div className="p-top__testimonial-info">
                                            <div className="p-top__testimonial-name">
                                                佐藤 美咲
                                            </div>
                                            <div className="p-top__testimonial-role">
                                                サービス企画者
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-top__testimonial">
                                    <div className="p-top__testimonial-quote">
                                        "
                                    </div>
                                    <p className="p-top__testimonial-content">
                                        matchは使いやすさが魅力です。
                                        <span className="highlight">
                                            複雑な入力項目がなく、直感的に操作できる
                                        </span>
                                        ので、エンジニアとして初めて案件を受注する際も安心して利用できました。
                                    </p>
                                    <div className="p-top__testimonial-author">
                                        <div className="p-top__testimonial-avatar">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                        </div>
                                        <div className="p-top__testimonial-info">
                                            <div className="p-top__testimonial-name">
                                                田中 健太
                                            </div>
                                            <div className="p-top__testimonial-role">
                                                フロントエンドエンジニア
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-top__testimonial">
                                    <div className="p-top__testimonial-quote">
                                        "
                                    </div>
                                    <p className="p-top__testimonial-content">
                                        シンプルな操作性が気に入っています。{" "}
                                        <span className="highlight">
                                            他のマッチングサービスと違って、必要な情報だけが表示
                                        </span>
                                        されるので、効率良く案件を探すことができます。
                                    </p>
                                    <div className="p-top__testimonial-author">
                                        <div className="p-top__testimonial-avatar">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                        </div>
                                        <div className="p-top__testimonial-info">
                                            <div className="p-top__testimonial-name">
                                                鈴木 大輔
                                            </div>
                                            <div className="p-top__testimonial-role">
                                                バックエンドエンジニア
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTAセクション（お悩み解決の後） */}
                    <section className="p-top__hero">
                        <h2 className="p-top__title">
                            今すぐ案件を投稿してみましょう
                        </h2>
                        <p className="p-top__subtitle">
                            会員登録は無料です。案件投稿や応募もすぐに始められます。
                        </p>
                        <div className="p-top__buttons">
                            <Link
                                href="/register"
                                className="p-top__button p-top__button--primary"
                            >
                                無料で会員登録する
                            </Link>
                            <Link href="/job-post" className="p-top__button">
                                案件を投稿する
                            </Link>
                        </div>
                    </section>

                    {/* カテゴリーセクション */}
                    <section className="p-top__categories">
                        <h2 className="p-top__categories-title">
                            案件カテゴリーから探す
                        </h2>
                        <div className="p-top__category-list">
                            <div className="p-top__category-item">
                                <div className="p-top__category-icon">
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
                                        <path d="M16 18l6-6-6-6"></path>
                                        <path d="M8 6l-6 6 6 6"></path>
                                    </svg>
                                </div>
                                <div className="p-top__category-name">
                                    フロントエンド
                                </div>
                            </div>

                            <div className="p-top__category-item">
                                <div className="p-top__category-icon">
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
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                        <polyline points="2 12 12 17 22 12"></polyline>
                                    </svg>
                                </div>
                                <div className="p-top__category-name">
                                    バックエンド
                                </div>
                            </div>

                            <div className="p-top__category-item">
                                <div className="p-top__category-icon">
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
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <circle
                                            cx="8.5"
                                            cy="8.5"
                                            r="1.5"
                                        ></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                </div>
                                <div className="p-top__category-name">
                                    デザイン
                                </div>
                            </div>

                            <div className="p-top__category-item">
                                <div className="p-top__category-icon">
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
                                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                        <path d="M2 2l7.586 7.586"></path>
                                        <circle cx="11" cy="11" r="2"></circle>
                                    </svg>
                                </div>
                                <div className="p-top__category-name">
                                    モバイルアプリ
                                </div>
                            </div>

                            <div className="p-top__category-item">
                                <div className="p-top__category-icon">
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
                                        <line
                                            x1="4"
                                            y1="9"
                                            x2="20"
                                            y2="9"
                                        ></line>
                                        <line
                                            x1="4"
                                            y1="15"
                                            x2="20"
                                            y2="15"
                                        ></line>
                                        <line
                                            x1="10"
                                            y1="3"
                                            x2="8"
                                            y2="21"
                                        ></line>
                                        <line
                                            x1="16"
                                            y1="3"
                                            x2="14"
                                            y2="21"
                                        ></line>
                                    </svg>
                                </div>
                                <div className="p-top__category-name">
                                    インフラ
                                </div>
                            </div>

                            <div className="p-top__category-item">
                                <div className="p-top__category-icon">
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
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                    </svg>
                                </div>
                                <div className="p-top__category-name">
                                    ツール開発
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTAセクション */}
                    <section className="p-top__hero u-mt-5">
                        <h2 className="p-top__title">
                            今すぐ案件を探してみましょう
                        </h2>
                        <p className="p-top__subtitle">
                            会員登録は無料です。案件投稿や応募もすぐに始められます。
                        </p>
                        <div className="p-top__buttons">
                            <Link
                                href="/register"
                                className="p-top__button p-top__button--primary"
                            >
                                無料で会員登録する
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            {/* フッター */}
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
                                シンプルに探せて、すぐに応募できます。
                            </p>
                            <div className="l-footer__social">
                                <a href="#" className="l-footer__social-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="l-footer__social-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href="#" className="l-footer__social-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="20"
                                            height="20"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line
                                            x1="17.5"
                                            y1="6.5"
                                            x2="17.51"
                                            y2="6.5"
                                        ></line>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">
                                サービスについて
                            </h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/about"
                                        className="l-footer__link"
                                    >
                                        matchとは
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/terms"
                                        className="l-footer__link"
                                    >
                                        利用規約
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/privacy"
                                        className="l-footer__link"
                                    >
                                        プライバシーポリシー
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/company"
                                        className="l-footer__link"
                                    >
                                        運営会社
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">案件を探す</h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/job-listings?type=onetime"
                                        className="l-footer__link"
                                    >
                                        単発案件
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/job-listings?type=revenue"
                                        className="l-footer__link"
                                    >
                                        レベニューシェア案件
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/job-listings?category=frontend"
                                        className="l-footer__link"
                                    >
                                        フロントエンド案件
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/job-listings?category=backend"
                                        className="l-footer__link"
                                    >
                                        バックエンド案件
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">サポート</h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/faq"
                                        className="l-footer__link"
                                    >
                                        よくある質問
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/guide"
                                        className="l-footer__link"
                                    >
                                        ご利用ガイド
                                    </Link>
                                </li>
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/contact"
                                        className="l-footer__link"
                                    >
                                        お問い合わせ
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
        </>
    );
}
