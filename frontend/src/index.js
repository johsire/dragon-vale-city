
import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';

render (
    <div>
      <h3>Dragons from React's Vale City</h3>
      <Generation />
      <Dragon />
    </div>
  ,document.getElementById('root')
);
