const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.tsx", "public/js")
    .react()
    .sass("resources/scss/style.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
    ]);

// 本番環境のみバージョニングを有効にする
if (mix.inProduction()) {
    mix.version();
}

// HMR（Hot Module Replacement）の設定
mix.webpackConfig({
    output: {
        chunkFilename: "js/[name].js?id=[chunkhash]",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve("resources/js"),
        },
    },
});

// Hot Module Replacement設定
mix.options({
    hmrOptions: {
        host: "localhost",
        port: 8080,
    },
});
