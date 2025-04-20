<?php

namespace App\Notifications;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApplicationReceived extends Notification
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
        $applicant = $this->application->user;
        $applicationUrl = route('applications.to-my-jobs');

        return (new MailMessage)
                    ->subject('【Match】あなたの案件に新しい応募がありました')
                    ->greeting('こんにちは、' . $notifiable->name . 'さん')
                    ->line('あなたの案件「' . $jobListing->title . '」に新しい応募がありました。')
                    ->line('応募者: ' . $applicant->name)
                    ->line('応募メッセージ: ' . mb_substr($this->application->message, 0, 100) . (mb_strlen($this->application->message) > 100 ? '...' : ''))
                    ->action('応募を確認する', $applicationUrl)
                    ->line('Match をご利用いただきありがとうございます。');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $jobListing = $this->application->jobListing;
        $applicant = $this->application->user;
        
        return [
            'application_id' => $this->application->id,
            'job_listing_id' => $jobListing->id,
            'job_listing_title' => $jobListing->title,
            'applicant_id' => $applicant->id,
            'applicant_name' => $applicant->name,
            'message' => mb_substr($this->application->message, 0, 100) . (mb_strlen($this->application->message) > 100 ? '...' : ''),
        ];
    }
}