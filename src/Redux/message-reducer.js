
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  users: [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' },
    { id: 3, name: 'Name 3' },
    { id: 4, name: 'Name 4' },
    { id: 5, name: 'Name 5' },
  ],
  messages: [
    { id: 1, message: 'Lorem ipsum dolor sit.' },
    { id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.' },
    { id: 3, message: 'onsectetur adipisicing elit. Veniam tenetur ' },
    { id: 4, message: 'm ipsum, dolor si' },
    { id: 5, message: 'etur culpa ullam labor' }
  ],
}

const messageReducer = (state = initialState, action) => {



  switch (action.type) {

    case SEND_MESSAGE: {

      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      }

    }
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default messageReducer;