import Post from './Post/Post';

import classes from './MyPosts.module.css'


const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2>New Post</h2>
      <Post message='Hello' />
      <Post message='Hi' />
    </div>
  )
}

export default MyPosts; 
 
 
