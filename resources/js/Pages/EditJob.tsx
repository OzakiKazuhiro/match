import { useState, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import axios from "axios";

// 文字数表示コンポーネント
function DescriptionCount({ current, max }: { current: number; max: number }) {
    // 残り文字数に応じた色を設定
    const getCountColor = () => {
        if (current > max) return "#dc3545"; // 赤（エラー）
        if (current > max * 0.9) return "#ffc107"; // 黄色（警告）
        return "#444"; // デフォルト色
    };

    return (
        <span
            className="p-post-job__character-count"
            style={{ color: getCountColor() }}
        >
            {current} / {max}文字
        </span>
    );
}

// バリデーションエラーの型定義
interface ValidationErrors {
    title?: string;
    budget_min?: string;
    budget_max?: string;
    category?: string;
    description?: string;
    [key: string]: string | undefined;
}

interface JobListingData {
    id: number;
    title: string;
    type: "one_time" | "revenue_share";
    description: string;
    budget_min?: number | null;
    budget_max?: number | null;
    is_closed: boolean;
    category?: string | null;
    location?: string;
    skills?: string[] | null;
    preferred_skills?: string[] | null;
}

export default function EditJob({
    auth,
    jobListing,
}: PageProps<{ jobListing: JobListingData }>) {
    const [customSkill, setCustomSkill] = useState("");
    const [customPreferredSkill, setCustomPreferredSkill] = useState("");
    const [displayBudgetMin, setDisplayBudgetMin] = useState<string>("");
    const [displayBudgetMax, setDisplayBudgetMax] = useState<string>("");
    const [submitting, setSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
        {}
    );

    // 案件データをフォームに設定
    const { data, setData, put, processing, errors, reset } = useForm({
        title: jobListing.title,
        type: jobListing.type,
        description: jobListing.description,
        budget_min: jobListing.budget_min
            ? String(Math.floor(Number(jobListing.budget_min) / 1000))
            : "",
        budget_max: jobListing.budget_max
            ? String(Math.floor(Number(jobListing.budget_max) / 1000))
            : "",
        category: jobListing.category || "",
        skills: jobListing.skills || [],
        preferred_skills: jobListing.preferred_skills || [],
        location: jobListing.location || "リモート",
        is_closed: jobListing.is_closed,
    });

    // カテゴリーの選択肢
    const categoryOptions = [
        "ウェブ開発",
        "モバイルアプリ開発",
        "デザイン",
        "サーバー/インフラ",
        "AI/機械学習",
        "データ分析",
        "ECサイト",
        "API開発",
        "WordPress開発",
        "IT業界に詳しくないので分からない",
        "エンジニアに気軽に相談",
        "その他",
    ];

    // スキルの選択肢
    const skillOptions = [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Vue.js",
        "Angular",
        "Next.js",
        "PHP",
        "Laravel",
        "Ruby",
        "Ruby on Rails",
        "Python",
        "Django",
        "Java",
        "C#",
        "Swift",
        "Kotlin",
        "Flutter",
        "React Native",
        "AWS",
        "Docker",
        "Kubernetes",
        "UI/UXデザイン",
        "Figma",
        "Photoshop",
        "Illustrator",
        "WordPress",
        "データベース設計",
        "SQL",
        "NoSQL",
    ];

    // useEffectを使って予算表示を更新
    useEffect(() => {
        updateDisplayBudget(data.budget_min, setDisplayBudgetMin);
        updateDisplayBudget(data.budget_max, setDisplayBudgetMax);
    }, [data.budget_min, data.budget_max]);

    // 金額表示更新関数
    const updateDisplayBudget = (
        value: string,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        if (!value) {
            setter("");
            return;
        }

        try {
            // 数値に変換して千円単位を円単位に変換
            const amount = parseInt(value) * 1000;
            // 金額をカンマ区切りで表示
            setter(amount.toLocaleString() + "円");
        } catch (e) {
            setter("");
        }
    };

    const addSkill = () => {
        if (customSkill && !data.skills.includes(customSkill)) {
            setData("skills", [...data.skills, customSkill]);
            setCustomSkill("");
        }
    };

    const removeSkill = (skillToRemove: string) => {
        setData(
            "skills",
            data.skills.filter((skill) => skill !== skillToRemove)
        );
    };

    const addPreferredSkill = () => {
        if (
            customPreferredSkill &&
            !data.preferred_skills.includes(customPreferredSkill)
        ) {
            setData("preferred_skills", [
                ...data.preferred_skills,
                customPreferredSkill,
            ]);
            setCustomPreferredSkill("");
        }
    };

    const removePreferredSkill = (skillToRemove: string) => {
        setData(
            "preferred_skills",
            data.preferred_skills.filter((skill) => skill !== skillToRemove)
        );
    };

    // フォームバリデーション関数
    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};

        // タイトルのバリデーション
        if (!data.title.trim()) {
            newErrors.title = "タイトルは必須です";
        } else if (data.title.length > 100) {
            newErrors.title = "タイトルは100文字以内で入力してください";
        }

        // 予算のバリデーション（単発案件の場合）
        if (data.type === "one_time") {
            const minBudget = data.budget_min ? parseInt(data.budget_min) : 0;
            const maxBudget = data.budget_max ? parseInt(data.budget_max) : 0;

            if (!data.budget_min && !data.budget_max) {
                newErrors.budget_min = "最小または最大予算を設定してください";
            } else if (
                minBudget > 0 &&
                maxBudget > 0 &&
                minBudget > maxBudget
            ) {
                newErrors.budget_max =
                    "最大予算は最小予算以上に設定してください";
            }

            // 予算の上限をチェック
            if (minBudget > 50000) {
                newErrors.budget_min =
                    "最小予算は5,000万円（50,000千円）以下に設定してください";
            }
            if (maxBudget > 50000) {
                newErrors.budget_max =
                    "最大予算は5,000万円（50,000千円）以下に設定してください";
            }
        }

        // カテゴリーのバリデーション
        if (!data.category) {
            newErrors.category = "カテゴリーを選択してください";
        }

        // 説明のバリデーション
        if (!data.description.trim()) {
            newErrors.description = "案件の説明は必須です";
        } else if (data.description.length > 3000) {
            newErrors.description =
                "案件の説明は3000文字以内で入力してください";
        }

        setValidationErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 予算入力のリアルタイムバリデーション
    const validateBudgetInput = (
        value: string,
        field: "budget_min" | "budget_max"
    ) => {
        if (!value) return;

        const budget = parseInt(value);
        const otherField = field === "budget_min" ? "budget_max" : "budget_min";
        const otherBudget = data[otherField] ? parseInt(data[otherField]) : 0;

        // 新しいエラーオブジェクトを作成
        const newErrors = { ...validationErrors };

        // 上限チェック
        if (budget > 50000) {
            newErrors[field] =
                "予算は5,000万円（50,000千円）以下に設定してください";
        } else {
            delete newErrors[field];

            // 最小値と最大値の関係性チェック（両方の値が入力されている場合のみ）
            if (
                field === "budget_max" &&
                budget > 0 &&
                otherBudget > 0 &&
                budget < otherBudget
            ) {
                newErrors[field] = "最大予算は最小予算以上に設定してください";
            } else if (
                field === "budget_min" &&
                budget > 0 &&
                otherBudget > 0 &&
                budget > otherBudget
            ) {
                newErrors[otherField] =
                    "最大予算は最小予算以上に設定してください";
            } else {
                delete newErrors[otherField];
            }
        }

        setValidationErrors(newErrors);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // フォームバリデーションを実行
        const isValid = validateForm();

        // バリデーションエラーがある場合は送信を中止し、フォーカスを最初のエラーフィールドに移動
        if (!isValid) {
            // エラーのある最初の要素を特定
            const errorFields = ["title", "category", "description"];
            if (data.type === "one_time") {
                errorFields.push("budget_min", "budget_max");
            }

            // 最初のエラーフィールドを探して、そこにフォーカスする
            for (const field of errorFields) {
                if (validationErrors[field]) {
                    const element = document.getElementById(field);
                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                        element.focus();
                        break;
                    }
                }
            }

            return; // バリデーションエラーがある場合は処理を中断
        }

        setSubmitting(true);

        try {
            // 送信用のデータを準備
            const submissionData = {
                ...data,
                _method: "PUT", // Laravelの@methodをサポートするために必要
            };

            // 単発案件の場合のみ、送信前に金額を千円単位から円単位に変換
            if (data.type === "one_time") {
                if (data.budget_min) {
                    submissionData.budget_min = String(
                        parseInt(data.budget_min) * 1000
                    );
                }

                if (data.budget_max) {
                    submissionData.budget_max = String(
                        parseInt(data.budget_max) * 1000
                    );
                }
            }

            // CSRFトークンを取得
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            // POSTを使用してLaravelの_methodでPUTをエミュレート
            const response = await axios.post(
                route("job-listings.update", jobListing.id),
                submissionData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );

            // 成功したらリストページに遷移
            window.location.href = route("job-listings.index");
        } catch (error) {
            console.error("送信エラー:", error);
            setSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-post-job__header-title">案件を編集</div>}
        >
            <Head title="案件を編集" />

            <div className="p-post-job">
                <div className="p-post-job__container">
                    <div className="p-post-job__header">
                        <h1 className="p-post-job__title">案件を編集する</h1>
                        <p className="p-post-job__subtitle">
                            案件情報を編集してください。
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-post-job__form">
                        <div className="p-post-job__section">
                            <h2 className="p-post-job__section-title">
                                基本情報
                            </h2>

                            <div className="p-post-job__form-group">
                                <label
                                    htmlFor="title"
                                    className="p-post-job__label"
                                >
                                    案件タイトル{" "}
                                    <span className="p-post-job__required">
                                        必須
                                    </span>
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    className={`p-post-job__input ${
                                        errors.title || validationErrors.title
                                            ? "p-post-job__input--error"
                                            : ""
                                    }`}
                                    placeholder="例：Reactを使用したウェブアプリ開発"
                                    value={data.title}
                                    onChange={(e) => {
                                        setData("title", e.target.value);
                                        // 入力時にエラーをクリア
                                        if (validationErrors.title) {
                                            setValidationErrors({
                                                ...validationErrors,
                                                title: undefined,
                                            });
                                        }
                                    }}
                                    required
                                />
                                {(errors.title || validationErrors.title) && (
                                    <InputError
                                        message={
                                            errors.title ||
                                            validationErrors.title
                                        }
                                        className="mt-1"
                                    />
                                )}
                            </div>

                            <div className="p-post-job__form-group">
                                <label className="p-post-job__label">
                                    案件種別{" "}
                                    <span className="p-post-job__required">
                                        必須
                                    </span>
                                </label>
                                <div className="p-post-job__radio-group">
                                    <label className="p-post-job__radio">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="one_time"
                                            checked={data.type === "one_time"}
                                            onChange={() =>
                                                setData("type", "one_time")
                                            }
                                            className="p-post-job__radio-input"
                                        />
                                        <span className="p-post-job__radio-text">
                                            単発案件
                                        </span>
                                    </label>
                                    <label className="p-post-job__radio">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="revenue_share"
                                            checked={
                                                data.type === "revenue_share"
                                            }
                                            onChange={() =>
                                                setData("type", "revenue_share")
                                            }
                                            className="p-post-job__radio-input"
                                        />
                                        <span className="p-post-job__radio-text">
                                            レベニューシェア案件
                                        </span>
                                    </label>
                                </div>
                                {errors.type && (
                                    <InputError
                                        message={errors.type}
                                        className="mt-1"
                                    />
                                )}
                            </div>

                            {data.type === "one_time" && (
                                <div className="p-post-job__form-group">
                                    <label className="p-post-job__label">
                                        予算{" "}
                                        <span className="p-post-job__required">
                                            必須
                                        </span>
                                    </label>
                                    <div className="p-post-job__budget-inputs">
                                        <div className="p-post-job__budget-input-wrapper">
                                            <span className="p-post-job__currency">
                                                ¥
                                            </span>
                                            <input
                                                type="number"
                                                placeholder="最小金額（千円単位）"
                                                value={data.budget_min}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;
                                                    setData(
                                                        "budget_min",
                                                        value
                                                    );
                                                    updateDisplayBudget(
                                                        value,
                                                        setDisplayBudgetMin
                                                    );
                                                    validateBudgetInput(
                                                        value,
                                                        "budget_min"
                                                    );
                                                }}
                                                className={`p-post-job__input p-post-job__input--budget ${
                                                    errors.budget_min ||
                                                    validationErrors.budget_min
                                                        ? "p-post-job__input--error"
                                                        : ""
                                                }`}
                                                min="0"
                                                style={{ paddingRight: "45px" }}
                                            />
                                            <span className="p-post-job__unit">
                                                千円
                                            </span>
                                        </div>
                                        <span className="p-post-job__budget-separator">
                                            〜
                                        </span>
                                        <div className="p-post-job__budget-input-wrapper">
                                            <span className="p-post-job__currency">
                                                ¥
                                            </span>
                                            <input
                                                type="number"
                                                placeholder="最大金額（千円単位）"
                                                value={data.budget_max}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;
                                                    setData(
                                                        "budget_max",
                                                        value
                                                    );
                                                    updateDisplayBudget(
                                                        value,
                                                        setDisplayBudgetMax
                                                    );
                                                    validateBudgetInput(
                                                        value,
                                                        "budget_max"
                                                    );
                                                }}
                                                className={`p-post-job__input p-post-job__input--budget ${
                                                    errors.budget_max ||
                                                    validationErrors.budget_max
                                                        ? "p-post-job__input--error"
                                                        : ""
                                                }`}
                                                min="0"
                                                style={{ paddingRight: "45px" }}
                                            />
                                            <span className="p-post-job__unit">
                                                千円
                                            </span>
                                        </div>
                                    </div>
                                    {(errors.budget_min ||
                                        errors.budget_max ||
                                        validationErrors.budget_min ||
                                        validationErrors.budget_max) && (
                                        <div className="p-post-job__error">
                                            {errors.budget_min ||
                                                errors.budget_max ||
                                                validationErrors.budget_min ||
                                                validationErrors.budget_max}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* 実際の金額表示 */}
                            {(displayBudgetMin || displayBudgetMax) && (
                                <div className="p-post-job__budget-preview">
                                    <span className="p-post-job__budget-preview-label">
                                        表示される金額：
                                    </span>
                                    {displayBudgetMin && displayBudgetMax ? (
                                        <span className="p-post-job__budget-preview-value">
                                            {displayBudgetMin} 〜{" "}
                                            {displayBudgetMax}
                                        </span>
                                    ) : displayBudgetMin ? (
                                        <span className="p-post-job__budget-preview-value">
                                            {displayBudgetMin} 〜
                                        </span>
                                    ) : (
                                        <span className="p-post-job__budget-preview-value">
                                            〜 {displayBudgetMax}
                                        </span>
                                    )}
                                </div>
                            )}

                            <div className="p-post-job__budget-help">
                                ※
                                金額は千円単位で半角数字で入力してください（例：50
                                = 5万円、100 = 10万円）
                                <br />※
                                予算の上限は5,000万円（50,000千円）までとなります
                            </div>

                            <div
                                className="p-post-job__form-group"
                                style={{ marginTop: "12px" }}
                            >
                                <label
                                    htmlFor="category"
                                    className="p-post-job__label"
                                >
                                    カテゴリー{" "}
                                    <span className="p-post-job__required">
                                        必須
                                    </span>
                                </label>
                                <select
                                    id="category"
                                    className={`p-post-job__select ${
                                        errors.category ||
                                        validationErrors.category
                                            ? "p-post-job__select--error"
                                            : ""
                                    }`}
                                    value={data.category}
                                    onChange={(e) => {
                                        setData("category", e.target.value);
                                        // 入力時にエラーをクリア
                                        if (validationErrors.category) {
                                            setValidationErrors({
                                                ...validationErrors,
                                                category: undefined,
                                            });
                                        }
                                    }}
                                    required
                                >
                                    <option value="">カテゴリーを選択</option>
                                    {categoryOptions.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                {(errors.category ||
                                    validationErrors.category) && (
                                    <div className="p-post-job__error">
                                        {errors.category ||
                                            validationErrors.category}
                                    </div>
                                )}
                            </div>

                            <div className="p-post-job__form-group">
                                <label
                                    htmlFor="location"
                                    className="p-post-job__label"
                                >
                                    作業場所{" "}
                                    <span className="p-post-job__required">
                                        必須
                                    </span>
                                </label>
                                <select
                                    id="location"
                                    className="p-post-job__select"
                                    value={data.location}
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                    required
                                >
                                    <option value="リモート（在宅勤務）">
                                        リモート（在宅勤務）
                                    </option>
                                    <option value="現場勤務（オンサイト）">
                                        現場勤務（オンサイト）
                                    </option>
                                    <option value="併用型（在宅＋現場）">
                                        併用型（在宅＋現場）
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="p-post-job__section">
                            <h2 className="p-post-job__section-title">
                                案件詳細
                            </h2>

                            <div className="p-post-job__form-group">
                                <label
                                    htmlFor="description"
                                    className="p-post-job__label"
                                >
                                    案件の説明{" "}
                                    <span className="p-post-job__required">
                                        必須
                                    </span>
                                </label>
                                <textarea
                                    id="description"
                                    className={`p-post-job__textarea ${
                                        errors.description ||
                                        validationErrors.description
                                            ? "p-post-job__textarea--error"
                                            : ""
                                    }`}
                                    placeholder="案件の詳細な説明を入力してください。作業内容、求めるスキル、成果物、納期などを具体的に記載すると、応募が集まりやすくなります。"
                                    value={data.description}
                                    onChange={(e) => {
                                        setData("description", e.target.value);
                                        // 入力時にエラーをクリア
                                        if (validationErrors.description) {
                                            setValidationErrors({
                                                ...validationErrors,
                                                description: undefined,
                                            });
                                        }
                                    }}
                                    rows={8}
                                    required
                                ></textarea>
                                <div className="p-post-job__description-help">
                                    ※ 3000文字以内で入力してください
                                </div>
                                <DescriptionCount
                                    current={data.description.length}
                                    max={3000}
                                />
                                {(errors.description ||
                                    validationErrors.description) && (
                                    <div className="p-post-job__error">
                                        {errors.description ||
                                            validationErrors.description}
                                    </div>
                                )}
                            </div>

                            <div className="p-post-job__form-group">
                                <label className="p-post-job__label">
                                    必要なスキル{" "}
                                    <span className="p-post-job__optional">
                                        自由追加
                                    </span>
                                </label>
                                <div className="p-post-job__skills-container">
                                    <div className="p-post-job__skills-input">
                                        <select
                                            className="p-post-job__select"
                                            value={customSkill}
                                            onChange={(e) =>
                                                setCustomSkill(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                スキルを選択して追加ボタンで追加
                                            </option>
                                            {skillOptions.map((skill) => (
                                                <option
                                                    key={skill}
                                                    value={skill}
                                                >
                                                    {skill}
                                                </option>
                                            ))}
                                        </select>

                                        <button
                                            type="button"
                                            className="p-post-job__add-button p-post-job__add-button--middle"
                                            onClick={addSkill}
                                        >
                                            追加
                                        </button>

                                        <input
                                            type="text"
                                            placeholder="スキルを入力して追加ボタンで追加"
                                            value={
                                                !skillOptions.includes(
                                                    customSkill
                                                )
                                                    ? customSkill
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setCustomSkill(e.target.value)
                                            }
                                            className="p-post-job__input p-post-job__input--skill"
                                        />

                                        <button
                                            type="button"
                                            className="p-post-job__add-button p-post-job__add-button--end"
                                            onClick={addSkill}
                                        >
                                            追加
                                        </button>
                                    </div>

                                    {data.skills.length > 0 && (
                                        <div className="p-post-job__skills-tags">
                                            {data.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="p-post-job__skill-tag"
                                                >
                                                    {skill}
                                                    <button
                                                        type="button"
                                                        className="p-post-job__skill-remove"
                                                        onClick={() =>
                                                            removeSkill(skill)
                                                        }
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-post-job__form-group">
                                <label className="p-post-job__label">
                                    あれば歓迎するスキル{" "}
                                    <span className="p-post-job__optional">
                                        自由追加
                                    </span>
                                </label>
                                <div className="p-post-job__skills-container">
                                    <div className="p-post-job__skills-input">
                                        <select
                                            className="p-post-job__select"
                                            value={customPreferredSkill}
                                            onChange={(e) =>
                                                setCustomPreferredSkill(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                スキルを選択して追加ボタンで追加
                                            </option>
                                            {skillOptions.map((skill) => (
                                                <option
                                                    key={skill}
                                                    value={skill}
                                                >
                                                    {skill}
                                                </option>
                                            ))}
                                        </select>

                                        <button
                                            type="button"
                                            className="p-post-job__add-button p-post-job__add-button--middle"
                                            onClick={addPreferredSkill}
                                        >
                                            追加
                                        </button>

                                        <input
                                            type="text"
                                            placeholder="スキルを入力して追加ボタンで追加"
                                            value={
                                                !skillOptions.includes(
                                                    customPreferredSkill
                                                )
                                                    ? customPreferredSkill
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setCustomPreferredSkill(
                                                    e.target.value
                                                )
                                            }
                                            className="p-post-job__input p-post-job__input--skill"
                                        />

                                        <button
                                            type="button"
                                            className="p-post-job__add-button p-post-job__add-button--end"
                                            onClick={addPreferredSkill}
                                        >
                                            追加
                                        </button>
                                    </div>

                                    {data.preferred_skills.length > 0 && (
                                        <div className="p-post-job__skills-tags">
                                            {data.preferred_skills.map(
                                                (skill) => (
                                                    <div
                                                        key={skill}
                                                        className="p-post-job__skill-tag p-post-job__skill-tag--preferred"
                                                    >
                                                        {skill}
                                                        <button
                                                            type="button"
                                                            className="p-post-job__skill-remove"
                                                            onClick={() =>
                                                                removePreferredSkill(
                                                                    skill
                                                                )
                                                            }
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-post-job__form-group">
                                <label className="p-post-job__label">
                                    募集ステータス
                                </label>
                                <div className="p-post-job__radio-group">
                                    <label className="p-post-job__radio">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="open"
                                            checked={!data.is_closed}
                                            onChange={() =>
                                                setData("is_closed", false)
                                            }
                                            className="p-post-job__radio-input"
                                        />
                                        <span className="p-post-job__radio-text">
                                            募集中
                                        </span>
                                    </label>
                                    <label className="p-post-job__radio">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="closed"
                                            checked={data.is_closed}
                                            onChange={() =>
                                                setData("is_closed", true)
                                            }
                                            className="p-post-job__radio-input"
                                        />
                                        <span className="p-post-job__radio-text">
                                            募集終了
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="p-post-job__actions">
                            <button
                                type="submit"
                                className="p-post-job__submit"
                                disabled={processing || submitting}
                            >
                                {submitting ? "更新中..." : "案件を更新する"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
