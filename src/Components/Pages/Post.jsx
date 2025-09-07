import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ObjService from "../../appwrite/Config";
import Button from "../Button";
import Container from "../Container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import PostLoader from "../PostLoader";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  // keep your original auth check (no logic changes)
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      ObjService.GetPost(slug).then((post) => {
        if (post) {
          setPost(post);
          console.log("Post in home id", post.featuredImage);
          console.log("Image link ", ObjService.getFilePreview(post.featuredImage));
        } else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    ObjService.DeletePost(post.$id).then((Status) => {
      if (Status) {
        ObjService.DeleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-12 bg-gray-100 min-h-[70vh]">
      <Container>
        {/* Outer glass wrapper */}
        <div className="max-w-5xl mx-auto">
          <article className="relative rounded-3xl overflow-hidden bg-white/6 backdrop-blur-md border border-white/10 shadow-lg">
            {/* Header image (glass framed) */}
            <div className="relative w-full h-[380px] md:h-[420px] bg-gray-100">
              <img
                src={ObjService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="w-full h-full object-cover brightness-95 contrast-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/placeholder-image.png";
                }}
              />

              {/* subtle dark gradient to improve contrast for overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              {/* action buttons (edit/delete) */}
              {isAuthor && (
                <div className="absolute right-6 top-6 flex gap-3">
                  <Link to={`/edit-post/${post.$id}`}>
                    <Button className="px-4 py-2 !bg-white/10 !text-white hover:!bg-white/20" bgColor="">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={deletePost}
                    className="px-4 py-2 !bg-red-500 !text-white hover:!bg-red-600"
                    bgColor=""
                  >
                    Delete
                  </Button>
                </div>
              )}

              {/* Post title overlay */}
              <div className="absolute left-6 bottom-6 right-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-black drop-shadow-lg leading-tight">
                  {post.title}
                </h1>
                <div className="mt-2 text-sm text-white/80">By {post.userId || "Unknown author"}</div>
              </div>
            </div>

            {/* Body card (raised) */}
            <div className="p-8 md:p-10 bg-white/5 border-t border-white/6">
              <div className="prose max-w-none prose-lg text-black dark:text-gray-700">
                {/* parse content (unchanged) */}
                {parse(post.content)}
              </div>

              {/* meta / CTA area */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400" />
                    <span>Published</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs text-gray-400">Status:</span>
                    <span className="px-2 py-1 rounded bg-gray-100 text-xs font-medium">{post.status || "active"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
                    ← Back to home
                  </Link>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Top
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </div>
  ) : (<PostLoader />);
}
