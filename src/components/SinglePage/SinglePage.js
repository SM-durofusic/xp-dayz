import React, { Component } from "react";
import PageContainer from "../PageContainer";

export default class SinglePage extends Component {
  render() {
    return (
      <PageContainer>
        <h1>{this.props.title}</h1>
      </PageContainer>
    );
  }
}
