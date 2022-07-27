import React from 'react';
import Friend from './Friend/Friend';
import classes from './Friends.module.css';


const Friends = (props) => {
  let state = props.sidebar.users;


  let user = state.map(user => <Friend name={user.name} key={user.name} src={user.src} />)

  return (
    <div className={classes.content}>
      {user}
    </div>
  )
}

export default Friends;