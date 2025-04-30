<?php

namespace App\Http\Controllers;

use App\Models\ConversationGroup;
use App\Models\Memo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MemoController extends Controller
{
    /**
     * メモを保存または更新する
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ConversationGroup  $conversationGroup
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, ConversationGroup $conversationGroup)
    {
        // リクエストの検証
        $request->validate([
            'content' => 'nullable|string|max:1000',
        ]);

        // メモの保存または更新
        $memo = Memo::updateOrCreate(
            [
                'conversation_group_id' => $conversationGroup->id,
                'user_id' => Auth::id(),
            ],
            [
                'content' => $request->content,
            ]
        );

        // JSONレスポンスを返す
        return response()->json([
            'success' => true,
            'memo' => $memo,
        ]);
    }

    /**
     * メモを取得する
     *
     * @param  \App\Models\ConversationGroup  $conversationGroup
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(ConversationGroup $conversationGroup)
    {
        // 現在のユーザーが持つ、指定された会話グループのメモを取得
        $memo = Memo::where('conversation_group_id', $conversationGroup->id)
            ->where('user_id', Auth::id())
            ->first();

        // JSONレスポンスを返す
        return response()->json([
            'memo' => $memo,
        ]);
    }
}