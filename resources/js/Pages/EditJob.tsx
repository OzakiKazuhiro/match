import { useState } from "react";
import { Head, useForm, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";

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

    // 案件データをフォームに設定
    const { data, setData, put, processing, errors, reset } = useForm({
        title: jobListing.title,
        type: jobListing.type,
        description: jobListing.description,
        budget_min: jobListing.budget_min?.toString() || "",
        budget_max: jobListing.budget_max?.toString() || "",
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // useFormのputメソッドを使って送信する
        put(route("job-listings.update", jobListing.id), {
            onSuccess: () => {
                console.log("更新成功");
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-post-job__title">案件を編集</div>}
        >
            <Head title="案件を編集 - match" />

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
                                        errors.title
                                            ? "p-post-job__input--error"
                                            : ""
                                    }`}
                                    placeholder="例：Reactを使用したウェブアプリ開発"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                                {errors.title && (
                                    <InputError
                                        message={errors.title}
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
                                                placeholder="最小金額"
                                                value={data.budget_min}
                                                onChange={(e) =>
                                                    setData(
                                                        "budget_min",
                                                        e.target.value
                                                    )
                                                }
                                                className={`p-post-job__input p-post-job__input--budget ${
                                                    errors.budget_min
                                                        ? "p-post-job__input--error"
                                                        : ""
                                                }`}
                                                min="0"
                                            />
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
                                                placeholder="最大金額"
                                                value={data.budget_max}
                                                onChange={(e) =>
                                                    setData(
                                                        "budget_max",
                                                        e.target.value
                                                    )
                                                }
                                                className={`p-post-job__input p-post-job__input--budget ${
                                                    errors.budget_max
                                                        ? "p-post-job__input--error"
                                                        : ""
                                                }`}
                                                min="0"
                                            />
                                        </div>
                                    </div>
                                    {(errors.budget_min ||
                                        errors.budget_max) && (
                                        <div className="p-post-job__error">
                                            {errors.budget_min ||
                                                errors.budget_max}
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
                                        errors.category
                                            ? "p-post-job__select--error"
                                            : ""
                                    }`}
                                    value={data.category}
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
                                    required
                                >
                                    <option value="">カテゴリーを選択</option>
                                    {categoryOptions.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <div className="p-post-job__error">
                                        {errors.category}
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
                                        errors.description
                                            ? "p-post-job__textarea--error"
                                            : ""
                                    }`}
                                    placeholder="案件の詳細な説明を入力してください。作業内容、求めるスキル、成果物、納期などを具体的に記載すると、応募が集まりやすくなります。"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    rows={8}
                                    required
                                ></textarea>
                                {errors.description && (
                                    <div className="p-post-job__error">
                                        {errors.description}
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
                                            className="p-post-job__add-button"
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
                                            className="p-post-job__add-button"
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
                                disabled={processing}
                            >
                                {processing ? "更新中..." : "案件を更新する"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
