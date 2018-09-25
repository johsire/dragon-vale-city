
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';

class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    edit: false
    // delete: false
  };

  get SaveButton() {
    return <Button>Save</Button>;
  };

  get EditButton() {
    return <Button onClick={this.toogleEdit}>Edit</Button>;
  };

  // get DeleteButton() {
  //   return <Button onClick={this.toogleDelete}>Delete</Button>
  // };

  updateNickname = event => {
    this.setState({ nickname: event.target.value });
  };
  
  toogleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };
  
  // deleteNickname = event => {
  //   this.setState({ nickname: event.target.value })
  // };

  // toogleDelete = () => {
  //   this.setState({ delete: !this.state.delete });
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
