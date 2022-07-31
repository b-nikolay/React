import { usersAPI } from "../API/API";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   status: 'Lorem ipsum dolor sit.',
    //   fullName: 'Kolya',
    //   avatar: 'https://html5css.ru/howto/img_avatar.png',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   },
    //   followed: true,
    // },
    // {
    //   id: 2,
    //   status: 'Lorem ipsum dolor sit.',
    //   fullName: 'Dmitry',
    //   avatar: 'https://html5css.ru/howto/img_avatar.png',
    //   location: {
    //     city: 'Minsk',
    //     country: 'Belarus'
    //   },
    //   followed: false,
    // },
    // {
    //   id: 3,
    //   status: 'Lorem ipsum dolor sit.',
    //   fullName: 'Alex',
    //   avatar: 'https://html5css.ru/howto/img_avatar.png',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   },
    //   followed: true,
    // },
    // {
    //   id: 4,
    //   status: 'Lorem ipsum dolor sit.',
    //   fullName: 'Jimmy',
    //   avatar: 'https://html5css.ru/howto/img_avatar.png',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   },
    //   followed: false,
    // },
    // {
    //   id: 5,
    //   status: 'Lorem ipsum dolor sit.',
    //   fullName: 'Dollores',
    //   avatar: 'https://html5css.ru/howto/img_avatar.png',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   },
    //   followed: true,
    // },
    // {
    //   id: 6,
    //   status: 'Lorem ipsum dolor sit.',
    //   fullName: 'Adam',
    //   avatar: 'https://html5css.ru/howto/img_avatar.png',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia'
    //   },
    //   followed: false,
    // },

  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  maxTotalUsersCount: 100,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      };
    }
    default:
      return state;
  }
}


export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount = 50));
      dispatch(setCurrentPage(currentPage));
    });
  }
}

export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.onUnFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    })
  }
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.onFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    })
  }
}
export default usersReducer;