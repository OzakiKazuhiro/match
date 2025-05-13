<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 退会日時を記録するdeleted_atカラムを追加
     * Laravel SoftDeletesトレイトで使用するためのカラム
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->softDeletes(); // SoftDeletesトレイトで使用するdeleted_atカラム
        });
    }

    /**
     * Reverse the migrations.
     * 追加したdeleted_atカラムを削除
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};