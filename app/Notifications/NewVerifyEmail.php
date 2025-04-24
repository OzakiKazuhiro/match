<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

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

    /**
     * 認証URLを生成する
     */
    protected function verificationUrl($notifiable)
    {
        if (static::$createUrlCallback) {
            return call_user_func(static::$createUrlCallback, $notifiable);
        }

        return URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            [
                'id' => $notifiable->getKey(),
                'hash' => sha1($notifiable->getEmailForVerification()),
            ]
        );
    }
}