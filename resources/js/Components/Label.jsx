import React from "react";

export default function Label({ forInput, className, children, value }) {
    return (
        <label
            htmlFor={forInput}
            className={`text-base block mb-2` + className}
        >
            {value ? value : children}
        </label>
    );
}
