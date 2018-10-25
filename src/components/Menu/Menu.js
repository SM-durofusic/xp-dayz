import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

import css from "./styles";

export default class Menu extends Component {
  render() {
    return (
      <nav>
        <ul className={css.navBarStyle} />
        <MyContext.Consumer>
          {state => {
            Object.keys(state.state.menuItems).map((key, index) => {
              console.log(state.state.menuItems[key]);
            });
          }}
        </MyContext.Consumer>
      </nav>
    );
  }
}
