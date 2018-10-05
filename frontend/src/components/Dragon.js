import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';
import fetchStates from '../reducers/fetchStates';

class Dragon extends Component {
  get DragonView() {
    if (this.props.dragon.status === fetchStates.error) {
      return <span>{this.props.dragon.message}</span>
    }

    return <DragonAvatar dragon={this.props.dragon} />
  }

  render() {
    return (
      <div>
        <br />
        <Button onClick={ this.props.fetchDragon }>New Dragon</Button>
        <br />
        { this.DragonView }
        <br />
        <br />
      </div>
    );
  }
};

export default connect(
  ({ dragon }) => ({ dragon }),
  { fetchDragon }
)(Dragon);
