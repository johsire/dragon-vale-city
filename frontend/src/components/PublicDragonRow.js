// dev dependencies imports
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// component imports
import DragonAvatar from './DragonAvatar';
import { BACKEND } from '../config';
import history from '../history';


class PublicDragonRow extends Component {
 buy = () => {
  const { dragonId, saleValue } = this.props.dragon;

  fetch(`${BACKEND.ADDRESS}/dragon/buy`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'CONTENT_TYPE': 'application/json' },
    body: JSON.stringify({ dragonId, saleValue })
  }).then(response => response.json())
    .then(json => {
     alert(json.message);
    })
    .catch(error => alert(error.message));
 }

 render() {
  return (
   <div>
    <div>{this.props.dragon.nickname}</div>
    <DragonAvatar dragon={this.props.dragon} />
    <div>Sale Value: {this.props.dragon.saleValue}</div>
    <br />
    <Button onClick={this.buy}>Buy</Button>
   </div>
  )
 }
};

export default PublicDragonRow;
