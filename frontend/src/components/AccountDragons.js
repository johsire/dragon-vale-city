
// Dev-dependencies imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components imports
import { fetchAccountDragons } from '../actions/accountDragons';
import AccountDragonRow from './AccountDragonRow';

// style imports
import { FormWrapper } from './DragonsStyles';


class AccountDragons extends Component {
 componentDidMount() {
  this.props.fetchAccountDragons();
 };

 render() {
  return (
      <FormWrapper>
       <br />
        <Link to='/'>Home</Link>
        <br />
        <br />
        <h3>My Dragons Lounge</h3>
        <br />
        <br />
        <br />
        {
          this.props.accountDragons.dragons.map(dragon => {
            return (
              <div key={dragon.dragonId}>
                <AccountDragonRow dragon={dragon} />
                <br />
                <hr />
              </div>
            )
          })
        }
      </FormWrapper>
  )
 }
};

export default connect(
  ({ accountDragons }) => ({ accountDragons }),
  { fetchAccountDragons }
)(AccountDragons);
