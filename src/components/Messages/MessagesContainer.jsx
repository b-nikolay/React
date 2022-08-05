
import { sendMessageCreator } from '../../Redux/message-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthReditect';
import Messages from './Messages';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect) (Messages);