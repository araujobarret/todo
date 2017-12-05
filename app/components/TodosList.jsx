const React = require('react');
const {connect} = require('react-redux');
let Todo = require('Todo');
let TodoAPI = require('TodoAPI');

let TodosList = React.createClass({
  render: function() {
    let {todos, showCompleted, searchText} = this.props;

    let renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container_message">Nothing to do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return state;
  }
)(TodosList);
