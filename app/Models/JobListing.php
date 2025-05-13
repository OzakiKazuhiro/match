<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
        'category_id',
        'location',
        'skills',
        'preferred_skills',
        'is_closed',
        'view_count',
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
        'view_count' => 'integer',
        'skills' => 'array',
        'preferred_skills' => 'array',
    ];
    
    /**
     * この案件を投稿したユーザーを取得
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * この案件のカテゴリーを取得
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
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
     * この案件のお気に入り情報を取得
     */
    public function favorites(): HasMany
    {
        return $this->hasMany(Favorite::class);
    }
    
    /**
     * この案件をお気に入りしているユーザーを取得
     */
    public function favoritedByUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'favorites')
            ->withTimestamps();
    }
    
    /**
     * 特定のユーザーがこの案件をお気に入りしているかを確認
     */
    public function isFavoritedBy(?User $user): bool
    {
        if (!$user) {
            return false;
        }
        
        return $this->favorites()->where('user_id', $user->id)->exists();
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
    
    /**
     * 特定のカテゴリーの案件のみを取得するスコープ
     */
    public function scopeInCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }
    
    /**
     * 閲覧数をインクリメント
     */
    public function incrementViewCount(): void
    {
        // セッションにこの案件のIDが含まれていない場合のみカウントアップ
        $sessionKey = 'job_listing_viewed_' . $this->id;
        
        if (!session()->has($sessionKey)) {
            $this->increment('view_count');
            // 24時間有効なセッションを設定
            session()->put($sessionKey, true);
            session()->put($sessionKey . '_expires_at', now()->addHours(24));
            session()->save();
        }
    }
}