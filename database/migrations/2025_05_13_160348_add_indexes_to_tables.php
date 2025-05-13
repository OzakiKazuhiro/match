<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // job_listings テーブルに検索用インデックスを追加
        Schema::table('job_listings', function (Blueprint $table) {
            $table->index(['type', 'category'], 'idx_job_type_category');
            // JSONカラムskillsのインデックスは非対応または複雑なため、ここでは追加しない
            // 必要に応じて別途JSONパスを指定したインデックスを検討する
            $table->index('is_closed', 'idx_job_is_closed');
            $table->index('created_at', 'idx_job_created_at');
        });

        // direct_messages テーブルにメッセージ検索用インデックスを追加
        Schema::table('direct_messages', function (Blueprint $table) {
            $table->index('is_read', 'idx_message_is_read');
            $table->index('created_at', 'idx_message_created_at');
        });

        // applications テーブルにステータス検索用インデックスを追加
        Schema::table('applications', function (Blueprint $table) {
            $table->index('status', 'idx_application_status');
            $table->index('created_at', 'idx_application_created_at');
        });

        // notifications テーブルに既読状態検索用インデックスを追加
        Schema::table('notifications', function (Blueprint $table) {
            $table->index('read_at', 'idx_notification_read_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // job_listings テーブルからインデックスを削除
        Schema::table('job_listings', function (Blueprint $table) {
            $table->dropIndex('idx_job_type_category');
            $table->dropIndex('idx_job_is_closed');
            $table->dropIndex('idx_job_created_at');
        });

        // direct_messages テーブルからインデックスを削除
        Schema::table('direct_messages', function (Blueprint $table) {
            $table->dropIndex('idx_message_is_read');
            $table->dropIndex('idx_message_created_at');
        });

        // applications テーブルからインデックスを削除
        Schema::table('applications', function (Blueprint $table) {
            $table->dropIndex('idx_application_status');
            $table->dropIndex('idx_application_created_at');
        });

        // notifications テーブルからインデックスを削除
        Schema::table('notifications', function (Blueprint $table) {
            $table->dropIndex('idx_notification_read_at');
        });
    }
};