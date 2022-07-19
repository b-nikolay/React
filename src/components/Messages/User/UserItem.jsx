import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Messages.module.css';

const UserItem = (props) => {

  let path = '/messages/' + props.id;

  return (
    <div className={classes.user}>
      <NavLink className={({ isActive }) => isActive ? classes.activeLink : classes.userLink} to={path}>{props.name}</NavLink>
    </div>
  )
};



export default UserItem;