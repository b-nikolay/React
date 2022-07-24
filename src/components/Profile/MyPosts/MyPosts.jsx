import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css'


const MyPosts = (props) => {

  let post = props.posts.map(post => <Post src={post.src} id={post.id} message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();  
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.posts}>
      <h2>My Posts</h2>
      <div className={classes.newPost}>
        <textarea
          ref={newPostElement}
          rows="5"
          value={props.newPostText}
          onChange={onPostChange} />
        <button onClick={onAddPost} className={classes.button}>Add post</button>
      </div>
      {post}
    </div>
  )
}

export default MyPosts;


