import React, { Component } from "react";
import { Route } from "react-router-dom";

import { MyProvider } from "./context/";
import HomePage from "./components/HomePage";
import SinglePage from "./components/SinglePage";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/:id" exact component={SinglePage} />
        </div>
      </MyProvider>
    );
  }
}

export default App;
