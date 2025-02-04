import React, { useEffect, useState } from 'react'
import data from '../data/data.json';
import SinglePost from './SinglePost'

function BlogPost() {
    const [bookmarkedPosts,setIsBookmarkedPosts]=useState([]);
    // useeffect for localstorage(load bookmark on mount)
    useEffect(()=>{
        const storeBookmarks =JSON.parse(localStorage.getItem("bookmarks"))||[];
    setIsBookmarkedPosts(storeBookmarks)
    },[]);
    //useEffect (Save bookmarks when they change)
    useEffect(()=>{
        localStorage.setItem("bookmarks",JSON.stringify(bookmarkedPosts));
    },[bookmarkedPosts])
    //toggleBookmark checks if a post is already bookmarked
    const toggleBookmark=(post)=>{
        setIsBookmarkedPosts((prev)=>{
            const existingBookmark = prev.find((item)=>item.id ===post.id);
            if(existingBookmark){
                //remove the post if its already bookmarked
                return prev.filter((item)=>item.id!==post.id);            
        }
    else{
        //add the post if it's not bookmarked
        return [...prev,post];
    }
    });
    };
    return (
        <div>
            {
            data.map((post)=>(<SinglePost key={post.id} post={post} toggleBookmark={toggleBookmark} isBookmarked ={bookmarkedPosts.find((item)=>item.id===post.id)!==undefined}/>))
        }
        </div>
        
    )
}

export default BlogPost
