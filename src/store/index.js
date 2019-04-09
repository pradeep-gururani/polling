import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import saga from '../sagas/index';

import rootReducer from '../reducers/index';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
