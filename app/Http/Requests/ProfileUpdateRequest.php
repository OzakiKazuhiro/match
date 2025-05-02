<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:50'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                'in:' . $this->user()->email,
            ],
            'avatar' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,webp', 'max:2048'],
            'remove_avatar' => ['nullable', 'boolean'],
        ];
    }

    /**
     * バリデーションエラーメッセージをカスタマイズ
     */
    public function messages(): array
    {
        return [
            'email.in' => 'セキュリティ上の理由からメールアドレスは変更できません。',
        ];
    }
}