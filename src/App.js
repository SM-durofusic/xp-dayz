import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Route } from 'react-router-dom';

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
        <p>lorem ipsum</p>
      </div>
    );
  }
}

export default App;
