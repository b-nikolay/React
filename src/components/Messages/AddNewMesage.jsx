import React from 'react';
import classes from './Messages.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateMessageForm = values => {
  const errors = {};
  if (!values.newMessageBody) {
    errors.newMessageBody = 'Enter a message';
  } 
  return errors;
};


const AddNewMessage = (props) => {
  return (
    <Formik
      initialValues={{
        newMessageBody: '',
      }}
      validate={validateMessageForm}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        props.sendMessage(values)
        resetForm(
          {
            values: '',
          }
        )
      }}
    >
      {() => (
        <Form className={classes.form}>
          <div className={classes.textarea}>
            <Field
              name={'newMessageBody'}
              as={'textarea'}
              rows='1'
              placeholder={'You message'}
              className={classes.messageSend}
            // key={onNewMessageChange}
            />
            <ErrorMessage name="newMessageBody" component="span" className={classes.err} />
          </div>
          <button  className={classes.button}  type={'submit'}>Send</button>
        </Form>

      )}

    </Formik>
  )
}

export default AddNewMessage;