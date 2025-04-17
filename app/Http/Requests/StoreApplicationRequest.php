<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'message' => 'required|string|max:2000',
        ];
    }

    /**
     * バリデーションエラーメッセージの日本語化
     * 
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'message.required' => '応募メッセージを入力してください。',
            'message.max' => '応募メッセージは2000文字以内で入力してください。',
        ];
    }
} 