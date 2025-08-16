import React, { useState } from "react";

const MessagingSystem: React.FC = () => {
    const [activeTab, setActiveTab] = useState<
        "overview" | "public" | "direct" | "memo"
    >("overview");

    const codeExamples = {
        publicMessage: `// app/Http/Controllers/PublicMessageController.php
public function store(Request $request, JobListing $jobListing)
{
    $request->validate([
        'content' => 'required|string|max:1000',
    ]);

    try {
        DB::beginTransaction();

        $message = PublicMessage::create([
            'job_listing_id' => $jobListing->id,
            'user_id' => Auth::id(),
            'content' => $request->content,
        ]);

        // 案件投稿者に通知（自分の投稿でない場合）
        if ($jobListing->user_id !== Auth::id()) {
            $jobListing->user->notify(new PublicMessageReceived($message));
        }

        DB::commit();

        return redirect()->back()->with('success', 'メッセージを投稿しました');
    } catch (Exception $e) {
        DB::rollBack();
        Log::error('パブリックメッセージ投稿エラー: ' . $e->getMessage());
        return redirect()->back()->with('error', 'メッセージの投稿に失敗しました');
    }
}`,

        directMessage: `// app/Http/Controllers/DirectMessageController.php
public function store(Request $request, ConversationGroup $conversationGroup)
{
    $request->validate([
        'content' => 'required|string|max:1000',
    ]);

    // 権限チェック
    if (!$conversationGroup->hasUser(Auth::id())) {
        abort(403, 'この会話にアクセスする権限がありません。');
    }

    try {
        DB::beginTransaction();

        $message = DirectMessage::create([
            'conversation_group_id' => $conversationGroup->id,
            'sender_id' => Auth::id(),
            'content' => $request->content,
        ]);

        // 相手ユーザーに通知
        $recipientId = $conversationGroup->getOtherUserId(Auth::id());
        $recipient = User::find($recipientId);
        
        if ($recipient) {
            $recipient->notify(new DirectMessageReceived($message));
        }

        DB::commit();

        return redirect()->back();
    } catch (Exception $e) {
        DB::rollBack();
        Log::error('ダイレクトメッセージ送信エラー: ' . $e->getMessage());
        return redirect()->back()->with('error', 'メッセージの送信に失敗しました');
    }
}`,

        conversationGroup: `// app/Models/ConversationGroup.php
class ConversationGroup extends Model
{
    protected $fillable = [
        'job_listing_id',
        'job_owner_id',
        'applicant_id',
    ];

    public function jobListing(): BelongsTo
    {
        return $this->belongsTo(JobListing::class);
    }

    public function jobOwner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'job_owner_id');
    }

    public function applicant(): BelongsTo
    {
        return $this->belongsTo(User::class, 'applicant_id');
    }

    public function directMessages(): HasMany
    {
        return $this->hasMany(DirectMessage::class);
    }

    public function memos(): HasMany
    {
        return $this->hasMany(Memo::class);
    }

    // ユーザーがこの会話グループに参加しているかチェック
    public function hasUser(int $userId): bool
    {
        return $this->job_owner_id === $userId || $this->applicant_id === $userId;
    }

    // 相手ユーザーのIDを取得
    public function getOtherUserId(int $currentUserId): int
    {
        return $this->job_owner_id === $currentUserId 
            ? $this->applicant_id 
            : $this->job_owner_id;
    }

    // 会話グループを取得または作成
    public static function getOrCreateForApplication(
        int $jobListingId, 
        int $jobOwnerId, 
        int $applicantId
    ): self {
        return self::firstOrCreate([
            'job_listing_id' => $jobListingId,
            'job_owner_id' => $jobOwnerId,
            'applicant_id' => $applicantId,
        ]);
    }
}`,

        memoController: `// app/Http/Controllers/MemoController.php
public function store(Request $request, ConversationGroup $conversationGroup)
{
    $request->validate([
        'content' => 'nullable|string|max:1000',
    ]);

    // メモの保存または更新
    $memo = Memo::updateOrCreate(
        [
            'conversation_group_id' => $conversationGroup->id,
            'user_id' => Auth::id(),
        ],
        [
            'content' => $request->content,
        ]
    );

    return response()->json([
        'success' => true,
        'memo' => $memo,
    ]);
}

public function show(ConversationGroup $conversationGroup)
{
    $memo = Memo::where('conversation_group_id', $conversationGroup->id)
        ->where('user_id', Auth::id())
        ->first();

    return response()->json([
        'memo' => $memo,
    ]);
}`,

        messageComponent: `// resources/js/Components/MessageForm.tsx
interface MessageFormProps {
    conversationGroupId?: number;
    jobListingId?: number;
    placeholder?: string;
    onSubmit?: () => void;
}

export default function MessageForm({
    conversationGroupId,
    jobListingId,
    placeholder = "メッセージを入力してください...",
    onSubmit
}: MessageFormProps) {
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!content.trim() || isSubmitting) return;

        setIsSubmitting(true);

        try {
            const url = conversationGroupId 
                ? route('messages.store', conversationGroupId)
                : route('job-listings.messages.store', jobListingId);

            await router.post(url, { content });
            
            setContent('');
            onSubmit?.();
        } catch (error) {
            console.error('メッセージ送信エラー:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-form">
            <div className="message-input-container">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholder}
                    className="message-textarea"
                    rows={3}
                    maxLength={1000}
                    disabled={isSubmitting}
                />
                <div className="message-actions">
                    <span className="character-count">
                        {content.length}/1000
                    </span>
                    <button
                        type="submit"
                        disabled={!content.trim() || isSubmitting}
                        className="send-button"
                    >
                        {isSubmitting ? '送信中...' : '送信'}
                    </button>
                </div>
            </div>
        </form>
    );
}`,
    };

    return (
        <div className="messaging-system">
            <header className="feature-header">
                <h1>💬 メッセージングシステム</h1>
                <p className="feature-subtitle">
                    パブリックメッセージ・ダイレクトメッセージ・メモ機能の実装詳細
                </p>
            </header>

            <section className="system-overview">
                <h2>🎯 システム概要</h2>
                <div className="overview-grid">
                    <div className="overview-card">
                        <h3>📢 パブリックメッセージ</h3>
                        <ul>
                            <li>案件詳細ページでの公開質疑応答</li>
                            <li>誰でも閲覧可能</li>
                            <li>案件に関する一般的な質問に最適</li>
                            <li>投稿者への通知機能</li>
                        </ul>
                    </div>
                    <div className="overview-card">
                        <h3>🔒 ダイレクトメッセージ</h3>
                        <ul>
                            <li>1対1のプライベートメッセージ</li>
                            <li>応募承認後に利用可能</li>
                            <li>詳細な打ち合わせに使用</li>
                            <li>既読管理機能</li>
                        </ul>
                    </div>
                    <div className="overview-card">
                        <h3>📝 メモ機能</h3>
                        <ul>
                            <li>会話ごとの個人メモ</li>
                            <li>相手には見えないプライベート情報</li>
                            <li>リアルタイム保存</li>
                            <li>1000文字まで対応</li>
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
                        アーキテクチャ
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "public" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("public")}
                    >
                        パブリックメッセージ
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "direct" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("direct")}
                    >
                        ダイレクトメッセージ
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "memo" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("memo")}
                    >
                        メモ機能
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "overview" && (
                        <div className="tab-panel">
                            <h3>データベース設計</h3>
                            <div className="db-schema">
                                <div className="table-card">
                                    <h4>public_messages</h4>
                                    <ul>
                                        <li>id (Primary Key)</li>
                                        <li>job_listing_id (Foreign Key)</li>
                                        <li>user_id (Foreign Key)</li>
                                        <li>content (Text)</li>
                                        <li>created_at, updated_at</li>
                                    </ul>
                                </div>
                                <div className="table-card">
                                    <h4>conversation_groups</h4>
                                    <ul>
                                        <li>id (Primary Key)</li>
                                        <li>job_listing_id (Foreign Key)</li>
                                        <li>job_owner_id (Foreign Key)</li>
                                        <li>applicant_id (Foreign Key)</li>
                                        <li>created_at, updated_at</li>
                                    </ul>
                                </div>
                                <div className="table-card">
                                    <h4>direct_messages</h4>
                                    <ul>
                                        <li>id (Primary Key)</li>
                                        <li>
                                            conversation_group_id (Foreign Key)
                                        </li>
                                        <li>sender_id (Foreign Key)</li>
                                        <li>content (Text)</li>
                                        <li>read_at (Timestamp)</li>
                                        <li>created_at, updated_at</li>
                                    </ul>
                                </div>
                                <div className="table-card">
                                    <h4>memos</h4>
                                    <ul>
                                        <li>id (Primary Key)</li>
                                        <li>
                                            conversation_group_id (Foreign Key)
                                        </li>
                                        <li>user_id (Foreign Key)</li>
                                        <li>content (Text)</li>
                                        <li>created_at, updated_at</li>
                                    </ul>
                                </div>
                            </div>

                            <h3>メッセージフロー</h3>
                            <div className="message-flow">
                                <div className="flow-step">
                                    <h4>1. 案件投稿</h4>
                                    <p>
                                        案件が投稿され、パブリックメッセージが利用可能に
                                    </p>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-step">
                                    <h4>2. 応募・承認</h4>
                                    <p>
                                        応募が承認されると会話グループが自動作成
                                    </p>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-step">
                                    <h4>3. ダイレクトメッセージ</h4>
                                    <p>
                                        1対1のプライベートメッセージが利用可能に
                                    </p>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-step">
                                    <h4>4. メモ機能</h4>
                                    <p>各ユーザーが個人的なメモを記録可能</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "public" && (
                        <div className="tab-panel">
                            <h3>パブリックメッセージの実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.publicMessage}</code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>特徴</h4>
                                <ul>
                                    <li>
                                        <strong>オープンな質疑応答:</strong>{" "}
                                        案件に関する一般的な質問を公開で行える
                                    </li>
                                    <li>
                                        <strong>通知機能:</strong>{" "}
                                        案件投稿者に新しいメッセージを通知
                                    </li>
                                    <li>
                                        <strong>編集・削除:</strong>{" "}
                                        投稿者は自分のメッセージを編集・削除可能
                                    </li>
                                    <li>
                                        <strong>文字数制限:</strong>{" "}
                                        1000文字以内でのメッセージ投稿
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "direct" && (
                        <div className="tab-panel">
                            <h3>ダイレクトメッセージの実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.directMessage}</code>
                                </pre>
                            </div>

                            <h3>会話グループモデル</h3>
                            <div className="code-block">
                                <pre>
                                    <code>
                                        {codeExamples.conversationGroup}
                                    </code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>特徴</h4>
                                <ul>
                                    <li>
                                        <strong>プライベート通信:</strong>{" "}
                                        応募者と案件投稿者のみがアクセス可能
                                    </li>
                                    <li>
                                        <strong>自動グループ作成:</strong>{" "}
                                        応募承認時に会話グループを自動生成
                                    </li>
                                    <li>
                                        <strong>権限管理:</strong>{" "}
                                        参加者以外のアクセスを制限
                                    </li>
                                    <li>
                                        <strong>既読管理:</strong>{" "}
                                        メッセージの既読状態を追跡
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "memo" && (
                        <div className="tab-panel">
                            <h3>メモ機能の実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.memoController}</code>
                                </pre>
                            </div>

                            <h3>フロントエンドコンポーネント</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.messageComponent}</code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>特徴</h4>
                                <ul>
                                    <li>
                                        <strong>個人専用:</strong>{" "}
                                        各ユーザーが会話ごとに個人的なメモを保存
                                    </li>
                                    <li>
                                        <strong>リアルタイム保存:</strong>{" "}
                                        入力内容を自動的に保存
                                    </li>
                                    <li>
                                        <strong>プライバシー保護:</strong>{" "}
                                        相手ユーザーには表示されない
                                    </li>
                                    <li>
                                        <strong>情報管理:</strong>{" "}
                                        重要な情報や進捗状況を記録
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="technical-features">
                <h2>🚀 技術的特徴</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>セキュリティ</h3>
                        <ul>
                            <li>CSRF保護</li>
                            <li>XSS対策</li>
                            <li>権限ベースのアクセス制御</li>
                            <li>入力値検証</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>パフォーマンス</h3>
                        <ul>
                            <li>Eager Loading によるN+1問題解決</li>
                            <li>ページネーション対応</li>
                            <li>インデックス最適化</li>
                            <li>キャッシュ戦略</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <h3>ユーザビリティ</h3>
                        <ul>
                            <li>リアルタイム更新</li>
                            <li>楽観的UI更新</li>
                            <li>エラーハンドリング</li>
                            <li>レスポンシブデザイン</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
        .messaging-system {
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
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
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
          border-top: 3px solid #4ecdc4;
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
          content: '•';
          color: #4ecdc4;
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
          color: #4ecdc4;
          border-bottom-color: #4ecdc4;
        }

        .tab-button:hover {
          color: #4ecdc4;
        }

        .tab-content {
          min-height: 400px;
        }

        .db-schema {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .table-card {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #4ecdc4;
        }

        .table-card h4 {
          color: #4ecdc4;
          margin-bottom: 1rem;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .table-card ul {
          list-style: none;
          padding: 0;
        }

        .table-card li {
          padding: 0.3rem 0;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
          color: #666;
        }

        .message-flow {
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
          color: #4ecdc4;
          margin-bottom: 0.5rem;
        }

        .flow-arrow {
          font-size: 1.5rem;
          color: #4ecdc4;
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

        .feature-highlights {
          background: #e8f5e8;
          border: 1px solid #c3e6c3;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .feature-highlights h4 {
          color: #2d5a2d;
          margin-bottom: 1rem;
        }

        .feature-highlights ul {
          list-style: none;
          padding: 0;
        }

        .feature-highlights li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .feature-highlights li:before {
          content: '✓';
          color: #4ecdc4;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .feature-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-left: 4px solid #4ecdc4;
        }

        .feature-card h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        .feature-card ul {
          list-style: none;
          padding: 0;
        }

        .feature-card li {
          padding: 0.3rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .feature-card li:before {
          content: '•';
          color: #4ecdc4;
          position: absolute;
          left: 0;
        }

        section {
          margin-bottom: 3rem;
        }

        h2 {
          color: #333;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #4ecdc4;
        }

        @media (max-width: 768px) {
          .messaging-system {
            padding: 1rem;
          }
          
          .feature-header h1 {
            font-size: 2rem;
          }
          
          .message-flow {
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
          
          .db-schema {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default MessagingSystem;
