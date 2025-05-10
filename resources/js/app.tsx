import "../css/app.css";
import "../scss/style.scss";
import "./bootstrap";

import { createInertiaApp, router as Inertia } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

// @ts-ignore - この行はLaravelのルート関数をグローバルに利用できるようにするため
declare global {
    interface Window {
        route: any;
    }
}

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

// @ts-ignore - Webpackとの互換性のため
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name: string) => {
        // 動的インポートを使用
        const page = await import(`./Pages/${name}.tsx`);
        return page.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
//
// Chromeモバイルでの戻るボタン問題を修正
document.addEventListener("DOMContentLoaded", () => {
    // ページ読み込み時に現在のURLと状態を記録
    if (window.history && window.history.replaceState) {
        const currentUrl = window.location.href;
        window.history.replaceState(
            {
                ...window.history.state,
                url: currentUrl,
                inertia: true,
            },
            "",
            currentUrl
        );
    }

    // Inertiaの遷移前の処理をフック
    Inertia.on("before", (event) => {
        // 一部のブラウザでは、遷移前にURLの状態を記録する必要がある
        const visitingUrl = event.detail.visit.url.toString();
        if (window.history && window.history.replaceState && visitingUrl) {
            try {
                // 次に表示するページのURLを正しく保存
                window.history.replaceState(
                    {
                        ...window.history.state,
                        url: visitingUrl,
                        inertia: true,
                    },
                    "",
                    window.location.href
                );
            } catch (error) {
                console.error("History API error:", error);
            }
        }
    });

    // Inertiaの遷移後の処理をフック
    Inertia.on("success", (event) => {
        // ページ遷移成功時に現在のURLをreplaceStateで更新して履歴を確実に保存
        if (
            window.history &&
            window.history.replaceState &&
            event.detail.page.url
        ) {
            try {
                window.history.replaceState(
                    {
                        ...window.history.state,
                        url: event.detail.page.url,
                        inertia: true,
                    },
                    "",
                    event.detail.page.url
                );
            } catch (error) {
                console.error("History API error:", error);
            }
        }
    });
});
