import { authAPI } from "../API/API";


const SET_USER_DATA = 'SET_USER_DATA';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // isFetching: true,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    // case TOGGLE_IS_FETCHING: {
    //   return {
    //     ...state,
    //     isFetching: action.isFetching,
    //   };
    // }
    default:
      return state;
  }
}



 const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });


export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then(response => {
      if(response.data.resultCode === 0) {
        
        let { login, id, email } = response.data.data
        dispatch(setAuthUserData(id, email, login))
      }
      
    });
  }
}



// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;

