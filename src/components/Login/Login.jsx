import React from 'react';

import classes from './Login.module.css';
import LoginForm from './LoginForm';

const Login = (props) => {
  return (
    <div className={classes.login}>
      <h2 className={classes.title}>Please login</h2>
      <LoginForm />
    </div>
  )
}

export default Login;