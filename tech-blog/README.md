# エンジニアマッチングサービス「match」技術ブログ

このディレクトリには、エンジニアマッチングサービス「match」の技術実装を詳細に解説する TSX ファイル群が含まれています。

## 📁 ファイル構成

```
tech-blog/
├── index.tsx              # メインのインデックスページ（ナビゲーション付き）
├── ProjectOverview.tsx    # プロジェクト概要ページ
├── FavoriteFeature.tsx    # お気に入り機能の実装詳細
├── MessagingSystem.tsx    # メッセージングシステムの実装詳細
├── TechStackDetails.tsx   # 技術スタック詳細ページ
└── README.md             # このファイル
```

## 🎯 各ページの内容

### 1. index.tsx - メインページ

-   全体のナビゲーション
-   プロジェクト概要
-   各機能ページへのリンク
-   フッター情報

### 2. ProjectOverview.tsx - プロジェクト概要

-   サービスコンセプト
-   主要機能一覧
-   技術スタック概要
-   アーキテクチャ図

### 3. FavoriteFeature.tsx - お気に入り機能

-   データベース設計
-   バックエンド実装（Laravel）
-   フロントエンド実装（React + TypeScript）
-   SCSS 設計（FLOCSS）

### 4. MessagingSystem.tsx - メッセージングシステム

-   パブリックメッセージ機能
-   ダイレクトメッセージ機能
-   メモ機能
-   会話グループ管理

### 5. TechStackDetails.tsx - 技術スタック詳細

-   Laravel 11 の実装詳細
-   React + TypeScript の活用
-   SCSS + FLOCSS 設計
-   アーキテクチャの利点

## 🚀 使用方法

### 自己紹介 HP での使用

1. **ファイルのコピー**

    ```bash
    # tech-blogディレクトリ全体を自己紹介HPプロジェクトにコピー
    cp -r tech-blog/ /path/to/your/portfolio/src/components/
    ```

2. **依存関係の確認**

    ```typescript
    // 必要な依存関係
    import React, { useState } from "react";
    ```

3. **メインページでの使用**

    ```typescript
    import TechBlogIndex from "./components/tech-blog/index";

    function App() {
        return (
            <div>
                <TechBlogIndex />
            </div>
        );
    }
    ```

### 個別ページの使用

特定の機能だけを表示したい場合：

```typescript
import FavoriteFeature from "./components/tech-blog/FavoriteFeature";

function PortfolioPage() {
    return (
        <div>
            <h1>私の技術実装</h1>
            <FavoriteFeature />
        </div>
    );
}
```

## 🎨 スタイリング

各 TSX ファイルには独自のスタイルが含まれています：

-   **レスポンシブデザイン対応**
-   **モダンなグラデーション**
-   **タブナビゲーション**
-   **コードハイライト**
-   **アニメーション効果**

### カスタマイズ方法

色やスタイルを変更したい場合：

```typescript
// 各ファイルの<style>タグ内で色を変更
const primaryColor = "#667eea"; // お好みの色に変更
const secondaryColor = "#764ba2";
```

## 📱 レスポンシブ対応

全てのページがモバイルファーストで設計されています：

-   **デスクトップ**: 1200px 以上
-   **タブレット**: 768px - 1199px
-   **モバイル**: 767px 以下

## 🔧 技術的特徴

### コンポーネント設計

-   **関数コンポーネント**使用
-   **TypeScript**による型安全性
-   **Hooks**を活用した状態管理

### スタイリング

-   **CSS-in-JS**（styled-components 風）
-   **Flexbox/Grid**レイアウト
-   **CSS Variables**対応

### インタラクティブ要素

-   **タブナビゲーション**
-   **アコーディオン**
-   **ホバーエフェクト**
-   **スムーズスクロール**

## 📝 コンテンツの特徴

### 実際のコードサンプル

-   Laravel Eloquent モデル
-   React TypeScript コンポーネント
-   SCSS/FLOCSS 設計
-   データベース設計

### 詳細な解説

-   実装の背景と理由
-   技術選定の根拠
-   パフォーマンス最適化
-   セキュリティ対策

## 🌟 活用シーン

### ポートフォリオサイト

-   技術力のアピール
-   実装経験の証明
-   コードレビュー対応

### 技術ブログ

-   学習記録として
-   知識の整理
-   他の開発者との共有

### 面接・転職活動

-   技術面接での説明資料
-   実装能力の証明
-   プロジェクト経験のアピール

## 📄 ライセンス

このコードは学習・ポートフォリオ目的で自由に使用できます。
商用利用の場合は適切なライセンス表記をお願いします。

## 🤝 貢献・改善

改善提案やバグ報告は歓迎します：

1. コードの最適化
2. デザインの改善
3. 新機能の追加
4. ドキュメントの充実

---

**作成者**: [あなたの名前]  
**作成日**: 2024 年  
**技術スタック**: React, TypeScript, CSS3
