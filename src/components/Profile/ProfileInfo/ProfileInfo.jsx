import React from 'react';


import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.img}>
        <img src='https://images.unsplash.com/photo-1657053543559-5845ec792c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
      </div>
      <div className={classes.info}>
        <img className={classes.avatar} src='https://images.unsplash.com/photo-1657053543559-5845ec792c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <span className={classes.description}>Description</span>
      </div>
    </div>
  )
}

export default ProfileInfo;