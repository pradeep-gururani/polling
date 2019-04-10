import React from 'react';
import {Field, reduxForm} from 'redux-form';

const AddUser= props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
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
    form: 'syncValidation', // a unique identifier for this form
// <--- warning function given to redux-form
  })(AddUser)
