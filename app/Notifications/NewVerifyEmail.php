<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class NewVerifyEmail extends VerifyEmail
{
    // Laravel日本語用ライブラリを入れている場合、以下も追加
    // public static $toMailCallback;

    /**
     * メール通知のメッセージをカスタマイズして日本語化する
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    protected function buildMailMessage($url)
    {
        return (new MailMessage)
            ->subject('メールアドレス確認のお願い')
            ->greeting('こんにちは！')
            ->line('アカウント登録いただきありがとうございます。下のボタンをクリックして、メールアドレスの確認を完了してください。')
            ->action('メールアドレスを確認', $url)
            ->line('このメールに心当たりがない場合は、何も行動を取る必要はありません。')
            ->salutation('よろしくお願いします、'.config('app.name'));
    }

}