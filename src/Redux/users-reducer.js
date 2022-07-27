

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
  newPostText: 'Message'

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
    default:
      return state;
  }
}


export const followActionCreator = (userId) => ({ type: FOLLOW, userId });

export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;