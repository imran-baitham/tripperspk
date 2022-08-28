import React from "react";

// button component, consuming props
const Button = ({
    children,
    onClick,
    variant = "default",
    size = "xl",
    disabled,
    dark,
    ...rest
}) => {
    return (
        <button
            className={`text-${size} border border-2 px-4 py-1 border=` + (disabled ? " disabled" : "") + (dark ? " bg-gray-600" : "")}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
