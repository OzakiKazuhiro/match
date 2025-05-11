import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { route } from "ziggy-js";

// タブの定義
const tabs = [
    { name: "自分の投稿案件", route: "my-job-listings.index" },
    { name: "応募した案件", route: "applications.index" },
    { name: "自分の案件への応募", route: "applications.to-my-jobs" },
    { name: "パブリックメッセージ", route: "public-messages.index" },
    { name: "ダイレクトメッセージ", route: "messages.index" },
];

interface TabNavigationProps {
    activeTab: string; // アクティブなタブのルート名
}

export default function TabNavigation({ activeTab }: TabNavigationProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 現在のアクティブタブを取得
    const activeTabName =
        tabs.find((tab) => tab.route === activeTab)?.name || tabs[0].name;

    // 画面サイズに応じてモバイル判定を更新
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // 初期化時に実行
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // ドロップダウンの開閉を切り替え
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // ドロップダウン選択時に閉じる
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            {/* モバイル用ドロップダウン */}
            <div className="p-tab-navigation__mobile">
                <button
                    onClick={toggleDropdown}
                    className="p-tab-navigation__dropdown-button"
                >
                    <span>{activeTabName}</span>
                    <ChevronDownIcon
                        className={`p-tab-navigation__dropdown-icon ${
                            isDropdownOpen ? "open" : ""
                        }`}
                    />
                </button>

                {isDropdownOpen && (
                    <div className="p-tab-navigation__dropdown-menu">
                        {tabs.map((tab) => (
                            <a
                                key={tab.route}
                                href={route(tab.route)}
                                className={`p-tab-navigation__dropdown-item ${
                                    tab.route === activeTab ? "active" : ""
                                }`}
                                onClick={closeDropdown}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* デスクトップ用タブ */}
            <div className="p-tab-navigation__desktop">
                <div className="p-applications__tabs">
                    {tabs.map((tab) => (
                        <a
                            key={tab.route}
                            href={route(tab.route)}
                            className={`p-applications__tab ${
                                tab.route === activeTab
                                    ? "p-applications__tab--active"
                                    : ""
                            }`}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
