import { Link } from "@inertiajs/inertia-react";
export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method = "get",
}) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link flex items-center gap-3 px-2 py-2 rounded-md relative ${
                isActive ? "active" : ""
            }`}
            method={method}
            as="button"
        >
            {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l-md"></span>
            )}
            <span
                style={{ color: isActive ? "#f97316" : "inherit" }}
                className="flex-shrink-0"
            >
                {icon}
            </span>
            <span style={{ color: isActive ? "#f97316" : "inherit" }}>
                {text}
            </span>
        </Link>
    );
}
