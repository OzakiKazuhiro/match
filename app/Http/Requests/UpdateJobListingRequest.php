<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\JobListing;

class UpdateJobListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // 自分の投稿した案件のみ更新可能
        $jobListingId = $this->route('jobListing');
        
        // jobListingがモデルインスタンスの場合はIDを取得
        if ($jobListingId instanceof JobListing) {
            $jobListingId = $jobListingId->id;
        }
        
        $jobListing = JobListing::findOrFail($jobListingId);
        return Auth::id() === $jobListing->user_id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:50'],
            'type' => ['required', 'string', 'in:one_time,revenue_share'],
            'description' => ['required', 'string', 'min:1', 'max:3000'],
            'budget_min' => ['nullable', 'integer', 'min:0', 'max:50000000', 'required_if:type,one_time'],
            'budget_max' => ['nullable', 'integer', 'min:0', 'max:50000000', 'gte:budget_min', 'required_if:type,one_time'],
            'category' => ['nullable', 'string', 'max:100'],
            'location' => ['nullable', 'string', 'in:リモート（在宅勤務）,現場勤務（オンサイト）,併用型（在宅＋現場）'],
            'skills' => ['nullable', 'array'],
            'skills.*' => ['string', 'max:100'],
            'preferred_skills' => ['nullable', 'array'],
            'preferred_skills.*' => ['string', 'max:100'],
            'is_closed' => ['boolean'],
        ];
    }

    /**
     * バリデーションエラーのカスタムメッセージ
     */
    public function messages(): array
    {
        return [
            'title.required' => 'タイトルは必須です',
            'title.max' => 'タイトルは50文字以内で入力してください',
            'type.required' => '案件種別は必須です',
            'type.in' => '案件種別は単発案件かレベニューシェアから選択してください',
            'description.required' => '案件内容は必須です',
            'description.min' => '案件内容は最低3文字以上入力してください',
            'description.max' => '案件内容は3000文字以内で入力してください',
            'budget_min.required_if' => '単発案件の場合は最小予算を入力してください',
            'budget_max.required_if' => '単発案件の場合は最大予算を入力してください',
            'budget_min.integer' => '最小予算は整数で入力してください',
            'budget_max.integer' => '最大予算は整数で入力してください',
            'budget_min.min' => '最小予算は0以上で入力してください',
            'budget_max.min' => '最大予算は0以上で入力してください',
            'budget_min.max' => '最小予算は50,000千円（5,000万円）以下で入力してください',
            'budget_max.max' => '最大予算は50,000千円（5,000万円）以下で入力してください',
            'budget_max.gte' => '最大予算は最小予算以上で入力してください',
        ];
    }
} 