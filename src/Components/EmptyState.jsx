import React from "react";
import { Link } from "react-router-dom";
import Lock from "../assests/download.svg";

/**
 * EmptyState component
 * Props:
 *  - title: main heading
 *  - subtitle: short description
 *  - showTeaser: boolean (show blurred post preview)
 *  - illustration: optional path to an image in /public or import
 */
export default function EmptyState({
  title = "Login to read posts",
  subtitle = "Sign in or create an account to unlock full articles, comment and contribute.",
  showTeaser = true,
  illustration = Lock, // put a friendly SVG in public/images
}) {
  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/5 border border-white/6 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          {/* Illustration */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
            <img
              src={illustration}
              alt=""
              aria-hidden="true"
              className="w-40 h-40 md:w-44 md:h-44 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-800">
              {title}
            </h2>
            <p className="text-gray-600 mb-4">{subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm transition"
                aria-label="Login"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-6 h-10 rounded-lg bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 font-semibold transition"
                aria-label="Create account"
              >
                Create Account
              </Link>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className="ml-auto my-auto text-sm text-gray-900 hover:text-gray-200"
                aria-label="Learn more"
              >
                Learn more →
              </button>
            </div>

            {/* subtle note */}
            <p className="text-xs text-gray-900 mt-4">
              By signing in you can view posts, bookmark favorites and post
              comments.
            </p>
          </div>
        </div>

        {/* Teaser / blurred previews */}
        {showTeaser && (
          <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="cursor-pointer shadow-2xl p-4 bg-white/3 rounded-xl border border-white/6 overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg overflow-hidden" />
                  {/* Blur overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-sm text-gray-200">
                      Preview locked
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-600 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
