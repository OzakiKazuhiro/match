<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 退会日時を記録するdeleted_atカラムと元のメールアドレスを保存するoriginal_emailカラムを追加
     * Laravel SoftDeletesトレイトで使用するためのカラム
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->softDeletes(); // SoftDeletesトレイトで使用するdeleted_atカラム
            $table->string('original_email')->nullable(); // 退会時に元のメールアドレスを保存するカラム
        });
    }

    /**
     * Reverse the migrations.
     * 追加したdeleted_atカラムとoriginal_emailカラムを削除
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropSoftDeletes();
            $table->dropColumn('original_email');
        });
    }
};