let $ = require('jquery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.sort((t1, t2) => {
      if(!t1.completed && t2.completed){
        return -1;
      }
      else {
        if(t1.completed && !t2.completed){
          return 1
        }
      }
      return 0;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      if(searchText === ''){
        return true;
      }
      else {
        if(todo.text.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
          return true;
        }
        else {
          return false;
        }
      }
    });

    return filteredTodos;
  }
}
