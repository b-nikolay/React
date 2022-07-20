import React from 'react';
import classes from '../Friends.module.css';



const Friend = (props) => {


  // let userElements = props.state.users.map(user => <UserItem name={user.name} id={user.id} />);

  // let messagesElements = props.state.messages.map(message => <Message message={message.message} />);



  return (
    <div className={classes.user}>
      <img className={classes.avatar} src={props.src} alt="" />
      <span className={classes.name}>{props.name}</span>
    </div>
  )
}

export default Friend;