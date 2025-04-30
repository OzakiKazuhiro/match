<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\JobListing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FavoriteController extends Controller
{
    /**
     * お気に入りの状態を切り替える
     */
    public function toggle(JobListing $jobListing)
    {
        $user = auth()->user();
        
        // すでにお気に入り登録されているか確認
        $exists = Favorite::where('user_id', $user->id)
            ->where('job_listing_id', $jobListing->id)
            ->exists();
            
        if ($exists) {
            // お気に入りから削除
            Favorite::where('user_id', $user->id)
                ->where('job_listing_id', $jobListing->id)
                ->delete();
                
            return response()->json([
                'status' => 'removed',
                'message' => 'お気に入りから削除しました',
                'is_favorited' => false
            ]);
        } else {
            // お気に入りに追加
            Favorite::create([
                'user_id' => $user->id,
                'job_listing_id' => $jobListing->id
            ]);
            
            return response()->json([
                'status' => 'added',
                'message' => 'お気に入りに追加しました',
                'is_favorited' => true
            ]);
        }
    }
    
    /**
     * ユーザーのお気に入り一覧を表示
     */
    public function index()
    {
        $user = auth()->user();
        
        $favorites = $user->favoriteJobListings()
            ->with('user')
            ->orderBy('favorites.created_at', 'desc')
            ->paginate(10);
            
        return Inertia::render('Favorites/Index', [
            'favorites' => $favorites
        ]);
    }
}