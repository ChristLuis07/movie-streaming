import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method="get",
}) {
    if (method === "post") {
        const { post } = useForm();

        const handleLogout = () => {
            post(route(link));
        };

        return (
            <button
                onClick={handleLogout}
                type="button"
                className={`flex items-center w-full px-2 py-2 rounded-lg ${
                    isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                }`}
            >
                <span className="w-5 h-5 mr-3">{icon}</span>
                <span>{text}</span>
            </button>
        );
    }

    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link flex items-center gap-3 px-2 py-2 rounded-md relative ${
                isActive ? "active" : ""
            }`}
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
