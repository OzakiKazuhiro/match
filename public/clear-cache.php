<?php
// 簡易的なセキュリティチェック
$token = getenv('CACHE_CLEAR_TOKEN');
if (!isset($_GET['token']) || $_GET['token'] !== $token) {
    header('HTTP/1.0 403 Forbidden');
    echo "アクセスが拒否されました";
    exit;
}

// キャッシュクリアコマンドを実行
$basePath = dirname(__DIR__);
echo "<pre>";
echo "キャッシュクリアプロセスを開始します... " . date('Y-m-d H:i:s') . "\n";

// 必要なディレクトリの存在を確認し、なければ作成
$directories = [
    $basePath . '/storage/framework',
    $basePath . '/storage/framework/views',
    $basePath . '/storage/framework/cache',
    $basePath . '/storage/framework/sessions',
    $basePath . '/storage/logs',
    $basePath . '/bootstrap/cache'
];

echo "必要なディレクトリを確認しています...\n";
foreach ($directories as $dir) {
    if (!file_exists($dir)) {
        echo "{$dir} が存在しません。作成します...\n";
        mkdir($dir, 0775, true);
        echo "作成完了: {$dir}\n";
    } else {
        echo "{$dir} は既に存在します\n";
    }
    
    // 権限の確認と修正
    if (!is_writable($dir)) {
        echo "{$dir} に書き込み権限がありません。権限を変更します...\n";
        chmod($dir, 0775);
        echo "権限変更完了: {$dir}\n";
    }
}

// ログファイル準備
$logDir = $basePath . '/storage/logs';
if (!file_exists($logDir)) {
    mkdir($logDir, 0775, true);
}
$logFile = $logDir . '/cache-clear.log';

try {
    file_put_contents($logFile, "キャッシュクリア実行: " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);
    
    echo "既存のキャッシュファイルを直接削除中...\n";
    $cacheFiles = glob($basePath . '/bootstrap/cache/*.php');
    foreach ($cacheFiles as $file) {
        unlink($file);
        echo "削除: " . basename($file) . "\n";
    }
    
    $viewFiles = glob($basePath . '/storage/framework/views/*.php');
    foreach ($viewFiles as $file) {
        unlink($file);
        echo "削除: " . basename($file) . "\n";
    }
    
    echo "View キャッシュをクリア中...\n";
    $output = [];
    exec("cd {$basePath} && php artisan view:clear 2>&1", $output, $returnVar);
    echo implode("\n", $output) . "\n";
    echo "結果コード: {$returnVar}\n\n";
    file_put_contents($logFile, "view:clear 結果: {$returnVar}\n", FILE_APPEND);
    
    echo "最適化キャッシュをクリア中...\n";
    $output = [];
    exec("cd {$basePath} && php artisan optimize:clear 2>&1", $output, $returnVar);
    echo implode("\n", $output) . "\n";
    echo "結果コード: {$returnVar}\n\n";
    file_put_contents($logFile, "optimize:clear 結果: {$returnVar}\n", FILE_APPEND);
    
    // 新しい環境でキャッシュを再生成
    echo "設定キャッシュを再生成中...\n";
    $output = [];
    exec("cd {$basePath} && php artisan config:cache 2>&1", $output, $returnVar);
    echo implode("\n", $output) . "\n";
    echo "結果コード: {$returnVar}\n\n";
    file_put_contents($logFile, "config:cache 結果: {$returnVar}\n", FILE_APPEND);
    
    echo "ルートキャッシュを再生成中...\n";
    $output = [];
    exec("cd {$basePath} && php artisan route:cache 2>&1", $output, $returnVar);
    echo implode("\n", $output) . "\n";
    echo "結果コード: {$returnVar}\n\n";
    file_put_contents($logFile, "route:cache 結果: {$returnVar}\n", FILE_APPEND);
    
    echo "全てのキャッシュクリア処理が完了しました。";
    file_put_contents($logFile, "キャッシュクリア完了: " . date('Y-m-d H:i:s') . "\n\n", FILE_APPEND);
} catch (Exception $e) {
    $errorMsg = "エラーが発生しました: " . $e->getMessage();
    echo $errorMsg;
    file_put_contents($logFile, $errorMsg . "\n", FILE_APPEND);
}
echo "</pre>"; 