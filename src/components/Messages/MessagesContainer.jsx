import React from 'react';
import { sendMessageCreator, updateMessageBodyCreator } from '../../Redux/message-reducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';


const MessagesContainer = (props) => {




  return (
    <StoreContext.Consumer>
      { store => {
          // let state = store.getState().messagePage;

          // let sendMessageElement = React.createRef();

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          }

          let onNewMessageChange = (body) => {
            store.dispatch(updateMessageBodyCreator(body));

          }
          return <Messages
            updateMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagePage={store.getState().messagePage} />
        }
      }

    </StoreContext.Consumer>

  )
}

export default MessagesContainer;