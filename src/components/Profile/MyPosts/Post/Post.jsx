import React from 'react';
import classes from './Post.module.css'
const Post = (props) => {
  return (
    <div className={classes.post}>
      <img className={classes.img} src={props.src} alt='' />
      {props.message}
      <span className={classes.title}></span>
      <button className={classes.like}> Likes</button>
    </div>
  )
}

export default Post;