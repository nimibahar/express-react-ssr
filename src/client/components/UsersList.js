import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    //console.log('hello');
  }

  renderUsers() {
    //return this.props.users.map(user => {
    //return <li key={user.id}>{user.name}</li>;
    //});
    console.log(this.props.users);
    debugger;
  }

  render() {
    return (
      <div>
        Here's the list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);
