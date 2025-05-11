import { useState, useEffect } from "react";
import { Head, useForm, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import axios from "axios";
import { route } from "ziggy-js";
import Modal from "@/Components/Modal";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { SKILL_OPTIONS } from "@/constants/skillOptions";
import { VALIDATION_MESSAGES } from "@/constants/validationMessages";

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

interface JobListing {
    id: number;
    title: string;
    type: "one_time" | "revenue_share";
    description: string;
    budget_min: number | null;
    budget_max: number | null;
    category: string;
    skills: string[];
    preferred_skills: string[];
    location: string;
}

export default function EditJob({
    auth,
    jobListing,
}: PageProps<{ jobListing: JobListing }>) {
    const [customSkill, setCustomSkill] = useState("");
    const [customPreferredSkill, setCustomPreferredSkill] = useState("");
    // 表示用の実際の金額を保持する状態
    const [displayBudgetMin, setDisplayBudgetMin] = useState<string>("");
    const [displayBudgetMax, setDisplayBudgetMax] = useState<string>("");
    const [submitting, setSubmitting] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    // バリデーションエラーの状態
    const [validationErrors, setValidationErrors] = useState<{
        title?: string;
        budget_min?: string;
        budget_max?: string;
        category?: string;
        description?: string;
    }>({});

    const { data, setData, processing, errors } = useForm({
        title: jobListing.title,
        type: jobListing.type,
        description: jobListing.description,
        budget_min: jobListing.budget_min?.toString() || "",
        budget_max: jobListing.budget_max?.toString() || "",
        category: jobListing.category,
        skills: jobListing.skills,
        preferred_skills: jobListing.preferred_skills,
        location: jobListing.location,
    });

    // 予算入力時に実際の表示金額を更新
    useEffect(() => {
        updateDisplayBudget(data.budget_min, setDisplayBudgetMin);
        updateDisplayBudget(data.budget_max, setDisplayBudgetMax);
    }, [data.budget_min, data.budget_max]);

    const addSkill = () => {
        // 15文字以上の場合は追加しない
        if (
            customSkill &&
            customSkill.length <= 15 &&
            !data.skills.includes(customSkill)
        ) {
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
        // 15文字以上の場合は追加しない
        if (
            customPreferredSkill &&
            customPreferredSkill.length <= 15 &&
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await axios.put(
                route("job-listings.update", jobListing.id),
                data
            );
            // router.get()を使用して、ブラウザの履歴スタックを正しく更新
            router.get(
                response.data.url,
                {},
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: false,
                }
            );
        } catch (error) {
            console.error("Error updating job:", error);
            router.get(
                route("job-listings.index"),
                {},
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: false,
                }
            );
        } finally {
            setSubmitting(false);
        }
    };

    // 入力された千円単位の金額を実際の金額に変換して表示する関数
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

    // フォームバリデーション関数
    const validateForm = (): boolean => {
        const newErrors: typeof validationErrors = {};

        // タイトルのバリデーション
        if (!data.title.trim()) {
            newErrors.title = VALIDATION_MESSAGES.required.title;
        } else if (data.title.length > 50) {
            newErrors.title = VALIDATION_MESSAGES.max.title;
        }

        // 予算のバリデーション（単発案件の場合）
        if (data.type === "one_time") {
            const minBudget = data.budget_min ? parseInt(data.budget_min) : 0;
            const maxBudget = data.budget_max ? parseInt(data.budget_max) : 0;

            if (!data.budget_min && !data.budget_max) {
                newErrors.budget_min = VALIDATION_MESSAGES.required.budget;
            } else if (
                minBudget > 0 &&
                maxBudget > 0 &&
                minBudget > maxBudget
            ) {
                newErrors.budget_max = VALIDATION_MESSAGES.invalid.budget_max;
            }

            // 予算の上限をチェック
            if (minBudget > 50000) {
                newErrors.budget_min = VALIDATION_MESSAGES.invalid.budget_limit;
            }
            if (maxBudget > 50000) {
                newErrors.budget_max = VALIDATION_MESSAGES.invalid.budget_limit;
            }
        }

        // カテゴリーのバリデーション
        if (!data.category) {
            newErrors.category = VALIDATION_MESSAGES.required.category;
        }

        // 説明のバリデーション
        if (!data.description.trim()) {
            newErrors.description = VALIDATION_MESSAGES.required.description;
        } else if (data.description.length > 3000) {
            newErrors.description = VALIDATION_MESSAGES.max.description;
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
            newErrors[field] = VALIDATION_MESSAGES.invalid.budget_limit;
        } else {
            delete newErrors[field];

            // 最小値と最大値の関係性チェック（両方の値が入力されている場合のみ）
            if (
                field === "budget_max" &&
                budget > 0 &&
                otherBudget > 0 &&
                budget < otherBudget
            ) {
                newErrors[field] = VALIDATION_MESSAGES.invalid.budget_max;
            } else if (
                field === "budget_min" &&
                budget > 0 &&
                otherBudget > 0 &&
                budget > otherBudget
            ) {
                newErrors[otherField] = VALIDATION_MESSAGES.invalid.budget_max;
            } else {
                delete newErrors[otherField];
            }
        }

        setValidationErrors(newErrors);
    };

    // タイトル入力のリアルタイムバリデーション
    const validateTitleInput = (value: string) => {
        // 新しいエラーオブジェクトを作成
        const newErrors = { ...validationErrors };

        if (!value.trim()) {
            newErrors.title = VALIDATION_MESSAGES.required.title;
        } else if (value.length > 50) {
            newErrors.title = VALIDATION_MESSAGES.max.title;
        } else {
            delete newErrors.title;
        }

        setValidationErrors(newErrors);
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-post-job__header-title">案件を編集</div>}
        >
            <Head title="案件編集" />

            <div className="p-post-job">
                <div className="p-post-job__container">
                    <div className="p-post-job__header">
                        <h1 className="p-post-job__title">案件を編集する</h1>
                        <p className="p-post-job__subtitle">
                            案件情報を編集して、更新しましょう。
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
                                        const value = e.target.value;
                                        setData("title", value);
                                        // リアルタイムバリデーション
                                        validateTitleInput(value);
                                    }}
                                    maxLength={50}
                                />
                                <div className="p-post-job__title-help">
                                    ※ 50文字以内で入力してください
                                </div>
                                <DescriptionCount
                                    current={data.title.length}
                                    max={50}
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

                                                    // リアルタイムバリデーション
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
                                                max="50000"
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

                                                    // リアルタイムバリデーション
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
                                                max="50000"
                                                style={{ paddingRight: "45px" }}
                                            />
                                            <span className="p-post-job__unit">
                                                千円
                                            </span>
                                        </div>
                                    </div>

                                    {/* 実際の金額表示 */}
                                    {(displayBudgetMin || displayBudgetMax) && (
                                        <div className="p-post-job__budget-preview">
                                            <span className="p-post-job__budget-preview-label">
                                                表示される金額：
                                            </span>
                                            {displayBudgetMin &&
                                            displayBudgetMax ? (
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
                                    {(errors.budget_min ||
                                        validationErrors.budget_min ||
                                        errors.budget_max ||
                                        validationErrors.budget_max) && (
                                        <div className="p-post-job__error">
                                            {errors.budget_min ||
                                                validationErrors.budget_min ||
                                                errors.budget_max ||
                                                validationErrors.budget_max}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="p-post-job__form-group">
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
                                >
                                    <option value="">カテゴリーを選択</option>
                                    {CATEGORY_OPTIONS.map((category) => (
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
                                    placeholder="案件の詳細な説明を入力してください。作業内容、求めるスキル、成果物、納期などを具体的に記載すると、応募が集まりやすくなります"
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
                                        <div className="p-post-job__skills-input-row">
                                            <select
                                                className="p-post-job__select"
                                                value={customSkill}
                                                onChange={(e) =>
                                                    setCustomSkill(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    スキルを選択して追加ボタンで追加
                                                </option>
                                                {SKILL_OPTIONS.map((skill) => (
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
                                                    !SKILL_OPTIONS.includes(
                                                        customSkill
                                                    )
                                                        ? customSkill
                                                        : ""
                                                }
                                                onChange={(e) => {
                                                    // 15文字までの入力に制限
                                                    if (
                                                        e.target.value.length <=
                                                        15
                                                    ) {
                                                        setCustomSkill(
                                                            e.target.value
                                                        );
                                                    }
                                                }}
                                                className="p-post-job__input p-post-job__input--skill"
                                                maxLength={15}
                                            />
                                            <button
                                                type="button"
                                                className="p-post-job__add-button p-post-job__add-button--end"
                                                onClick={addSkill}
                                            >
                                                追加
                                            </button>
                                        </div>
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
                                        <div className="p-post-job__skills-input-row">
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
                                                {SKILL_OPTIONS.map((skill) => (
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
                                                    !SKILL_OPTIONS.includes(
                                                        customPreferredSkill
                                                    )
                                                        ? customPreferredSkill
                                                        : ""
                                                }
                                                onChange={(e) => {
                                                    // 15文字までの入力に制限
                                                    if (
                                                        e.target.value.length <=
                                                        15
                                                    ) {
                                                        setCustomPreferredSkill(
                                                            e.target.value
                                                        );
                                                    }
                                                }}
                                                className="p-post-job__input p-post-job__input--skill"
                                                maxLength={15}
                                            />
                                            <button
                                                type="button"
                                                className="p-post-job__add-button p-post-job__add-button--end"
                                                onClick={addPreferredSkill}
                                            >
                                                追加
                                            </button>
                                        </div>
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
                        </div>

                        <div className="p-post-job__action">
                            <button
                                type="submit"
                                className="p-post-job__submit"
                                disabled={processing}
                            >
                                {processing ? "更新中..." : "案件を更新する"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* 確認モーダル */}
            <Modal
                show={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                maxWidth="md"
            >
                <div className="p-modal__container">
                    <h2 className="p-modal__title">案件更新の確認</h2>
                    <p className="p-modal__text">
                        案件の内容を更新してもよろしいですか？
                    </p>
                    <div className="p-modal__buttons">
                        <button
                            className="p-modal__button p-modal__button--cancel"
                            onClick={() => setShowConfirmModal(false)}
                        >
                            キャンセル
                        </button>
                        <button
                            className="p-modal__button p-modal__button--success"
                            onClick={handleSubmit}
                            disabled={submitting}
                        >
                            {submitting ? "更新中..." : "はい、更新します"}
                        </button>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
