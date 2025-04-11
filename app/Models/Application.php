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
}