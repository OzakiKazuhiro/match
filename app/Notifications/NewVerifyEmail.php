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
     * @param  string  $url
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    protected function buildMailMessage($url)
    {
        $message = new MailMessage;
        $message->subject('メールアドレス確認のお願い');
        $message->markdown('notifications::email');
        $message->greeting('こんにちは！');
        $message->line('アカウント登録いただきありがとうございます。');
        $message->line('下のURLをクリックして、メールアドレスの確認を完了してください。');
        $message->line($url);
        $message->line('このメールに心当たりがない場合は、何も行動を取る必要はありません。');
        $message->salutation('よろしくお願いします、'.config('app.name'));
        
        // HTMLスタイリングを無効化
        $message->viewData['markdown'] = false;
        
        return $message;
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