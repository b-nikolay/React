import { profileAPI, usersAPI } from "../API/API";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

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
  profile: null,
  status: '',

}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
        src: 'https://images.unsplash.com/photo-1658265779553-4154a7330a94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
      }

      return {
        ...state,
        posts: [...state.posts, newPost],

      };
    }
    case SET_USER_PROFILE: {

      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS: {

      return {
        ...state,
        status: action.status
      }
    }

    case DELETE_POST: {

      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }


    default:
      return state;
  }
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
}


export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(response.status));
  }
}



export default profileReducer