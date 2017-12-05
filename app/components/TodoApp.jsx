const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

let TodosList = require('TodosList');
import AddTodo from 'AddTodo';
let TodoSearch = require('TodoSearch');

let TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <div className="page-actions">
          <a href="#">
            Logout
          </a>
        </div>

        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="small-2 large-4 columns small-centered">
            <div className="container">
              <TodoSearch  />
              <TodosList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
