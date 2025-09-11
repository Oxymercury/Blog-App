import React from "react";

export default function Loader({height = 500}) {
  return (
    <div className="flex justify-center items-center h-full w-full " style={{ minHeight: `${height}px` }}>
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}
