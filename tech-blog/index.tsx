import React, { useState } from "react";
import ProjectOverview from "./ProjectOverview";
import FavoriteFeature from "./FavoriteFeature";
import MessagingSystem from "./MessagingSystem";
import TechStackDetails from "./TechStackDetails";

type PageType = "overview" | "favorite" | "messaging" | "techstack";

const TechBlogIndex: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<PageType>("overview");

    const pages = [
        {
            id: "overview" as PageType,
            title: "プロジェクト概要",
            icon: "🎯",
            description: "エンジニアマッチングサービス「match」の全体像",
            component: ProjectOverview,
        },
        {
            id: "favorite" as PageType,
            title: "お気に入り機能",
            icon: "⭐",
            description: "ユーザーが案件をブックマークできる機能の実装",
            component: FavoriteFeature,
        },
        {
            id: "messaging" as PageType,
            title: "メッセージングシステム",
            icon: "💬",
            description: "パブリック・ダイレクトメッセージとメモ機能",
            component: MessagingSystem,
        },
        {
            id: "techstack" as PageType,
            title: "技術スタック詳細",
            icon: "🛠",
            description: "Laravel + React + TypeScript の実装詳細",
            component: TechStackDetails,
        },
    ];

    const currentPageData = pages.find((page) => page.id === currentPage);
    const CurrentComponent = currentPageData?.component || ProjectOverview;

    return (
        <div className="tech-blog-index">
            <header className="blog-header">
                <div className="header-content">
                    <h1>エンジニアマッチングサービス「match」</h1>
                    <p className="header-subtitle">技術ブログ・実装詳細</p>
                    <div className="header-meta">
                        <span className="tech-badge">Laravel 11</span>
                        <span className="tech-badge">React</span>
                        <span className="tech-badge">TypeScript</span>
                        <span className="tech-badge">SCSS</span>
                    </div>
                </div>
            </header>

            <nav className="page-navigation">
                <div className="nav-container">
                    {pages.map((page) => (
                        <button
                            key={page.id}
                            onClick={() => setCurrentPage(page.id)}
                            className={`nav-item ${
                                currentPage === page.id ? "active" : ""
                            }`}
                        >
                            <span className="nav-icon">{page.icon}</span>
                            <div className="nav-content">
                                <h3 className="nav-title">{page.title}</h3>
                                <p className="nav-description">
                                    {page.description}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </nav>

            <main className="page-content">
                <CurrentComponent />
            </main>

            <footer className="blog-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>プロジェクト情報</h3>
                        <ul>
                            <li>開発期間: 2024年</li>
                            <li>チーム規模: 個人開発</li>
                            <li>主要技術: Laravel 11, React, TypeScript</li>
                            <li>デザイン: FLOCSS設計によるオリジナルCSS</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>実装機能</h3>
                        <ul>
                            <li>認証・ユーザー管理</li>
                            <li>案件投稿・応募システム</li>
                            <li>メッセージング機能</li>
                            <li>お気に入り・メモ機能</li>
                            <li>通知システム</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>技術的特徴</h3>
                        <ul>
                            <li>Inertia.js による SPA 体験</li>
                            <li>TypeScript による型安全性</li>
                            <li>FLOCSS設計による保守性</li>
                            <li>レスポンシブデザイン対応</li>
                            <li>セキュリティ対策の徹底</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>今後の展望</h3>
                        <ul>
                            <li>リアルタイム通知機能</li>
                            <li>AIマッチング機能</li>
                            <li>決済システム統合</li>
                            <li>レビュー・評価システム</li>
                            <li>パフォーマンス最適化</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        &copy; 2024
                        エンジニアマッチングサービス「match」技術ブログ
                    </p>
                </div>
            </footer>

            <style>{`
        .tech-blog-index {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Noto Sans JP', sans-serif;
        }

        .blog-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .header-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .header-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .header-meta {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .page-navigation {
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
          text-align: left;
        }

        .nav-item:hover {
          background: #f8f9fa;
        }

        .nav-item.active {
          background: #f0f4ff;
          border-bottom-color: #667eea;
        }

        .nav-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .nav-content {
          flex: 1;
        }

        .nav-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .nav-description {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          line-height: 1.4;
        }

        .page-content {
          background: white;
          min-height: 80vh;
        }

        .blog-footer {
          background: #2d3748;
          color: white;
          padding: 3rem 2rem 1rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-section h3 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          padding: 0.3rem 0;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #4a5568;
          text-align: center;
          color: #a0aec0;
        }

        @media (max-width: 768px) {
          .blog-header {
            padding: 2rem 1rem;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .header-subtitle {
            font-size: 1.2rem;
          }

          .nav-container {
            grid-template-columns: 1fr;
          }

          .nav-item {
            padding: 1rem;
          }

          .nav-icon {
            font-size: 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .blog-footer {
            padding: 2rem 1rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .header-meta {
            gap: 0.5rem;
          }

          .tech-badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .nav-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .nav-content {
            text-align: center;
          }
        }
      `}</style>
        </div>
    );
};

export default TechBlogIndex;
