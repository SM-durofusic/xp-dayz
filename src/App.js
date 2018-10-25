import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import SinglePage from './components/SinglePage';

const WP_GRAPHQL_ENDPOINT = 'www.develop.durofusic.biz.hr/xp-dayz/graphql';

const client = new ApolloClient({
  uri: WP_GRAPHQL_ENDPOINT,
});

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" exact component={SinglePage} />
      </div>
    );
  }
}

export default App;
