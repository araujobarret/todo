const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

let TodoSearch = React.createClass({
  render: function () {
    let {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container_header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              let searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      showCompleted:state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);