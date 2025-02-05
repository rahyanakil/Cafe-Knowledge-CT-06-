import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from "../data/data.json";

function ReadMore() {
  const { id } = useParams(); // Get post id from URL
  const navigate = useNavigate(); // Hook for navigation

  const post = data.find((item) => item.id.toString() === id); // Find post by id
  
  if (!post) {
    return <h2 className='text-center text-red-600 text-xl'>Post not found</h2>;
  }

  const { image, title, content, tag, profile, description } = post;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Image */}
      <img src={image} alt="Blog Thumbnail" className="w-full h-72 object-cover rounded-lg" />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{title}</h1>

      {/* Content */}
      <p className="mt-2 text-gray-600">{content}</p> 

      {/* Author Profile */}
      <div className="flex items-center mt-4">
        <img src={profile} alt="Author" className="w-10 h-10 rounded-full" />
        <p className="ml-2 text-gray-800 font-bold">Interested In: {tag.join(', ')}</p> 
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-600">Details: {description}</p> 

      {/* Go Back Button */}
      <button 
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back
      </button>
    </div>
  );
}

export default ReadMore;
