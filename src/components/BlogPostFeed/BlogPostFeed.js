import React, { Component } from "react";
import { css } from "glamor";

export default class BlogPostFeed extends Component {
  render() {
    return <div className={blogPostFeedStyle}>{this.props.children}</div>;
  }
}

const blogPostFeedStyle = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
});
