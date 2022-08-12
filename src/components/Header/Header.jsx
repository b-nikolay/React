import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to='/profile'>
        <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='' />
      </NavLink>
      <div className={classes.logIn}>

          {props.isAuth
            ? <div className={classes.login}>
              <span className={classes.loginUser}>
                {props.login}
              </span>
              <button className={classes.logout} onClick={props.logout}>Logout</button>
            </div>
            : <NavLink to={'/login'}>Login</NavLink>
          }

        {/* <div className={classes.logout}>
        { !props.isAuth ? props.logout : <NavLink to={'/login'}>Logout</NavLink> }        
      </div> */}
      </div>

    </header>
  )
}

export default Header;