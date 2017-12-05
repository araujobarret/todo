import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from 'app/firebase';

export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export let addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let todoRef = firebaseRef.child('todos')
      .push(todo);
    return todoRef.then(() => {
      dispatch(addTodo(Object.assign({}, todo, {id: todoRef.key})));
    });
  };
};

export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export let startAddTodos = () => {
  return (dispatch, getState) => {
    let todosRef = firebaseRef.child('todos');
    todosRef.once('value').then((snapshot) => {
      let todos = snapshot.val() || {};
      let parsedTodos = [];

      for(let id in todos){
        parsedTodos.push(Object.assign({}, {id}, todos[id]));
      }

      dispatch(addTodos(parsedTodos));
    });
  };
};

export let updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export let startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export let login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export let startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider)
      .then((result) => console.log(result.user))
      .catch((e) => console.log(e));
  };
};

export let logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export let startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut()
      .then(() => console.log('Logout!'));
  };
};
