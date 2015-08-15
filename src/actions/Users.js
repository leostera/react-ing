import Dispatcher from '../dispatchers/Main';

const ActionTypes = {
  USER_SEARCH: Symbol("USER_SEARCH"),
};

let UserActionCreator = {

  search: (username) => {
    Dispatcher.dispatch({
      type: ActionTypes.USER_SEARCH,
      username: username
    });
  }

};

export { ActionTypes, UserActionCreator };
