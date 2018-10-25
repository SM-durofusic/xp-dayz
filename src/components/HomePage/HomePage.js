import React, { Component } from 'react';
import { MyContext } from '../../context';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => {
            console.log(context);
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}
