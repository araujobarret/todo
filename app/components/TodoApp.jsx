import React from 'react';
import * as Redux from 'react-redux';

let TodosList = require('TodosList');
import AddTodo from 'AddTodo';
let TodoSearch = require('TodoSearch');
import * as actions from 'actions';

let TodoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();
    let {dispatch} = this.props;

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>
            Logout
          </a>
        </div>

        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="small-2 large-4 columns small-centered">
            <div className="container">
              <TodoSearch />
              <TodosList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
