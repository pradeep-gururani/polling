import { createStore} from 'redux';
import {rootReducer} from '../reducers/index';

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(rootReducer);

export default store;
