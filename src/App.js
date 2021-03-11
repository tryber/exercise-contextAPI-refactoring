// src/App.js

import React, { Component } from 'react';
import Posts from './components/Posts';
import Selector from './components/Selector';
import RedditContext from './context/RedditContext';

class App extends Component {
  componentDidMount() {
    const { fetchPosts } = this.context;
    fetchPosts();
  }

  renderLastUpdatedAt() {
    const { selectedSubreddit, postsBySubreddit } = this.context;
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    if (!lastUpdated) return null;

    return (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    );
  }

  renderRefreshButton() {
    const { isFetching, refreshSubreddit } = this.context;

    if (isFetching) return null;

    return (
      <button
        type="button"
        onClick={(event) => refreshSubreddit(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const { selectedSubreddit, postsBySubreddit, isFetching } = this.context;
    const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector />
        <div>
          {this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts />}
      </div>
    );
  }
}

App.contextType = RedditContext;

export default App;
