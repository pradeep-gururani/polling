import React from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions/actionIndex';
import { Field, values,reduxForm } from 'redux-form'
let Signup=()=>{
    return(
        <form className = "" onSubmit={userSignup(values.username, values.password,values.role)}>
            <Field
                name="username"
                type="text"                
                label="Username"
            />
            <Field
                name="password"
                type="password"
                label="Password"
            />
            <Field
                name="role"
                type="text"
                label="Role"
            />
            <input        
                type="submit"
                value="Signup"
            />            
        </form>
    );
}

// Signup = connect()(Signup);
Signup = reduxForm({
    form:userSignup
})(Signup);

export default Signup;