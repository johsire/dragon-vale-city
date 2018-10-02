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
import { Container, Nav } from './styles/HomeStyles';


class Home extends Component {
  render() {
    return (
      <Container>
          <Button onClick={this.props.logout} className='logout-button'>
            LOG OUT
          </Button>
        {/* <Nav> */}
          <Link to='/'>HOME</Link>
          <Link to='/account-dragons'>LOUNGE</Link>
          <Link to='/public-dragons'>ECONOMY</Link>    
        {/* </Nav> */}
          <AccountInfo />
          <h3>City Population Tracker</h3>
          <Generation />
          <Dragon />
      </Container>  
    );
  }
};

export default connect(null, { logout })(Home);
