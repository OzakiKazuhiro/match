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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->comment('カテゴリー名');
            $table->string('slug')->unique()->comment('URLスラッグ');
            $table->string('description')->nullable()->comment('カテゴリーの説明');
            $table->string('icon')->nullable()->comment('アイコン名またはCSS クラス');
            $table->integer('display_order')->default(0)->comment('表示順序');
            $table->boolean('is_active')->default(true)->comment('有効/無効状態');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
}; 