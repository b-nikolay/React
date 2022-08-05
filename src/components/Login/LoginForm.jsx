import React from 'react';
import classes from './Login.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from "yup";





const validateLoginForm = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required 1';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};



const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(5, "Must be shorter than 5 characters")
    .required("Required 2")
});


const LoginForm = (props) => {
  return (
    <Formik
    initialValues={{
      email: "",
      password: "",
      rememberMe: false
    }}
    validate={validateLoginForm}
    validationSchema={validationSchemaLoginForm}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    {() => (
      <Form>
        <div className={classes.input}>
          <Field
            name={'email'}
            type={'text'}
            placeholder={'e-mail'} />
            
        <ErrorMessage name="email" component="span" className={classes.req} />
        </div>
        <div className={classes.input}>
          <Field
            name={'password'}
            type={'password'}
            placeholder={'password'} />
            
        <ErrorMessage name="password" component="span" className={classes.req} />
        </div>
        <div className={classes.input}>
          <Field
            type={'checkbox'}
            name={'rememberMe'}
            id='rememberMe' />
          <label htmlFor={'rememberMe'}> remember me </label>
        </div>
        <button type={'submit'}>Login</button>
      </Form>

    )}

  </Formik>

  )
}

export default LoginForm;