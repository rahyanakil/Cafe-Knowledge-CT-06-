import React from 'react'
import data from '../data/data.json';
import SinglePost from './SinglePost'

function BlogPost() {
    return (
        <div>
            {
            data.map((post)=>(<SinglePost key={post.id} post={post}/>))
        }
        </div>
        
    )
}

export default BlogPost
