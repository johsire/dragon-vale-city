
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';


const DEFAULT_GENERATION = { generationId: '', expiration: '' }

const GENERATION_ACTION_TYPE = 'GENERATION_ACTION_TYPE';

const generationReducer = (state, action) => {
  // console.log('generationReducer state', state);
  // console.log('generationReducer action', action);

  if (action.type === GENERATION_ACTION_TYPE) {
    return { generation: action.generation }
  }
  
  return { generation: DEFAULT_GENERATION }
};

const store = createStore(generationReducer);

// subscribe to store takes a callback func - listener: 
// it listens for updates/ changes in the App State;
store.subscribe(() => console.log('store state update', store.getState()));

// console.log('store', store);
console.log('store.getState()', store.getState());

store.dispatch({ type: 'foo'});
store.dispatch({ 
  type: GENERATION_ACTION_TYPE,
  generation: { generationId: 'goo', expiration: 'bar'}
});

// Action Creator is wrapped around the ACTION - 
// its returning it in itself BUT its not the action creator itself.
const generationActionCreator = (payload) => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  }
};

const zooAction = generationActionCreator({
  generationId: 'zoo', expiration: 'bar'
});

store.dispatch(zooAction);


render (
    <div>
      <h1>Dragon Vale City</h1>
      <Generation />
      <Dragon />
    </div>
  ,document.getElementById('root')
);
