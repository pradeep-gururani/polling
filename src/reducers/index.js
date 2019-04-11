import { combineReducers } from 'redux';
import { reducer as formReducer , values} from 'redux-form';
// import axios from 'axios';
import { toast } from "react-toastify";
import {ADD_USER,API_CALL_SUCCESS,API_CALL_FAILURE} from '../actions/index';

// reducer with initial state
const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
    console.log('add user response-----------',);
    console.log('VALUES',action);
    return { };
      // return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
    console.log('successful api hit----',action.respond, action.status );
      if(action.status === 1){
        toast.error(action.respond);
      }else{
        toast.success("User added Succcessfully");
      }
      return { ...state };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, respond: null, error: action.error };
    default:
      return state;
  }
}
const reducers = {
  form: formReducer     // <---- Mounted at 'form'
}
export const rootReducer = combineReducers({reducer,...reducers})