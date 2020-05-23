<?php

namespace App\Notifications;

use App\Users\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PasswordResetNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $user;
    protected $token;

    public function __construct(User $user)
    {
        $user->tokens()->where('type', 'password_reset')->delete();

        $this->user = $user;
        $this->token = $this->user->tokens()->create(['type' => 'password_reset'])->token;

        $this->onQueue('high');
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->from('test@test.com', 'Strategery Admin')
            ->subject('Strategery - Password Reset Request')
            ->greeting('Hey there!')
            ->line('We received a request to reset your password. Click the link to reset your password.')
            ->action('Click to reset', url('/password/' . $this->token))
            ->line('If you did not request to reset your password, please ignore this message.');
    }
}
