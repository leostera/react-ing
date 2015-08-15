import Dispatcher from '../dispatchers/Main';

export const ActionTypes = {
  USER_SEARCH: Symbol("USER_SEARCH")  
};

export const UserActionCreator = {

  search: function (username) {
    debugger;
    Dispatcher.dispatch({
      type: ActionTypes.USER_SEARCH,
      username: username
    });
    console.log(ActionTypes.USER_SEARCH, username);
  }

};

