// src/Components/Loading.jsx
import React from "react";
import Logo from "./Logo";

/**
 * Loading component
 * Props:
 *  - message: string (optional)
 *  - skeletonCount: number of skeleton cards to show (optional)
 */
export default function Loading({ message = "Loading posts...", skeletonCount = 3 }) {
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 ">
      {/* Card header */}
      <div className="w-full max-w-3xl">
        <div className="mx-auto mb-8 flex flex-col items-center gap-4">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 shadow-md ring-1 ring-white/10">
            <span className="w-16 h-16 inline-block">
              <Logo width="100%" />
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {message}
          </h3>

          {/* spinner + subtext */}
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
            <svg
              className="w-6 h-6 text-indigo-600 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
              <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span>Fetching latest posts — one moment please</span>
          </div>
        </div>

        {/* Skeleton grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skeletons.map((_, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-4 bg-white/6 backdrop-blur-sm border border-white/8 shadow-sm overflow-hidden"
            >
              <div className="w-full mb-4 overflow-hidden rounded-xl">
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
              </div>

              <div className="space-y-3">
                <div className="h-4 rounded bg-gray-200 dark:bg-gray-700 w-3/4 animate-pulse" />
                <div className="h-3 rounded bg-gray-200 dark:bg-gray-700 w-1/2 animate-pulse" />
              </div>

              {/* subtle shimmer overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
          ))}
        </div>

        {/* small hint */}
        <p className="mt-6 text-center text-xs text-gray-500">
          If loading takes too long, try refreshing or check your network connection.
        </p>
      </div>
    </div>
  );
}
