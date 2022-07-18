import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='' />
    </header>
  )
}

export default Header;