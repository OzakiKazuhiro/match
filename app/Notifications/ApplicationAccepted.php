<?php

namespace App\Notifications;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApplicationAccepted extends Notification
{
    use Queueable;

    /**
     * 応募データ
     */
    protected $application;

    /**
     * Create a new notification instance.
     */
    public function __construct(Application $application)
    {
        $this->application = $application;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $jobListing = $this->application->jobListing;
        $jobOwner = $jobListing->user;
        $conversationUrl = route('messages.show', ['conversationGroup' => $this->application->conversation_group_id]);

        return (new MailMessage)
                    ->subject('【match】あなたの応募が承認されました')
                    ->greeting('こんにちは、' . $notifiable->name . 'さん')
                    ->line('あなたの「' . $jobListing->title . '」への応募が承認されました。')
                    ->line('案件投稿者: ' . $jobOwner->name)
                    ->action('メッセージを確認する', $conversationUrl)
                    ->line('案件詳細についてメッセージでやり取りを開始しましょう。')
                    ->line('match をご利用いただきありがとうございます。');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $jobListing = $this->application->jobListing;
        $jobOwner = $jobListing->user;
        
        return [
            'application_id' => $this->application->id,
            'job_listing_id' => $jobListing->id,
            'job_listing_title' => $jobListing->title,
            'job_owner_id' => $jobOwner->id,
            'job_owner_name' => $jobOwner->name,
            'conversation_group_id' => $this->application->conversation_group_id,
        ];
    }
} 