
import { getAuthUserData } from "./auth-reducer";
const INITIALAZED_SUCCSES = 'INITIALAZED_SUCCSES';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  initialazed: false,
  // isFetching: true,
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALAZED_SUCCSES: {
      return {
        ...state,
        initialazed: true,
      };
    }
    default:
      return state;
  }
}



const initialazedSeccess = () => ({ type: INITIALAZED_SUCCSES });


export const initialazeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(initialazedSeccess())
    })
  }
}
export default appReducer;

