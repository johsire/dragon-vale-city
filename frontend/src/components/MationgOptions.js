
// Dev-dependencies imports
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'

class MatingOptions extends Component {
 render() {
  return (
   <div>
    <h4>Pick one of your dragons to make a dragon baby</h4>
    {
     this.props.accountDragons.dragons.map(dragon => {
      const { dragonId, generationId, nickname } = dragon;

      return (
       <span key={dragonId}>
        <Button>
         Gen{generationId}.Id{dragonId}. {nickname}
        </Button>
        {' '}
       </span>
      )
     })
    }
   </div>
  )
 }
}

export default connect(
  ({ accountDragons }) => ({ accountDragons }),
  null
)(MatingOptions);