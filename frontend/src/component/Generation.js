import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' }

const MINIMUM_DELAY = 3000;

class Generation extends Component {
 // we don't need to call constructor & super to initialize state:
    state = { generation: DEFAULT_GENERATION }

    // this ensures we kick off the loop by calling the next gen -
    //  which  in turn calls the 1st new gen then from there on its -
    // recarryingly calling itself everytime a new gen is created:
    componentDidMount() {
      this.fetchNextGeneration();
    };
    
    fetchGeneration = () => {
      fetch('http://localhost:3000/generation')
        .then(response => response.json())
        .then(json => { 
          console.log('json <==xxx', json)

        this.setState({ generation: json.generation });      
       })
        .catch(error => console.error('error <==xxx', error)) 
     };

     fetchNextGeneration = () => {
        this.fetchGeneration();

        let delay = new Date(this.state.generation.expiration).getTime() - new Date().getTime();

        if (delay < MINIMUM_DELAY) {
          delay = MINIMUM_DELAY;
        };

        setTimeout(() => this.fetchNextGeneration(), delay);
     };

  render() {
   const { generation } = this.state;
   // const generation = this.state.generation: this is the same as the line above ****<<<===| Clean code alert****

    return (
      <div>
       <h3>Generation { generation.generationId }. Expires on:</h3>
       <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
};

export default Generation;
