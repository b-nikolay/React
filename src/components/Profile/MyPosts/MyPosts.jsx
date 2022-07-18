import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css'


const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2>New Post</h2>
      <Post message='Hello' likesCount='2344' />
      <Post message='Hi' likesCount='23344'  />
    </div>
  )
}

export default MyPosts; 
 
 
