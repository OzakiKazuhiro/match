export const VALIDATION_MESSAGES = {
    required: {
        email: "メールアドレスを入力してください",
        password: "パスワードを入力してください",
        name: "お名前を入力してください",
        title: "タイトルは必須です",
        description: "案件の説明は必須です",
        category: "カテゴリーを選択してください",
        budget: "最小・最大予算を設定してください",
        budget_min: "最小予算を設定してください",
        budget_max: "最大予算を設定してください",
    },
    invalid: {
        email: "有効なメールアドレスを入力してください",
        password: "8文字以上のパスワードを入力してください",
        password_fullwidth:
            "パスワードに全角文字は使用できません。半角英数字のみを使用してください。",
        password_letter_number:
            "パスワードは半角英文字と数字を含める必要があります。",
        budget_max: "最大予算は最小予算以上に設定してください",
        budget_limit: "予算は5,000万円（50,000千円）以下に設定してください",
    },
    mismatch: {
        password: "パスワードが一致しません",
    },
    max: {
        name: "お名前は50文字以内で入力してください",
        title: "タイトルは50文字以内で入力してください",
        description: "案件の説明は3000文字以内で入力してください",
        password: "パスワードは50文字以内で入力してください。",
        bio: (max: number) => `自己紹介文は${max}文字以内で入力してください。`,
    },
    min: {
        password: "パスワードは8文字以上で入力してください。",
    },
    error: {
        email_validation: "メールアドレスの検証中にエラーが発生しました。",
    },
};
