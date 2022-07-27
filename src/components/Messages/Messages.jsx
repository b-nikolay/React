import React from 'react';
import classes from './Messages.module.css';
import UserItem from './User/UserItem';
import Message from './Message/Message';



const Messages = (props) => {

  let state = props.messagePage;


  let userElements = state.users.map(user => <UserItem name={user.name} key={user.id} id={user.id} />);

  let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

  let newMessageBody = state.newMessageBody;

  // let sendMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateMessageBody(body)

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
            <textarea
              value={newMessageBody}
              rows="1"
              placeholder='Enter your message'
              onChange={onNewMessageChange}
              >
            </textarea>
            <button onClick={onSendMessageClick} className={classes.button}>Send</button>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Messages;