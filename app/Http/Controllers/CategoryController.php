<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * アクティブなカテゴリー一覧を取得
     */
    public function index()
    {
        $categories = DB::table('categories')
            ->where('is_active', true)
            ->orderBy('display_order')
            ->get(['id', 'name', 'slug', 'description', 'icon']);

        return response()->json($categories);
    }
} 