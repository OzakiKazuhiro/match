<?php

namespace App\Http\Controllers;

use App\Models\JobListing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class MyJobListingController extends Controller
{
    /**
     * 自分の投稿案件一覧を表示する
     */
    public function index()
    {
        // 現在のユーザーが投稿した案件の一覧を取得
        $myJobListings = JobListing::where('user_id', Auth::id())
            ->withCount('applications')
            ->latest()
            ->get();

        return Inertia::render('MyJobListings', [
            'myJobListings' => $myJobListings,
        ]);
    }
} 