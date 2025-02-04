import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'; // Import bookmark icons

function SinglePost({ post }) {
  const { image, profile, Name, title, tag } = post;
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="relative flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <img
        src={image}
        alt="Blog Thumbnail"
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="flex items-center mt-4 space-x-4">
        <img
          src={profile}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-lg">{Name}</h3>
          <p className="text-sm text-gray-500">Mar 14 (4 Days ago)</p>
        </div>
        <span className="ml-auto text-sm text-gray-500">05 min read</span>
          {/* Bookmark Button */}
      <button
        className="absolute right-12 text-gray-500 hover:text-blue-500 transition"
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        {isBookmarked ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
      </button>
      </div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <div className="mt-2 space-x-2 text-blue-500">
        {tag.map((item, index) => (
          <span key={index} className="badge badge-outline">#{item}</span>
        ))}
      </div>
      <button className="mt-4 text-blue-600 font-semibold hover:underline">
        Mark as read
      </button>
    </div>
  );
}

export default SinglePost;
