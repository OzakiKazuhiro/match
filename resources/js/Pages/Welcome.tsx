import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({
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
            <Head title="Welcome" />
            <div
                style={{
                    backgroundColor: "#f0f0f0",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                    margin: "50px auto",
                    maxWidth: "500px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h1
                    style={{
                        color: "#ff6b6b",
                        fontSize: "2rem",
                        fontWeight: "bold",
                    }}
                >
                    はろーグッバイ
                </h1>
            </div>
        </>
    );
}
