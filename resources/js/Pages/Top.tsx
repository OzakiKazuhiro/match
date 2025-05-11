import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";
import LogoutLink from "@/Components/LogoutLink";

export default function Top({ auth }: PageProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    // スマホ表示のときのみ履歴管理を適用
    useEffect(() => {
        // スマホ表示かどうかを判定（768px以下をスマホ表示とする）
        const isMobile = window.innerWidth <= 768;

        // スマホ表示かつTOPページの場合のみ履歴を追加
        if (isMobile && window.location.pathname === "/") {
            router.visit("/", {
                preserveState: true,
                preserveScroll: true,
                replace: false,
            });
        }
    }, []);

    // メニューの表示状態が変更されたときの処理
    useEffect(() => {
        if (mobileMenuOpen) {
            // メニューを開く場合
            setMenuVisible(true); // まずDOMに表示
            setAnimating(true); // アニメーション開始
            setTimeout(() => setAnimating(false), 300); // アニメーション終了
        } else if (menuVisible) {
            // メニューを閉じる場合
            setAnimating(true); // アニメーション開始
            setTimeout(() => {
                setMenuVisible(false); // アニメーション後にDOMから削除
                setAnimating(false); // アニメーション終了
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
                !animating // アニメーション中でない場合のみ処理
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
            <Head title="match - エンジニア案件マッチングサービス" />

            {/* ヘッダー */}
            <header className="l-header">
                <div className="l-header__inner">
                    <Link href="/" className="l-header__logo">
                        <span className="l-header__logo-accent">match</span>
                    </Link>

                    {auth?.user && auth?.user.email_verified_at && (
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
                            <span
                                className="l-header__user-name"
                                title={
                                    auth.user.name.length > 10
                                        ? auth.user.name
                                        : ""
                                }
                            >
                                {auth.user.name.length > 10
                                    ? `${auth.user.name.substring(0, 10)}...`
                                    : auth.user.name}
                            </span>
                        </div>
                    )}

                    {auth?.user && !auth?.user.email_verified_at && (
                        <div className="l-header__login-status">
                            <div className="l-header__verification-alert">
                                <Link
                                    href="/verify-email"
                                    className="l-header__verification-link"
                                >
                                    メール認証が未完了です
                                </Link>
                            </div>
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
                                <LogoutLink className="l-header__nav-link">
                                    ログアウト
                                </LogoutLink>
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
                        {auth?.user && auth?.user.email_verified_at && (
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
                                    <div
                                        className="l-header__mobile-user-name"
                                        title={auth.user.name}
                                    >
                                        {auth.user.name.length > 10
                                            ? `${auth.user.name.substring(
                                                  0,
                                                  10
                                              )}...`
                                            : auth.user.name}
                                    </div>
                                    <div className="l-header__mobile-login-status">
                                        ログイン中
                                    </div>
                                </div>
                            </div>
                        )}

                        {auth?.user && !auth?.user.email_verified_at && (
                            <div className="l-header__mobile-verification-alert">
                                <Link
                                    href="/verify-email"
                                    className="l-header__mobile-verification-link"
                                >
                                    メール認証が未完了です
                                </Link>
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

                        {auth?.user && auth?.user.email_verified_at ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="l-header__mobile-link"
                                >
                                    マイページ
                                </Link>
                                <LogoutLink className="l-header__mobile-link l-header__mobile-link--danger">
                                    ログアウト
                                </LogoutLink>
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
                            <span className="u-break-sp">
                                シンプルなエンジニア案件
                            </span>
                            <span className="u-no-break-sp">
                                マッチングサービス
                            </span>
                        </h1>
                        <div className="p-top__service-name">match</div>
                        <p className="p-top__subtitle">
                            エンジニアとアイデア・誰でも簡単につながる
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

                    {/* こんな悩みはありませんか？セクション */}
                    <section className="p-top__problems">
                        <h2 className="p-top__section-title">
                            こんな悩みはありませんか？
                        </h2>
                        <div className="p-top__problem-list">
                            <div className="p-top__problem-item">
                                <div className="p-top__problem-icon">
                                    <img
                                        src="/images/problems/idea-programming.webp"
                                        alt="アイデアと技術の悩み"
                                        width="300"
                                        height="300"
                                    />
                                </div>
                                <p className="p-top__problem-text">
                                    「アイデアはあるけど、技術がなくて形にできない...」
                                </p>
                            </div>
                            <div className="p-top__problem-item">
                                <div className="p-top__problem-icon">
                                    <img
                                        src="/images/problems/hard-to-use-website.webp"
                                        alt="使いづらいサイト"
                                        width="300"
                                        height="300"
                                    />
                                </div>
                                <p className="p-top__problem-text">
                                    「案件サイトは複雑で使いづらい...」
                                </p>
                            </div>
                            <div className="p-top__problem-item">
                                <div className="p-top__problem-icon">
                                    <img
                                        src="/images/problems/not-found-work.webp"
                                        alt="案件が見つからない"
                                        width="300"
                                        height="300"
                                    />
                                </div>
                                <p className="p-top__problem-text">
                                    「希望の案件がなかなか見つからない...」
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* それを解決できるのがこちらです */}
                    <section className="p-top__solution" id="about">
                        <div className="p-top__solution-inner">
                            <h2 className="p-top__section-title p-top__section-title--full-underline">
                                それを解決できるのが
                                <span className="p-top__service-accent">
                                    match
                                </span>
                                です
                            </h2>
                            <p className="p-top__solution-description">
                                <span className="service-accent">match</span>
                                <span className="service-text">は</span>
                            </p>
                            <p className="p-top__concept-highlight p-top__concept-standalone">
                                「シンプルで使いやすい」
                            </p>
                            <p className="p-top__solution-description">
                                をコンセプトにした、エンジニア向け案件マッチングサービスです
                            </p>

                            {/* スマホ表示用の画像 */}
                            <div className="p-top__solution-mobile-image">
                                <img
                                    src="/images/solution/match-solution.png"
                                    alt="matchのソリューション"
                                    width="300"
                                    height="200"
                                />
                            </div>

                            {/* キャッチフレーズ */}
                            <h3 className="p-top__section-title p-top__section-title--catchphrase">
                                単発案件やサービス立ち上げ案の投稿・応募が簡単にできる
                                <br />
                                手軽に案件の投稿・応募ができ、シンプルな操作で案件を見つけることができます
                            </h3>
                        </div>
                    </section>

                    {/* このサービスを使えばこんなメリットが得られます */}
                    <section className="p-top__features">
                        <h2 className="p-top__section-title">
                            <span className="p-top__service-accent">match</span>
                            で簡単にできること
                        </h2>
                        <div className="p-top__feature-list">
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
                                    案件をＸ（旧Twitter）で簡単に共有できます。
                                    気になる案件を多くの人に共有して、マッチングの可能性を広げましょう。
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* なぜなら〜（理由） */}

                    <section className="p-top__solutions">
                        <h2 className="p-top__section-title">
                            <span className="p-top__service-accent">match</span>
                            が選ばれる理由
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

                    {/* 納品までの流れセクション */}
                    <section className="p-top__flow">
                        <h2 className="p-top__section-title">納品までの流れ</h2>
                        <div className="p-top__flow-container">
                            <div className="p-top__flow-item">
                                <div className="p-top__flow-step">step1.</div>
                                <div className="p-top__flow-title">
                                    仕事を発注する
                                </div>
                                <div className="p-top__flow-image">
                                    <img
                                        src="/images/flow/post-job.webp"
                                        alt="仕事を発注する"
                                        width="320"
                                        height="220"
                                    />
                                </div>
                            </div>

                            <div className="p-top__flow-arrow">
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
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>

                            <div className="p-top__flow-item">
                                <div className="p-top__flow-step">step2.</div>
                                <div className="p-top__flow-title">
                                    発注相手を選ぶ
                                </div>
                                <div className="p-top__flow-image">
                                    <img
                                        src="/images/flow/select-partner.webp"
                                        alt="発注相手を選ぶ"
                                        width="320"
                                        height="220"
                                    />
                                </div>
                            </div>

                            <div className="p-top__flow-arrow">
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
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>

                            <div className="p-top__flow-item">
                                <div className="p-top__flow-step">step3.</div>
                                <div className="p-top__flow-title">
                                    納品を待つ
                                </div>
                                <div className="p-top__flow-image">
                                    <img
                                        src="/images/flow/wait-delivery.webp"
                                        alt="納品を待つ"
                                        width="320"
                                        height="220"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-top__flow-register">
                            <Link
                                href="/register"
                                className="p-top__flow-register-button"
                            >
                                無料で登録してはじめる
                            </Link>
                        </div>
                    </section>

                    {/* 実績（人気の案件例）セクション */}
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
                                        Laravelを使用したアパレルブランドのECサイトの構築
                                    </h3>
                                    <p className="p-top__job-desc">
                                        アパレルブランドのECサイトをLaravelで構築していただきます。決済システムの連携やユーザー管理システムの実装が主な業務内容です。
                                    </p>
                                    <div className="p-top__job-footer">
                                        <span className="p-top__job-date">
                                            2日前
                                        </span>
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

                    {/* よくある質問セクション */}
                    <section className="p-top__faq" id="faq">
                        <div className="p-top__container">
                            <h2 className="p-top__section-title">
                                よくある質問
                            </h2>
                            <div className="p-top__faq-list">
                                <div className="p-top__faq-item">
                                    <h3 className="p-top__faq-question">
                                        <span className="p-top__faq-q">Q.</span>
                                        どんな案件が投稿できますか？
                                    </h3>
                                    <div className="p-top__faq-answer">
                                        <span className="p-top__faq-a">A.</span>
                                        <p>
                                            エンジニア向けの案件として、
                                            <strong>単発案件</strong>と
                                            <strong>
                                                レベニューシェア案件
                                            </strong>
                                            の2種類が投稿できます。
                                            Webサイトやアプリケーションなどエンジニアリングに関する案件であれば、
                                            <strong>
                                                職業エンジニアでなくても誰でも
                                            </strong>
                                            案件を投稿できます。
                                        </p>
                                    </div>
                                </div>

                                <div className="p-top__faq-item">
                                    <h3 className="p-top__faq-question">
                                        <span className="p-top__faq-q">Q.</span>
                                        利用には料金がかかりますか？
                                    </h3>
                                    <div className="p-top__faq-answer">
                                        <span className="p-top__faq-a">A.</span>
                                        <p>
                                            matchの会員登録・利用は
                                            <strong>完全無料</strong>
                                            です。案件の投稿、応募、メッセージのやり取りなど、すべての機能を無料でご利用いただけます。
                                        </p>
                                    </div>
                                </div>

                                <div className="p-top__faq-item">
                                    <h3 className="p-top__faq-question">
                                        <span className="p-top__faq-q">Q.</span>
                                        案件への応募方法を教えてください
                                    </h3>
                                    <div className="p-top__faq-answer">
                                        <span className="p-top__faq-a">A.</span>
                                        <p>
                                            案件一覧から興味のある案件を選び、詳細ページで「応募する」ボタンを押すだけです。応募すると案件投稿者に通知が届き、その後、ダイレクトメッセージでやり取りを進めることができます。
                                        </p>
                                    </div>
                                </div>

                                <div className="p-top__faq-item">
                                    <h3 className="p-top__faq-question">
                                        <span className="p-top__faq-q">Q.</span>
                                        パブリックメッセージとダイレクトメッセージの違いは何ですか？
                                    </h3>
                                    <div className="p-top__faq-answer">
                                        <span className="p-top__faq-a">A.</span>
                                        <p>
                                            <strong>
                                                パブリックメッセージ
                                            </strong>
                                            は案件詳細ページで誰でも閲覧できるメッセージで、案件についての質問や情報交換に適しています。一方、
                                            <strong>
                                                ダイレクトメッセージ
                                            </strong>
                                            は案件投稿者と応募者の間で1対1でやり取りするプライベートなメッセージです。具体的な条件交渉や詳細な打ち合わせにご活用ください。
                                        </p>
                                    </div>
                                </div>

                                <div className="p-top__faq-item">
                                    <h3 className="p-top__faq-question">
                                        <span className="p-top__faq-q">Q.</span>
                                        案件の報酬はどのように決まりますか？
                                    </h3>
                                    <div className="p-top__faq-answer">
                                        <span className="p-top__faq-a">A.</span>
                                        <p>
                                            単発案件の場合は、案件投稿時に上限と下限の金額を設定できます（例：5万円〜10万円）。最終的な報酬額は、ダイレクトメッセージでの相談により当事者間で決定してください。レベニューシェア案件の場合は、サービスの収益分配方法について当事者間で取り決めていただきます。
                                        </p>
                                    </div>
                                </div>
                                <div className="p-top__faq-item">
                                    <h3 className="p-top__faq-question">
                                        <span className="p-top__faq-q">Q.</span>
                                        プロフィールの設定は必要ですか？
                                    </h3>
                                    <div className="p-top__faq-answer">
                                        <span className="p-top__faq-a">A.</span>
                                        <p>
                                            必須ではありませんが、案件の成約率を高めるために設定をおすすめします。プロフィール設定では、アイコン画像、名前、自己紹介文の3項目を登録できます。特に自己紹介文では、スキルやこれまでの実績を記載すると良いでしょう。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 最終CTAセクション */}
                    <section className="p-top__hero p-top__final-cta">
                        <h2 className="p-top__title">
                            あなたもmatchで理想の案件を見つけませんか？
                        </h2>
                        <p className="p-top__subtitle">
                            会員登録は無料です。今すぐはじめて、エンジニアとアイデアをつなげましょう。
                        </p>
                        <div className="p-top__buttons">
                            <Link
                                href="/register"
                                className="p-top__button p-top__button--primary"
                            >
                                無料で会員登録する
                            </Link>
                            <Link
                                href="/job-listings"
                                className="p-top__button"
                            >
                                案件を探す
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
                                シンプルに探せて、すぐに応募できます
                            </p>
                        </div>

                        <div>
                            <h3 className="l-footer__heading">
                                サービスについて
                            </h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <Link
                                        href="#about"
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
                            </ul>
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
                            <h3 className="l-footer__heading">サポート</h3>
                            <ul className="l-footer__links">
                                <li className="l-footer__link-item">
                                    <Link
                                        href="/#faq"
                                        className="l-footer__link"
                                    >
                                        よくある質問
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
