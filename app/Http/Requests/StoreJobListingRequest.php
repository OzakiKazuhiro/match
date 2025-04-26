<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // ログインユーザーであれば誰でも案件を投稿可能
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'type' => ['required', 'string', 'in:one_time,revenue_share'],
            'description' => ['required', 'string'],
            'budget_min' => ['nullable', 'integer', 'min:0', 'required_if:type,one_time'],
            'budget_max' => ['nullable', 'integer', 'min:0', 'gte:budget_min', 'required_if:type,one_time'],
            'category' => ['nullable', 'string', 'max:100'],
            'location' => ['nullable', 'string', 'in:リモート（在宅勤務）,現場勤務（オンサイト）,併用型（在宅＋現場）'],
            'skills' => ['nullable', 'array'],
            'skills.*' => ['string', 'max:100'],
            'preferred_skills' => ['nullable', 'array'],
            'preferred_skills.*' => ['string', 'max:100'],
        ];
    }

    /**
     * バリデーションエラーのカスタムメッセージ
     */
    public function messages(): array
    {
        return [
            'title.required' => 'タイトルは必須です',
            'title.max' => 'タイトルは255文字以内で入力してください',
            'type.required' => '案件種別は必須です',
            'type.in' => '案件種別は単発案件かレベニューシェアから選択してください',
            'description.required' => '案件内容は必須です',
            'budget_min.required_if' => '単発案件の場合は最小予算を入力してください',
            'budget_max.required_if' => '単発案件の場合は最大予算を入力してください',
            'budget_min.integer' => '最小予算は整数で入力してください',
            'budget_max.integer' => '最大予算は整数で入力してください',
            'budget_min.min' => '最小予算は0以上で入力してください',
            'budget_max.min' => '最大予算は0以上で入力してください',
            'budget_max.gte' => '最大予算は最小予算以上で入力してください',
        ];
    }
} 