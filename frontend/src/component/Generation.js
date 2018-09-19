import React, { Component } from 'react';

class Generation extends Component {
 // we don't need to call constructor & super to initialize state:
    state = { generation: {generationId: 999, expiration: '2020-05-01'} }

    componentDidMount() {
      this.fetchGeneration();
    };
    
    fetchGeneration = () => {
      fetch('http://localhost:3000/generation')
        .then(response => response.json())
        .then(json => { 
          console.log('json <==xxx', json)

        this.setState();      
       })
        .catch(error => console.error('error <==xxx', error)) 
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
