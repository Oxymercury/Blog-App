import React from "react";
import ObjService from "../appwrite/Config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  console.log("Image id getting i am ", featuredImage);
  return (
    <Link to={`/post/${$id}`}>
      <div className="relative w-full rounded-2xl p-4 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
        
        {/* Image */}
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={ObjService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
