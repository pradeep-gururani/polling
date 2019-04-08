import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
// import { Router, Route, browserHistory } from 'react-router';
import reducer from './reducers/index'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
                <Provider store={store}>
                    {/* <Router> */}
                        {/* <Route> */}
                            <App />
                        {/* </Route> */}
                    {/* </Router>                     */}
                </Provider>
                , document.getElementById('root'));

serviceWorker.unregister();
