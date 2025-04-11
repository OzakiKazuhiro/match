<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JobListing extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'title',
        'type',
        'budget_min',
        'budget_max',
        'description',
        'is_closed',
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'budget_min' => 'integer',
        'budget_max' => 'integer',
        'is_closed' => 'boolean',
    ];
    
    /**
     * この案件を投稿したユーザーを取得
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * この案件への応募を取得
     */
    public function applications(): HasMany
    {
        return $this->hasMany(Application::class);
    }
    
    /**
     * この案件に関連するパブリックメッセージを取得
     */
    public function publicMessages(): HasMany
    {
        return $this->hasMany(PublicMessage::class);
    }
    
    /**
     * 単発案件のみを取得するスコープ
     */
    public function scopeOneTime($query)
    {
        return $query->where('type', 'one_time');
    }
    
    /**
     * レベニューシェア案件のみを取得するスコープ
     */
    public function scopeRevenueShare($query)
    {
        return $query->where('type', 'revenue_share');
    }
    
    /**
     * オープン中の案件のみを取得するスコープ
     */
    public function scopeOpen($query)
    {
        return $query->where('is_closed', false);
    }
}