import React from "react";

function SideBookmarkBar({ bookmarkedPosts = [] }) {
  return (
    <div className="w-full lg:w-3/3 bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-base sm:text-lg font-bold">
        Bookmarked Blogs: {bookmarkedPosts.length}
      </h3>
      <div className="mt-2 space-y-2">
        {bookmarkedPosts.length === 0 ? (
          <p className="text-gray-500">No bookmarks yet</p>
        ) : (
          bookmarkedPosts.map((post) => (
            <div
              key={post.id}
              className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm sm:text-base"
            >
              {post.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SideBookmarkBar;
