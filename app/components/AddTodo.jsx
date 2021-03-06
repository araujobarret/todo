const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export let AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    }
    else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
      return (
          <div className="container_footer">
            <form onSubmit={this.handleSubmit}>
              <input type="text" ref="todoText" placeholder="What do you need to do?" />
              <button className="button expanded">Add Todo</button>
            </form>
          </div>
      );
  }
});

export default connect()(AddTodo);
