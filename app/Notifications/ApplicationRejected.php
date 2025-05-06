<?php

namespace App\Notifications;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApplicationRejected extends Notification
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
        $jobListingsUrl = route('job-listings.index');

        return (new MailMessage)
                    ->subject('【match】応募結果のお知らせ')
                    ->greeting('こんにちは、' . $notifiable->name . 'さん')
                    ->line('あなたの「' . $jobListing->title . '」への応募は、残念ながら不採用となりました。')
                    ->line('案件投稿者: ' . $jobOwner->name)
                    ->action('他の案件を探す', $jobListingsUrl)
                    ->line('他にも多くの案件がありますので、ぜひ別の案件にも応募してみてください。')
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
        ];
    }
} 