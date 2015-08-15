import React from 'react';

import UserStore from '../stores/Users';
import Result from './Result';

export default React.createClass({

  getInitialState: function () {
    return { users: [] };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },

  render: function () {
    let results = this.state.users.map( (user) => {
      return (<li>
        <Result
          key={user.name}
          user={user}
        /></li>);
    });

    return (
        <ul>{results}</ul>
      );
  },

  _onChange: function () {
    this.setState({
      users: UserStore.all()
    });
  }

});
