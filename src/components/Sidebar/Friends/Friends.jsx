import React from 'react';
import Friend from './Friend/Friend';
import classes from './Friends.module.css';


const Friends = (props) => {


  let user = props.users.map(user => <Friend name={user.name} src={user.src} />)

  return (
    <div className={classes.content}>
      {user}
    </div>
  )
}

export default Friends;