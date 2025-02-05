import React from 'react'
import data from "../data/data.json"
import { useParams } from 'react-router-dom'

function ReadMore() {
    const {id}= useParams();//get post id from URL
    const post = data.find((item)=>item.id.toString()===id);//find post by id
    if (!post){
        return <h2 className='text-center text-red-600 text-xl'>Post not found</h2>
    }
    return (
        <div className="max-w-3xl mx-auto p-6">
        <img src={post.image} alt="Blog Thumbnail" className="w-full h-72 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="mt-2 text-gray-600">{post.content}</p> {/* Add post content */}
      </div>
  
    )
}

export default ReadMore
