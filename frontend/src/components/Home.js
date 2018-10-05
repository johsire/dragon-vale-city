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
import { Container, TextWrapper } from './styles/HomeStyles';
import '.././index.css';


class Home extends Component {
  render() {
    return (
      <div className="hero-wrapper">
      <Container>
         <Button onClick={this.props.logout} className='logout-button'>LOG OUT</Button>
          <Link to='/'>HOME</Link>
          <Link to='/account-dragons'>LOUNGE</Link>
          <Link to='/public-dragons'>ECONOMY</Link>
           <AccountInfo />
        <TextWrapper>
          <h3>City Population Tracker</h3>
          <br />
          <Generation />
          <Dragon />
        </TextWrapper>
      </Container> 
      </div>
    );
  }
};

export default connect(null, { logout })(Home);
