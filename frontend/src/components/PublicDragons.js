
// Dev-dependencie imports 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Component imports
import { fetchPublicDragons } from '../actions/publicDragons';
import { fetchAccountDragons } from '../actions/accountDragons';
import PublicDragonRow from './PublicDragonRow';

// style imports
import { FormWrapper, Nav } from './DragonsStyles';


class PublicDragons extends Component {
  componentDidMount() {
    this.props.fetchPublicDragons();
    this.props.fetchAccountDragons();
  }

  render() {
    return (
        <FormWrapper>
        <br />
        <Nav>
          <Link to='/'>HOME</Link>
          <Link to='/account-dragons'>LOUNGE</Link>
          <Link to='/public-dragons'>ECONOMY</Link>    
        </Nav>
        <br />
        <br />
        <h3>Dragon Vale City</h3>
        <h3>Economy</h3>
        <br />
        <br />
        <br />
          {
            this.props.publicDragons.dragons.map(dragon => {
              return (
                <div key={dragon.dragonId}>
                  <PublicDragonRow dragon={dragon} />
                  <hr />
                </div>
              )
            })
          }
        </FormWrapper>
    )
  }
}

export default connect(
  ({ publicDragons }) => ({ publicDragons }),
  { fetchPublicDragons, fetchAccountDragons }
)(PublicDragons);