import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            header={<div className="p-dashboard__title">マイページ</div>}
        >
            <Head title="マイページ - Match" />

            <div className="p-dashboard__container">
                {/* 統計情報 */}
                <div className="p-dashboard__stats">
                    <div className="p-dashboard__stat-card">
                        <div className="p-dashboard__stat-number">2</div>
                        <div className="p-dashboard__stat-label">
                            投稿した案件
                        </div>
                    </div>
                    <div className="p-dashboard__stat-card">
                        <div className="p-dashboard__stat-number">5</div>
                        <div className="p-dashboard__stat-label">
                            応募した案件
                        </div>
                    </div>
                    <div className="p-dashboard__stat-card">
                        <div className="p-dashboard__stat-number">8</div>
                        <div className="p-dashboard__stat-label">
                            メッセージ
                        </div>
                    </div>
                </div>

                {/* 自分が投稿した案件 */}
                <div className="p-dashboard__content">
                    <div className="p-dashboard__section">
                        <h2 className="p-dashboard__section-title">
                            投稿した案件
                        </h2>

                        <div className="p-dashboard__grid">
                            <div className="p-dashboard__card">
                                <div className="p-dashboard__card-header">
                                    <div className="p-dashboard__card-title">
                                        フロントエンド開発者募集
                                    </div>
                                    <span className="p-dashboard__card-tag p-dashboard__card-tag--primary">
                                        単発案件
                                    </span>
                                </div>
                                <div className="p-dashboard__card-body">
                                    Reactを使った管理画面の開発をお願いします。約1ヶ月の案件で、リモート可能です。
                                </div>
                                <div className="p-dashboard__card-footer">
                                    <div className="p-dashboard__card-date">
                                        3日前
                                    </div>
                                    <Link
                                        href="#"
                                        className="p-dashboard__card-link"
                                    >
                                        詳細を見る
                                    </Link>
                                </div>
                            </div>

                            <div className="p-dashboard__card">
                                <div className="p-dashboard__card-header">
                                    <div className="p-dashboard__card-title">
                                        バックエンド開発パートナー募集
                                    </div>
                                    <span className="p-dashboard__card-tag p-dashboard__card-tag--secondary">
                                        レベニューシェア
                                    </span>
                                </div>
                                <div className="p-dashboard__card-body">
                                    新規サービスのバックエンド開発を一緒に行ってくれるパートナーを探しています。Laravel経験者歓迎。
                                </div>
                                <div className="p-dashboard__card-footer">
                                    <div className="p-dashboard__card-date">
                                        1週間前
                                    </div>
                                    <Link
                                        href="#"
                                        className="p-dashboard__card-link"
                                    >
                                        詳細を見る
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="u-text-center u-mt-4">
                            <Link
                                href="/post-job"
                                className="p-dashboard__button"
                            >
                                新しい案件を投稿する
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 応募した案件 */}
                <div className="p-dashboard__content">
                    <div className="p-dashboard__section">
                        <h2 className="p-dashboard__section-title">
                            応募した案件
                        </h2>

                        <div className="p-dashboard__tab-nav">
                            <div className="p-dashboard__tab p-dashboard__tab--active">
                                すべて
                            </div>
                            <div className="p-dashboard__tab">審査中</div>
                            <div className="p-dashboard__tab">承認済み</div>
                            <div className="p-dashboard__tab">完了</div>
                        </div>

                        <div className="p-dashboard__grid">
                            <div className="p-dashboard__card">
                                <div className="p-dashboard__card-header">
                                    <div className="p-dashboard__card-title">
                                        Webアプリケーション開発
                                    </div>
                                    <span className="p-dashboard__card-tag p-dashboard__card-tag--primary">
                                        単発案件
                                    </span>
                                </div>
                                <div className="p-dashboard__card-body">
                                    React+TypeScriptを用いたウェブアプリケーションの開発。レスポンシブ対応必須。
                                </div>
                                <div className="p-dashboard__card-footer">
                                    <div className="p-dashboard__card-date">
                                        応募日: 2日前
                                    </div>
                                    <Link
                                        href="#"
                                        className="p-dashboard__card-link"
                                    >
                                        詳細を見る
                                    </Link>
                                </div>
                            </div>

                            <div className="p-dashboard__card">
                                <div className="p-dashboard__card-header">
                                    <div className="p-dashboard__card-title">
                                        ECサイト構築
                                    </div>
                                    <span className="p-dashboard__card-tag p-dashboard__card-tag--primary">
                                        単発案件
                                    </span>
                                </div>
                                <div className="p-dashboard__card-body">
                                    Laravelを使用したECサイトの構築。決済システムの連携やユーザー管理機能の実装。
                                </div>
                                <div className="p-dashboard__card-footer">
                                    <div className="p-dashboard__card-date">
                                        応募日: 5日前
                                    </div>
                                    <Link
                                        href="#"
                                        className="p-dashboard__card-link"
                                    >
                                        詳細を見る
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* メッセージ */}
                <div className="p-dashboard__content">
                    <div className="p-dashboard__section">
                        <h2 className="p-dashboard__section-title">
                            最近のメッセージ
                        </h2>

                        <div className="p-dashboard__tab-nav">
                            <div className="p-dashboard__tab p-dashboard__tab--active">
                                パブリックメッセージ
                            </div>
                            <div className="p-dashboard__tab">
                                ダイレクトメッセージ
                            </div>
                        </div>

                        <div className="p-dashboard__grid">
                            <div className="p-dashboard__card">
                                <div className="p-dashboard__card-header">
                                    <div className="p-dashboard__card-title">
                                        フロントエンド開発者募集
                                    </div>
                                </div>
                                <div className="p-dashboard__card-body">
                                    <strong>佐藤太郎:</strong>{" "}
                                    この案件ではReactの経験が何年以上必要ですか？
                                </div>
                                <div className="p-dashboard__card-footer">
                                    <div className="p-dashboard__card-date">
                                        1日前
                                    </div>
                                    <Link
                                        href="#"
                                        className="p-dashboard__card-link"
                                    >
                                        返信する
                                    </Link>
                                </div>
                            </div>

                            <div className="p-dashboard__card">
                                <div className="p-dashboard__card-header">
                                    <div className="p-dashboard__card-title">
                                        Webアプリケーション開発
                                    </div>
                                </div>
                                <div className="p-dashboard__card-body">
                                    <strong>山田花子:</strong>{" "}
                                    ご応募ありがとうございます。経験についてもう少し詳しく教えていただけますか？
                                </div>
                                <div className="p-dashboard__card-footer">
                                    <div className="p-dashboard__card-date">
                                        3日前
                                    </div>
                                    <Link
                                        href="#"
                                        className="p-dashboard__card-link"
                                    >
                                        返信する
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* プロフィール情報 */}
                <div className="p-dashboard__content">
                    <div className="p-dashboard__section">
                        <h2 className="p-dashboard__section-title">
                            プロフィール情報
                        </h2>

                        <div className="p-dashboard__profile">
                            <div className="p-dashboard__profile-info">
                                <p>
                                    <strong>名前:</strong> {auth.user.name}
                                </p>
                                <p>
                                    <strong>メールアドレス:</strong>{" "}
                                    {auth.user.email}
                                </p>
                                <p>
                                    <strong>自己紹介:</strong> 未設定
                                </p>
                            </div>
                            <div className="u-mt-4">
                                <Link
                                    href={route("profile.edit")}
                                    className="p-dashboard__button p-dashboard__button--outline"
                                >
                                    プロフィールを編集
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
