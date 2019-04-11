import React, { Component } from "react";
import AddUser from './components/Adduser';
import  './reducers/index';
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { values } from "redux-form";

// import axios from 'axios';

class App extends Component {
  
  submit(values,dispatch){
    console.log('--vasl',values);    
  }

  render() {
    // console.log('data', this.props);
    const { addUser } = this.props;      
    return (
      <div className="App">      
        <AddUser onSubmit = {this.submit} />
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addUser: (data) => dispatch(ADD_USER(data)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);