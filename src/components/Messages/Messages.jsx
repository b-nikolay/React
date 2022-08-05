import React from 'react';
import classes from './Messages.module.css';
import UserItem from './User/UserItem';
import Message from './Message/Message';
import AddNewMessage from './AddNewMesage';



const Messages = (props) => {

  let state = props.messagePage;


  let userElements = state.users.map(user => <UserItem name={user.name} key={user.id} id={user.id} />);

  let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

  let newMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }



  return (
    <div className={classes.dialogs}>
      <h2 className={classes.title}>Messages</h2>
      <div className={classes.info}>
        <div className={classes.users}>
          {userElements}
        </div>
        <div className={classes.messages}>
          <div className={classes.wrapper}>
            {messagesElements}
          </div>
          <div className={classes.messageSend}>
            <AddNewMessage sendMessage={newMessage}/>
        
          </div>
        </div>
      </div>

    </div >
  )
}

export default Messages;