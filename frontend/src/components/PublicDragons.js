
// Dev-dependencie imports 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Component imports
import { fetchPublicDragons } from '../actions/publicDragons';
import { fetchAccountDragons } from '../actions/accountDragons';
import PublicDragonRow from './PublicDragonRow';

// style imports
import { FormWrapper } from './DragonsStyles';


class PublicDragons extends Component {
  componentDidMount() {
    this.props.fetchPublicDragons();
    this.props.fetchAccountDragons();
  }

  render() {
    return (
        <FormWrapper>
          <h3>Public Dragons</h3>
          <br />
          <Link to='/'>Home</Link>
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