import React, { Component } from 'react';
import {Field, reduxForm, SubmissionError } from 'redux-form';

const submit = ({userName='',password='',role=''}) =>{
    let error = {};
    let isError = false;

    if(userName.trim() === ''){
        error.userName = 'Required'
        isError = true;
    }

    if(password.trim() === ''){
        error.userName = 'Required'
        isError = true;
    }

    if(role.trim() === ''){
        error.userName = 'Required'
        isError = true;
    }

    if(isError){
        throw new SubmissionError(error);    
    }
    else{
        dispatch({});
    }
}

const renderField = ({ type, label, input, meta: {touched, error}}) =>(
<div className ="input-row">
    <label>{label}</label>
    <input {...input} type = {type}/>
    {touched && error && <span className="error">{error}</span>}
</div>
);

const ContactForm =({ handleSubmit , submitAction}) =>(
    <form onSubmit={handleSubmit((fields)=>submit(fields, submitAction))}>
        <Field name = "username" 
            label = "user name"
            Component ={renderField}
            type="text"
        />
        <Field name = "password" 
            label = "password"
            Component ={renderField}
            type="password"
        />
        <Field name = "role" 
            label = "role"
            Component ={renderField}
            type="text"
        />
        <button type="submit">submit</button>
    </form>
);

const addUserForm =reduxForm({
    form: 'contact'
})(ContactForm)

export default addUserForm;