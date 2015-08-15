import React from 'react';

// Import components
import SearchBar from './SearchBar';
import Results from './Results';

export default class GitHubExplorerApp extends React.Component {

  render () {
    return (
        <div id="app">
          <SearchBar />
          <Results />
        </div>
      );
  }

}
