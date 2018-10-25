import React, {Component} from 'react';
import PageContainer from '../PageContainer'
import Menu from '../Menu'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <PageContainer>
          <h1>BlogName</h1>
          <Menu/>
        </PageContainer>
      </div>
    );
  }
}
