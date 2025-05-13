<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Application extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'job_listing_id',
        'user_id',
        'message',
        'status',
    ];

    /**
     * アクセサで追加するプロパティ
     *
     * @var array<int, string>
     */
    protected $appends = [
        'conversation_group_id',
    ];

    /**
     * シリアライズ時に含まれるプロパティ
     *
     * @var array<int, string>
     */
    protected $hidden = [
        '_conversation_group_id',
    ];

    // 会話グループIDを保存する内部プロパティ
    private $_conversation_group_id = null;

    /**
     * 会話グループIDのゲッター
     */
    public function getConversationGroupIdAttribute()
    {
        return $this->_conversation_group_id;
    }

    /**
     * 会話グループIDのセッター
     */
    public function setConversationGroupIdAttribute($value)
    {
        $this->_conversation_group_id = $value;
    }
    
    /**
     * 応募したユーザーを取得
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * 応募した案件を取得
     */
    public function jobListing(): BelongsTo
    {
        return $this->belongsTo(JobListing::class);
    }
    
    /**
     * 保留中の応募のみを取得するスコープ
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
    
    /**
     * 承認された応募のみを取得するスコープ
     */
    public function scopeAccepted($query)
    {
        return $query->where('status', 'accepted');
    }
    
    /**
     * 拒否された応募のみを取得するスコープ
     */
    public function scopeDeclined($query)
    {
        return $query->where('status', 'declined');
    }
    
    /**
     * 新しい応募を作成し、関連する会話グループも設定する
     */
    public static function createWithConversationGroup(JobListing $jobListing, int $userId, array $data): self
    {
        // 応募情報を保存
        $application = self::create([
            'job_listing_id' => $jobListing->id,
            'user_id' => $userId,
            'message' => $data['message'],
            'status' => 'pending', // 初期状態は「保留中」
        ]);
        
        // 会話グループの取得または作成
        $conversationGroup = ConversationGroup::getOrCreateForApplication(
            $jobListing->id,
            $jobListing->user_id,
            $userId
        );
        
        // 会話グループIDを応募オブジェクトに設定
        $application->conversation_group_id = $conversationGroup->id;
        
        return $application;
    }
}