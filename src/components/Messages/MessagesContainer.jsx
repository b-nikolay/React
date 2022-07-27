
import { sendMessageCreator, updateMessageBodyCreator } from '../../Redux/message-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: (body) => {
      dispatch(updateMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;