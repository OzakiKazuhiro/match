import React, { useState } from "react";

const TechStackDetails: React.FC = () => {
    const [activeTab, setActiveTab] = useState<
        "laravel" | "react" | "typescript" | "scss"
    >("laravel");

    const codeExamples = {
        laravel: {
            model: `// app/Models/JobListing.php
class JobListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'type',
        'category',
        'skills',
        'min_amount',
        'max_amount',
        'description',
        'user_id',
        'is_closed',
    ];

    protected $casts = [
        'skills' => 'array',
        'min_amount' => 'integer',
        'max_amount' => 'integer',
        'is_closed' => 'boolean',
    ];

    // リレーション定義
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function applications(): HasMany
    {
        return $this->hasMany(Application::class);
    }

    public function favorites(): HasMany
    {
        return $this->hasMany(Favorite::class);
    }

    public function publicMessages(): HasMany
    {
        return $this->hasMany(PublicMessage::class);
    }

    // スコープメソッド
    public function scopeByType(Builder $query, ?string $type): Builder
    {
        return $type ? $query->where('type', $type) : $query;
    }

    public function scopeByCategory(Builder $query, ?string $category): Builder
    {
        return $category ? $query->where('category', $category) : $query;
    }

    public function scopeBySkills(Builder $query, ?string $skills): Builder
    {
        return $skills ? $query->whereJsonContains('skills', $skills) : $query;
    }

    public function scopeSearch(Builder $query, ?string $search): Builder
    {
        return $search ? $query->where(function ($q) use ($search) {
            $q->where('title', 'like', "%{$search}%")
              ->orWhere('description', 'like', "%{$search}%");
        }) : $query;
    }

    public function scopeOpen(Builder $query): Builder
    {
        return $query->where('is_closed', false);
    }
}`,

            controller: `// app/Http/Controllers/JobListingController.php
class JobListingController extends Controller
{
    public function index(Request $request): Response
    {
        $query = JobListing::with(['user', 'favorites'])
            ->byType($request->type)
            ->byCategory($request->category)
            ->bySkills($request->skills)
            ->search($request->search)
            ->open()
            ->latest();

        $jobListings = $query->paginate(20)->withQueryString();

        // お気に入り状態を追加
        $jobListings->getCollection()->transform(function ($jobListing) {
            $jobListing->is_favorited = $jobListing->isFavoritedBy(auth()->user());
            return $jobListing;
        });

        return Inertia::render('JobListings/Index', [
            'jobListings' => $jobListings,
            'filters' => $request->only(['type', 'category', 'skills', 'search']),
            'categories' => config('job.categories'),
            'skillOptions' => config('job.skills'),
        ]);
    }

    public function store(StoreJobListingRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $jobListing = JobListing::create([
                ...$request->validated(),
                'user_id' => Auth::id(),
                'skills' => $request->skills ?? [],
            ]);

            DB::commit();

            return redirect()->route('job-listings.show', $jobListing)
                ->with('success', '案件を投稿しました');
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('案件投稿エラー: ' . $e->getMessage());
            return redirect()->back()
                ->with('error', '案件の投稿に失敗しました')
                ->withInput();
        }
    }
}`,
        },

        react: {
            component: `// resources/js/Components/JobListingCard.tsx
interface JobListingCardProps {
    jobListing: JobListing;
    showFavoriteButton?: boolean;
    className?: string;
}

export default function JobListingCard({
    jobListing,
    showFavoriteButton = true,
    className = ""
}: JobListingCardProps) {
    const formatAmount = (min?: number, max?: number): string => {
        if (!min && !max) return "要相談";
        if (min && max) return \`\${min}万円 〜 \${max}万円\`;
        if (min) return \`\${min}万円〜\`;
        return \`〜\${max}万円\`;
    };

    const getTypeLabel = (type: string): string => {
        return type === 'one-time' ? '単発案件' : 'レベニューシェア';
    };

    const getTypeColor = (type: string): string => {
        return type === 'one-time' ? 'type-onetime' : 'type-revenue';
    };

    return (
        <div className={\`job-listing-card \${className}\`}>
            <div className="card-header">
                <div className="type-badge">
                    <span className={\`badge \${getTypeColor(jobListing.type)}\`}>
                        {getTypeLabel(jobListing.type)}
                    </span>
                </div>
                {showFavoriteButton && (
                    <FavoriteButton
                        jobId={jobListing.id}
                        initialIsFavorited={jobListing.is_favorited}
                        size="sm"
                    />
                )}
            </div>

            <div className="card-content">
                <h3 className="job-title">
                    <Link href={route('job-listings.show', jobListing.id)}>
                        {jobListing.title}
                    </Link>
                </h3>

                <div className="job-meta">
                    <span className="category">{jobListing.category}</span>
                    {jobListing.type === 'one-time' && (
                        <span className="amount">
                            {formatAmount(jobListing.min_amount, jobListing.max_amount)}
                        </span>
                    )}
                </div>

                <p className="job-description">
                    {jobListing.description.length > 100
                        ? \`\${jobListing.description.substring(0, 100)}...\`
                        : jobListing.description
                    }
                </p>

                {jobListing.skills && jobListing.skills.length > 0 && (
                    <div className="skills-list">
                        {jobListing.skills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                        {jobListing.skills.length > 3 && (
                            <span className="skill-more">
                                +{jobListing.skills.length - 3}
                            </span>
                        )}
                    </div>
                )}

                <div className="card-footer">
                    <div className="user-info">
                        <img
                            src={jobListing.user.profile_photo_url}
                            alt={jobListing.user.name}
                            className="user-avatar"
                        />
                        <span className="user-name">{jobListing.user.name}</span>
                    </div>
                    <time className="posted-date">
                        {dayjs(jobListing.created_at).fromNow()}
                    </time>
                </div>
            </div>
        </div>
    );
}`,

            hooks: `// resources/js/hooks/useJobListings.ts
interface UseJobListingsProps {
    initialData?: PaginatedData<JobListing>;
    filters?: JobListingFilters;
}

export function useJobListings({ initialData, filters }: UseJobListingsProps = {}) {
    const [data, setData] = useState<PaginatedData<JobListing> | null>(initialData || null);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState<string | null>(null);

    const fetchJobListings = useCallback(async (params: JobListingFilters = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(route('api.job-listings.index'), {
                params: { ...filters, ...params }
            });
            setData(response.data);
        } catch (err) {
            setError('案件の取得に失敗しました');
            console.error('Job listings fetch error:', err);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    const loadMore = useCallback(async () => {
        if (!data?.next_page_url || loading) return;

        try {
            const response = await axios.get(data.next_page_url);
            setData(prev => prev ? {
                ...response.data,
                data: [...prev.data, ...response.data.data]
            } : response.data);
        } catch (err) {
            setError('追加データの取得に失敗しました');
        }
    }, [data?.next_page_url, loading]);

    useEffect(() => {
        if (!initialData) {
            fetchJobListings();
        }
    }, [fetchJobListings, initialData]);

    return {
        data,
        loading,
        error,
        fetchJobListings,
        loadMore,
        hasMore: !!data?.next_page_url
    };
}`,
        },

        typescript: {
            interfaces: `// resources/js/types/index.ts
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    profile_photo_path?: string;
    profile_photo_url: string;
    introduction?: string;
    created_at: string;
    updated_at: string;
}

export interface JobListing {
    id: number;
    title: string;
    type: 'one-time' | 'revenue-share';
    category: string;
    skills: string[];
    min_amount?: number;
    max_amount?: number;
    description: string;
    is_closed: boolean;
    user_id: number;
    user: User;
    applications_count?: number;
    favorites_count?: number;
    is_favorited?: boolean;
    created_at: string;
    updated_at: string;
}

export interface Application {
    id: number;
    job_listing_id: number;
    user_id: number;
    message: string;
    status: 'pending' | 'accepted' | 'declined';
    job_listing: JobListing;
    user: User;
    created_at: string;
    updated_at: string;
}

export interface PublicMessage {
    id: number;
    job_listing_id: number;
    user_id: number;
    content: string;
    user: User;
    created_at: string;
    updated_at: string;
}

export interface DirectMessage {
    id: number;
    conversation_group_id: number;
    sender_id: number;
    content: string;
    read_at?: string;
    sender: User;
    created_at: string;
    updated_at: string;
}

export interface ConversationGroup {
    id: number;
    job_listing_id: number;
    job_owner_id: number;
    applicant_id: number;
    job_listing: JobListing;
    job_owner: User;
    applicant: User;
    latest_message?: DirectMessage;
    unread_count?: number;
    created_at: string;
    updated_at: string;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url?: string;
    prev_page_url?: string;
}

export interface JobListingFilters {
    type?: string;
    category?: string;
    skills?: string;
    search?: string;
    page?: number;
}`,

            validation: `// resources/js/utils/validation.ts
export interface ValidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | null;
}

export interface ValidationRules {
    [key: string]: ValidationRule;
}

export interface ValidationErrors {
    [key: string]: string;
}

export function validateForm(data: Record<string, any>, rules: ValidationRules): ValidationErrors {
    const errors: ValidationErrors = {};

    Object.keys(rules).forEach(field => {
        const value = data[field];
        const rule = rules[field];

        // Required validation
        if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
            errors[field] = \`\${field}は必須項目です\`;
            return;
        }

        // Skip other validations if value is empty and not required
        if (!value) return;

        // Min length validation
        if (rule.minLength && value.length < rule.minLength) {
            errors[field] = \`\${field}は\${rule.minLength}文字以上で入力してください\`;
            return;
        }

        // Max length validation
        if (rule.maxLength && value.length > rule.maxLength) {
            errors[field] = \`\${field}は\${rule.maxLength}文字以内で入力してください\`;
            return;
        }

        // Pattern validation
        if (rule.pattern && !rule.pattern.test(value)) {
            errors[field] = \`\${field}の形式が正しくありません\`;
            return;
        }

        // Custom validation
        if (rule.custom) {
            const customError = rule.custom(value);
            if (customError) {
                errors[field] = customError;
                return;
            }
        }
    });

    return errors;
}

// 使用例
export const jobListingValidationRules: ValidationRules = {
    title: {
        required: true,
        minLength: 5,
        maxLength: 100
    },
    type: {
        required: true,
        custom: (value) => {
            if (!['one-time', 'revenue-share'].includes(value)) {
                return '案件種別を選択してください';
            }
            return null;
        }
    },
    category: {
        required: true
    },
    description: {
        required: true,
        minLength: 20,
        maxLength: 2000
    },
    min_amount: {
        custom: (value) => {
            if (value && (isNaN(value) || value < 1)) {
                return '金額は1以上の数値で入力してください';
            }
            return null;
        }
    }
};`,
        },

        scss: {
            foundation: `// resources/scss/foundation/_base.scss
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 16px;
    line-height: 1.6;
    -webkit-text-size-adjust: 100%;
}

body {
    margin: 0;
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    color: #333;
    background-color: #f8f9fa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

// リセットCSS
h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.3;
}

p {
    margin: 0 0 1rem;
}

a {
    color: #6cc3e0;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #5ab3d1;
        text-decoration: underline;
    }
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
}

img {
    max-width: 100%;
    height: auto;
}

// フォーカス管理
:focus {
    outline: 2px solid #6cc3e0;
    outline-offset: 2px;
}

:focus:not(:focus-visible) {
    outline: none;
}`,

            layout: `// resources/scss/layout/_header.scss
.l-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &__container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;

        @media (max-width: 768px) {
            padding: 0 0.5rem;
            height: 56px;
        }
    }

    &__logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: #6cc3e0;
        text-decoration: none;

        &:hover {
            color: #5ab3d1;
            text-decoration: none;
        }
    }

    &__nav {
        display: flex;
        align-items: center;
        gap: 2rem;

        @media (max-width: 768px) {
            gap: 1rem;
        }
    }

    &__nav-link {
        color: #333;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: all 0.3s ease;

        &:hover {
            background-color: #f8f9fa;
            color: #6cc3e0;
            text-decoration: none;
        }

        &--active {
            background-color: #6cc3e0;
            color: white;

            &:hover {
                background-color: #5ab3d1;
                color: white;
            }
        }
    }

    &__user-menu {
        position: relative;
    }

    &__user-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 50px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #f8f9fa;
        }
    }

    &__user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        min-width: 200px;
        z-index: 1000;
    }

    &__dropdown-item {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        color: #333;
        text-align: left;
        border-bottom: 1px solid #f0f0f0;
        transition: background-color 0.3s ease;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            background-color: #f8f9fa;
            text-decoration: none;
        }
    }
}`,

            component: `// resources/scss/object/component/_button.scss
.c-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: 44px; // タッチターゲットサイズ

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
    }

    // Primary button
    &--primary {
        background-color: #6cc3e0;
        color: white;
        border-color: #6cc3e0;

        &:hover:not(:disabled) {
            background-color: #5ab3d1;
            border-color: #5ab3d1;
            color: white;
            text-decoration: none;
        }

        &:focus {
            box-shadow: 0 0 0 3px rgba(108, 195, 224, 0.25);
        }
    }

    // Secondary button
    &--secondary {
        background-color: white;
        color: #6cc3e0;
        border-color: #6cc3e0;

        &:hover:not(:disabled) {
            background-color: #6cc3e0;
            color: white;
            text-decoration: none;
        }

        &:focus {
            box-shadow: 0 0 0 3px rgba(108, 195, 224, 0.25);
        }
    }

    // Danger button
    &--danger {
        background-color: #ff6b6b;
        color: white;
        border-color: #ff6b6b;

        &:hover:not(:disabled) {
            background-color: #ff5252;
            border-color: #ff5252;
            color: white;
            text-decoration: none;
        }

        &:focus {
            box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.25);
        }
    }

    // Size variations
    &--sm {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        min-height: 36px;
    }

    &--lg {
        padding: 1rem 2rem;
        font-size: 1.125rem;
        min-height: 52px;
    }

    // Full width
    &--full {
        width: 100%;
    }

    // Icon button
    &--icon {
        padding: 0.75rem;
        min-width: 44px;

        &.c-button--sm {
            padding: 0.5rem;
            min-width: 36px;
        }

        &.c-button--lg {
            padding: 1rem;
            min-width: 52px;
        }
    }

    // Loading state
    &--loading {
        position: relative;
        color: transparent;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
            border: 2px solid currentColor;
            border-top-color: transparent;
            border-radius: 50%;
            animation: button-loading 0.8s linear infinite;
        }
    }
}

@keyframes button-loading {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}`,
        },
    };

    return (
        <div className="tech-stack-details">
            <header className="feature-header">
                <h1>🛠 技術スタック詳細</h1>
                <p className="feature-subtitle">
                    Laravel 11 + React + TypeScript + SCSS
                    による現代的なWebアプリケーション開発
                </p>
            </header>

            <section className="stack-overview">
                <h2>🎯 技術選定の理由</h2>
                <div className="overview-grid">
                    <div className="overview-card">
                        <h3>Laravel 11</h3>
                        <ul>
                            <li>豊富なエコシステム</li>
                            <li>Eloquent ORM による直感的なDB操作</li>
                            <li>強力な認証・認可システム</li>
                            <li>優れたテスト環境</li>
                        </ul>
                    </div>
                    <div className="overview-card">
                        <h3>React + TypeScript</h3>
                        <ul>
                            <li>コンポーネント指向の開発</li>
                            <li>型安全性による品質向上</li>
                            <li>豊富なエコシステム</li>
                            <li>優れた開発者体験</li>
                        </ul>
                    </div>
                    <div className="overview-card">
                        <h3>Inertia.js</h3>
                        <ul>
                            <li>SPA体験とSSRの両立</li>
                            <li>Laravel側でのルーティング管理</li>
                            <li>シンプルな状態管理</li>
                            <li>SEO対策の容易さ</li>
                        </ul>
                    </div>
                    <div className="overview-card">
                        <h3>SCSS + FLOCSS</h3>
                        <ul>
                            <li>保守性の高いCSS設計</li>
                            <li>コンポーネント指向のスタイリング</li>
                            <li>再利用可能なスタイル</li>
                            <li>チーム開発での一貫性</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="implementation-details">
                <h2>🛠 実装詳細</h2>

                <div className="tab-navigation">
                    <button
                        className={`tab-button ${
                            activeTab === "laravel" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("laravel")}
                    >
                        Laravel
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "react" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("react")}
                    >
                        React
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "typescript" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("typescript")}
                    >
                        TypeScript
                    </button>
                    <button
                        className={`tab-button ${
                            activeTab === "scss" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("scss")}
                    >
                        SCSS/FLOCSS
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "laravel" && (
                        <div className="tab-panel">
                            <h3>Eloquentモデルの実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.laravel.model}</code>
                                </pre>
                            </div>

                            <h3>コントローラーの実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>
                                        {codeExamples.laravel.controller}
                                    </code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>Laravel 11の特徴</h4>
                                <ul>
                                    <li>
                                        <strong>Eloquent ORM:</strong>{" "}
                                        直感的なデータベース操作とリレーション管理
                                    </li>
                                    <li>
                                        <strong>スコープメソッド:</strong>{" "}
                                        再利用可能なクエリロジック
                                    </li>
                                    <li>
                                        <strong>トランザクション:</strong>{" "}
                                        データ整合性の確保
                                    </li>
                                    <li>
                                        <strong>バリデーション:</strong>{" "}
                                        FormRequestによる入力値検証
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "react" && (
                        <div className="tab-panel">
                            <h3>Reactコンポーネントの実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.react.component}</code>
                                </pre>
                            </div>

                            <h3>カスタムフックの実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.react.hooks}</code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>React実装の特徴</h4>
                                <ul>
                                    <li>
                                        <strong>関数コンポーネント:</strong>{" "}
                                        Hooksを活用したモダンな実装
                                    </li>
                                    <li>
                                        <strong>カスタムフック:</strong>{" "}
                                        ロジックの再利用と分離
                                    </li>
                                    <li>
                                        <strong>TypeScript統合:</strong>{" "}
                                        型安全なコンポーネント開発
                                    </li>
                                    <li>
                                        <strong>パフォーマンス最適化:</strong>{" "}
                                        useCallback、useMemoの活用
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "typescript" && (
                        <div className="tab-panel">
                            <h3>型定義の実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>
                                        {codeExamples.typescript.interfaces}
                                    </code>
                                </pre>
                            </div>

                            <h3>バリデーション関数の実装</h3>
                            <div className="code-block">
                                <pre>
                                    <code>
                                        {codeExamples.typescript.validation}
                                    </code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>TypeScriptの活用</h4>
                                <ul>
                                    <li>
                                        <strong>型安全性:</strong>{" "}
                                        コンパイル時のエラー検出
                                    </li>
                                    <li>
                                        <strong>インターフェース:</strong>{" "}
                                        データ構造の明確な定義
                                    </li>
                                    <li>
                                        <strong>ジェネリクス:</strong>{" "}
                                        再利用可能な型定義
                                    </li>
                                    <li>
                                        <strong>開発効率:</strong>{" "}
                                        IDEの強力な補完機能
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "scss" && (
                        <div className="tab-panel">
                            <h3>Foundation Layer</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.scss.foundation}</code>
                                </pre>
                            </div>

                            <h3>Layout Layer</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.scss.layout}</code>
                                </pre>
                            </div>

                            <h3>Component Layer</h3>
                            <div className="code-block">
                                <pre>
                                    <code>{codeExamples.scss.component}</code>
                                </pre>
                            </div>

                            <div className="feature-highlights">
                                <h4>FLOCSS設計の特徴</h4>
                                <ul>
                                    <li>
                                        <strong>Foundation:</strong>{" "}
                                        リセットCSS、基本スタイル
                                    </li>
                                    <li>
                                        <strong>Layout:</strong>{" "}
                                        ページレイアウト、グリッドシステム
                                    </li>
                                    <li>
                                        <strong>Object/Component:</strong>{" "}
                                        再利用可能なUIコンポーネント
                                    </li>
                                    <li>
                                        <strong>Object/Project:</strong>{" "}
                                        プロジェクト固有のスタイル
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="architecture-benefits">
                <h2>🚀 アーキテクチャの利点</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <h3>開発効率</h3>
                        <ul>
                            <li>型安全性による早期エラー検出</li>
                            <li>コンポーネントの再利用性</li>
                            <li>Eloquentによる直感的なDB操作</li>
                            <li>Hot Reloadによる高速開発</li>
                        </ul>
                    </div>
                    <div className="benefit-card">
                        <h3>保守性</h3>
                        <ul>
                            <li>明確な責務分離</li>
                            <li>FLOCSS設計による整理されたCSS</li>
                            <li>TypeScriptによる型安全性</li>
                            <li>テスタブルなコード構造</li>
                        </ul>
                    </div>
                    <div className="benefit-card">
                        <h3>パフォーマンス</h3>
                        <ul>
                            <li>Inertia.jsによる高速ページ遷移</li>
                            <li>Eager Loadingによる最適化</li>
                            <li>コンポーネントの最適化</li>
                            <li>効率的なCSS設計</li>
                        </ul>
                    </div>
                    <div className="benefit-card">
                        <h3>スケーラビリティ</h3>
                        <ul>
                            <li>モジュラーなアーキテクチャ</li>
                            <li>再利用可能なコンポーネント</li>
                            <li>拡張しやすいDB設計</li>
                            <li>チーム開発への対応</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
        .tech-stack-details {
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .overview-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-top: 3px solid #667eea;
        }

        .overview-card h3 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.2rem;
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
          color: #667eea;
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
          color: #667eea;
          border-bottom-color: #667eea;
        }

        .tab-button:hover {
          color: #667eea;
        }

        .tab-content {
          min-height: 400px;
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
          background: #f0f4ff;
          border: 1px solid #d1e7ff;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .feature-highlights h4 {
          color: #2d3748;
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
          content: '💡';
          position: absolute;
          left: 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .benefit-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-left: 4px solid #667eea;
        }

        .benefit-card h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        .benefit-card ul {
          list-style: none;
          padding: 0;
        }

        .benefit-card li {
          padding: 0.3rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .benefit-card li:before {
          content: '•';
          color: #667eea;
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
          border-bottom: 2px solid #667eea;
        }

        @media (max-width: 768px) {
          .tech-stack-details {
            padding: 1rem;
          }
          
          .feature-header h1 {
            font-size: 2rem;
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

export default TechStackDetails;
