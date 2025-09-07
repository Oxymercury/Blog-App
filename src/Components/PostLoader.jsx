import React from "react";

/**
 * PostLoader - glass themed skeleton for single post view
 * Tailwind only; no changes to app logic required.
 */
export default function PostLoader() {
  return (
    <div className="py-12 bg-gray-1000 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden bg-white/6 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
          {/* Image skeleton */}
          <div className="w-full h-[380px] md:h-[420px] bg-gradient-to-r from-gray-200/50 to-gray-300/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.06),rgba(255,255,255,0.02))] animate-skeleton-shimmer" />
            <div className="flex flex-col items-center gap-3 z-10">
              <svg className="w-12 h-12 text-gray-400 animate-pulse" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-sm text-gray-400">Loading image…</div>
            </div>
          </div>

          {/* Body skeleton */}
          <div className="p-8 md:p-10 space-y-6">
            {/* title */}
            <div className="h-10 rounded-lg bg-gray-200/60 w-3/4 md:w-2/3 animate-pulse" />

            {/* subtitle / meta */}
            <div className="flex gap-3 items-center">
              <div className="h-6 w-24 rounded-md bg-gray-200/60 animate-pulse" />
              <div className="h-6 w-16 rounded-md bg-gray-200/40 animate-pulse" />
            </div>

            {/* content lines */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200/40 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200/40 rounded w-11/12 animate-pulse" />
              <div className="h-4 bg-gray-200/40 rounded w-10/12 animate-pulse" />
              <div className="h-4 bg-gray-200/40 rounded w-9/12 animate-pulse" />
              <div className="h-4 bg-gray-200/40 rounded w-8/12 animate-pulse" />
            </div>

            {/* actions skeleton */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="h-10 w-28 rounded-lg bg-gray-200/60 animate-pulse" />
                <div className="h-10 w-20 rounded-lg bg-gray-200/60 animate-pulse" />
              </div>

              {/* spinner badge */}
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-indigo-600 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.15" />
                  <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-sm text-gray-500">Loading post…</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
