import React from "react";

const ProjectOverview: React.FC = () => {
    return (
        <div className="project-overview">
            <header className="project-header">
                <h1>エンジニアマッチングサービス「match」</h1>
                <p className="project-subtitle">
                    Laravel + React +
                    TypeScriptで構築したモダンなWebアプリケーション
                </p>
            </header>

            <section className="project-concept">
                <h2>🎯 プロジェクトコンセプト</h2>
                <div className="concept-card">
                    <h3>「エンジニア案件マッチング版のメルカリ」</h3>
                    <p>
                        既存のフリーランス向けサービスの複雑な操作性や煩雑な入力項目を見直し、
                        シンプルで使いやすいエンジニア向け案件マッチングプラットフォームを目指しました。
                    </p>
                </div>
            </section>

            <section className="tech-stack">
                <h2>🛠 技術スタック</h2>
                <div className="tech-grid">
                    <div className="tech-category">
                        <h3>フロントエンド</h3>
                        <ul>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Inertia.js</li>
                            <li>SCSS (FLOCSS設計)</li>
                            <li>Webpack + Babel</li>
                        </ul>
                    </div>
                    <div className="tech-category">
                        <h3>バックエンド</h3>
                        <ul>
                            <li>Laravel 11</li>
                            <li>Breeze (認証)</li>
                            <li>MySQL</li>
                            <li>Eloquent ORM</li>
                        </ul>
                    </div>
                    <div className="tech-category">
                        <h3>開発環境</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>npm/yarn</li>
                            <li>Git</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="features-overview">
                <h2>✨ 主要機能</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>🔐 認証・ユーザー管理</h3>
                        <ul>
                            <li>ユーザー登録・ログイン</li>
                            <li>パスワードリマインダー</li>
                            <li>プロフィール管理</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>📋 案件管理</h3>
                        <ul>
                            <li>案件投稿・編集・削除</li>
                            <li>カテゴリー別検索</li>
                            <li>キーワード検索</li>
                            <li>募集終了機能</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>🤝 マッチング</h3>
                        <ul>
                            <li>案件応募機能</li>
                            <li>応募ステータス管理</li>
                            <li>承認・拒否システム</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>💬 コミュニケーション</h3>
                        <ul>
                            <li>パブリックメッセージ</li>
                            <li>ダイレクトメッセージ</li>
                            <li>既読管理</li>
                            <li>通知システム</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>⭐ 便利機能</h3>
                        <ul>
                            <li>お気に入り機能</li>
                            <li>メモ機能</li>
                            <li>案件共有（Twitter）</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="development-highlights">
                <h2>🎨 開発のハイライト</h2>
                <div className="highlights-list">
                    <div className="highlight-item">
                        <h3>モダンな技術スタックの採用</h3>
                        <p>
                            Laravel
                            11とReact、TypeScriptを組み合わせ、堅牢で保守性の高いコードベースを実現
                        </p>
                    </div>
                    <div className="highlight-item">
                        <h3>FLOCSS設計によるCSS管理</h3>
                        <p>
                            CSSフレームワークを使わず、独自のコンポーネント指向設計で保守性を向上
                        </p>
                    </div>
                    <div className="highlight-item">
                        <h3>Inertia.jsによるSPA体験</h3>
                        <p>
                            従来のSPAとSSRの良いとこ取りで、高速なページ遷移とSEO対策を両立
                        </p>
                    </div>
                    <div className="highlight-item">
                        <h3>TypeScriptによる型安全性</h3>
                        <p>
                            フロントエンド全体で型安全性を確保し、開発効率と品質を向上
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-stats">
                <h2>📊 プロジェクト規模</h2>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">実装機能</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Reactコンポーネント</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">データベーステーブル</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">TypeScript化</span>
                    </div>
                </div>
            </section>

            <style>{`
                .project-overview {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    font-family: "Noto Sans JP", sans-serif;
                    line-height: 1.6;
                    color: #333;
                }

                .project-header {
                    text-align: center;
                    margin-bottom: 3rem;
                    padding: 2rem;
                    background: linear-gradient(
                        135deg,
                        #6cc3e0 0%,
                        #5ab3d1 100%
                    );
                    color: white;
                    border-radius: 12px;
                }

                .project-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }

                .project-subtitle {
                    font-size: 1.2rem;
                    opacity: 0.9;
                }

                .concept-card {
                    background: #f8f9fa;
                    padding: 2rem;
                    border-radius: 8px;
                    border-left: 4px solid #6cc3e0;
                }

                .concept-card h3 {
                    color: #6cc3e0;
                    margin-bottom: 1rem;
                }

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 1.5rem;
                }

                .tech-category {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .tech-category h3 {
                    color: #333;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #6cc3e0;
                }

                .tech-category ul {
                    list-style: none;
                    padding: 0;
                }

                .tech-category li {
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #eee;
                }

                .tech-category li:last-child {
                    border-bottom: none;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }

                .feature-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    border-top: 3px solid #6cc3e0;
                }

                .feature-card h3 {
                    margin-bottom: 1rem;
                    color: #333;
                }

                .feature-card ul {
                    list-style: none;
                    padding: 0;
                }

                .feature-card li {
                    padding: 0.3rem 0;
                    position: relative;
                    padding-left: 1rem;
                }

                .feature-card li:before {
                    content: "•";
                    color: #6cc3e0;
                    position: absolute;
                    left: 0;
                }

                .highlights-list {
                    margin-top: 1.5rem;
                }

                .highlight-item {
                    background: white;
                    padding: 1.5rem;
                    margin-bottom: 1rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    border-left: 4px solid #6cc3e0;
                }

                .highlight-item h3 {
                    color: #333;
                    margin-bottom: 0.5rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }

                .stat-item {
                    text-align: center;
                    background: white;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .stat-number {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #6cc3e0;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    color: #666;
                    font-size: 0.9rem;
                }

                section {
                    margin-bottom: 3rem;
                }

                h2 {
                    color: #333;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #6cc3e0;
                }

                @media (max-width: 768px) {
                    .project-overview {
                        padding: 1rem;
                    }

                    .project-header h1 {
                        font-size: 2rem;
                    }

                    .tech-grid,
                    .features-grid,
                    .stats-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectOverview;
