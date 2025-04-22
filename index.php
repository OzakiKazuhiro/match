<?php

/**
 * Redirect to the public/index.php file.
 */

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? ''
);

// このプロジェクトのベースディレクトリ
$publicPath = __DIR__ . '/public';

// URIがファイルを指しているかチェック
if ($uri !== '/' && file_exists($publicPath . $uri)) {
    return false;
}

// publicディレクトリ内のindex.phpファイルを読み込む
require_once $publicPath . '/index.php'; 