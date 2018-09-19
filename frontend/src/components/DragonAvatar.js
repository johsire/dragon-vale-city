import React, { Component } from 'react';
import { skinny, slender, sporty, stocky, patchy, plain, spotted, srtiped } from '../assets';

const propertyMap = {
  backgroundColor: { 
    black: '#263238', 
    white: '#CFD8DC', 
    green: '#A5D6A7', 
    blue: '#0277DB'
   },
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { 
    small: 100, 
    medium: 140, 
    large: 180, 
    enormous: 220
   }
};

class DragonAvatar extends Component {
 render() {
  const { generationId, dragonId, traits } = this.props.dragon;

  return (
    <div>
      <span> GEN: { generationId }. </span>
      <span> ID:  { dragonId     }. </span>
      { traits.map(trait => trait.traitValue).join(', ') }
    </div>
   )
  }
};

export default DragonAvatar;
