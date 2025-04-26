import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`p-auth__button p-auth__button--primary ${
                disabled ? "p-auth__button--disabled" : ""
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
