import { ReactNode } from "react";

interface PageHeaderProps {
    title: ReactNode;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="p-dashboard__header">
            <div className="p-dashboard__header-inner">
                {typeof title === "string" ? (
                    <h2 className="p-dashboard__title">{title}</h2>
                ) : (
                    title
                )}
                {subtitle && (
                    <p className="p-dashboard__subtitle">{subtitle}</p>
                )}
            </div>
        </div>
    );
}
