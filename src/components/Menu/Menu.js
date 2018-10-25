import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

import css from "./styles";

export default class Menu extends Component {
  render() {
    return (
      <nav>
        <ul className={css.navBarStyle}>
          <MyContext.Consumer>
            {state => {
              let convertedArr = Object.keys(state.state.menuItems || {}).map(
                function(key) {
                  return state.state.menuItems[key];
                }
              );
              const menuItems = convertedArr.map(item => {
                return (
                  <li key={item.node.id} className={css.listStyle}>
                    <Link to={item.node.label}>{item.node.label}</Link>
                  </li>
                );
              });
              return menuItems;
            }}
          </MyContext.Consumer>
        </ul>
      </nav>
    );
  }
}

export default Menu;
