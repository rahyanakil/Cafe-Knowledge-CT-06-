import React from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SinglePost({ post, toggleBookmark, isBookmarked }) {
  const { id,image, profile, Name, title, tag } = post;

  return (
    <div className="relative flex-1  bg-white dark:bg-gray-800 rounded-lg shadow-md p-2 ">
      {/* Blog Image */}
      <img
        src={image}
        alt="Blog Thumbnail"
        className="w-full h-36  md:h-64 object-cover rounded-lg"
      />

      <div className="flex flex-wrap items-center mt-4 space-x-3 md:space-x-4">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Author"
          className="w-10 h-8 sm:h-10 rounded-full"
        />
        <div>
          <h3 className="font-bold text-xs sm:text-sm">{Name}</h3>
          <p className="text-xs  text-gray-500">Mar 14 </p>
        </div>

        {/* Reading Time */}
        <div className="flex absolute right-1   md:right-8 text-blue-500  items-center gap-2 ">
  <span className="text-xs sm:text-sm hidden text-gray-500">05 min read</span>

  {/* Bookmark Button */}
  
  <button
    className="text-blue-500 hover:text-blue-500 transition"
    onClick={() => toggleBookmark(post)}
  >
    {isBookmarked ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
  </button>
</div>
      </div>

      {/* Blog Title */}
      <h2 className="text-sm  md:text-2xl font-bold mt-4">{title}</h2>

      {/* Tags */}
      <div className="mt-2 flex flex-wrap space-x-1  text-blue-500">
        {tag.map((item, index) => (
          <span key={index} className="text-xs badge badge-outline">
            #{item}
          </span>
        ))}
      </div>

      {/* Mark as Read Button */}
      <Link to={`/post/${id}`}>
      <button className="mt-4 text-blue-600 font-semibold text-sm sm:text-base hover:underline">
        Mark as read
      </button>
      </Link>
    </div>
  );
}

export default SinglePost;
