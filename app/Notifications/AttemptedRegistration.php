<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AttemptedRegistration extends Notification
{
    use Queueable;

    /**
     * 登録を試みたユーザー名
     *
     * @var string
     */
    protected $attemptedName;

    /**
     * 登録を試みたIPアドレス
     *
     * @var string
     */
    protected $ipAddress;

    /**
     * Create a new notification instance.
     *
     * @param string $attemptedName 登録を試みたユーザー名
     * @param string $ipAddress 登録を試みたIPアドレス
     */
    public function __construct(string $attemptedName, string $ipAddress)
    {
        $this->attemptedName = $attemptedName;
        $this->ipAddress = $ipAddress;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('【重要】第三者があなたのメールアドレスで登録を試みられた可能性があります')
            ->greeting('セキュリティ通知')
            ->line('あなたのメールアドレスで新規登録が試みられました。')
            ->line('もしあなたが登録を行っていない場合は、この通知を無視してください。')
            ->line('以下は登録を試みた際の情報です：')
            ->line('- 登録名: ' . $this->attemptedName)
            ->line('- 日時: ' . now()->format('Y年m月d日 H:i:s'))
            ->line('もしこれがあなたご自身の操作であれば、新規登録は完了しておりません。ログインページより、以前にご登録いただいたパスワードよりログインをお試しください。パスワードをお忘れの場合は、パスワードリセットページよりパスワードの再設定をお試しください。')
            ->action('ログイン', url(route('login')))
            ->line('※このメールはシステムにより自動送信されています。返信は受け付けておりません。')
            ->salutation('match サポートチーム');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'attempted_name' => $this->attemptedName,
            'ip_address' => $this->ipAddress,
            'timestamp' => now(),
        ];
    }
} 