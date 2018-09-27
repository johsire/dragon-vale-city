import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';

class Dragon extends Component {
  get DragonView() {
    return <DragonAvatar dragon={this.props.dragon} />
  }

  render() {
    return (
      <div>
        <br />
        <Button onClick={ this.props.fetchDragon }>New Dragon</Button>
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
