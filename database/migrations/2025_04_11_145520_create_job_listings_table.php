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
        Schema::create('job_listings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->enum('type', ['one_time', 'revenue_share'])->comment('案件種別: 単発 or レベニューシェア');
            $table->integer('budget_min')->nullable()->comment('最小予算（単発案件の場合のみ）');
            $table->integer('budget_max')->nullable()->comment('最大予算（単発案件の場合のみ）');
            $table->text('description')->comment('案件内容');
            $table->foreignId('category_id')->nullable()->constrained()->comment('案件カテゴリーID');
            $table->string('location')->default('リモート')->comment('作業場所（リモート/オンサイト/ハイブリッド）');
            $table->json('skills')->nullable()->comment('必要なスキル');
            $table->json('preferred_skills')->nullable()->comment('歓迎スキル');
            $table->boolean('is_closed')->default(false)->comment('案件が終了したかどうか');
            $table->integer('view_count')->default(0)->comment('閲覧数');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_listings');
    }
};