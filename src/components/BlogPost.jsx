import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import SideBookmarkBar from "./SideBookmarkBar"; // Import SideBookmarkBar
import data from "../data/data.json";

function BlogPost() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedPosts(storedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedPosts));
  }, [bookmarkedPosts]);

  const toggleBookmark = (post) => {
    setBookmarkedPosts((prev) => {
      const isBookmarked = prev.find((item) => item.id === post.id);
      return isBookmarked
        ? prev.filter((item) => item.id !== post.id)
        : [...prev, post];
    });
  };

  return (
    <div className="flex ">
      {/* Blog Posts Section */}
      <div className="w-full lg:w-3/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((post) => (
          <SinglePost
            key={post.id}
            post={post}
            toggleBookmark={toggleBookmark}
            isBookmarked={bookmarkedPosts.some((item) => item.id === post.id)}
          />
        ))}
      </div>

      {/* Bookmark Sidebar (Visible on Larger Screens) */}
      <div className="w-full lg:w-1/3">
        <SideBookmarkBar bookmarkedPosts={bookmarkedPosts} />
      </div>
    </div>
  );
}

export default BlogPost;
