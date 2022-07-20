import React from 'react';
import classes from './Messages.module.css';
import UserItem from './User/UserItem';
import Message from './Message/Message';


const Messages = (props) => {


  let userElements = props.state.users.map(user => <UserItem name={user.name} id={user.id} />);

  let messagesElements = props.state.messages.map(message => <Message message={message.message} />);



  return (
    <div className={classes.dialogs}>
      <h2 className={classes.title}>Messages</h2>
      <div className={classes.info}>
        <div className={classes.users}>
          {userElements}
        </div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
      </div>

    </div>
  )
}

export default Messages;