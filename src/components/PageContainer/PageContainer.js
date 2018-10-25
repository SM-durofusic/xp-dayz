import React, { Component } from "react";
import { css } from "glamor";

export default class PageContainer extends Component {
  render() {
    return <div className={PageContainerStyle}>{this.props.children}</div>;
  }
}

const PageContainerStyle = css({
  maxWidth: "50%",
  margin: "0 auto",
  "@media screen and (max-width: 768px)": {
    maxWidth: "100%"
  }
});
