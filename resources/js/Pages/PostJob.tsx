import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

interface PostJobFormData {
    title: string;
    type: "onetime" | "revenue";
    description: string;
    budget_min?: string;
    budget_max?: string;
    category: string;
    skills: string[];
    preferred_skills: string[];
    location: string;
}

export default function PostJob({ auth }: PageProps) {
    const [customSkill, setCustomSkill] = useState("");
    const [customPreferredSkill, setCustomPreferredSkill] = useState("");

    const { data, setData, post, processing, errors, reset } =
        useForm<PostJobFormData>({
            title: "",
            type: "onetime",
            description: "",
            budget_min: "",
            budget_max: "",
            category: "",
            skills: [],
            preferred_skills: [],
            location: "リモート",
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
        // 実際はAPIリクエストを送信
        post("/api/jobs", {
            onSuccess: () => {
                reset();
                // 成功時の処理（リダイレクトなど）
                alert("案件が投稿されました");
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<div className="p-post-job__title">案件を投稿</div>}
        >
            <Head title="案件を投稿 - Match" />

            <div className="p-post-job">
                <div className="p-post-job__container">
                    <div className="p-post-job__header">
                        <h1 className="p-post-job__title">案件を投稿する</h1>
                        <p className="p-post-job__subtitle">
                            あなたの案件情報を入力して、エンジニアを募集しましょう。
                            単発案件やレベニューシェア案件を簡単に投稿できます。
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
                                    <div className="p-post-job__error">
                                        {errors.title}
                                    </div>
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
                                            value="onetime"
                                            checked={data.type === "onetime"}
                                            onChange={() =>
                                                setData("type", "onetime")
                                            }
                                            className="p-post-job__radio-input"
                                        />
                                        <span className="p-post-job__radio-label">
                                            単発案件
                                        </span>
                                    </label>
                                    <label className="p-post-job__radio">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="revenue"
                                            checked={data.type === "revenue"}
                                            onChange={() =>
                                                setData("type", "revenue")
                                            }
                                            className="p-post-job__radio-input"
                                        />
                                        <span className="p-post-job__radio-label">
                                            レベニューシェア案件
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {data.type === "onetime" && (
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
                                    <option value="リモート">リモート</option>
                                    <option value="オンサイト">
                                        オンサイト
                                    </option>
                                    <option value="ハイブリッド">
                                        ハイブリッド
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
                        </div>

                        <div className="p-post-job__action">
                            <button
                                type="submit"
                                className="p-post-job__submit"
                                disabled={processing}
                            >
                                {processing ? "投稿中..." : "案件を投稿する"}
                            </button>
                        </div>
                    </form>

                    <div className="p-post-job__tips">
                        <h2 className="p-post-job__tips-title">
                            案件が応募されやすくなるコツ
                        </h2>
                        <ul className="p-post-job__tips-list">
                            <li className="p-post-job__tips-item">
                                <span className="p-post-job__tips-icon">
                                    💡
                                </span>
                                <div className="p-post-job__tips-content">
                                    <strong>具体的な説明を心がける</strong>：
                                    作業内容、期待する成果物、納期などを明確に記載しましょう。
                                </div>
                            </li>
                            <li className="p-post-job__tips-item">
                                <span className="p-post-job__tips-icon">
                                    💡
                                </span>
                                <div className="p-post-job__tips-content">
                                    <strong>適切な予算を設定する</strong>：
                                    作業量に見合った予算設定が重要です。適正な報酬が応募率を高めます。
                                </div>
                            </li>
                            <li className="p-post-job__tips-item">
                                <span className="p-post-job__tips-icon">
                                    💡
                                </span>
                                <div className="p-post-job__tips-content">
                                    <strong>必要なスキルを明記する</strong>：
                                    必須のスキルと歓迎するスキルを分けて記載することで、
                                    応募者のスキルマッチ度がわかりやすくなります。
                                </div>
                            </li>
                            <li className="p-post-job__tips-item">
                                <span className="p-post-job__tips-icon">
                                    💡
                                </span>
                                <div className="p-post-job__tips-content">
                                    <strong>
                                        コミュニケーション方法を示す
                                    </strong>
                                    ： 進捗報告の頻度やミーティングの有無など、
                                    協業スタイルを明確にしておくと安心感につながります。
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
