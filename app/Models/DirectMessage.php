<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DirectMessage extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'conversation_group_id',
        'sender_id',
        'message',
        'is_read',
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_read' => 'boolean',
    ];
    
    /**
     * メッセージの送信者を取得
     */
    public function sender(): BelongsTo
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
    
    /**
     * メッセージが所属する会話グループを取得
     */
    public function conversationGroup(): BelongsTo
    {
        return $this->belongsTo(ConversationGroup::class);
    }
    
    /**
     * 未読メッセージのみを取得するスコープ
     */
    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }
}