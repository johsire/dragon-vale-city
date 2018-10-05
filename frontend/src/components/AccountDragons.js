
// Dev-dependencies imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Components imports
import { logout } from '../actions/account';
import { fetchAccountDragons } from '../actions/accountDragons';
import AccountDragonRow from './AccountDragonRow';
import AccountInfo from './AccountInfo';

// style imports
import { Container, TextWrapper } from './styles/AcctDragonStyles';


class AccountDragons extends Component {
 componentDidMount() {
  this.props.fetchAccountDragons();
 };

 render() {
  return (
      <Container>
        <Button onClick={this.props.logout} className='logout-button'>
            LOG OUT
          </Button>
          <Link to='/'>HOME</Link>
          <Link to='/account-dragons'>LOUNGE</Link>
          <Link to='/public-dragons'>ECONOMY</Link>
      <AccountInfo />
      <TextWrapper>
        <h3>My Dragons Lounge</h3>
        <br />
        <br />
        <br />
        {
          this.props.accountDragons.dragons.map(dragon => {
            return (
              <div key={dragon.dragonId}>
                <AccountDragonRow dragon={dragon} />
                <br />
                <br />
                <br />
              </div>
            )
          })
        }
      </TextWrapper>
      </Container>
  )
 }
};

export default connect(
  ({ accountDragons }) => ({ accountDragons }),
  { fetchAccountDragons, logout }
)(AccountDragons);
