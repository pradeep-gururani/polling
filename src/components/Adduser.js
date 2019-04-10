import React from 'react';
import {Field, reduxForm, values, submit} from 'redux-form'; 
import {ADD_USER} from '../reducers/index';
import {dispatch} from 'redux';
const AddUser= props => {
  console.log('=========>',props);
  // console.log('values',values);
  const { handleSubmit, pristine,values, submitting ,dispatch} = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="enter username"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="enter password"
          />
        </div>
      </div>
      <div>
        <label>Role</label>
        <div>
          <Field
            name="role"
            component="input"
            type="text"
            placeholder="enter your role"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>      
      </div>
    </form>
  )
}

  export default reduxForm({
    form: 'syncValidation', 
  })(AddUser)
