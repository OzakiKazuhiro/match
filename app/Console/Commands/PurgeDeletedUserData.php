<?php

namespace App\Console\Commands;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class PurgeDeletedUserData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:purge-deleted-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '退会後6ヶ月経過したユーザーの個人情報を完全に削除します（毎月1日実行）';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // 6ヶ月前の日付を取得
        $sixMonthsAgo = Carbon::now()->subMonths(6);
        
        // 6ヶ月以上前に退会したユーザーを検索
        $users = User::onlyTrashed()
            ->where('deleted_at', '<=', $sixMonthsAgo)
            ->get();
            
        $count = 0;
        
        foreach ($users as $user) {
            // 個人情報を匿名化（GDPR対応などのため）
            $user->email = 'anonymous_' . $user->id . '@example.com'; 
            $user->name = '退会ユーザー_' . $user->id;
            $user->save();
            
            $count++;
            $this->info("ユーザーID: {$user->id} の個人情報を匿名化しました");
        }
        
        $message = "{$count}人のユーザーの個人情報を匿名化しました。";
        $this->info($message);
        Log::info($message); // ログにも記録
        
        return Command::SUCCESS;
    }
}