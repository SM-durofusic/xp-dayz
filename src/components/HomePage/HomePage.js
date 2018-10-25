import React, {Component} from 'react';
import PageContainer from '../PageContainer'
import Menu from '../Menu'
import BlogPostFeed from '../BlogPostFeed'
import HomeBlogPost from '../HomeBlogPost'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <PageContainer>
          <h1>BlogName</h1>
          <Menu/>
          <BlogPostFeed>
            <HomeBlogPost/>
            <HomeBlogPost/>
            <HomeBlogPost/>
            <HomeBlogPost/>
          </BlogPostFeed>
        </PageContainer>
      </div>
    );
  }
}
