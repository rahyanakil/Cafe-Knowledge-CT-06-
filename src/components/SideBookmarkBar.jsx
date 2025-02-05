import React from "react";
import { Link } from "react-router-dom";

function SideBookmarkBar({ bookmarkedPosts = [] }) {
  return (
    <div className="w-full p-4 lg:w-3/3 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
      <h3 className="text-base sm:text-sm md:text-md lg:text-xl font-bold">
        Bookmarked Blogs: {bookmarkedPosts.length}
      </h3>
      <div className="mt-2 space-y-2">
        {bookmarkedPosts.length === 0 ? (
          <p className="text-gray-500 text-xs">No bookmarks yet</p>
        ) : (
          bookmarkedPosts.map((post, index) => {
            // Ensure post.id exists; otherwise, use index as fallback
            const postId = post.id || index;

            return (
              <Link key={postId} to={`/post/${postId}`}>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm sm:text-base cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                  {post.title || "Untitled Post"}
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default SideBookmarkBar;
