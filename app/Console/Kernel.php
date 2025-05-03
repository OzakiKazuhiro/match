<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     * Laravelのスケジューラを使用して、毎月1日の定期処理を実行します。
     */
    protected function schedule(Schedule $schedule): void
    {
        // 毎月1日の午前3時に退会してから６ヶ月経過したユーザーのメールアドレス削除コマンドを実行
        $schedule->command('users:purge-deleted-data')
            ->monthlyOn(1, '03:00')
            ->appendOutputTo(storage_path('logs/purge-deleted-users.log'));
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');
    }
} 