import React, { Component } from "react";
import "./App.css";
import AddUser from './components/Adduser';
import  './reducers/index';
import { connect } from "react-redux";

class App extends Component {
  
  render() {
    const {handleSubmit} = this.props;
    const { fetching, dog, onRequestDog, error } = this.props;    
    return (
      <div className="App">      
        <AddUser />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // handleSubmit: () => dispatch({ type: "ADD_USER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);