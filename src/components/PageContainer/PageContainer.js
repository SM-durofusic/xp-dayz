import React, { Component } from 'react';
import { css } from 'glamor';

export default class PageContainer extends Component {
  render() {
    return <div className={PageContainerStyle}>{this.props.children}</div>;
  }
}

const PageContainerStyle = css({
  maxWidth: '80%',
  margin: '0 auto',
});
