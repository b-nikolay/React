import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './Sidebar.module.css';


const Sidebar = () => {


  return (
    <div className={classes.sidebar}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to='/profile' className={({ isActive }) => isActive ? classes.activeLink : classes.link}>Profile</NavLink>
          </li>
        <li className={classes.item}>
          <NavLink to='/messages' className={({ isActive }) => isActive ? classes.activeLink : classes.link}>Messages</NavLink>
          </li>
        <li className={classes.item}>
          <NavLink to='/news' className={({ isActive }) => isActive ? classes.activeLink : classes.link}>News</NavLink>
          </li>
        <li className={classes.item}>
          <NavLink to='/settings' className={({ isActive }) => isActive ? classes.activeLink : classes.link}>Settings</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;