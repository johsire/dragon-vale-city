
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import './index.css';
// import { generationActionCreator } from './actions/generation';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// subscribe to store takes a callback func - listener:
// it listens for updates/ changes in the App State;
// store.subscribe(() => console.log('store-state-update', store.getState()));

// fetch('http://localhost:3000/generation')
//   .then(response => response.json())
//   .then(json => {
//     store.dispatch(generationActionCreator(json.generation))
//   });

render (
  <Provider store={store}>
    <Root />
  </Provider>
,document.getElementById('root')
);
