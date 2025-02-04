import React from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

function SinglePost({ post, toggleBookmark, isBookmarked }) {
  const { image, profile, Name, title, tag } = post;

  return (
    <div className="relative flex-1  bg-white dark:bg-gray-800 rounded-lg shadow-md ">
      {/* Blog Image */}
      <img
        src={image}
        alt="Blog Thumbnail"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
      />

      <div className="flex flex-wrap items-center mt-4 space-x-3 md:space-x-4">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Author"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-sm sm:text-lg">{Name}</h3>
          <p className="text-xs sm:text-sm text-gray-500">Mar 14 (4 Days ago)</p>
        </div>

        {/* Reading Time */}
        <span className="ml-auto text-xs sm:text-sm text-gray-500">
          05 min read
        </span>

        {/* Bookmark Button */}
        <button
          className="absolute right-4 sm:right-4 md:right-8 text-blue-500 hover:text-blue-500 transition"
          onClick={() => toggleBookmark(post)}
        >
          {isBookmarked ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
        </button>
      </div>

      {/* Blog Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4">{title}</h2>

      {/* Tags */}
      <div className="mt-2 flex flex-wrap space-x-1 sm:space-x-2 text-blue-500">
        {tag.map((item, index) => (
          <span key={index} className="text-xs sm:text-sm badge badge-outline">
            #{item}
          </span>
        ))}
      </div>

      {/* Mark as Read Button */}
      <button className="mt-4 text-blue-600 font-semibold text-sm sm:text-base hover:underline">
        Mark as read
      </button>
    </div>
  );
}

export default SinglePost;
