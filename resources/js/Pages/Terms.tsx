import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

export default function Terms({ auth }: PageProps) {
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
            <Head title="利用規約 - match" />

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
                            <span>{auth.user.name}</span>
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
                <div className="p-terms__container">
                    <div className="p-terms__header">
                        <h1 className="p-terms__title">利用規約</h1>
                        <p className="p-terms__updated">
                            最終更新日: 2025年4月19日
                        </p>
                    </div>

                    <div className="p-terms__content">
                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第1条（本規約の目的及び適用）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本match利用規約（以下、「本規約」といいます。）は、match（以下「当社」といいます。）が当社ウェブサイト（第2条において定義します。）において、「match」の名称で運営するサービス（以下「当社サービス」といいます。）に関して、当社サービスを提供・運営する当社と利用会員（第2条において定義します。）、及び利用会員へのサービス（第2条において定義します。）の提供を行う者（第2条において「出品者」として定義します。）との間の権利義務関係を定めることを目的とし、当社サービスの利用にかかる一切の取引・関係に適用されます。
                                </p>
                                <p>
                                    当社が当社ウェブサイト上で随時掲載する当社サービスの利用等に関するルール、諸規定、お知らせ等は本規約の一部を構成するものとし、以下本規約内において本規約という場合には、特段の表示のない限り、これらを含むものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第2条（定義）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約において使用する主要な用語の定義は、次のとおりとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        「SNS」とは、英語名でSocial Network
                                        Serviceの略称で、人的又は社会的なネットワークをインターネット上で構築するサービスを意味します。
                                    </li>
                                    <li>
                                        「SNSアカウント」とは、SNSを利用するための利用登録されたアカウントを意味します。
                                    </li>
                                    <li>
                                        「管理ツール」とは、出品者が当社サービスの提供する機能（申込情報の管理、収支状況の確認、出品者著作物等の制作又は公開作業や、利用会員とのコミュニケーション等を含みますがこれに限られません。）を利用するためのウェブツールを意味します。
                                    </li>
                                    <li>
                                        「利用会員」とは、第4条に基づき会員登録を行った個人、法人及びその他の団体を意味します。
                                    </li>
                                    <li>
                                        「出品」とは、当社サービスを利用するために、サービスの内容の詳細情報等を出品者が当社ウェブサイトにおいて公開し、当社サービスを利用することを意味します。
                                    </li>
                                    <li>
                                        「出品者」とは、当社サービスを通じてサービスを出品する利用会員を意味します。
                                    </li>
                                    <li>
                                        「出品者著作物等」とは、出品者が当社ウェブサイトにおいて公開した写真、エッセイ、記事等の著作物、利用会員からの質問等に対する回答、出品者の実績や提供サービス等に関する情報等（出品者が第三者の許諾を得て使用する著作物等を含みます。）を意味します。
                                    </li>
                                    <li>
                                        「出品者登録」とは、当社が別途定める加盟店規約に同意の上、出品者として登録がなされることを意味します。
                                    </li>
                                    <li>
                                        「サービス」とは、当社サービスにおいて、出品者が、サービス提供契約に基づき、利用会員に対して提供する一切の役務（デジタルデータで表現された文章、音楽、画像、映像、データベース又はそれらを組み合わせた情報の集合体の作成、電話相談等、出品者が利用会員から委託された事務処理又は請け負った業務）を意味します。
                                    </li>
                                    <li>
                                        「知的財産権」とは、特許権、特許を受ける権利、実用新案権、実用新案権登録を受ける権利、意匠権、意匠権登録を受ける権利、著作権、商標権その他の知的財産権に関して法令により定められた権利又は法律上保護される利益にかかる権利を意味します。
                                    </li>
                                    <li>
                                        「当社ウェブサイト」とは、当社が「match」の名称で運営するウェブサイト並びにその他の関連ウェブサイト（メールマガジン等当社ウェブサイトより発信される情報を含み、当社ウェブサイトに追加・変更等が生じた場合は、当該追加・変更等後のウェブサイトも含みます。）を意味します。
                                    </li>
                                    <li>
                                        「パスワード」とは、利用会員が会員登録申請時に任意に登録するパスワードを意味し、ログイン時の認証に必要となるものをいいます。
                                    </li>
                                    <li>
                                        「当社サービス」とは、当社が当社ウェブサイトにおいて提供する登録・検索・コミュニケーション機能等の仕組みを介して、出品者がサービスを利用会員に販売し（有償でサービスを提供することを意味します。）、利用会員がこれを購入する（有償でサービスの提供を受けることを意味します。）環境の設定及び提供並びに、当社ウェブサイトにおいて成立したサービス提供契約に係る代金の引渡しに用いる決済手段を提供することを目的としたサービス（当社サービスに追加・変更等が生じた場合は、当該変更等後のサービスも含みます。）を意味します。
                                    </li>
                                    <li>
                                        「ユーザ名」とは、利用希望者（第4条において定義します。）が会員登録申請時に登録情報として当社に提供した登録ニックネーム及びメールアドレスのアカウントを意味し、ログイン時の認証に必要となるものをいいます。
                                    </li>
                                    <li>
                                        「ご利用ガイド」とは、当社ウェブサイト内で提供されるQ&Aや利用方法、ガイドラインなど、当社サービス利用に関するルール等に関する記述の総称であり、本規約の一部を構成するものです。
                                    </li>
                                </ol>
                                <p>
                                    前項に定める用語以外の用語については、本規約の各条項において、必要に応じて適宜定義をするものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第3条（当社サービスの内容）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社サービスにおいて、利用会員が利用できるサービスは次のとおりとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>案件の出品及び販売</li>
                                    <li>出品者が提供する案件の利用及び購入</li>
                                    <li>出品者への質問</li>
                                    <li>
                                        その他当社が随時提供を開始するサービス
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第4条（会員登録）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社サービスにおける利用会員としての利用を希望する者（以下、「利用希望者」といいます。）は、本規約を遵守することに同意し、かつ、当社の定める一定の情報（ウェブフォームより登録された利用会員に関する情報をいい、以下「登録情報」といいます。）を当社の定める方法で、当社に提供することにより、当社サービスの利用にかかる会員登録を申請するものとします。
                                </p>
                                <p>
                                    登録の申請は、当社サービスを利用する個人、法人又はその他の団体自身が行うものとし、真実、正確かつ最新の情報を当社に提供するものとします。
                                </p>
                                <p>
                                    当社は、第1項に基づき登録を申請した者が、以下の各号のいずれかの事由に該当する場合は、当該登録を拒否することができるものとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        本規約に過去に違反し、又は違反するおそれがあると当社が判断した場合
                                    </li>
                                    <li>
                                        当社に提供された登録情報の全部又は一部につき虚偽、誤記、記載漏れがあった場合
                                    </li>
                                    <li>
                                        過去に当社サービスの会員登録取消処分を受けたことがある場合
                                    </li>
                                    <li>
                                        未成年者、成年被後見人、被保佐人又は被補助人のいずれかであり、法定代理人、後見人､保佐人又は補助人の同意等を得ていなかった場合
                                    </li>
                                    <li>
                                        所属する企業又は業界団体の内部規則等に違反し、当該企業又は業界団体から何らかの処分を受けたことがある場合
                                    </li>
                                    <li>
                                        当社サービスとは別の当社が提供するサービスの利用規約等に違反した場合
                                    </li>
                                    <li>
                                        反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味する。以下同様とします。）である、又は資金提供その他を通じて反社会的勢力等の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力等との何らかの交流若しくは関与を行っていると当社が判断した場合
                                    </li>
                                    <li>
                                        その他、当社が会員登録を適当でないと判断した場合
                                    </li>
                                </ol>
                                <p>
                                    利用希望者による当社サービスに関する会員登録が完了した時点で、利用希望者と当社との間で、利用希望者による本規約の規定に基づく当社サービスの利用に関する契約が成立するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第5条（登録情報の変更）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、登録情報に変更があった場合は、遅滞なく、会員用の管理画面を介して当該変更事項を登録するものとします。また、管理画面にて変更できない項目については当社に変更のための連絡をするものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第6条（当社サービスの利用）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、ご利用ガイドの定めに従い、当社サービスを利用するものとします。
                                </p>
                                <p>
                                    当社サービスの利用は、利用会員自身が行うものとし、当社サービスの利用に際し、利用会員は、真実、正確かつ最新の情報を提供するものとします。
                                </p>
                                <p>
                                    利用会員は当社サービスを通じて利用会員が発信する情報につき、一切の責任を負うものとし、当社に何らの迷惑又は損害を与えないものとします。
                                </p>
                                <p>
                                    利用会員が未成年、成年被後見人、被保佐人又は被補助人のいずれかである場合、当社サービスの利用につき、個別の取引にかかる申込を行う際は、必ず事前に親権者その他の法定代理人、後見人､保佐人又は補助人の同意等を得るものとします。また、当社又はサービスの提供業務を履行する出品者より当該同意等につき改めて確認が入る場合があり、利用会員はこれに回答するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第7条（利用停止）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、当社サービスを利用するにあたり、本規約及びご利用ガイドの定めを遵守するものとします。また、当社は、利用会員の行為がこれに違反する場合には、違反事由の内容に応じ、当該利用会員に事前に通知することなく、当社サービスの利用停止、取引の中止措置などを講じることができるものとします。
                                </p>
                                <p>
                                    当社は、当社の責めに帰すべき事由がある場合を除き、前項に定める利用停止、取引の中止措置などにより利用会員に生じた損害から、一切免責されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第8条（個人情報の取得）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社サービス利用の会員登録においては、当社が利用会員の個人情報（登録情報を含みます。）を取得するものとし、当該個人情報につき、当社が別途定めるプライバシーポリシーの定めに従い、取り扱うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第9条（購入手続及びサービス提供契約の成立）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、当社サービスにおいてサービスの購入を希望する場合、当社所定のフォームより購入手続を行うものとします。
                                </p>
                                <p>
                                    サービス提供契約は、利用会員が前項の購入手続を完了した時点で（当社サービスにおいて、購入手続を行ったサービスについて購入者及び出品者がやりとりを行うための画面（以下「トークルーム」といいます。）が設置された時点を指します。）、出品者と当該利用会員との間で成立します（以下サービスを購入した利用会員を「購入者」といいます。）。なお、当社は、サービス提供契約の当事者となるものではなく、サービス提供契約につき、出品者又は購入者のいずれの立場に関する責任も負いません。
                                </p>
                                <p>
                                    利用会員は、出品者との間のサービス提供契約に下請代金支払遅延等防止法又は特定受託事業者に係る取引の適正化等に関する法律が適用される場合には、自らの責任でこれらの法律を遵守するものとし、当社は、利用会員がこれらの法律に違反した場合であっても、これに関して一切の責任を負わないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第10条（納品確認）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、当社の定める方法により、出品者がサービス提供契約に基づき提供するサービスの納品確認を行うことができるものとします。利用会員が、当社が定める方法で出品者に対して納品確認完了の通知を行うことで納品確認に合格したものとし、当該サービスの納品が完了するものとします。
                                </p>
                                <p>
                                    前項に定める納品確認の結果、出品者が提供したサービスがサービス提供契約の内容に不適合であることを発見した場合には、当社が別途定める方法で、出品者に対してサービスの修正依頼をすることができるものとします。
                                </p>
                                <p>
                                    前項の修正依頼を受けた出品者は、サービス提供契約の内容に適合するようサービスを修正し、再度サービスを納品するものとします。
                                </p>
                                <p>
                                    利用会員がサービスの納品後、当社が別途定める期間内に第1項に定める納品確認完了の通知をせず、又は第2項に定める修正依頼を行わない場合、納品確認に合格したものとみなし、納品完了とします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第11条（キャンセル）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    購入者及び出品者は、第9条に定める契約成立後のキャンセル（サービス提供契約の解除を意味します。以下同様とします。）は、当社所定の方法により、これを行うものとします。
                                </p>
                                <p>
                                    前項にかかわらず、第9条第2項による契約成立後、当社所定の期間を経過しても、出品者がトークルームにおいて購入者に対し一切の応答をしないときは、出品者又は購入者の黙示の意思表示に基づき、購入のキャンセルが行われるものとし、両者はこれに異議を唱えないものとします。
                                </p>
                                <p>
                                    購入者は、出品者に対して、トークルームにおいて、サービスの詳細に関する連絡をとり、サービス提供契約の履行を求めることができるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第12条（支払方法と支払時期）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員がサービスを購入する場合、当社の定める方法により、当該サービスについて予め定められた料金（以下「代金」といいます。）を支払うものとします。
                                </p>
                                <p>
                                    購入者が追加で当該サービスについての支払いを行う場合、出品者及び購入者は、代金が追加の支払額を含む金額になることに同意します。
                                </p>
                                <p>
                                    代金の支払いについては、ご利用ガイドに定めるとおりとします。
                                </p>
                                <p>
                                    代金の支払方法は、クレジットカード、その他の当社が当社サービスにおいて利用可能なものとして指定するものとし、クレジットカードを使用する際には、購入者は、必ず本人名義のクレジットカードを使用するものとします。
                                </p>
                                <p>
                                    クレジットカード等の決済手段の利用については、購入者と当該カード会社等との契約条件や利用規約に従うものとします。
                                </p>
                                <p>
                                    利用会員は自己の責任において税務処理を行うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第13条（当社サービスの利用条件）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、第2条に定義する当社サービスの目的の範囲内で、かつ、本規約及びご利用ガイドに反しない範囲において当社サービスを利用することができるものとします。
                                </p>
                                <p>
                                    利用会員は、当社サービスの利用にあたり、以下の各号のいずれかに該当する行為をしてはなりません。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        当社、利用会員及び第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利又は利益を侵害する行為
                                    </li>
                                    <li>法令に違反する行為</li>
                                    <li>公序良俗に反する行為</li>
                                    <li>
                                        所属する企業又は業界団体の内部規則等に違反する行為
                                    </li>
                                    <li>
                                        特定の法人、団体又は個人を非難又は誹謗中傷する行為
                                    </li>
                                    <li>
                                        政治的思想を含む情報を提供する行為及び政治的な勧誘を行う行為
                                    </li>
                                    <li>
                                        選挙運動に該当する行為及びそのおそれのある行為
                                    </li>
                                    <li>
                                        宗教的思想を含む情報を提供する行為及び宗教的な勧誘を行う行為
                                    </li>
                                    <li>
                                        当社サービスと競合するサービス等を宣伝する行為
                                    </li>
                                    <li>
                                        不正アクセス、改ざん及びコンピューター・ウィルスや有害なコンピューター・プログラム等により当社ウェブサイトを攻撃する行為
                                    </li>
                                    <li>
                                        出品者又は購入者の判断に錯誤を与えるおそれのある行為
                                    </li>
                                    <li>
                                        全く購入する意図がないにもかかわらずサービスの購入手続をする行為
                                    </li>
                                    <li>
                                        不当に情報を操作することを目的として利用する行為
                                    </li>
                                    <li>
                                        不当な要求を執拗に繰り返すなどして、出品者又は購入者による応答や対応を強要する行為
                                    </li>
                                    <li>
                                        当社サービスを介して申込み、リクエスト、依頼、問い合わせ、打診、連絡その他接触を持つに至った利用会員との間で、当社サービスを介さずに直接取引をする行為
                                    </li>
                                    <li>
                                        当社サービスの運営及び当社の業務を妨害する行為
                                    </li>
                                    <li>その他当社が不適切と判断する行為</li>
                                </ol>
                                <p>
                                    当社は、利用会員の当社サービスの利用時の行為が前項各号のいずれかに該当し、又は該当するおそれがあると判断した場合には、利用会員に事前に通知することなく、当該行為の全部又は一部を停止させ、又は当該行為により当社ウェブサイトに掲載された情報の全部又は一部を削除する等かかる違反行為を排除するあらゆる措置を講じることができるものとします。当社は、当社の責めに帰すべき事由がある場合を除き、かかる停止、削除等の措置を講じたことにより利用会員に生じた損害から、一切免責されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第14条（利用等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社サービスに関する集計データ並びに利用会員に関する集計データにかかる一切の権利は当社に帰属するものとし、当社は、これらのデータを当社の裁量により利用・公表等できるものとします。
                                </p>
                                <p>
                                    当社は、利用会員が当社サービスの利用に際して当社ウェブサイトに掲載・送信した表現物につき、当社サービスの広告・宣伝等のため、無償で複製、公衆送信、譲渡、翻案及び翻訳等の利用を行うことができるものとします。
                                </p>
                                <p>
                                    利用会員は、出品者がサービスの説明やサービスの提供過程において明示的に指定した場合を除き、自ら使用するためにのみ、出品者著作物等を利用できるものとします。また、利用会員が、自らが提供を受けたサービスを、転売目的のために購入し、譲渡する行為は禁止します。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第15条（登録取消）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、利用会員が以下の各号いずれかの事由に該当する場合には、事前に通知又は催告することなく、当該利用会員について当社サービスの利用を一時的に停止し、又は会員登録を取り消すことができるものとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        本規約のいずれかの条項に違反した場合
                                    </li>
                                    <li>
                                        当社に提供された登録情報の全部又は一部につき虚偽、誤記又は記載漏れが判明した場合
                                    </li>
                                    <li>
                                        過去に利用会員の登録取消処分を受けたことがあることが判明した場合
                                    </li>
                                    <li>
                                        利用会員が当社サービスの運営を妨害した場合
                                    </li>
                                    <li>
                                        利用会員が最後にログインした日から3年が経過した場合
                                    </li>
                                    <li>
                                        支払停止若しくは支払不能となり、又は破産手続開始の申立てがあった場合
                                    </li>
                                    <li>
                                        自ら振出し、若しくは引受けた手形又は小切手につき、不渡りの処分を受けた場合
                                    </li>
                                    <li>
                                        差押、仮差押、仮処分、強制執行を受けた場合
                                    </li>
                                    <li>租税公課の滞納処分を受けた場合</li>
                                    <li>死亡した場合</li>
                                    <li>第4条第3項各号に該当する場合</li>
                                    <li>
                                        その他当社が当社サービスの会員登録の継続が適切でないと判断した場合
                                    </li>
                                </ol>
                                <p>
                                    利用会員は、原則として、いつでも当社の定める方法及び手順により当社に通知することで、会員登録の取消を申し出ることができるものとします。但し、サービス提供契約に基づく債権債務関係が発生している場合、会員登録取消は、当該債権債務関係につき何らの影響も及ぼさないものとします。
                                </p>
                                <p>
                                    当社は、当社の責めに帰すべき事由がある場合を除き、前項に基づくサービスの利用の停止及び会員登録の取消により利用会員が被る損害について一切免責されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第4章　当社サービスを利用する出品者に関する規約
                            </h2>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第16条（出品）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    出品者は、加盟店規約第3条に基づき当社との間で加盟店契約を締結し、出品者登録が完了した後、ご利用ガイド「ルールとマナー」で定める出品基準（以下、単に「出品基準」といいます。）に基づき、ご利用ガイド「サービスを出品したい」で定める手続に従って、出品を行うこととします。出品基準は随時変更されるものとし、出品者は、出品を行う度に、出品基準を確認しなければならないものとします。
                                </p>
                                <p>
                                    出品者は、サービスの代金を、サービスのカテゴリ毎に定められた当社所定の価格の選択肢の中から決めるものとします。当社所定の選択肢以外の価格での販売は認められません。但し、当社が認めた出品者に限り、サービスの代金を当社所定の範囲内で自由に決めることができる場合があります。
                                </p>
                                <p>
                                    当社は、出品者による第1項に定める出品後、サービスの詳細情報、サービスの品質及び内容（名称、価格、写真等を含みます。）について、審査を行うものとします。出品者は審査にあたり、当社が出品者に対しサービスに関する情報の提供を求めたときは、これに応じなければなりません。出品者がこれに応じない場合、又は出品基準順守に疑義が生じた場合、当社は、出品者に対する事前通知をすることなく、当該審査の対象となったサービスの出品を一時停止し、又は削除することができるものとします。
                                </p>
                                <p>
                                    当社は、出品が次の各号のいずれかに該当すると判断した場合には、出品を取消すことができるものとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>出品基準に違反する場合</li>
                                    <li>法令又は公序良俗に反する場合</li>
                                    <li>
                                        出品者の所属する企業又は業界団体の内部規則等に違反する場合
                                    </li>
                                    <li>
                                        特定の法人、団体又は個人を非難又は誹謗中傷する内容を含む場合
                                    </li>
                                    <li>
                                        第三者の個人情報の売買又は譲受にあたる場合、又はそれらのおそれのある場合
                                    </li>
                                    <li>
                                        当社、利用会員その他第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利又は利益を侵害又は侵害を助長する内容を含む場合
                                    </li>
                                    <li>政治的思想を含む場合</li>
                                    <li>
                                        選挙運動に該当する場合及びそのおそれのある場合並びにそれを支援するものである場合
                                    </li>
                                    <li>
                                        議員又は候補者の当選又は落選を目的とする場合及びそのおそれのある場合並びにそれを支援するものである場合
                                    </li>
                                    <li>
                                        公職選挙法に抵触する場合及びそのおそれのある場合
                                    </li>
                                    <li>宗教的思想を含む場合</li>
                                    <li>
                                        利用会員の目的と合致しない一般広告、情報を提供する行為及び利用会員に誤解又は損害等を与えるおそれのある情報を含む場合
                                    </li>
                                    <li>
                                        当社サービスと競合するサービス等の宣伝する情報を含む場合
                                    </li>
                                    <li>
                                        利用会員の目的と合致しない外部ウェブサイトへのハイパーリンクを含む場合
                                    </li>
                                    <li>
                                        コンピューター・ウィルスや有害なコンピューター・プログラム等を含む場合
                                    </li>
                                    <li>
                                        猥褻な情報又は青少年に有害な情報を含む場合
                                    </li>
                                    <li>異性交際に関する情報を含む場合</li>
                                    <li>その他、当社が不適切と判断する場合</li>
                                </ol>
                                <p>
                                    当社は、当社の責めに帰すべき事由がある場合を除き、第3項に定める当社による出品の停止若しくは削除又は前項に定める当社の出品取消により、出品者が損害を被ったとしても、何らの賠償責任も負いません。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第17条（購入者に係る振込申請及び手数料）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    出品者と購入者との間で、サービス提供契約が成立した場合における、購入者から出品者に対する当該サービス提供契約に係る代金の支払等については、本条に定めるところによるものとします。
                                </p>
                                <p>
                                    購入者による出品者に対する代金の支払いは、当社が出品者に代わり当該代金を受領し、それを当社が出品者に引渡すことその他当社が指定する方法により行われるものとし、当社が代金を受領した時点その他当社が指定した時点で、購入者の出品者に対する代金の支払いは完了したものとします。
                                </p>
                                <p>
                                    購入者は、当社サービスにおいてサービスの購入を行う際、当社に対し、手数料として代金相当額に当社が定める手数料率を乗じた金額を当社が定める方法により支払うものとします。
                                </p>
                                <p>
                                    出品者は、本条において、本規約に定める条件に従い、当社が指定する決済事業者及び収納代行業者に対し、購入者から支払われる代金を代理受領する権限を付与するものとします。さらに、出品者は、当社が決済事業者又は収納代行業者との間で締結する決済サービスに関する契約により必要となる場合には、代金債権を当社へ譲渡することに同意します。
                                </p>
                                <p>
                                    出品者登録は無料とします。有料化への変更等が生じた場合は、当社は、当社が定める方法により出品者に対し事前に通知するものとします。
                                </p>
                                <p>
                                    出品者は、当社に対し、手数料として、代金相当額に当社が定める手数料率を乗じた金額を支払うものとします。当該手数料の支払いは、トークルームのクローズ（当社が別途定める「ご利用ガイド」その他において当社が別途定める時点を意味します。以下同じ。）時点で、当該時点での代金相当額の総額から、当該代金相当額に対応する手数料を差し引く方法により行うものとします。
                                </p>
                                <p>
                                    振込の時期は、振込申請日の属する週の翌週木曜日に登録銀行口座に振り込むものとします。
                                </p>
                                <p>
                                    代金相当額、振込金額等の支払いに関する情報は、個別の出品者毎の管理ツールにて確認することができます。
                                </p>
                                <p>
                                    登録銀行口座に誤りがあった場合、当社は、原則として、所定の組戻し手数料を振込金額から減算して振り込みます。
                                </p>
                                <p>
                                    振込金額が当社指定の基準金額（以下、「振込可能基準額」といいます。）を下回っている場合、原則として振込申請はできないものとします。但し、出品者登録の取消や失効の際は、振込金額が振込可能基準額を下回っている場合においても、代金相当額から手数料及び所定の銀行振込手数料を差し引いた振込金額が1円以上となる場合は振込申請を可能とします。
                                </p>
                                <p>
                                    出品者登録の取消や失効の時点において、振込申請をすることが可能な代金がある場合には、出品者は、取消や失効の時点から1ヶ月間以内に、振込申請を行うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第18条（当社サービスの利用に係る禁止事項）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    出品者は、当社サービスの利用にあたり、第13条第2項各号の事由に加え、次の各号のいずれかに該当する行為を行ってはならないものとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        利用会員の目的と合致しない一般広告、情報を提供する行為及び利用会員に誤解又は損害等を与えるおそれのある行為
                                    </li>
                                    <li>
                                        当社が特別に許可をする当社ウェブサイト内の所定のスペースを除き、出品者並びにそれらの親会社、子会社及び取引先等の第三者のメールアドレス又は電話番号等の連絡先を掲載し又は宣伝する行為及びこれらに類する行為
                                    </li>
                                    <li>
                                        利用会員に関する個人情報を利用会員から承諾を得た範囲を超えて、利用、提供又は開示等をする行為
                                    </li>
                                    <li>
                                        当社サービスにより知り得た情報（公知の情報を除きます。）を当社サービスの目的の範囲外で利用する行為
                                    </li>
                                    <li>
                                        当社ウェブサイト上に掲載する情報の全部又は一部に虚偽の表示を行う行為
                                    </li>
                                    <li>
                                        その他、当社が不適切と判断する一切の行為
                                    </li>
                                </ol>
                                <p>
                                    当社は、前項に反する又は反するおそれがある行為を発見した場合、出品者へ事前に通知することなく、掲載情報の全部又は一部の削除等当該行為の是正及び出品者登録の取消等必要な対応を講じることができるものとします。
                                </p>
                                <p>
                                    前項に定める当社の対応により、出品者が損害を被ったとしても、当社の責めに帰すべき事由がある場合を除き、当社は当該損害につき何らの賠償責任も負いません。
                                </p>
                                <p>
                                    出品者は、当社サービスの利用にあたり、利用会員からの問合せ及び商談の打診等に対し、迅速かつ誠実な対応をするものとします。
                                </p>
                                <p>
                                    出品者は、当社サービスを通じて成立した利用会員とのサービス提供契約に基づく義務を、当該契約に定める条件に従い履行するものとします。なお、万が一、当該債務の履行について問題が生じた場合には、直ちにその内容を当社に通知するものとします。
                                </p>
                                <p>
                                    当社は、出品者の当社サービスの利用時の行為が第1項に反する又は反するおそれがある場合その他当社が必要と判断した場合には、メッセージ及び通話内容を閲覧又は確認することができるものとし、出品者は予めこれに同意するものとします。
                                </p>
                                <p>
                                    当社は、当社サービスの運営及び保守管理並びに当社の事業上で必要と判断した場合、出品者の当社サービスの利用履歴、その他出品者と利用会員間における情報授受の内容、質問、利用会員と出品者の通話内容、当社ウェブサイト掲載物、出品者著作物等などを知得及び利用する場合があります。
                                </p>
                                <p>
                                    サービス提供契約が、下請代金支払遅延等防止法又は特定受託事業者に係る取引の適正化等に関する法律の適用を受ける契約である場合、利用会員は、下請代金支払遅延等防止法第3条第1項に規定される書面又は特定受託事業者に係る取引の適正化等に関する法律第3条第1項に規定される書面を、電磁的方法で提供を受けることを承諾するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第19条（権利帰属）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社ウェブサイト及び当社サービスに関する知的財産権は、全て当社又は出品者を含む適法な権利者に帰属するものとし、利用会員としての登録の許可は、利用会員に対して、当社又は出品者を含む適法な権利者の有する当社ウェブサイト及び当社サービスに含まれる知的財産権の利用を許諾するものではありません。
                                </p>
                                <p>
                                    出品者は、利用会員に対し、出品者著作物等につき、利用会員自らの使用のために、自由に利用（複製、複写、改変、第三者への再許諾その他のあらゆる利用を含みます。）することのできる権利を許諾するものとします。
                                </p>
                                <p>
                                    当社ウェブサイト等における利用会員からの質問等にかかる知的財産権は、当該利用会員に帰属するものであり、出品者は、自己が回答したものであっても、利用会員からの質問等を自らが運営するウェブサイト等において複製、公衆送信等の利用を行うことはできないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第20条（肖像権等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    出品者は、当社が当社ウェブサイト及びパートナーメディアをはじめ、オンライン・オフラインの別を問わない任意の媒体において、当社サービスに出品者登録された出品者の写真、氏名（ペンネーム等の変名も含みます。以下、本条において同様とします。）、経歴その他登録情報の内容（以下「出品者プロフィール情報」といいます。）を公開することを予め承諾するものとし、当社は期間、態様を問わず、無償にて任意の目的（公衆送信、放送、当社サービスの広告・宣伝等を含みますが、これらに限られません。）で、出品者プロフィール情報を利用（第三者への使用許諾を含みます。）できるものとします。
                                </p>
                                <p>
                                    前項に定める当社による出品者プロフィール情報の利用につき、出品者に生じた損害について、当社の責めに帰すべき事由がある場合を除き、当社は一切責任を負わないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第21条（権利等の保証）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    出品者は、出品者による当社サービスの利用、本規約第14条、第19条及び第20条に基づく当社による利用を含む当社ウェブサイト掲載物及び出品者プロフィール情報の利用、その他本規約に基づく出品者の権利の行使又は義務の履行が、法令、出品者の所属する業界団体の規則等又は出品者と第三者との契約に違反せず、また第三者の知的財産権、人格権、名誉権、プライバシー権、パブリシティ権その他一切の権利を侵害しないことを保証します。
                                </p>
                                <p>
                                    出品者は、出品者著作物等に関して、次のとおり保証します。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        法令、出品者の所属する業界団体の規則又は第三者との契約に違反していないこと
                                    </li>
                                    <li>公序良俗に違反していないこと</li>
                                    <li>猥褻な内容を含まないこと</li>
                                    <li>
                                        特定の法人、団体及び個人を攻撃し、又は誹謗中傷していないこと
                                    </li>
                                    <li>
                                        他人のプライバシーを侵害していないこと
                                    </li>
                                    <li>虚偽の内容を含まないこと</li>
                                    <li>差別的な表現を含まないこと</li>
                                    <li>
                                        出品者著作物等の公表等が犯罪行為とならないこと
                                    </li>
                                </ol>
                                <p>
                                    出品者は、前2項に反する事実を発見した場合には直ちに当社に通知するものとし、前2項に関して又は出品者の当社サービスの利用に起因して第三者から異議、苦情の申立あるいは実費又は対価の請求、損害賠償請求等があった場合には、当社に直ちに通知するとともに、弁護士費用等を含めて出品者の費用と責任においてこれを処理するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第5章 案件マッチング
                            </h2>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第22条（案件マッチングへの適用）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本章は、「案件マッチング」に関して、案件マッチングを提供・運営する当社と利用会員との間の権利義務関係を定めることを目的とし、案件マッチングの利用にかかる一切の取引関係に適用されます。
                                </p>
                                <p>
                                    当社が、「案件マッチング」の名称で運営するウェブサイト並びにその他の関連ウェブサイト(メールマガジン等の当社のウェブサイトより発信される情報を含み、追加・変更等が生じた場合は、当該追加・変更等後のウェブサイトも含みます。)上で、随時掲載する案件マッチングの利用等に関するルール、諸規定、お知らせ等（以下、本条において「ルール等」といいます。）は、本規約の一部を構成するものとし、以下、本規約内において本規約という場合には、特段の表示のない限り、これを含むものとします。
                                </p>
                                <p>
                                    前項に定めるウェブサイトにおいて別途ルール等が定められており、本規約と矛盾抵触する異なる定めがある場合、当該ルール等の内容が優先して適用されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第23条（個別契約の成立）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    案件マッチングを利用するためには、本規約に基づく利用会員としての地位を有している必要があります。
                                </p>
                                <p>
                                    利用会員は、当社が別途指定する方法により、クライアントとして受託業務を行う業務従事者を募集することができるものとします。
                                </p>
                                <p>
                                    当社は、利用会員に対して、受託業務を紹介することができます。
                                </p>
                                <p>
                                    第2項に定める募集の掲載に係る方法、内容、時期、掲載場所、その他一切の事項については、当社の裁量によるものとし、クライアントはこれに予め同意するものとします。
                                </p>
                                <p>
                                    利用会員は、当社に対して、前項に基づいて掲載され、又は当社により紹介された受託業務について、業務従事者として受託することの申し込みができるものとします。当該利用会員は、当該申込において、当社が別途指定する情報を提供するものとします。
                                </p>
                                <p>
                                    当社及びクライアントは、前項に基づく利用会員からの受託業務の受託の申込があった場合、当該利用会員に対して、当該受託業務を委託するか否かについて審査するものとします。受託業務の受託に申し込んだ利用会員は、当社及びクライアントによる審査の方法(クライアントとの間で面談を設定すること、その他一切の方法を含みます。)に従うものとします。当該利用会員が当社の審査に係る指示に従わなかったことにより当該利用会員が当該受託業務を受託できなかったこと、その他当該利用会員に対して何らかの不利益が生じたとしても、当社は当該利用会員に対して何らの責任を負わないものとします。
                                </p>
                                <p>
                                    前項による当社及びクライアントによる審査の結果、当社及びクライアントが受託業務に申し込んだ利用会員に対して受託業務を委託することを、当社及びクライアントの裁量により決定した場合には、当該利用会員に対して、当社が別途指定する方法にてその旨を通知するものとします。当該通知を行った時点で、第2項に定める募集の内容及び本規約に基づき、1当社と当該利用会員との間で、受託業務に係る個別契約(業務従事者)が成立するとともに、2当社とクライアントとの間で、受託業務に係る個別契約(クライアント)が成立するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第24条（業務従事者の管理等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    業務従事者は、受託業務を履行するにあたり、受託業務のスケジュール調整、稼働報告、安全衛生管理等に関する管理については、業務従事者自らが行うものとし、また、受託業務の履行にあたっては、業務従事者に合理的な範囲内の裁量をもって行われるものとします。
                                </p>
                                <p>
                                    クライアントは、業務従事者に対し、受託業務に関する指示その他の指揮命令を行ってはならないものとします。業務従事者は、クライアントからかかる指揮命令等を受けた場合、直ちに当社に通知するものとします。クライアントが業務従事者に対して受託業務に関する指示その他の指揮命令を行ったことにより、当社又は業務従事者に何らかの損害が生じた場合には、クライアントは、当社に対して、当該損害を賠償する義務を負うものとします。
                                </p>
                                <p>
                                    業務従事者が受託業務の性質上、クライアントの事務所等に立ち入る必要がある場合、クライアントは、業務従事者がクライアントの建物内の場所、従業員控室、更衣室、ロッカー、電気、水道、ガス等について利用することを認めるものとします。なお、かかる場合、当社は、業務従事者に対して、クライアントの事務所等内のルールを遵守させるものとします。クライアントは、あらかじめ必要な事務所等のルール等について、当社に連携するものとします。
                                </p>
                                <p>
                                    業務従事者は、個別契約(業務従事者)について、自らの費用と責任において、善良なる管理者としての注意義務をもって、誠実に業務を遂行するものとします。業務従事者は、当該業務遂行に関して当社が何らかの損害を被った場合、当該損害を賠償する責任を負うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第25条（業務従事者の変更等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    クライアントは、業務従事者の履行に関して明らかに不履行が認められる場合、不履行の内容を具体的に示したうえで、業務従事者の変更を当社に対して求めることができるものとします。
                                </p>
                                <p>
                                    前項の申し出があった場合、当社は、業務従事者の履行内容について確認のうえ、明らかに不履行があると判断した場合、適切な者に業務従事者を変更することができるものとします。なお、適切な業務従事者が見つからない場合、当社は、特段の負担なくクライアントとの間で個別契約(クライアント)を将来に向かって解除することができるものとし、解除時点までにおける受託業務の履行割合に応じてクライアントに委託料を請求することができるものとし、クライアントは、当該請求に基づき当社に対して当該委託料を支払う義務を負うものとします。
                                </p>
                                <p>
                                    当社は、当社の責に帰すべき事由以外の事由により業務従事者による受託業務の全部又は一部の遂行が不能又は困難となった場合、業務従事者に通知することにより、特段の負担なく個別契約(クライアント)を将来に向かって解除することができるものし、解除時点までにおける受託業務の履行割合に応じて契約者に委託料を請求することができるものとし、クライアントは、当該請求に基づき当社に対して当該委託料を支払う義務を負うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第26条（直接契約の禁止）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    クライアントは、当社の事前の書面による承諾なく、利用会員としての地位にある間及び利用会員としての地位を喪失してから3年間は、当社の役職員、又は、利用会員のうち、案件マッチングにおいて当該クライアントとの関係で、業務従事者としての地位を有している者、過去業務従事者としての地位を有したことがある者、若しくは受託業務に応募したことがある者(本章において、以下、総称して「業務従事者等」といいます。)との間で、直接、業務委託契約等(名称の如何を問わず、一定の業務を委託する契約を意味します。)を締結してはならないものとします。
                                </p>
                                <p>
                                    前項に違反して、クライアントが業務従事者等との間で、直接、業務委託契約等を締結した場合、違約金として、当該業務委託契約等に係る委託料の1年分に相当する額を当社に支払うものとします。但し、違約金を超える損害が発生した場合、かかる超過分についても、クライアントは当社に対して支払う義務を負うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第27条（業務報告）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、クライアントの求めに応じて、受託業務の履行状況その他クライアントが求める事項について、業務従事者に確認のうえ、必要な範囲でクライアントに報告するものとします。業務従事者は、当社から受託業務の履行状況に関する報告を求められた場合、直ちに当社の求める事項について報告するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第28条（クライアントによる当社に対する業務委託料の支払等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    クライアントは、当社との間で個別契約(クライアント)が成立した場合、当該個別契約(クライアント)に基づき、当社に対して、個別契約(クライアント)に基づく受託業務の対価(本章において、以下「業務委託料(クライアント)」といいます。)を支払う義務を負うものとします。
                                </p>
                                <p>
                                    業務委託料(クライアント)は、毎月末日で締め、当社が発行する請求書に基づき翌月末日までに支払うものとします。但し、当社がクライアントに対して、業務委託料(クライアント)を受託業務開始日の前月末日までに支払うことを請求した場合、クライアントは、受託業務開始に先立って、前条に定める業務委託料(クライアント)及びこれにかかる消費税相当額を当社の指定する金融機関口座へ振込み支払うものとします。なお、振込みに要する費用については、クライアントの負担とします。
                                </p>
                                <p>
                                    クライアントは、当社に対する業務委託料(クライアント)の支払を遅延した場合には、遅延日数に対し、その遅延した時点における法定利率を乗じた遅延損害金を支払うものとします。
                                </p>
                                <p>
                                    経済状況の変化、物価の上昇、法令の変更に基づく受託業務内容の変更、その他業務委託料(クライアント)の変更を必要とする事由が生じた場合は、契約期間中であっても、当社はクライアントと協議の上、業務委託料(クライアント)を変更することができるものとします。
                                </p>
                                <p>
                                    クライアントは、クライアントの注文又は指図により当社が受託業務以外の業務等を受託処理した場合は、当社の請求に従って別途精算するものとします。
                                </p>
                                <p>
                                    当社は、受託業務の遂行のために必要となる資材費、旅費、宿泊費その他の諸費用が、業務委託料(クライアント)とは別に発生する場合、別途クライアントに請求することができるものとし、この場合の精算については第1項に準ずるものとします。
                                </p>
                                <p>
                                    個別契約(クライアント)又は個別契約(業務従事者)の定めにより、クライアントが、業務委託料(クライアント)を、受託業務開始前に支払う必要がある場合、当社はかかる業務委託料(クライアント)の支払いが完了したことをもって受託業務を開始するものとします。万一、かかる支払いがない場合、当社は受託業務を履行しないことができるものとし、履行しないことで当社の債務不履行その他の責任は発生しないものとします。
                                </p>
                                <p>
                                    本章に定める場合の他、個別契約(クライアント)が解除その他の事由により契約期間の途中で終了したときであっても、当社は、クライアントに対し、受託業務の履行割合に応じて、業務委託料(クライアント)を請求できるものとし、クライアントは、当該請求に基づき当社に対して委託料を支払う義務を負うものとします。但し、当該終了がクライアントの責めに帰すべき事由によるときは、クライアントは業務委託料(クライアント)の全額を支払うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第29条（当社による業務従事者に対する報酬の支払い）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    業務従事者は、個別契約(業務従事者)に基づく当月の稼働について当月末日締めで、締日が属する月の翌月1営業日までに、個別契約(業務従事者)に基づく業務委託料(本章において、以下、「業務委託料(業務従事者)」といいます。)についてとりまとめ、当社に請求するものとします。
                                </p>
                                <p>
                                    当社は、前項に基づく請求内容を確認のうえ、不明点等があれば適宜、業務従事者に確認できるものとし、確認があった場合、遅滞なく業務従事者は応じるものとします。
                                </p>
                                <p>
                                    当社は、第1項に基づく請求に異議のない場合、業務従事者に対し、締日が属する月(以下、「対象月」といいます。)の翌月末日までに、業務委託料(業務従事者)を、業務従事者の指定する金融機関口座に振り込み支払うものとします。また、業務従事者が適格請求書発行事業者の場合、当社に登録番号を共有するものとし、かかる登録番号を共有した対象月以降に限り、報酬に別途これにかかる消費税相当額を加算して支払うものとします(但し、登録番号が有効な期間中に限ります。)なお、振込みに要する費用については、当社の負担とします。
                                </p>
                                <p>
                                    業務従事者は、受託業務の遂行のために必要となる資材費、旅費、宿泊費その他の諸費用が、業務委託料(業務従事者)とは別に発生する場合、あらかじめ当社の承諾を得るものとし、承諾を得られたものについて、業務委託料(業務従事者)とは別に当社に請求することができるものとし、この場合の精算については第1項に準ずるものとします。
                                </p>
                                <p>
                                    個別契約(業務従事者)が解除その他の事由により契約期間の途中で終了したとき(クライアントの請求で業務従事者の変更があった場合を含みます。)は、業務従事者は、当社に対し、受託業務の履行割合に応じて、業務委託料(業務従事者)を請求できるものとします。この場合、業務従事者及び当社は、受託業務の履行割合及び支払うべき報酬の額につき誠実に協議するものとします。
                                </p>
                                <p>
                                    業務従事者は、当社に適格請求書発行事業者であることを共有した後、適格請求書発行事業者でなくなった場合、直ちに当社に連絡するものします。業務従事者がかかる連絡を怠ったことにより、当社が業務従事者に消費税相当額を支払っていた場合、当社は業務従事者に対してかかる消費税相当額の返金を求めることができ、業務従事者は直ちに返金するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第30条（設備、機械、工具及び消耗資材、資料の提供）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    クライアントは、当社及び業務従事者の受託業務の処理にあたって必要な機器、サービス等がある場合、クライアントの責任と費用負担において用意するものとします。
                                </p>
                                <p>
                                    クライアントは、当社が受託業務を履行するにあたり必要となる資料について、クライアントの判断において、適宜当社に開示するものとし、当社は業務従事者に開示することができるものとします。なお、クライアントが適切な時期に必要な資料を開示しないことによって、受託業務が中断又は遅滞しても、当社はかかる中断又は遅滞について一切の責任を負わないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第31条（知的財産権等の帰属）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    受託業務又は受託業務に基づく成果物に関する知的財産権(著作権法第21条から第28条に定める権利を含みます。本章において、以下、同様とします。)及び所有権について、当社と業務従事者との間については、発生と同時に業務従事者から当社に帰属するものとし、当社とクライアントとの間では、業務委託料(クライアント)が完済された時点(業務委託料(クライアント)が前払いである場合は、業務委託完了時)をもって、当社からクライアントに移転するものとします。但し、受託業務開始前より当社、業務従事者又は第三者が保有する知的財産権については、当社、業務従事者又はかかる第三者に引き続き留保されるものとします。
                                </p>
                                <p>
                                    クライアントに納品された受託業務に基づく成果物に、当社、業務従事者又は第三者が保有する知的財産権が含まれる場合、クライアントが成果物を通常の用法で自己のために使用する限り、使用することができるものとし、また、業務従事者はかかる使用について同意するものとします。
                                </p>
                                <p>
                                    当社及び業務従事者は、第1項の著作権に関し、クライアントに対して、著作者人格権を行使しないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第32条（ロゴ等の利用）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    クライアントは、当社に対して、クライアントの社名及びロゴについて、受託業務にかかる取引事例として紹介するため、当社のホームページ、事業活動に関する紹介資料(パンフレット、セミナー資料等)、その他クライアント及び当社協議の上定めたものにおいて使用することを許諾します。ただし、クライアントが、当社に対して、事前に書面(電子メールを含みます。)による不許可の通知をした場合はこの限りではありません。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第33条（リモートワーク実施時の規則遵守）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    業務従事者が業務を遂行するにあたりリモートワークを実施する際は、関係する規定を遵守するものとします。
                                </p>
                                <p>
                                    業務従事者は、リモートワークを実施する際は、当社が提示する情報セキュリティ要件を遵守するものとします。
                                </p>
                                <p>
                                    前項に加え、業務従事者は、みだりに第三者から作業画面をのぞかれないような環境でのみ業務を行うこととします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第34条（個別契約の解約等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    クライアント又は当社が、個別契約（クライアント）の有効期間中に個別契約（クライアント）を解約しようとする場合は、30日前までに書面をもってその旨を相手方に通知することにより、クライアント及び当社は個別契約（クライアント）を解約することができるものとします。但し、個別契約（クライアント）の解約が相手方に不利な時期である場合は、解約を行った当事者は、相手方に生じた損害を賠償しなければならないものとします。
                                </p>
                                <p>
                                    当社は、業務従事者に対し、個別契約(業務従事者)の有効期間中に個別契約(業務従事者)を解約しようとする場合、30日前までに書面をもってその旨を業務従事者に通知することで、個別契約(業務従事者)を解約することができます。なお、かかる解約に伴う損害の負担については、当社及び業務従事者は協議するものとします。
                                </p>
                                <p>
                                    クライアント又は業務従事者が本規約第1章から第6章の規定に基づき利用会員としての地位を喪失した場合、当社は当該クライアント又は業務従事者に関する個別契約(クライアント)及び個別契約(業務従事者)を、特段の負担を負うことなく直ちに解除できるものとします。なお、疑義を避けるために付言すると、クライアント又は業務従事者の一方が利用会員としての地位を喪失した場合であっても、当該クライアント又は業務従事者に関連する個別契約(クライアント)及び個別契約(業務従事者)の全てを解除できるものとします。
                                </p>
                                <p>
                                    クライアント又は業務従事者が本規約第1章から第6章の規定に基づき利用会員としての地位を喪失した場合であっても、前項に基づき個別契約(クライアント)又は個別契約(業務従事者)が解除されない限り、本規約の規定は、個別契約(クライアント)又は個別契約(業務従事者)に係る受託業務の遂行に必要な限りにおいて、当社、クライアント及び業務従事者との間で効力を有するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第35条（他の章の規定の準用）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約において別途定める場合に加えて、第8章に定める規定は、案件マッチングとの関係においても適用されるものとします。当該適用にあたり、「当社サービス」は「案件マッチング」を意味するものとして適用されるものとします。但し、第8章の規定と本章の規定に矛盾が生じた場合には、本章の規定が優先的に適用されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第6章　雑則
                            </h2>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第36条（設備等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、当社サービスを利用するために必要な通信機器、ソフトウェア、SNSアカウント、その他これらに付随して必要となる一切の機器及び利用環境等を、自己の費用と責任において準備し、当社サービスが利用可能な状態を維持するものとします。なお、利用会員が選択した利用環境により当社サービスが利用できない場合でも、当社は、何らの責任も負わないものとします。
                                </p>
                                <p>
                                    利用会員は、自己の費用と責任において、任意の電気通信サービスを経由して当社サービスの利用環境に接続し、当社サービスを利用するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第37条（機密保持）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約において「機密情報」とは、登録完了の先後を問わず、当社サービスに関して、利用会員が当社より書面、口頭、電子メール、その他電磁的・光学的記録媒体等の有形な媒体により提供された情報（個人情報を含みます。）、技術データ又はノウハウ（これらには、サービス、ユーザ、市場、デザイン、マーケティング等に関する情報等を含みますが、以上の例示に限りません。）をいうものとします。
                                </p>
                                <p>
                                    利用会員は、当社の事前の書面による承諾なく、機密情報を第三者に一切開示し又は漏洩してはならないものとします。但し、以下の各号の情報は機密情報から除外するものとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        当社から開示された時点で、既に自ら保持していた情報
                                    </li>
                                    <li>
                                        当社から開示された時点で、公知であった情報その他一般に利用可能となっていた情報
                                    </li>
                                    <li>
                                        当社から開示された後に、利用会員又は出品者の自己の責によらず公知となった情報その他一般に利用可能となった情報
                                    </li>
                                    <li>
                                        当社から開示された後に、第三者から機密保持義務を負うことなく合法的に入手した情報
                                    </li>
                                    <li>
                                        当社から開示された情報に基づかず、独自に開発した情報
                                    </li>
                                    <li>
                                        当社が、機密情報としての扱いから除外することを利用会員へ通知した情報
                                    </li>
                                </ol>
                                <p>
                                    利用会員は、当社の書面による事前の承諾がない限り、当社サービスの利用にかかる目的以外に機密情報を使用しないものとします。
                                </p>
                                <p>
                                    利用会員は、善良なる管理者の注意をもって機密情報を厳重に機密として管理・利用するものとします。
                                </p>
                                <p>
                                    利用会員は、当社から要求があった場合、直ちにすべての機密情報を当社に返却し又は当社の指示に従い、機密漏洩に十分に配慮した方法で廃棄するものとします。
                                </p>
                                <p>
                                    利用会員が、法令により開示を求められた場合、又は裁判所、警察等の公的機関から開示を求められた場合、かかる求めに応じた開示は、本条の機密保持義務の対象外とします。但し、利用会員は、開示を求められた事実を遅滞なく当社に通知するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第38条（個人情報）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、当社サービスを通じて知り得た利用会員の個人情報を厳重に管理し、第三者に開示又は漏洩してはならないものとします。
                                </p>
                                <p>
                                    利用会員は、当社サービスを通じて知り得た利用会員の個人情報を、利用会員から明示的に依頼された業務を履行する以外の目的及び当社が別途定める目的以外の目的で利用してはならないものとします。但し、当該利用会員による事前の同意がある場合は除きます。
                                </p>
                                <p>
                                    利用会員は、当社が提供する情報の範囲を超えて、当社サービスを通じて利用会員の個人情報を取得しようとする場合、事前かつ個別に利用目的を明示しなければならないものとします。
                                </p>
                                <p>
                                    利用会員は、当社が求めたときは、直ちに利用会員又は出品者の取り扱っている利用会員の個人情報の取得状況、管理状況等について当社に報告するものとします。
                                </p>
                                <p>
                                    利用会員は、本条に違反する事態が生じ、又は生じるおそれがあると知ったときは、直ちにその旨を当社に報告するとともに、それに対する当社の指示に従うものとします。
                                </p>
                                <p>
                                    利用会員は、利用会員の管理する他の利用会員の個人情報が他に漏洩したことが発覚した場合には、直ちにその内容を当社に通知するものとし、かかる事態に起因し利用会員及び第三者から異議、苦情の申立あるいは実費又は対価の請求、損害賠償請求等があった場合には、当社に直ちに通知するとともに、弁護士費用等を含めて利用会員の費用と責任においてこれを処理するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第39条（表示）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、広告、名刺、郵便物その他一切の媒体に関し、当社の名称又は当社との関係を表示する場合には、事前に当社が定めた表示方法及び表示内容による場合を除き、その可否、表示内容及び表示方法等について、事前に当社の承諾を求めるものとし、当該承諾に付帯する当社の指示に従うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第40条（権利義務の譲渡等の禁止）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、当社の書面による事前の承諾なく、本規約上の地位又は本規約に基づく権利若しくは義務を、第三者に譲渡若しくは担保提供し、又は引受けさせる等の処分を行ってはならないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第41条（ユーザ名及びパスワード管理）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、善良なる管理者の注意をもって、当社サービスを利用する際のユーザ名及びパスワードを利用及び管理するものとします。
                                </p>
                                <p>
                                    利用会員は、ユーザ名及びパスワードの第三者への使用許諾、貸与、譲渡、売買、名義変更、質権の設定その他の担保に供する等の行為を行ってはならないものとします。
                                </p>
                                <p>
                                    ユーザ名及びパスワードの管理不十分、使用上の過誤、第三者の使用等により被った損害は利用会員が負担するものとし、当社は、当社の責めに帰すべき事由がある場合を除き、かかる利用会員の損害から一切免責されるものとします。
                                </p>
                                <p>
                                    利用会員は、ユーザ名及びパスワードの紛失、盗用並びに第三者による使用の事実又はそのおそれがある事実を発見した場合、直ちにその旨を当社に通知し、当社からの指示に従うものとします。
                                </p>
                                <p>
                                    利用会員は、ユーザ名及びパスワードが不明となった場合、問合せ画面等を介して問合せを行うものとし、当社は、当社が定める手段により利用会員に対し必要な通知を行うものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第42条（死亡時の取扱い）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    個人である利用会員（以下、本条において「個人利用会員」といいます。）が死亡した場合、個人利用会員は、利用会員の地位を喪失するものとします。
                                </p>
                                <p>
                                    前項に定める場合には、個人利用会員が死亡した時点をもって、個人利用会員が当社サービス上で管理する情報（ユーザ名及びパスワードを含みますが、これらに限られません。）及びこれに関する権利、当社サービスの利用権その他本規約に基づき発生した一切の権利は失効するものとします。但し、当社が個人利用会員の死亡を知った場合、当社は登録銀行口座に代金相当額を振り込む方法により代金相当額を支払うことができるものとします。個人利用会員が登録銀行口座を有しないなどの理由により当社が振り込みを行わない場合、当社が個人利用会員の死亡を知った日から120日以内に限り、当該個人利用会員の相続人は、本規約に従い、当該個人利用会員に代わり、代金相当額の振込申請を行うことができるものとします。なお、当該個人利用会員の相続人は、代金相当額の振込申請の際に、当該個人利用会員の相続人であることを証する資料として、当社が要求する資料を当社に提供するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第43条（サービスの中断、停止又は終了）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、以下の各号のいずれかの事象が発生した場合には、利用会員へ事前に通知することなく当社サービスの中断又は停止を行うことができるものとします。但し、当社サービスの利用に伴い発生する手数料その他の料金、ポイント、ココナラコインその他利用会員に大きな影響を与える場合には、あらかじめ合理的な事前告知期間を設けるものとし、当該告知は、当社ウェブサイト上での表示その他当社が合理的と判断する方法により行うものとします。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        当社サービスに関連するシステムの保守を緊急に行う場合
                                    </li>
                                    <li>
                                        停電、火災及び天災等の不可抗力により当社サービスの提供ができなくなった場合
                                    </li>
                                    <li>
                                        その他当社が当社サービスの中断又は停止が必要と判断した場合
                                    </li>
                                </ol>
                                <p>
                                    当社は、当社サービスに関連するシステムの定期的な保守又はリニューアル等を行う場合には、利用会員に対し実施日時等を事前に通知した上で、当社サービスの中断又は停止を行うものとします。
                                </p>
                                <p>
                                    当社は、当社サービスに関連するリニューアル等により、利用会員に対して事前に通知した上で、当社サービスの一部を終了することができるものとします。
                                </p>
                                <p>
                                    当社は、当社サービスの運営上の理由等により、利用会員に対して事前に通知した上で、当社サービスの全部を終了することができるものとします。
                                </p>
                                <p>
                                    当社は、当社の責めに帰すべき事由がある場合を除き、本条に定める事由により当社サービスが中断若しくは停止又は当社サービスを終了したことにより、利用会員に生じた損害から一切免責されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第44条（情報の保存及びダウンロードについての注意事項）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    サービス、メッセージログその他の情報（以下「サービス情報等」といいます。）は、当社所定の期間に限り、当社サービス上に保存されるものとします。当社は、かかる期間を超えてサービス情報等を保存する義務を負うものではなく、当社はかかる期間を経過した後はいつでもこれらの情報を削除できるものとします。なお、当社は、当社の責めに帰すべき事由がある場合を除き、本条に基づき当社が行った措置に基づき利用会員に生じた損害について一切の責任を負いません。
                                </p>
                                <p>
                                    利用会員は、当社ウェブサイトからサービス情報等のデータを自らのコンピュータ等にダウンロードする場合には、自らが保有する情報の消滅若しくは改変又は機器の故障、損傷等が生じないよう十分な注意を払うものとし、当社は、当社の責めに帰すべき事由がある場合を除き、利用会員に発生したかかる損害について一切責任を負わないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第45条（サービスの更新）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、当社ウェブサイト及び管理ツール等を構成する枠組み、機能、デザイン、記事等の内容、その他一切の当社サービス運営上の仕様について、当社の判断により自由に変更することができるものとします。
                                </p>
                                <p>
                                    当社は、当社の責めに帰すべき事由がある場合を除き、前項に定める変更により、利用会員に生じた損害から一切免責されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第46条（保証の否認）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、出品者が当社サービスにおいて、当社ウェブサイトに掲載及び提供する個々のサービスの内容及び品質、付随情報並びに出品者のサービス提供にかかる能力、資格、権能を有することにつき、利用会員に対し保証するものではございません。
                                </p>
                                <p>
                                    当社は、利用会員間で行われるサービス提供、情報の送受信、コミュニケーション等に伴い利用会員が何らかの損害を被ったとしても、当社は、当社の責めに帰すべき事由がある場合を除き、一切補償を行いません。
                                </p>
                                <p>
                                    当社は、出品者に対し、当社による利用会員へのサービス販売機会やサービス提供の対象となる顧客の獲得及びそれらを通じた利益や効果を保証するものではありません。また、当社は、出品者が求める利用会員の存在、利用会員の権利能力及び行為能力並びに利用会員の出品者による購入の意思及び権限について、一切保証しません。
                                </p>
                                <p>
                                    出品者は、当社サービスの利用が出品者のサービス提供等に適用される法令及び出品者の所属する業界団体の規則等に違反するか否かを自己の費用と責任により調査するものとし、当社は、出品者による当社サービスの利用が出品者のサービス提供等に適用される法令及び出品者の所属する業界団体の規則等に照らし、適法であること又は規則等に違反しないことを保証しません。
                                </p>
                                <p>
                                    当社は、当社サービスにおけるSNSとの連携機能（連携するためのSNSにおけるアプリケーションを含む、以下同様とします。）を利用した際に、SNSと当社ウェブサイトで連携して表示される情報について、その連携による表示が実現すること及び継続することについて保証しないものとします。なお、本規約が終了したときには、当該連携機能による連携が終了する場合があります。
                                </p>
                                <p>
                                    当社は、利用会員との契約が終了した場合、当該利用会員が掲載していた情報の一部又は全部について削除又は改変する場合があり、当該利用会員の情報（利用会員が掲載した記事等の情報を含みます。）に関連して利用会員が当社ウェブサイトに掲載した情報の一部又は全部を削除又は改変する場合があります。
                                </p>
                                <p>
                                    当社は、当社サービスの運用にその時点での技術水準を前提に最善を尽くしますが、障害が生じないことを保証するものではありません。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第47条（免責）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    出品者は、自らの出品及びサービスに必要な資格、免許、許可等の有無及び法令その他の規制の有無を自らの責任において調査するものとします。出品者がかかる資格、免許、許可等を取得しなかったことにより出品者に発生した損害及び出品者が法令その他の規制に違反したことにより出品者に発生した損害につき、当社は何らの賠償責任も負いません。
                                </p>
                                <p>
                                    当社は、利用会員間で行われる当社サービス外における役務提供等にかかる商談、連絡、コミュニケーション等には一切関与せず、当社サービスの利用に関連して利用会員が支出した費用及び利用会員が被った損害（当社サービスを通じたサービス提供に伴う事故、違法行為、紛争、債務不履行、契約の解除等による損害を含みますが、これらに限りません。）について、当社の責めに帰すべき事由がある場合を除き、一切補償しません。
                                </p>
                                <p>
                                    当社ウェブサイトから他のウェブサイトへのリンクや、第三者から当社ウェブサイトへのリンクが設定される場合、当社は当社ウェブサイト以外のウェブサイト及びそれにより得られる情報に関して、理由の如何を問わず、一切の責任を負わないものとします。
                                </p>
                                <p>
                                    当社は、当社サービスにおけるSNSとの連携機能を利用した際に、SNSに表示される情報に関して、理由の如何を問わず、一切の責任を負わないものとします。
                                </p>
                                <p>
                                    当社は、通信回線やコンピュータなどの障害によるシステムの中断・遅滞・中止・データの消失、データへの不正アクセスにより生じた損害、その他当社サービスに関して利用会員に生じた損害について、当社の責めに帰すべき事由がある場合を除き、一切責任を負わないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第48条（反社会的勢力の排除）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員及びサービス利用希望者は、暴力団、暴力団員及び暴力団員でなくなったときから5年を経過しない者、暴力団準構成員、暴力団関係企業に属する者、総会屋等、社会運動等標ぼうゴロ、特殊知能暴力集団等、テロリスト等、日本政府又は外国政府が経済制裁の対象として指定する者（以下、上記の9者を総称して「暴力団員等」といいます。）、暴力団員等の共生者、その他これらに準ずる者（以下、上記のすべてを総称して「反社会的勢力」といいます。）のいずれにも該当しないこと、かつ将来にわたっても該当しないこと、及び自ら又は第三者を利用して、暴力的な要求行為、法的な責任を超えた不当な要求行為、取引に関して、脅迫的な言動をし、又は暴力を用いる行為、風説を流布し、偽計を用い又は威力を用いて弊社の信用を毀損し、又は弊社の業務を妨害する行為、その他これらに準ずる行為（以下総称して「不当な要求行為等」といいます。）を行わないことを確約するものとします。
                                </p>
                                <p>
                                    当社は、利用会員が前項の規定に違反している疑いがあると当社が認めた場合あるいは該当すると判断した場合は、事前に通知することなく、会員登録を拒否し、会員登録を取消し、当社サービスへのアクセスの拒否・利用停止を行い、利用会員に関連するコンテンツの情報の削除を行い、その他必要な措置をとることができるものとします。
                                </p>
                                <p>
                                    前項の規定の適用により、利用会員に損害等が生じた場合でも、利用会員は当該損害等について当社及び他の利用会員その他の第三者に請求をしないものとします。
                                </p>
                                <p>
                                    第1項に定める「暴力団員等の共生者」とは、以下のいずれかに該当する者をいいます。
                                </p>
                                <ol className="p-terms__list p-terms__list--numbered">
                                    <li>
                                        暴力団員等が、経営を支配していると認められる関係を有する者
                                    </li>
                                    <li>
                                        暴力団員等が、経営に実質的に関与していると認められる関係を有する者
                                    </li>
                                    <li>
                                        自己もしくは第三者の不正の利益を図る目的、又は第三者に損害を加える目的をもってするなど、不当に暴力団員等を利用していると認められる関係を有する者
                                    </li>
                                    <li>
                                        暴力団員等に対して資金等を提供し、又は便宜を供与するなど関与していると認められる関係を有する者
                                    </li>
                                    <li>
                                        暴力団員等と社会的に非難されるべき関係を有する者
                                    </li>
                                    <li>
                                        その他暴力団員等の資金獲得活動に乗じ、又は暴力団員等の威力、情報力、資金力等を利用することによって自ら利益拡大を図る者
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第49条（損害賠償）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    利用会員は、本規約に違反することにより、又は当社サービスの利用に関連して当社に損害を与えた場合、当社に対し、その損害を賠償するものとします。また、利用会員が雇用している従業員等が本規約に違反して当社に損害を与えた場合も同様とします。
                                </p>
                                <p>
                                    利用会員は、第13条第2項第27号に違反した場合、法令が許容する範囲において、違約金として、当該行為がなければ当社に支払われていたと推定される第17条第8項及び第17条の2第6項の手数料又は100万円のいずれか大きい金額を当社に支払うものとします。なお、当社に違約金を超える損害が発生した場合、当社は、上記に加え、当該超過額について損害賠償を請求できるものとします
                                </p>
                                <p>
                                    利用会員が、当社サービスの利用に関連して利用会員その他の者からクレームを受け又はそれらの者との間で紛争を生じた場合には、直ちにその内容を当社に通知するとともに、自らの費用と責任において当該クレーム又は紛争を処理し、その結果を当社に報告するものとします。
                                </p>
                                <p>
                                    利用会員による当社サービスの利用に起因して、当社が、第三者から権利侵害その他の理由により何らかの損害賠償請求を受けた場合は、当該利用会員は当該請求に基づき当社が第三者に支払いを余儀なくされた金額及びかかる事由に起因し当社において生じた又は負担した一切の損害及び費用（弁護士費用等を含みますが、これらに限りません。）を賠償するものとします。
                                </p>
                                <p>
                                    当社は、購入者によるクレジットカードの不正利用が発覚した場合、購入者の承諾を得ることなく、出品者にサービス提供契約に係る代金相当額を補償として支払うことができるものとし、この場合には、当該補償額を当社の損害とみなして、購入者に対し、当該補償額に相当する損害の賠償を請求できるものとします。なお、当社による出品者への補償は当社が任意に判断するものとし、当社は、当該補償を当社が支払うことを保証するものではありません。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第50条（損害賠償額の上限）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社が利用会員に対し何らかの損害賠償義務を負う場合においても、当社の利用会員に対する損害賠償の金額は、当社の故意又は重大な過失による場合を除き、当該利用会員が直接被った損害金額に限るものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第51条（存続規定）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本利用会員の登録又は出品者登録が終了したときといえども、本規約第
                                    6 条第 3 項、第 7 条第 2 項、第 9 条第 2
                                    項から第4項まで、第 11 条第 2 項、第 12
                                    条、第 13 条第 3 項から第 6 項まで、第 14
                                    条、 第 15 条第 3 項及び第 4 項、第 16 条第
                                    5 項、第 17 条、第 17 条の 2、第 18 条第 4
                                    項から第 7 項まで、第 19 条から第 20
                                    条まで、第 27 条第 3 項、第 29 条、第 31
                                    条第 2 項、第 32 条、第 33 条、第 34 条第 2
                                    項及び第 4 項、第 38 条第 3 項、第 39 条第 3
                                    項、第 40 条、第 41 条、第 42 条第 2 項、第
                                    43 条、第 44 条、第 45 条第 3 項及び第 4
                                    項、第 49 条、第 50 条、第 53 条、第 55 条第
                                    6 項、第 56 条第 4 項、第 57 条第 2 項及び第
                                    3 項、第 58 条、第 60
                                    条(但し未払がある場合に限る。)、第 61
                                    条(但し未払がある場合に限る。)、第 62 条第 2
                                    項、第 63条、第 64 条、第 66 条第 3 項、第
                                    67 条、第 68 条から第 76 条まで、第 77 条第
                                    2 項並びに第78 条から第 89
                                    条までの規定は有効に存続し、当社、利用会員を拘束するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第52条（本規約等の変更）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、本規約又は当社サービスの内容を随時改定又は変更できるものとします。当社は、本規約を利用会員の不利益に変更する場合（但し、軽微な変更を除きます。）には、利用会員に対して通知を行い、又は当社ウェブサイトに掲載するものとします。変更された本規約の効力は、変更後の本規約が当社ウェブサイトに掲載された時より生ずるものとします。
                                </p>
                                <p>
                                    当社は、前項の当該改定又は変更の通知後、利用会員が当社サービスを利用した場合又は利用会員が当社の定める期間内（定めがない場合は通知の日から30日間）に会員登録取消又は出品者登録取消の手続をとらなかった場合には、当該改定又は変更の内容に同意したものとみなします。
                                </p>
                                <p>
                                    当社は、当社の責めに帰すべき事由がある場合を除き、本規約の改定又は変更に起因し利用会員が会員登録取消又は出品者登録取消の手続をとったことにより利用会員に生じた損害から一切免責されるものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第53条（連絡及び通知）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社サービスに関する問合せその他利用会員から当社への連絡若しくは通知又は当社サービスに関する当社から利用会員に対する連絡若しくは通知は、当社の定める方法にて行うものとします。
                                </p>
                                <p>
                                    当社が前項に定める連絡又は通知の方法により、利用会員が予め届け出た連絡先又は通知先に連絡又は通知を行った場合、利用会員が当該連絡又は通知を受領したか否かにかかわらず、通常到達すべきときに到達したものとみなします。
                                </p>
                                <p>
                                    当社からの通知及び連絡が不着であったり遅延したりといったことによって生じる損害について、当社の責めに帰すべき事由がある場合を除き、当社は一切の責任を負わないものとします。
                                </p>
                                <p>
                                    利用会員が当社に通知、連絡、問合せをする必要が生じた場合、別段の定めがある場合を除き、当社が提供するウェブサイト上の問い合わせフォームをもって行うこととします。
                                </p>
                                <p>
                                    前項に基づき利用会員から問合せ等があった場合、当社は、その時点で社内的に定めている方法により、本人確認を行うことができるものとします。また、問合せ等に対する回答方法（電子メール、回答書面の郵送、電話など）については、その都度当社が最適と考える回答方法を利用して回答することができるものとし、その回答方法は利用会員が決めることはできないものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第54条（当社サービスの譲渡等）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    当社は、当社サービスの事業を第三者に譲渡した場合には、当該事業譲渡に伴い、当社サービスの運営者たる地位、本規約上の地位、本規約に基づく権利及び義務並びに利用会員の登録情報その他情報を当該事業譲渡の譲受人に譲渡することができるものとし、利用会員は、利用会員たる地位、本規約上の地位、本規約に基づく権利及び義務並びに利用会員の登録情報その他情報の譲渡につき本条により予め同意するものとします。なお、本条に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第55条（分離可能性）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約のいずれかの条項又はその一部が無効又は執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効又は執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第56条（完全合意）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約は、本規約に含まれる事項に関する契約の当事者である当社と利用会員間の完全な合意を構成し、口頭又は書面を問わず、本規約に含まれる事項に関する当社と利用会員間の事前の合意及び了解等に優先します。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第57条（準拠法・合意管轄）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約は、日本法に基づき解釈されるものとし、本規約に起因又は関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                                </p>
                            </div>
                        </section>

                        <section className="p-terms__section">
                            <h2 className="p-terms__section-title">
                                第58条（言語）
                            </h2>
                            <div className="p-terms__section-content">
                                <p>
                                    本規約は、日本語を正文とします。本規約につき、参考のため、日本語以外の言語による翻訳文が作成された場合でも、日本語の正文のみが契約として効力を有するものとし、日本語以外の言語による翻訳は、いかなる効力も有しないものとします。
                                </p>
                            </div>
                        </section>
                    </div>
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
