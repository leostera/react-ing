import EventEmitter from 'events';

import Dispatcher from '../dispatchers/Main';
import { ActionTypes } from '../actions/Users';

// Internal data structure for users
var _users = [{
  name: "ostera",
  email: "leandro@ostera.io"
}];

var UserStore = Object.assign( {}, EventEmitter.prottotype, {

  emitChange: function () {
    this.emit("change");
  },

  find: function (username) {
    return _users.filter(function (user) {
      return user.name === username;
    });
  }

});

UserStore.dispatchToken = Dispatcher.register(function (action) {
  switch(action.type) {

    case ActionTypes.USER_SEARCH:
      debugger;
      UserStore.emitChange();      
      break;

    default:
      // no-op
  };
});

export default UserStore;
