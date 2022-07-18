import React from 'react';
import classes from './Post.module.css'
const Post = (props) => {
  return (
    <div className={classes.post}>
      <img className={classes.img} src='https://addons.mozilla.org/user-media/addon_icons/649/649896-64.png?modified=mcrushed' alt='' />
      { props.message }
      <span className={classes.title}>1</span>
      <button className={classes.like}> Likes</button> 
    </div>
  )
}

export default Post;