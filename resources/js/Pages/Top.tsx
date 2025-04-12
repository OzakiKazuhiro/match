import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Top({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Top" />
            <div className="p-top__container">
                <h1 className="p-top__title">はろーグッバイ</h1>
            </div>
        </>
    );
}
