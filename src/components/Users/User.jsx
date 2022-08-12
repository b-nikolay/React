import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/avatar.png'
import classes from './Users.module.css';


const User = ({ user, followingInProgress, follow, unFollow, ...props }) => {

  return (
    <div className={classes.user} >
      <div className={classes.element}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={user.name} className={classes.avatar} />
        </NavLink>
        {
          user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unFollow(user.id)
            }}
              className={classes.follow}>UnFollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id)
            }}
              className={classes.follow}>Follow</button>

        }

      </div>
      <div className={classes.element}>
        <span className={classes.name}>{user.name}</span>
        <p className={classes.status}>{user.status}</p>
      </div>
      <div className={classes.element}>
        {/* <span className={classes.city}>{user.location.city}</span>
            <p className={classes.country}>{user.location.country}</p> */}
      </div>

    </div>
  )
}

export default User;