
import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';

render (
    <div>
      <h1>Dragon Vale City</h1>
      <Generation />
      <Dragon />
    </div>
  ,document.getElementById('root')
);
