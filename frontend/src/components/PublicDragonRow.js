// dev dependencies imports
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// component imports
import DragonAvatar from './DragonAvatar';
import MatingOptions from './MationgOptions'
import { BACKEND } from '../config';
import history from '../history';


class PublicDragonRow extends Component {
  state = { displayMatingOptions: false };

  toogleDisplayMatingOptions = () => {
    this.setState({
      displayMatingOptions: !this.state.displayMatingOptions
    });
  }

 buy = () => {
  const { dragonId, saleValue } = this.props.dragon;

  fetch(`${BACKEND.ADDRESS}/dragon/buy`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dragonId, saleValue })
  }).then(response => response.json())
    .then(json => {
     alert(json.message);

     if (json.type !== 'error') {
      history.push('/account-dragons');
     }
  })
    .catch(error => alert(error.message));
 }

 render() {
  return (
   <div>
    <div>{this.props.dragon.nickname}</div>
    <DragonAvatar dragon={this.props.dragon} />
    <div>
      <span>Sale Value: {this.props.dragon.saleValue}</span>{' | '}
      <span>Sire Value: {this.props.dragon.sireValue}</span>
    </div>
    <br />
    <Button onClick={this.buy}>Buy</Button>{' '}
    <Button onClick={this.toogleDisplayMatingOptions}>Sire</Button>
    <br />
    {
      this.state.displayMatingOptions ?
        <MatingOptions patronDragonId={this.props.dragon.dragonId} /> :
        <div></div>
    }
   </div>
  )
 }
};

export default PublicDragonRow;
