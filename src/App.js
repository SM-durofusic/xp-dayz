import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { css } from "glamor";

import { MyProvider } from "./context/";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import PageContainer from "./components/PageContainer";
import SinglePage from "./components/SinglePage";
import { MyContext } from "./context";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div
          className={css({
            "& a": {
              textDecoration: "none"
            }
          })}
        >
          <PageContainer>
            <Link to="/">
              <h1
                className={css({
                  color: "#333333",
                  textDecoration: "none!important",
                  textAlign: "center"
                })}
              >
                Searchmetrics XP Day
              </h1>
            </Link>
            <Menu />
          </PageContainer>
          <Route path="/" exact component={HomePage} />
          <MyContext.Consumer>
            {state => {
              let convertedArr = Object.keys(state.state.menuItems || {}).map(
                function(key) {
                  return state.state.menuItems[key];
                }
              );
              const routes = convertedArr.map(menu => {
                return (
                  <Route
                    path={`/${menu.node.label}`}
                    render={() => <SinglePage title={menu.node.label} />}
                    key={menu.node.id}
                  />
                );
              });
              return routes;
            }}
          </MyContext.Consumer>
        </div>
      </MyProvider>
    );
  }
}

export default App;
