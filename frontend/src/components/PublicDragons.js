
// Dev-dependencie imports 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Component imports
import { fetchPublicDragons } from '../actions/publicDragons';
import { fetchAccountDragons } from '../actions/accountDragons';
import { logout } from '../actions/account';
import PublicDragonRow from './PublicDragonRow';
import AccountInfo from './AccountInfo';

// style imports
import { Container, TextWrapper } from './styles/PubDragonStyles';


class PublicDragons extends Component {
  componentDidMount() {
    this.props.fetchPublicDragons();
    this.props.fetchAccountDragons();
  }

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
        <h3>City Economy</h3>
        <br />
        <br />
        <br />
          {
            this.props.publicDragons.dragons.map(dragon => {
              return (
                <div key={dragon.dragonId}>
                  <PublicDragonRow dragon={dragon} />
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
}

export default connect(
  ({ publicDragons }) => ({ publicDragons }),
  { fetchPublicDragons, fetchAccountDragons, logout }
)(PublicDragons);