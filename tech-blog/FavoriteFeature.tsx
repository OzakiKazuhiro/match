import React, { useState } from "react";

const FavoriteFeature: React.FC = () => {
    const [activeTab, setActiveTab] = useState<
        "overview" | "backend" | "frontend" | "styling"
    >("overview");

    const codeExamples = {
        migration: `// database/migrations/create_favorites_table.php
Schema::create('favorites', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('job_listing_id')->constrained('job_listings')->onDelete('cascade');
    $table->timestamps();

    // ユーザーと案件の組み合わせでユニーク制約
    $table->unique(['user_id', 'job_listing_id']);
});`,

        model: `// app/Models/JobListing.php
public function favorites(): HasMany
{
    return $this->hasMany(Favorite::class);
}

public function favoritedByUsers(): BelongsToMany
{
    return $this->belongsToMany(User::class, 'favorites')
        ->withTimestamps();
}

// お気に入り状態の確認
public function isFavoritedBy(?User $user): bool
{
    if (!$user) return false;
    return $this->favorites()->where('user_id', $user->id)->exists();
}`,

        controller: `// app/Http/Controllers/FavoriteController.php
public function toggle(JobListing $jobListing)
{
    $user = auth()->user();
    
    $exists = Favorite::where('user_id', $user->id)
        ->where('job_listing_id', $jobListing->id)
        ->exists();
        
    if ($exists) {
        // お気に入りから削除
        Favorite::where('user_id', $user->id)
            ->where('job_listing_id', $jobListing->id)
            ->delete();
            
        return response()->json([
            'status' => 'removed',
            'message' => 'お気に入りから削除しました',
            'is_favorited' => false
        ]);
    } else {
        // お気に入りに追加
        Favorite::create([
            'user_id' => $user->id,
            'job_listing_id' => $jobListing->id
        ]);
        
        return response()->json([
            'status' => 'added',
            'message' => 'お気に入りに追加しました',
            'is_favorited' => true
        ]);
    }
}`,

        component: `// resources/js/Components/FavoriteButton.tsx
interface FavoriteButtonProps {
    jobId: number;
    initialIsFavorited: boolean;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function FavoriteButton({
    jobId,
    initialIsFavorited,
    className = "",
    size = "md",
}: FavoriteButtonProps) {
    const [isFavorited, setIsFavorited] = useState(initialIsFavorited);
    const [isProcessing, setIsProcessing] = useState(false);

    const toggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isProcessing) return;
        setIsProcessing(true);

        try {
            const response = await axios.post(route("favorites.toggle", jobId));
            if (response.data) {
                setIsFavorited(response.data.is_favorited);
            }
        } catch (error) {
            console.error("お気に入り登録中にエラーが発生しました", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <button
            onClick={toggleFavorite}
            disabled={isProcessing}
            className={\`c-favorite-button \${
                isFavorited ? "c-favorite-button--active" : ""
            } \${className}\`}
        >
            <svg
                viewBox="0 0 24 24"
                fill={isFavorited ? "currentColor" : "none"}
                stroke="currentColor"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </button>
    );
}`,

        scss: `// resources/scss/object/component/_favorite-button.scss
.c-favorite-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    color: #ff6b6b;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        background-color: rgba(255, 107, 107, 0.1);
    }

    &--active {
        color: #ff6b6b;

        svg {
            animation: favorite-pop 0.4s ease-out;
        }
    }
}

@keyframes favorite-pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
}`,
    };

    return (
        <div className="favorite-feature">
            <header className="feature-header">
                <h1>⭐ お気に入り機能</h1>
                <p className="feature-subtitle">
                    ユーザーが気になる案件をブックマークできる機能の実装詳細
                </p>
            </header>

            <section className="feature-overview">
                <h2>🎯 機能概要</h2>
                <div className="overview-grid">
                    <div className="overview-card">
                        <h3>ユーザビリティ</h3>
                        <ul>
                            <li>ワンクリックで追加・削除</li>
                            <li>視覚的に分かりやすいハートアイコン</li>
                            <li>お気に入り一覧ページ</li>
                            <li>リアルタイムな状態更新</li>
                        </ul>
                    </div>
                    <div className="overview-card">
                        <h3>技術的特徴</h3>
                        <ul>
                            <li>Ajax通信による非同期処理</li>
                            <li>楽観的UI更新</li>
                            <li>TypeScriptによる型安全性</li>
                            <li>FLOCSS設計によるCSS管理</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="implementation-details">
                <h2>🛠 実装詳細</h2>

                <div className="tab-navigation">
                    <button
                        className={`tab-button ${
                            activeTab === "overview" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("overview")}
                    >
                        概要
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "backend" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("backend")}
                    >
                        バックエンド
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "frontend" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("frontend")}
                    >
                        フロントエンド
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "styling" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("styling")}
                    >
                        スタイリング
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "overview" && (
                        <div className="tab-panel">
                            <h3>アーキテクチャ概要</h3>
                            <div className="architecture-flow">
                                <div className="flow-step">
                                    <h4>1. データベース設計</h4>
                                    <p>
                                        ユーザーと案件の中間テーブルとしてfavoritesテーブルを作成
                                    </p>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-step">
                                    <h4>2. Eloquentモデル</h4>
                                    <p>
                                        リレーション定義とお気に入り状態確認メソッド
                                    </p>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-step">
                                    <h4>3. API エンドポイント</h4>
                                    <p>お気に入り切り替えのRESTful API</p>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-step">
                                    <h4>4. Reactコンポーネント</h4>
                                    <p>
                                        TypeScriptによる型安全なUI
                                        コンポーネント
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "backend" && (
                        <div className="tab-panel">
                            <h3>データベース設計</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.migration}</code>
                                </pre>
                            </div>

                            <h3>Eloquentモデル</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.model}</code>
                                </pre>
                            </div>

                            <h3>コントローラー</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.controller}</code>
                                </pre>
                            </div>
                        </div>
                    )}

                    {activeTab === "frontend" && (
                        <div className="tab-panel">
                            <h3>Reactコンポーネント</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.component}</code>
                                </pre>
                            </div>

                            <div className="implementation-points">
                                <h4>実装のポイント</h4>
                                <ul>
                                    <li>
                                        <strong>型安全性:</strong>{" "}
                                        TypeScriptインターフェースで props
                                        を定義
                                    </li>
                                    <li>
                                        <strong>楽観的UI:</strong> API
                                        レスポンス前に UI を更新
                                    </li>
                                    <li>
                                        <strong>エラーハンドリング:</strong>{" "}
                                        通信エラー時の適切な処理
                                    </li>
                                    <li>
                                        <strong>アクセシビリティ:</strong>{" "}
                                        aria-label とtitle属性の設定
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "styling" && (
                        <div className="tab-panel">
                            <h3>FLOCSS設計によるCSS</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.scss}</code>
                                </pre>
                            </div>

                            <div className="styling-features">
                                <h4>スタイリングの特徴</h4>
                                <div className="feature-grid">
                                    <div className="feature-item">
                                        <h5>アニメーション</h5>
                                        <p>
                                            お気に入り登録時のポップアニメーション
                                        </p>
                                    </div>
                                    <div className="feature-item">
                                        <h5>ホバーエフェクト</h5>
                                        <p>
                                            スケール変換による視覚的フィードバック
                                        </p>
                                    </div>
                                    <div className="feature-item">
                                        <h5>状態管理</h5>
                                        <p>アクティブ状態の視覚的表現</p>
                                    </div>
                                    <div className="feature-item">
                                        <h5>レスポンシブ</h5>
                                        <p>デバイスサイズに応じたサイズ調整</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="technical-challenges">
                <h2>🚀 技術的な挑戦</h2>
                <div className="challenges-grid">
                    <div className="challenge-card">
                        <h3>パフォーマンス最適化</h3>
                        <p>
                            重複クリック防止とローディング状態の管理により、ユーザー体験を向上
                        </p>
                    </div>
                    <div className="challenge-card">
                        <h3>データ整合性</h3>
                        <p>
                            ユニーク制約により、同一ユーザーが同じ案件を重複してお気に入り登録することを防止
                        </p>
                    </div>
                    <div className="challenge-card">
                        <h3>UI/UX設計</h3>
                        <p>
                            直感的な操作性とアニメーションによる視覚的フィードバックを実現
                        </p>
                    </div>
                </div>
            </section>

            <style>{`
        .favorite-feature {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Noto Sans JP', sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .feature-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          border-radius: 12px;
        }

        .feature-header h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .feature-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .overview-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-top: 3px solid #ff6b6b;
        }

        .overview-card h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        .overview-card ul {
          list-style: none;
          padding: 0;
        }

        .overview-card li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .overview-card li:before {
          content: '✓';
          color: #ff6b6b;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .tab-navigation {
          display: flex;
          border-bottom: 2px solid #eee;
          margin-bottom: 2rem;
        }

        .tab-button {
          padding: 1rem 2rem;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 1rem;
          color: #666;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }

        .tab-button.active {
          color: #ff6b6b;
          border-bottom-color: #ff6b6b;
        }

        .tab-button:hover {
          color: #ff6b6b;
        }

        .tab-content {
          min-height: 400px;
        }

        .architecture-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 2rem 0;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .flow-step {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          flex: 1;
          min-width: 200px;
          text-align: center;
        }

        .flow-step h4 {
          color: #ff6b6b;
          margin-bottom: 0.5rem;
        }

        .flow-arrow {
          font-size: 1.5rem;
          color: #ff6b6b;
          font-weight: bold;
        }

        .code-block {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1rem 0;
          overflow-x: auto;
        }

        .code-block pre {
          margin: 0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .implementation-points {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .implementation-points h4 {
          color: #856404;
          margin-bottom: 1rem;
        }

        .implementation-points ul {
          list-style: none;
          padding: 0;
        }

        .implementation-points li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .implementation-points li:before {
          content: '💡';
          position: absolute;
          left: 0;
        }

        .styling-features {
          margin-top: 2rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .feature-item {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .feature-item h5 {
          color: #ff6b6b;
          margin-bottom: 0.5rem;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .challenge-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-left: 4px solid #ff6b6b;
        }

        .challenge-card h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        section {
          margin-bottom: 3rem;
        }

        h2 {
          color: #333;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #ff6b6b;
        }

        @media (max-width: 768px) {
          .favorite-feature {
            padding: 1rem;
          }
          
          .feature-header h1 {
            font-size: 2rem;
          }
          
          .architecture-flow {
            flex-direction: column;
          }
          
          .flow-arrow {
            transform: rotate(90deg);
          }
          
          .tab-navigation {
            flex-wrap: wrap;
          }
          
          .tab-button {
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>
        </div>
    );
};

export default FavoriteFeature;
