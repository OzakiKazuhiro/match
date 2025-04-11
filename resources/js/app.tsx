import "../css/app.css";
import "../scss/style.scss";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
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
