import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/profile'>
        <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='' />
      </NavLink>
    </header>
  )
}

export default Header;