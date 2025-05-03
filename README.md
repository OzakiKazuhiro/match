<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

-   **[Vehikl](https://vehikl.com/)**
-   **[Tighten Co.](https://tighten.co)**
-   **[WebReinvent](https://webreinvent.com/)**
-   **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
-   **[64 Robots](https://64robots.com)**
-   **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
-   **[Cyber-Duck](https://cyber-duck.co.uk)**
-   **[DevSquad](https://devsquad.com/hire-laravel-developers)**
-   **[Jump24](https://jump24.co.uk)**
-   **[Redberry](https://redberry.international/laravel/)**
-   **[Active Logic](https://activelogic.com)**
-   **[byte5](https://byte5.de)**
-   **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# match - エンジニア向け案件マッチングサービス

「match」は、エンジニア向けの単発案件やサービス立ち上げ案を投稿・応募できるマッチングサービスです。

## 環境

-   Laravel 11
-   React + TypeScript
-   Inertia.js
-   SCSS (FLOCSS 設計)

## 機能

-   ユーザー登録・認証
-   案件投稿・応募
-   パブリックメッセージ・ダイレクトメッセージ
-   プロフィール管理

## 定期メンテナンスタスク

このプロジェクトには以下の定期メンテナンスタスクがあります：

### 退会ユーザーデータの削除

退会したユーザーのメールアドレス情報は、プライバシー保護のため退会から 6 ヶ月後に完全に削除されます。
この処理は毎月 1 日の午前 3 時に自動実行されます。

サーバー側では、以下のように毎月 1 日の午前 3 時に cron を実行するよう設定します：

```
0 3 1 * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

こうすることで、サーバーの負荷を最小限に抑えながら、必要なタスクを定期的に実行できます。

## 開発環境のセットアップ

1. リポジトリをクローン

    ```
    git clone <repository-url>
    cd match
    ```

2. 依存関係のインストール

    ```
    composer install
    npm install
    ```

3. 環境設定

    ```
    cp .env.example .env
    php artisan key:generate
    ```

4. データベースのセットアップ

    ```
    php artisan migrate
    php artisan db:seed
    ```

5. 開発サーバーの起動
    ```
    php artisan serve
    npm run dev
    ```

## デプロイ手順

本番環境へのデプロイ手順は以下の通りです：

1. 最新のコードを取得

    ```
    git pull origin main
    ```

2. 依存関係の更新

    ```
    composer install --optimize-autoloader --no-dev
    npm install
    npm run build
    ```

3. データベースの更新

    ```
    php artisan migrate --force
    ```

4. キャッシュのクリア

    ```
    php artisan optimize:clear
    php artisan optimize
    ```

5. スケジューラの設定
   サーバーの crontab に以下の行を追加：
    ```
    * * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
    ```
    ※ `/path-to-your-project` は実際のプロジェクトパスに置き換えてください。
