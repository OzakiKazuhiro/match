<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ConversationGroup extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'type',
        'is_active',
        'job_owner_id',
        'applicant_id',
        'job_listing_id',
    ];
    
    /**
     * このグループのパーティシパントを取得
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'conversation_group_user')
            ->withTimestamps();
    }
    
    /**
     * このグループに関連する案件を取得
     */
    public function jobListing(): BelongsTo
    {
        return $this->belongsTo(JobListing::class);
    }
    
    /**
     * このグループのメッセージを取得
     */
    public function messages(): HasMany
    {
        return $this->hasMany(DirectMessage::class)->orderBy('created_at', 'asc');
    }
    
    /**
     * このグループの最新メッセージを取得
     */
    public function latestMessage(): HasOne
    {
        return $this->hasOne(DirectMessage::class)->latestOfMany();
    }
    
    /**
     * 案件オーナーを取得
     */
    public function jobOwners()
    {
        return $this->participants()
                    ->whereHas('jobListings', function ($query) {
                        $query->whereIn('id', $this->jobs->pluck('id'));
                    });
    }
    
    /**
     * 応募者を取得
     */
    public function applicants()
    {
        return $this->participants()
                    ->whereHas('applications', function ($query) {
                        $query->whereIn('job_listing_id', $this->jobs->pluck('id'));
                    });
    }
    
    /**
     * 特定のユーザーが参加しているグループのみを取得するスコープ
     */
    public function scopeWhereParticipant($query, $userId)
    {
        return $query->where(function($q) use ($userId) {
            $q->where('job_owner_id', $userId)
              ->orWhere('applicant_id', $userId);
        });
    }
    
    /**
     * ユーザーがこのグループに参加しているかをチェック
     */
    public function hasParticipant($userId): bool
    {
        return $this->job_owner_id == $userId || $this->applicant_id == $userId;
    }
    
    /**
     * 案件所有者（投稿者）を取得
     */
    public function jobOwner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'job_owner_id');
    }
    
    /**
     * 応募者を取得
     */
    public function applicant(): BelongsTo
    {
        return $this->belongsTo(User::class, 'applicant_id');
    }
    
    /**
     * 特定のユーザーの相手を取得
     */
    public function getPartnerUser($userId)
    {
        return $this->job_owner_id == $userId ? $this->applicant : $this->jobOwner;
    }
    
    /**
     * 会話の参加者全員を配列で取得
     */
    public function getAllParticipants()
    {
        return User::whereIn('id', [$this->job_owner_id, $this->applicant_id])->get();
    }
    
    /**
     * 応募に関連する会話グループを取得または作成する
     */
    public static function getOrCreateForApplication(int $jobListingId, int $jobOwnerId, int $applicantId): self
    {
        // 会話グループを検索
        $conversationGroup = self::where(function($query) use ($jobOwnerId, $applicantId, $jobListingId) {
                $query->where('job_owner_id', $jobOwnerId)
                      ->where('applicant_id', $applicantId)
                      ->where('job_listing_id', $jobListingId);
            })
            ->orWhere(function($query) use ($jobOwnerId, $applicantId, $jobListingId) {
                $query->where('job_owner_id', $applicantId)
                      ->where('applicant_id', $jobOwnerId)
                      ->where('job_listing_id', $jobListingId);
            })
            ->first();
            
        // 会話グループがなければ作成
        if (!$conversationGroup) {
            $conversationGroup = self::create([
                'job_owner_id' => $jobOwnerId,
                'applicant_id' => $applicantId,
                'job_listing_id' => $jobListingId,
            ]);
        }
        
        return $conversationGroup;
    }
}