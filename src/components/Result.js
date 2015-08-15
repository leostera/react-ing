import React from 'react';

export default React.createClass({

  render: function () {
    let user = this.props.user;

    return (
        <pre key={user.name}>
          { user.name } - { user.email }
        </pre>
      );
  },

});
