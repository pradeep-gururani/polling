import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import AddUser from './components/AddUser';

import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {/* <Route path="/addUser" component={addUser} /> */}
        <AddUser/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);