import React from 'react';
import { connect } from 'react-redux';
import classes from './Login.module.css';
import LoginForm from './LoginForm';
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  if (props.isAuth) {
    return (
        <Navigate to={'/profile'} />
    )
  }

  return (
    <div className={classes.login}>
      <h2 className={classes.title}>Please login</h2>
      <LoginForm {...props}/>
    </div>
  )
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {
  login,
})(Login);