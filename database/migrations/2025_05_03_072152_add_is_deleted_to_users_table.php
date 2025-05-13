<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * SoftDeletesトレイトを使用するため、このマイグレーションは不要になりました
     */
    public function up(): void
    {
        // SoftDeletesトレイトを使用するため、is_deletedとoriginal_emailカラムは不要
        // Schema::table('users', function (Blueprint $table) {
        //     $table->string('original_email')->nullable()->after('remember_token');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // SoftDeletesトレイトを使用するため、is_deletedとoriginal_emailカラムは不要
        // Schema::table('users', function (Blueprint $table) {
        //     $table->dropColumn('original_email');
        // });
    }
};