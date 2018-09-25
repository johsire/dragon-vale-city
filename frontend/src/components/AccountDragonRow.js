
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { BACKEND } from '../config';

class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    edit: false
    // delete: false
  };

  updateNickname = event => {
    this.setState({ nickname: event.target.value });
  };
    
  // deleteNickname = event => {
  //   this.setState({ nickname: event.target.value })
  // };

  toogleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  // toogleDelete = () => {
  //   this.setState({ delete: !this.state.delete });
  // };

  save = () => {
    fetch(`${BACKEND.ADDRESS}/dragon/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dragonId: this.props.dragon.dragonId, nickname: this.state.nickname
      })
    }).then(response => response.json())
      .then(json => {
        if (json.type === 'error') {
          alert(json.message);
        } else {
          this.toogleEdit();
        }
     })
     .catch(error => alert(error.message));
  };

  get SaveButton() {
    return <Button onClick={this.save}>Save</Button>;
  };

  get EditButton() {
    return <Button onClick={this.toogleEdit}>Edit</Button>;
  };

  // get DeleteButton() {
  //   return <Button onClick={this.toogleDelete}>Delete</Button>
  // };


 render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.nickname}
          onChange={this.updateNickname}
          disabled={!this.state.edit}
        />
        <br />
        <DragonAvatar dragon={this.props.dragon} /> 
        {
          this.state.edit ? this.SaveButton : this.EditButton
        }
      </div>
    )
  }
};

 // {
        //   this.state.delete ? this.SaveButton : this.DeleteButton
        // } 

          // onChange={this.deleteNickname}

export default AccountDragonRow;
