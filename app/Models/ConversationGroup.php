<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ConversationGroup extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id_1',
        'user_id_2',
    ];
    
    /**
     * 会話の1人目のユーザーを取得
     */
    public function user1(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id_1');
    }
    
    /**
     * 会話の2人目のユーザーを取得
     */
    public function user2(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id_2');
    }
    
    /**
     * この会話グループのメッセージを取得
     */
    public function messages(): HasMany
    {
        return $this->hasMany(DirectMessage::class);
    }
    
    /**
     * 特定のユーザーの相手を取得
     */
    public function getPartnerUser($userId)
    {
        return $this->user_id_1 == $userId ? $this->user2 : $this->user1;
    }
    
    /**
     * 最新のメッセージを取得
     */
    public function latestMessage()
    {
        return $this->messages()->latest()->first();
    }
    
    /**
     * 指定されたユーザーIDに関連する会話グループを取得するスコープ
     */
    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id_1', $userId)->orWhere('user_id_2', $userId);
    }
}