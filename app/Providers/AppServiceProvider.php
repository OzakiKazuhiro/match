<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Vite::prefetch(concurrency: 3); - Viteの代わりにWebpackを使用するため、削除

        // Webpackアセットを取得するヘルパー関数をBladeに登録
        Blade::directive('webpack', function ($expression) {
            return "<?php echo asset('assets/' . app(\App\Providers\AppServiceProvider::class)->getManifestAsset($expression)); ?>";
});
}

/**
* Webpackマニフェストからアセットのパスを取得する
*/
public function getManifestAsset($asset)
{
$manifestPath = public_path('assets/manifest.json');
static $manifest = null;

if (is_null($manifest) && file_exists($manifestPath)) {
$manifest = json_decode(file_get_contents($manifestPath), true);
}

return $manifest[$asset] ?? $asset;
}
}