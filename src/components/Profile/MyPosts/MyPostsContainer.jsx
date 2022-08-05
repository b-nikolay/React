import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profile-reducer';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewPostText: (text) => {
    //   let action = updateNewPostTextActionCreator(text)
    //   dispatch(action)
    // },
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


