<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class EmailValidationController extends Controller
{
    /**
     * メールアドレスの重複チェックを行う
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function validateEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            $data = [
                'valid' => false,
                'message' => 'メールアドレスの形式が正しくありません。',
            ];

            if ($request->wantsJson()) {
                return response()->json($data);
            }

            return back()->with('data', $data);
        }

        $email = $request->input('email');
        $exists = User::where('email', $email)->exists();

        if ($exists) {
            $data = [
                'valid' => false,
                'message' => 'このメールアドレスは既に使用されています。',
            ];

            if ($request->wantsJson()) {
                return response()->json($data);
            }

            return back()->with('data', $data);
        }

        $data = [
            'valid' => true,
        ];

        if ($request->wantsJson()) {
            return response()->json($data);
        }

        return back()->with('data', $data);
    }
}