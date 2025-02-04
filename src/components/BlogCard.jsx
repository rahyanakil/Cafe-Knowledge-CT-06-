import React from "react";
import BlogPost from "./BlogPost";
import SideBookmarkBar from "./SideBookmarkBar";

const BlogCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Blog Post Section */}
   <BlogPost/>
      {/* side bookmark bar */}
      <SideBookmarkBar/>
    </div>
  );
};

export default BlogCard;
