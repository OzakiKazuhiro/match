<?php

namespace App\Policies;

use App\Models\JobListing;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class JobListingPolicy
{
    /**
     * 任意のユーザーが案件を閲覧できるかどうか判定
     */
    public function view(User $user, JobListing $jobListing): bool
    {
        // 誰でも閲覧可能
        return true;
    }

    /**
     * 任意のユーザーが案件を作成できるかどうか判定
     */
    public function create(User $user): bool
    {
        // ログインユーザーであれば作成可能
        return true;
    }

    /**
     * 任意のユーザーが案件を更新できるかどうか判定
     */
    public function update(User $user, JobListing $jobListing): Response|bool
    {
        // 案件の投稿者のみ更新可能
        return $user->id === $jobListing->user_id
            ? true
            : Response::deny('この案件を編集する権限がありません。');
    }

    /**
     * 任意のユーザーが案件を削除できるかどうか判定
     */
    public function delete(User $user, JobListing $jobListing): Response|bool
    {
        // 案件の投稿者のみ削除可能
        return $user->id === $jobListing->user_id
            ? true
            : Response::deny('この案件を削除する権限がありません。');
    }

    /**
     * 任意のユーザーが案件に応募できるかどうか判定
     */
    public function apply(User $user, JobListing $jobListing): Response|bool
    {
        // 自分の案件には応募できない
        if ($user->id === $jobListing->user_id) {
            return Response::deny('自分の案件には応募できません。');
        }

        // 募集終了している案件には応募できない
        if ($jobListing->is_closed) {
            return Response::deny('この案件の募集は終了しています。');
        }

        // すでに応募済みの場合は応募できない
        if ($jobListing->applications()->where('user_id', $user->id)->exists()) {
            return Response::deny('この案件にはすでに応募しています。');
        }

        return true;
    }
} 