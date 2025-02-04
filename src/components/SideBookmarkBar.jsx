import React from 'react'

function SideBookmarkBar() {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="text-lg font-semibold bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-center">
          Spent time on read: <span className="font-bold">177 min</span>
        </div>
        <h3 className="mt-4 text-lg font-bold">Bookmarked Blogs: 8</h3>
        <div className="mt-2 space-y-2">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
            >
              Master Microsoft Power Platform and Become an In-Demand!
            </div>
          ))}
        </div>
      </div>
    )
}

export default SideBookmarkBar

