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
        Schema::create('conversation_groups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id_1')->constrained('users')->onDelete('cascade');
            $table->foreignId('user_id_2')->constrained('users')->onDelete('cascade');
            $table->timestamps();
            
            // 同じユーザー間で複数の会話グループを作れないようにする
            $table->unique(['user_id_1', 'user_id_2']);
        });
        
        // direct_messagesテーブルを変更
        Schema::table('direct_messages', function (Blueprint $table) {
            // 既存のカラムを先に削除
            $table->dropConstrainedForeignId('sender_id');
            $table->dropConstrainedForeignId('recipient_id');
            
            // 会話グループへの参照を追加
            $table->foreignId('conversation_group_id')->constrained()->onDelete('cascade')->after('id');
            $table->foreignId('sender_id')->constrained('users')->onDelete('cascade')->after('conversation_group_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // direct_messagesテーブルを元に戻す
        Schema::table('direct_messages', function (Blueprint $table) {
            $table->dropConstrainedForeignId('conversation_group_id');
            // senderはそのまま残す
            $table->foreignId('recipient_id')->constrained('users')->onDelete('cascade')->after('sender_id');
        });
        
        Schema::dropIfExists('conversation_groups');
    }
};
