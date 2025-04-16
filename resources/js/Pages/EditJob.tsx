import { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
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
        skills: [] as string[],
        preferred_skills: [] as string[],
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
        put(route("job-listings.update", jobListing.id));
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-post-job__title">案件を編集</div>}
        >
            <Head title="案件を編集 - Match" />

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
                                            レベニューシェア
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
                                        <div className="p-post-job__budget-input-group">
                                            <input
                                                type="number"
                                                placeholder="最小予算"
                                                value={data.budget_min}
                                                onChange={(e) =>
                                                    setData(
                                                        "budget_min",
                                                        e.target.value
                                                    )
                                                }
                                                className={`p-post-job__input ${
                                                    errors.budget_min
                                                        ? "p-post-job__input--error"
                                                        : ""
                                                }`}
                                                min="0"
                                            />
                                            <span className="p-post-job__budget-unit">
                                                千円
                                            </span>
                                        </div>
                                        <span className="p-post-job__budget-separator">
                                            〜
                                        </span>
                                        <div className="p-post-job__budget-input-group">
                                            <input
                                                type="number"
                                                placeholder="最大予算"
                                                value={data.budget_max}
                                                onChange={(e) =>
                                                    setData(
                                                        "budget_max",
                                                        e.target.value
                                                    )
                                                }
                                                className={`p-post-job__input ${
                                                    errors.budget_max
                                                        ? "p-post-job__input--error"
                                                        : ""
                                                }`}
                                                min="0"
                                            />
                                            <span className="p-post-job__budget-unit">
                                                千円
                                            </span>
                                        </div>
                                    </div>
                                    {errors.budget_min && (
                                        <InputError
                                            message={errors.budget_min}
                                            className="mt-1"
                                        />
                                    )}
                                    {errors.budget_max && (
                                        <InputError
                                            message={errors.budget_max}
                                            className="mt-1"
                                        />
                                    )}
                                </div>
                            )}

                            <div className="p-post-job__form-group">
                                <label
                                    htmlFor="description"
                                    className="p-post-job__label"
                                >
                                    案件内容の詳細{" "}
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
                                    placeholder="案件の詳細を記入してください。例：
- 求めるスキルや経験
- 作業内容の詳細
- 納期や期間
- コミュニケーション方法
など"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    rows={8}
                                    required
                                ></textarea>
                                {errors.description && (
                                    <InputError
                                        message={errors.description}
                                        className="mt-1"
                                    />
                                )}
                            </div>

                            <div className="p-post-job__form-group">
                                <label className="p-post-job__label">
                                    募集ステータス
                                </label>
                                <div className="p-post-job__toggle">
                                    <label className="p-post-job__toggle-label">
                                        <input
                                            type="checkbox"
                                            checked={data.is_closed}
                                            onChange={() =>
                                                setData(
                                                    "is_closed",
                                                    !data.is_closed
                                                )
                                            }
                                            className="p-post-job__toggle-input"
                                        />
                                        <span className="p-post-job__toggle-slider"></span>
                                    </label>
                                    <span className="p-post-job__toggle-text">
                                        {data.is_closed ? "募集終了" : "募集中"}
                                    </span>
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
