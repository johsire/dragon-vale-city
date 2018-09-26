import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Dragon from './Dragon';
import Generation from './Generation';
import AccountInfo from './AccountInfo';
import { logout } from '../actions/account';

class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.logout} className='logout-button'>
          Log Out
        </Button>
        <Link to='/account-dragons'>Account Dragons</Link>
        <br />
        <Link to='/public-dragons'>Public Dragons</Link>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
        <hr />
        <AccountInfo />
        <hr />
      </div>
    );
  }
};

// // Debugin/ Testing Code:
// fetch('http://localhost:3000/account/dragons', {
//   credentials: 'include'
// }).then(response => response.json())
//   .then(json => console.log('account dragons', json))

export default connect(null, { logout })(Home);
  