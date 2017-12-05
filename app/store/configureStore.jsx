const redux = require('redux');
import thunk from 'redux-thunk';

let { searchTextReducer, showCompletedReducer, todosReducer, authReducer } = require('reducers');

export let configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
