import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const MyContext = React.createContext();

const GRAPHQL_END_POINT = "http://www.develop.durofusic.biz.hr/xpdayz/graphql";
const client = new ApolloClient({
  uri: GRAPHQL_END_POINT
});

class MyProvider extends React.Component {
  state = {
    menuItems: {},
    posts: []
  };

  componentDidMount() {
    const MAIN_QUERY = {
      query: gql`
        {
          menus {
            edges {
              node {
                id
                menuItems {
                  edges {
                    node {
                      label
                      id
                    }
                  }
                }
              }
            }
          }
          posts {
            edges {
              node {
                id
                author {
                  id
                  name
                }
                excerpt
                content
                title
              }
            }
          }
        }
      `
    };

    client
      .query(MAIN_QUERY)
      .then(data => {
        this.setState({
          menuItems: data.data.menus.edges[0].node.menuItems.edges,
          posts: data.data.posts.edges
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
