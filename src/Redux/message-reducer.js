const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  users: [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Антон' },
    { id: 3, name: 'Валера' },
    { id: 4, name: 'Денис' },
    { id: 5, name: 'Андрей' },
  ],
  messages: [
    { id: 1, message: 'Lorem ipsum dolor sit.' },
    { id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.' },
    { id: 3, message: 'onsectetur adipisicing elit. Veniam tenetur ' },
    { id: 4, message: 'm ipsum, dolor si' },
    { id: 5, message: 'etur culpa ullam labor' }
  ],
  newMessageBody: '',
}

const messageReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messageReducer;