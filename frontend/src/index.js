
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';

const DEFAULT_GENERATION = { generationId: '', expiration: '' }

const generationReducer = () => {
  return { generation: DEFAULT_GENERATION }
};

const store = createStore(generationReducer);
console.log('store', store);
console.log('store.getState()', store.getState());

render (
    <div>
      <h1>Dragon Vale City</h1>
      <Generation />
      <Dragon />
    </div>
  ,document.getElementById('root')
);
