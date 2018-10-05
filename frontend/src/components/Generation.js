import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeneration } from '../actions/generation';
import fetchStates from '../reducers/fetchStates';

const MINIMUM_DELAY = 3000;

class Generation extends Component {
 // we don't need to call constructor & super to initialize state:
    timer = null;

    // this ensures we kick off the loop by calling the next gen -
    //  which  in turn calls the 1st new gen then from there on its -
    // recarryingly calling itself everytime a new gen is created:
    componentDidMount() {
      this.fetchNextGeneration();
    };

    // the opposite of compDidMount (unmounts n comp n clears it) so when the-
    // user leaves this page the dragons gen creation loop engine stops as well:
    componentWillUnmount() {
      clearTimeout(this.timer);
    };

     fetchNextGeneration = () => {
        this.props.fetchGeneration();

        let delay = new Date(this.props.generation.expiration).getTime() - new Date().getTime();

        if (delay < MINIMUM_DELAY) {
          delay = MINIMUM_DELAY;
        };

        this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
     };

  render() {
   console.log('this.props', this.props)

   const { generation } = this.props;
   // const generation = this.state.generation: this is the same as the line above ****<<<===| Clean code alert****

  //  if (generation.status === fetchStates.fetching) {
  //    return <div>...</div>
  //  }

   if (generation.status === fetchStates.error) {
     return <div>{ generation.message} </div>
   }

    return (
      <div>
       <h3>Generation { generation.generationId }. Expires on:</h3>
       <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
};

const mapStateToProps = state => {
  const generation = state.generation

  return { generation };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchGeneration: () => fetchGeneration(dispatch)
//   }
// };

const componentConnector = connect(
  mapStateToProps, 
  { fetchGeneration }
);

// the connect fn takes in the class comp as a parameter;
// we connect the component w/ the connect fn &
//  return a component mixed with redux store state:
export default componentConnector(Generation);
