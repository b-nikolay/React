import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css'
import AddNewPost from './AddNewPost';


const MyPosts = React.memo(props => {

  let post = [...props.posts].reverse().map(post => <Post src={post.src} id={post.id} key={post.message} message={post.message} likesCount={post.likesCount} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={classes.posts}>
      <h2>My Posts</h2>
      <div className={classes.newPost}>
        <AddNewPost  addNewPost={addNewPost}/>
      </div>
      {post}
    </div>
  )
})

export default MyPosts;


