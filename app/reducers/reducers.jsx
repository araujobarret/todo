let uuid = require('node-uuid');
let moment = require('moment');

export let searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export let showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export let todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          return Object.assign({}, todo, action.updates);
        }
        else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export let authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      console.log(state);
      return {
        uid: state.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}
