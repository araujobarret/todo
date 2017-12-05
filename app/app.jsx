let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');
import Login from 'Login';
import firebase from 'app/firebase';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  }
  else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

let requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

let redirectIfLogin = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" onEnter={redirectIfLogin}>
        <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
