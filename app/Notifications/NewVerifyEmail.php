<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class NewVerifyEmail extends VerifyEmail
{
    // Laravel日本語用ライブラリを入れているため、以下を追加
    public static $toMailCallback;

    /**
     * メール通知のメッセージを構築
     */
    protected function buildMailMessage($url)
    {
        return (new MailMessage)
            ->subject('メールアドレスの確認')
            ->greeting('こんにちは！')
            ->line('ご登録ありがとうございます。')
            ->line('新しいメンバーが増えて、とても嬉しいです(^^)')
            ->action('このボタンをクリック', $url)
            ->line('上記ボタンをクリックすると、ご登録が完了します！')
            ->line('もしボタンがクリックできない場合は、以下のURLをコピーしてブラウザに貼り付けてください：')
            ->line($url)
            ->salutation('matchをお楽しみください！');
    }

}