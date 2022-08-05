import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css'
import AddNewPost from './AddNewPost';


const MyPosts = (props) => {
  let post = props.posts.map(post => <Post src={post.src} id={post.id} key={post.id} message={post.message} likesCount={post.likesCount} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  // let onAddPost = () => {
  //   props.addPost();  
  // }


  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text)
  // }

  return (
    <div className={classes.posts}>
      <h2>My Posts</h2>
      <div className={classes.newPost}>
        <AddNewPost  addNewPost={addNewPost}/>
      </div>
      {post}
    </div>
  )
}

export default MyPosts;


