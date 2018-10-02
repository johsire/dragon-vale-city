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
            LOG OUT
          </Button>
        <Nav>
          <Link to='/'>HOME</Link>
          <Link to='/account-dragons'>LOUNGE</Link>
          <Link to='/public-dragons'>ECONOMY</Link>    
        </Nav>
        <br />
        <br />
          <h3>City Population Tracker</h3>
        <br />
        <br />
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

export default connect(null, { logout })(Home);
