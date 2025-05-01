<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;

class NewResetPassword extends ResetPassword
{
    // Laravel日本語用ライブラリを入れているため、以下を追加
    public static $toMailCallback;

    /**
     * メール通知のメッセージを構築
     */
    protected function buildMailMessage($url)
    {
        return (new MailMessage)
            ->subject('パスワードリセットのお知らせ')
            ->greeting('こんにちは！')
            ->line('あなたのアカウントでパスワードリセットのリクエストがありました。')
            ->line('下のボタンをクリックして新しいパスワードを設定してください。')
            ->action('パスワードをリセット', $url)
            ->line('このパスワードリセットリンクは'.config('auth.passwords.'.config('auth.defaults.passwords').'.expire').'分で有効期限が切れます。')
            ->line('もしパスワードリセットをリクエストしていない場合は、このメールを無視してください。')
            ->line('もしボタンがクリックできない場合は、以下のURLをコピーしてブラウザに貼り付けてください：')
            ->line($url)
            ->salutation('よろしくお願いいたします。');
    }
}