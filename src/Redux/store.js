import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Lorem ipsum dolor sit.',
          likesCount: 4,
          src: 'https://images.unsplash.com/photo-1658173318998-9cd7a0e18c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
        },
        {
          id: 2,
          message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.',
          likesCount: 4,
          src: 'https://images.unsplash.com/photo-1658138284539-b04c52359d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 3,
          message: 'onsectetur adipisicing elit. Veniam tenetur ',
          likesCount: 4,
          src: 'https://images.unsplash.com/photo-1658223255517-6a0b475fdd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        }
      ],
      newPostText: 'Message'

    },

    messagePage: {
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
    },
    sidebar: {
      users: [
        {
          name: 'Dmitri',
          src: 'https://images.unsplash.com/photo-1658225595905-7bd75d10a265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Andry',
          src: 'https://images.unsplash.com/photo-1657299156568-c94580e20fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
          name: 'Alex',
          src: 'https://images.unsplash.com/photo-1658137377207-c9bea7240457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
      ]
    }

  },
  _callSubsriber() {
    console.log('state change');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubsriber = observer;
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubsriber(this._state);
  },


}








window.store = store;

export default store;