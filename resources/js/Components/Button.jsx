import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full 
    ${processing ? "opacity-30" : ""} 
    ${variant === "primary" ? "bg-alerange text-white" : ""}
    ${variant === "warning" ? "bg-yellow-500 text-white" : ""}
    ${variant === "danger" ? "bg-red-500 text-white" : ""}
    ${variant === "light-outline" ? "text-white border border-white" : ""}
    ${variant === "white-outline" ? "text-black border border-[#F1F1F1]" : ""}
    ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
