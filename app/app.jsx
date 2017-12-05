let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {hashHistory} = require('react-router');

let actions = require('actions');
let store = require('configureStore').configure();
import firebase from 'app/firebase';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  }
  else {
    store.dispatch(actions.logout());
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


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
