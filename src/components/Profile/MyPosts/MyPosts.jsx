import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css'


const MyPosts = (props) => {
  // let posts = [
  //   {
  //     id: 1,
  //     message: 'Lorem ipsum dolor sit.',
  //     likesCount: 4,
  //   },
  //   {
  //     id: 2,
  //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.',
  //     likesCount: 4,
  //   },
  //   {
  //     id: 3,
  //     message: 'onsectetur adipisicing elit. Veniam tenetur ',
  //     likesCount: 4,
  //   }
  // ]


  let post = props.posts.map( post => <Post id={post.id} message={post.message} likesCount={post.likesCount} /> );

  return (
    <div className={classes.posts}>
      <h2>New Post</h2>
      { post }
    </div>
  )
}

export default MyPosts;


