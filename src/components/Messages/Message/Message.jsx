import React from 'react';
import classes from '../Messages.module.css';


const Message = (props) => {
  return (
    <div className={classes.message}>
      <div className={classes.avatar}>
        <img src="https://images.unsplash.com/photo-1658241143910-ce18c1da1fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className={classes.text}>{props.message}</div>
    </div>
  )
};



export default Message;