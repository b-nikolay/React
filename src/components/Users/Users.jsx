import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/images/avatar.png'
// import UserItem from './User/UserItem';

import classes from './Users.module.css';

const Users = (props) => {

  
    if (props.users.length === 0) {

      axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      });
    }
  

  return (  
    <div className={classes.content}>
      <h2 className={classes.title}>Users</h2>
      {/* <button onClick={getUsers}>Get users</button> */}
      {

        props.users.map(user => {
          return (
            <div className={classes.user} key={user.id}>
              <div className={classes.element}>
                <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={user.name} className={classes.avatar} />
                {
                  user.followed
                    ? <button onClick={() => { props.unfollow(user.id) }} className={classes.follow}>UnFollow</button>
                    : <button onClick={() => { props.follow(user.id) }} className={classes.follow}>Follow</button>
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
        })
      }
    </div>
  )
}

export default Users;