import React, { Component } from "react";
import PageContainer from "../PageContainer";
import { MyContext } from "../../context";
import Menu from "../Menu";
import BlogPostFeed from "../BlogPostFeed";
import HomeBlogPost from "../HomeBlogPost";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <PageContainer>
          <BlogPostFeed>
            <MyContext.Consumer>
              {// get posts and map through them
              posts => {
                const postFeed = posts.state.posts.map(post => {
                  const regex = /(<([^>]+)>)/gi;
                  return (
                    <HomeBlogPost
                      title={post.node.title}
                      author={post.node.author.name}
                      excerpt={post.node.excerpt.replace(regex, "")}
                      key={post.node.id}
                      content={post.node.content.replace(regex, "")}
                    />
                  );
                });
                return postFeed;
              }}
            </MyContext.Consumer>
          </BlogPostFeed>
        </PageContainer>
      </div>
    );
  }
}
