
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo } from  '../actions/accountInfo';

class AccountInfo extends Component {
 componentDidMount(){
  this.props.fetchAccountInfo();
 }

 render() {
  return (
   <div className="acct-info">
     <h4>Account Info</h4>
     Username: {this.props.accountInfo.username}
     <br />
     Balance: {this.props.accountInfo.balance}
   </div>
  )
 }
};

export default connect(
 ({ accountInfo }) => ({ accountInfo }),
 { fetchAccountInfo }
)(AccountInfo);
