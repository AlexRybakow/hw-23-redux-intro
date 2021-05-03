import React from 'react';
import { useSelector } from 'react-redux';

const Posts = (props) => {
    const posts = useSelector((state => state.posts))
    return (
        <>
        {posts.map((post) => (
        <div className='container'>
        <div className='user-avatar'><img src={post.photo} alt='avatar'></img>       
        </div>
        <div className='post-body'>
        <div className='user-info'>
        <p className='user-name'>{post.name}</p>
        <p className='user-nickname'>{post.nickname}</p>
        <p className='post-date'>{date}</p>   
        </div>
        <div className='post-content'>
            <p className='post-text'>{post.text}</p>
            <img className='post-image'src={post.image} alt='post-pic'></img>
        </div>
        </div>
        </div>
        
      
        )) }
        </>
    )
}

export default Posts;