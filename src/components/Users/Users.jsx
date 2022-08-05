import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/avatar.png'

import classes from './Users.module.css';


let Users = (props) => {
  let pagesCounts = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCounts; i++) {
    pages.push(i)
  }


  return (
    <div className={classes.content}>
      <h2 className={classes.title}>Users</h2>
      <div className={classes.pagination}>
        {pages.map(page => {

          return (
            <span
              key={page}
              className={props.currentPage === page ? classes.select : ''}
              onClick={() => {
                props.onPageChanged(page)
              }}
            >{page}</span>
          )
        })}
      </div>
      {

        props.users.map(user => {
          return (
            <div className={classes.user} key={user.id}>
              <div className={classes.element}>
                <NavLink to={'/profile/' + user.id}>

                  <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={user.name} className={classes.avatar} />
                </NavLink>
                {
                  user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                      props.unFollow(user.id)
                    }} 
                    className={classes.follow}>UnFollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                      props.follow(user.id)
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
        })
      }
    </div>
  )
}

export default Users;