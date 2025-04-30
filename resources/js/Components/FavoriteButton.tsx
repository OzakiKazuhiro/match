import React, { useState } from "react";
import axios from "axios";
import { route } from "ziggy-js";

interface FavoriteButtonProps {
    jobId: number;
    initialIsFavorited: boolean;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function FavoriteButton({
    jobId,
    initialIsFavorited,
    className = "",
    size = "md",
}: FavoriteButtonProps) {
    const [isFavorited, setIsFavorited] = useState(initialIsFavorited);
    const [isProcessing, setIsProcessing] = useState(false);

    // ボタンサイズに応じた幅と高さを設定
    const sizeClass = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10",
    }[size];

    // お気に入り登録・解除の切り替え
    const toggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isProcessing) return;

        setIsProcessing(true);

        try {
            const response = await axios.post(route("favorites.toggle", jobId));

            if (response.data) {
                setIsFavorited(response.data.is_favorited);
            }
        } catch (error) {
            console.error("お気に入り登録中にエラーが発生しました", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <button
            onClick={toggleFavorite}
            disabled={isProcessing}
            className={`c-favorite-button ${
                isFavorited ? "c-favorite-button--active" : ""
            } ${className}`}
            title={isFavorited ? "お気に入りから削除" : "お気に入りに追加"}
            aria-label={isFavorited ? "お気に入りから削除" : "お気に入りに追加"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${sizeClass} ${
                    isProcessing ? "c-favorite-button__icon--processing" : ""
                }`}
                viewBox="0 0 24 24"
                fill={isFavorited ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </button>
    );
}
