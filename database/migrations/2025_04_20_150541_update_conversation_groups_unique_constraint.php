<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('conversation_groups', function (Blueprint $table) {
            // job_listing_idを含めた新しい一意制約を追加
            // 既存の制約は残すが、実質的に無効になる（job_listing_idがnullの場合のみ重複が発生しうる）
            $table->unique(['job_owner_id', 'applicant_id', 'job_listing_id'], 'conversation_groups_with_job_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('conversation_groups', function (Blueprint $table) {
            // 新しい一意制約を削除
            $table->dropUnique('conversation_groups_with_job_unique');
        });
    }
};