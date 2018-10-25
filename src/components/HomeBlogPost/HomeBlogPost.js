import React, { Component } from "react";
import css from "./styles";

export default class HomeBlogPost extends React.PureComponent {
  state = {
    isExpanded: false
  };

  toggleExpanded(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className={css.homeBlogPostStyle}>
        <h1 className={css.homeBlogPostTitle}>{this.props.title}</h1>
        <h2 className={css.homeBlogPostAuthor}>{this.props.author}</h2>
        {this.state.isExpanded ? (
          <p className={css.homeBlogPostText}>{this.props.content}</p>
        ) : (
          <p className={css.homeBlogPostText}>{this.props.excerpt}</p>
        )}
        <button
          onClick={e => this.toggleExpanded(e)}
          className={css.homeBlogPostExpandButton}
        >
          {this.state.isExpanded ? "Shrink" : "Expand"}
        </button>
      </div>
    );
  }
}
