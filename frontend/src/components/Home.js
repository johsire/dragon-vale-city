
import React, { Component } from 'react';
import Generation from './Generation';
import Dragon from './Dragon';

class Home extends Component {
  render() {
   return (
    <div>
      <h1>Dragon Vale City</h1>
      <Generation />
      <Dragon />
    </div>
   );
  }
}

export default Home;
