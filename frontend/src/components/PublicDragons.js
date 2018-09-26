
// dev-dependencies imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// component imports
import PublicDragonRow from './PublicDragonRow';
import { fetchPublicDragons } from '../actions/publicDragons'

class PublicDragons extends Component {
 componentDidMount() {
   this.props.fetchPublicDragons();
 }

 render() {
  return (
   <div>
    <h3>Public Dragons</h3>
    <Link to='/'>Home</Link>
    {
      this.props.publicDragons.dragons.map(dragon => {
        return (
          <div key={dragon.dragonId}>
            <PublicDragonRow dragon={dragon} />
            <hr />
          </div>
        )
      })
    }
   </div>
  )
 }
}

export default connect(
 ({publicDragons}) => ({ publicDragons }),
 { fetchPublicDragons }
)(PublicDragons)
