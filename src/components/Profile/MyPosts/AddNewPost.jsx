import React from 'react';
import classes from './MyPosts.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validatePostForm = values => {
  const errors = {};
  if (!values.newPostText) {
    errors.newPostText = 'Enter a message';
  } 
  return errors;
};


const AddNewPost = (props) => {
  return (
    <Formik
      initialValues={{
        newPostText: '',
      }}
      validate={validatePostForm}
      onSubmit={(values, { resetForm }) => {
        props.addNewPost(values)
        resetForm(
          {
            values: '',
          }
        )
      }}
    >
      {(status) => (
        <Form className={classes.form}>
          <div className={classes.textarea}>
            <Field
              name={'newPostText'}
              as={'textarea'}
              rows='2'
              placeholder={'You message'}
              className={classes.messageSend}
            // key={onNewMessageChange}
            />
            <ErrorMessage name="newPostText" component='div'  className={classes.err} />
          </div>
          
          <button disabled={!(status.isValid && status.dirty)}  className={classes.button}  type={'submit'}>Send</button>
        </Form>

      )}

    </Formik>
  )
}

export default AddNewPost;