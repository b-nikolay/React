import { authAPI } from "../API/API";
const SET_USER_DATA = 'sn/auth/SET_USER_DATA';
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



const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });


export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me()
  if (response.data.resultCode === 0) {
    let { login, id, email } = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    setStatus(response.data.messages)
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}


// export const capthca = () => {
//   return (dispatch) => {
//     authAPI.capthca().then(response => {
//       if(response.data.resultCode === 10)
//     }
//   })
// }


// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;

