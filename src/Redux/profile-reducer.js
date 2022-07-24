const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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

}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        src: 'https://images.unsplash.com/photo-1658265779553-4154a7330a94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
      }
      state.posts.push(newPost);
      state.newPostText = '';

      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;

      return state;
    default:
      return state;
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer