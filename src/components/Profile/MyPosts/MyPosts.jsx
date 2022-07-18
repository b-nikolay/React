import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css'


const MyPosts = () => {

  let postData = [
    { id: 1, message: 'Lorem ipsum dolor sit.', likesCount: 4,},
    { id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.', likesCount: 4,},
    { id: 3, message: 'onsectetur adipisicing elit. Veniam tenetur ', likesCount: 4,}
  ]

  return (
    <div className={classes.posts}>
      <h2>New Post</h2>
      <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount} />
      <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount} />
      <Post id={postData[2].id} message={postData[2].message} likesCount={postData[2].likesCount} />
    </div>
  )
}

export default MyPosts; 
 
 
