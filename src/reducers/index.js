import { createStore, combineReducers } from 'redux';
import { reducer as formReducer ,values} from 'redux-form';
import axios from 'axios';
// action types
const ADD_USER = "ADD_USER";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
    axios.post(`https://secure-refuge-14993.herokuapp.com/add_user?username=${values.username}&password=${values.password}&role=${values.role}`)
    .then((res)=>{
      //on success
      console.log('response',res);
      
  }).catch((error)=>{
      //on error
      console.log(error);
  });
    
      // return { ...state, fetching: true, error: null };

    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
export const rootReducer = combineReducers(reducer,reducers)