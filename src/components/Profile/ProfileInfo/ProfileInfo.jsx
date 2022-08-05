import React from 'react';

import userPhoto from '../../../assets/images/avatar.png'
import Preloader from '../../common/Preloader/Preloader';

import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }



  return (
    <div className={classes.profile}>
      <div className={classes.img}>
{/* 
        <img src='https://images.unsplash.com/photo-1657053543559-5845ec792c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' /> */}
      </div>
      <div className={classes.info}>
        <img className={classes.avatar} src={props.profile.photos.small !== null ? props.profile.photos.small : userPhoto} alt='' />
        <div className={classes.description}>
          <span className={classes.about}>{props.profile.fullName}</span>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
          <span className={classes.about}>{props.profile.aboutMe}</span>
          <span className={classes.about}>{props.profile.lookingForAJobDescription}</span>
        </div>
        <div className={classes.description}>
          <ul className="title">Contacts:</ul>
          <li className={classes.list}>
            <a href='https://google.com'>
              {props.profile.contacts.facebook}
            </a>
          </li>
          <li className={classes.list}>
            <a href='https://google.com'>
              {props.profile.contacts.vk}
            </a>
          </li>
          <li className={classes.list}>
            <a href='https://google.com'>
              {props.profile.contacts.instagram}
            </a>
          </li>
          <li className={classes.list}>
            <a href='https://google.com'>
              {props.profile.contacts.github}
            </a>
          </li>
          <li className={classes.list}>
            <a href='https://google.com'>
              {props.profile.contacts.website}
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;