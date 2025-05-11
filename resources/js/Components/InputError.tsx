export default function InputError({
    message,
    className = "",
}: {
    message?: string;
    className?: string;
}) {
    if (!message) {
        return null;
    }

    return <div className={`c-error ${className}`}>{message}</div>;
}
