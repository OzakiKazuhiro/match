import { useState, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import axios from "axios";

export default function PostJob({ auth }: PageProps) {
    const [customSkill, setCustomSkill] = useState("");
    const [customPreferredSkill, setCustomPreferredSkill] = useState("");
    // 表示用の実際の金額を保持する状態
    const [displayBudgetMin, setDisplayBudgetMin] = useState<string>("");
    const [displayBudgetMax, setDisplayBudgetMax] = useState<string>("");
    const [submitting, setSubmitting] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        type: "one_time" as "one_time" | "revenue_share",
        description: "",
        budget_min: "",
        budget_max: "",
        category: "",
        skills: [] as string[],
        preferred_skills: [] as string[],
        location: "リモート（在宅勤務）",
    });

    // 予算入力時に実際の表示金額を更新
    useEffect(() => {
        updateDisplayBudget(data.budget_min, setDisplayBudgetMin);
        updateDisplayBudget(data.budget_max, setDisplayBudgetMax);
    }, [data.budget_min, data.budget_max]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // 送信用のデータを準備
            const submissionData = { ...data };

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

            // 直接axiosを使って送信
            const response = await axios.post(
                route("job-listings.store"),
                submissionData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );

            // 成功したら適切なページに遷移
            if (response.data.url) {
                window.location.href = response.data.url;
            } else {
                window.location.href = route("job-listings.index");
            }
        } catch (error) {
            console.error("送信エラー:", error);
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

    return (
        <AuthenticatedLayout
            header={<div className="p-post-job__header-title">案件を投稿</div>}
        >
            <Head title="案件を投稿 - match" />

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
                                                }}
                                                className={`p-post-job__input p-post-job__input--budget ${
                                                    errors.budget_min
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
                                                }}
                                                className={`p-post-job__input p-post-job__input--budget ${
                                                    errors.budget_max
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
                                        金額は千円単位で入力してください（例：50
                                        = 5万円、100 = 10万円）
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
                                                    setCustomSkill(
                                                        e.target.value
                                                    )
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
                                    ：
                                    進捗報告の頻度やミーティングの有無などを明確にしておくと安心感につながります。
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
