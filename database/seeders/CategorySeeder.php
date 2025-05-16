<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 初期カテゴリーデータ
        $categories = [
            [
                'name' => 'ウェブ開発',
                'slug' => 'web-development',
                'description' => 'ウェブサイトやウェブアプリケーション開発に関する案件',
                'icon' => 'web',
                'display_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'モバイルアプリ開発',
                'slug' => 'mobile-app-development',
                'description' => 'iOS、Android向けのモバイルアプリケーション開発',
                'icon' => 'smartphone',
                'display_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'デザイン',
                'slug' => 'design',
                'description' => 'UI/UXデザイン、グラフィックデザインなど',
                'icon' => 'palette',
                'display_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'サーバー/インフラ',
                'slug' => 'server-infrastructure',
                'description' => 'サーバー構築、クラウドインフラ管理、DevOps',
                'icon' => 'storage',
                'display_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'AI/機械学習',
                'slug' => 'ai-machine-learning',
                'description' => '人工知能、機械学習、ディープラーニングの開発',
                'icon' => 'psychology',
                'display_order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'データ分析',
                'slug' => 'data-analysis',
                'description' => 'データ分析、ビッグデータ処理、データ可視化',
                'icon' => 'analytics',
                'display_order' => 6,
                'is_active' => true,
            ],
            [
                'name' => 'ECサイト',
                'slug' => 'ecommerce',
                'description' => 'オンラインショップ、ECサイトの開発・構築',
                'icon' => 'shopping_cart',
                'display_order' => 7,
                'is_active' => true,
            ],
            [
                'name' => 'API開発',
                'slug' => 'api-development',
                'description' => 'RESTful API、GraphQL、マイクロサービス開発',
                'icon' => 'api',
                'display_order' => 8,
                'is_active' => true,
            ],
            [
                'name' => 'WordPress開発',
                'slug' => 'wordpress-development',
                'description' => 'WordPressテーマ・プラグイン開発、カスタマイズ',
                'icon' => 'wordpress',
                'display_order' => 9,
                'is_active' => true,
            ],
            [
                'name' => 'エンジニアに相談',
                'slug' => 'engineer-consultation',
                'description' => '技術的な相談、アドバイス、レビュー',
                'icon' => 'forum',
                'display_order' => 10,
                'is_active' => true,
            ],
            [
                'name' => 'その他',
                'slug' => 'other',
                'description' => 'その他のIT関連案件',
                'icon' => 'more_horiz',
                'display_order' => 11,
                'is_active' => true,
            ],
        ];

        // データ挿入
        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'slug' => $category['slug'],
                'description' => $category['description'],
                'icon' => $category['icon'],
                'display_order' => $category['display_order'],
                'is_active' => $category['is_active'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
} 