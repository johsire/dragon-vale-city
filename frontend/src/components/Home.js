// dev-dependencies imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components imports
import Dragon from './Dragon';
import Generation from './Generation';
import AccountInfo from './AccountInfo';
import { logout } from '../actions/account';

// styles imports
import { FormWrapper, Nav } from './HomeStyles';

class Home extends Component {
  render() {
    return (
        <FormWrapper>
          <Button onClick={this.props.logout} className='logout-button'>
            Log Out
          </Button>
        <br />
        <Nav>
          <Link to='/account-dragons'>Account Dragons</Link>
          <Link to='/public-dragons'>Public Dragons</Link>    
        </Nav>
        <br />
          <h2>Dragon Vale City</h2>
        <br />
          <Generation />
          <Dragon />
          <hr />
          <AccountInfo />
          <hr />
        </FormWrapper>
    );
  }
};

// // Debugin/ Testing Code:
// fetch('http://localhost:3000/account/dragons', {
//   credentials: 'include'
// }).then(response => response.json())
//   .then(json => console.log('account dragons', json))

export default connect(null, { logout })(Home);
