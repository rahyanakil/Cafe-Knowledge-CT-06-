import React from 'react'

function SinglePost({post}) {
    return (
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <img
          src={post.image}
          alt="Blog Thumbnail"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="flex items-center mt-4 space-x-4">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">Mr. Raju</h3>
            <p className="text-sm text-gray-500">Mar 14 (4 Days ago)</p>
          </div>
          <span className="ml-auto text-sm text-gray-500">05 min read</span>
        </div>
        <h2 className="text-2xl font-bold mt-4">
          How to get your first job as a self-taught programmer
        </h2>
        <div className="mt-2 space-x-2 text-blue-500">
          <span className="badge badge-outline">#beginners</span>
          <span className="badge badge-outline">#programming</span>
        </div>
        <button className="mt-4 text-blue-600 font-semibold hover:underline">
          Mark as read
        </button>
      </div>
    )
}

export default SinglePost
