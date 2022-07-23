import React from 'react';
import classes from './Messages.module.css';
import UserItem from './User/UserItem';
import Message from './Message/Message';
import { sendMessageCreator, updateMessageBodyCreator } from '../../Redux/message-reducer';


const Messages = (props) => {

  let state = props.store.getState().messagePage;


  let userElements = state.users.map(user => <UserItem name={user.name} id={user.id} />);

  let messagesElements = state.messages.map(message => <Message message={message.message} />);

  let newMessageBody = state.newMessageBody;

  // let sendMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateMessageBodyCreator(body));

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