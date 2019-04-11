import React from 'react';
import {Field, reduxForm} from 'redux-form'; 
// import {ADD_USER} from '../reducers/index';
// import {dispatch} from 'redux';
import { connect } from "react-redux";
import {ADD_USER} from '../actions/index';
const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length < 2) {
      errors.username = 'Minimum be 2 characters or more'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if (!values.role) {
        errors.role = 'Required'
      } else if (values.role.length < 2) {
        errors.role = 'Minimum be 2 characters or more'
      }
    return errors
  }
  
  let FormCode = props => {
    const { handleSubmit, pristine, submitting,dispatch} = props;
      const formSubmit = values => {
        console.log('form values',values);
        dispatch(ADD_USER(values));
        // props.onSubmit(values);
      }
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
FormCode = reduxForm({
  form: 'contact',
  validate,
  FormCode
})(FormCode);

// const mapStateToProps = state => {
//   return {
    
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // addUser: (data) => dispatch(ADD_USER(data)),

//   };
// };
export default FormCode;