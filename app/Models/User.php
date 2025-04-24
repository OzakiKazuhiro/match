<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\NewVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    
    /**
     * ユーザーのプロフィール情報を取得
     */
    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }
    
    /**
     * ユーザーが投稿した案件を取得
     */
    public function jobListings(): HasMany
    {
        return $this->hasMany(JobListing::class);
    }
    
    /**
     * ユーザーが応募した案件を取得
     */
    public function applications(): HasMany
    {
        return $this->hasMany(Application::class);
    }
    
    /**
     * ユーザーが送信したパブリックメッセージを取得
     */
    public function publicMessages(): HasMany
    {
        return $this->hasMany(PublicMessage::class);
    }
    
    /**
     * ユーザーが送信したダイレクトメッセージを取得
     */
    public function sentDirectMessages(): HasMany
    {
        return $this->hasMany(DirectMessage::class, 'sender_id');
    }
    
    /**
     * ユーザーの会話グループを取得（user_id_1として）
     */
    public function conversationGroupsAsUser1(): HasMany
    {
        return $this->hasMany(ConversationGroup::class, 'user_id_1');
    }
    
    /**
     * ユーザーの会話グループを取得（user_id_2として）
     */
    public function conversationGroupsAsUser2(): HasMany
    {
        return $this->hasMany(ConversationGroup::class, 'user_id_2');
    }
    
    /**
     * ユーザーのすべての会話グループを取得
     */
    public function allConversationGroups()
    {
        return $this->conversationGroupsAsUser1()->union(
            $this->conversationGroupsAsUser2()
        );
    }

    public function sendEmailVerificationNotification(){
        $this->notify(new NewVerifyEmail());
    }
}