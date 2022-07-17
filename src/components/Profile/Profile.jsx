import MyPosts from "./MyPosts/MyPosts";

import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <img src='https://images.unsplash.com/photo-1657053543559-5845ec792c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
      </div>
      <div className={classes.info}>
        1
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;