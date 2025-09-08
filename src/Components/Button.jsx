import React from "react";

function Button({
  children,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  loading = false, // new prop
  ...props
}) {
  return (
    <button
      disabled={loading || props.disabled}
      className={`relative px-4 py-2 rounded-lg cursor-pointer font-bold flex items-center justify-center gap-2
        ${className} ${bgColor} ${textColor}
        ${loading ? "opacity-70 cursor-not-allowed" : ""}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="w-5 h-5 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
      <span>{loading ? "Please wait..." : children}</span>
    </button>
  );
}

export default Button;
