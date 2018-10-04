
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

// Component Imports:
import { signup, login } from '../actions/account';
import fetchStates from '../reducers/fetchStates';

// Style Imports
import { Container, FormWrapper } from './styles/AuthFormStyles';
// import './styles/responsive.css';
// import '.././index.css';


class AuthForm extends Component {
 state = { username: '', password: '', buttonClicked: false };

 updateUsername = event => {
   this.setState({ username: event.target.value })
 };

 updatePassword = event => {
   this.setState({ password: event.target.value })
 };

 signup = () => {
   this.setState({ buttonClicked: true });

   const { username, password } = this.state;

   this.props.signup({ username, password });
 };

 login = () => {
  this.setState({ buttonClicked: true });

   const { username, password } = this.state;

   this.props.login({ username, password });
};

get Error() {
  if (
      this.state.buttonClicked &&
      this.props.account.status === fetchStates.error
    ) {
     return <div>{ this.props.account.message }</div>
  };
};

  render() {
    return (
    <Container className="container">
      <FormWrapper>
       <h2>Dragon Vale City</h2>
       <br />
        <FormGroup>
          <FormControl 
            type='text' 
            value={ this.state.username }
            placeholder='Username'
            onChange={ this.updateUsername }
          />
        </FormGroup>
        <FormGroup>
          <FormControl 
            type='password'
            value={ this.state.password }
            placeholder='Password'
            onChange={ this.updatePassword }
          />
        </FormGroup>
        <br />
        <div>
          <Button onClick={ this.login }>Log In</Button>
          <span>   or   </span>
          <Button onClick={ this.signup }>Sign Up</Button>
          <br />
          <br />
        </div>
        { this.Error }
        </FormWrapper>
     </Container>
    );
  };
};

export default connect(
  ({ account }) => ({ account }), 
  { signup, login })(AuthForm);
