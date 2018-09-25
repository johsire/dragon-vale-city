
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './actions/account';
import './index.css';


const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const RedirectToAccountDragons = () => {
    return (
      <Redirect to={{ pathname: '/account-dragons' }} />
    )
  };

store.dispatch(fetchAuthenticated())
  .then(() => {
    render (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Root} />
            <Route path='/account-dragons' component={AccountDragons}/>
            <Route path='/redirect-to-account-dragons' component={RedirectToAccountDragons} />
          </Switch>
        </Router>
      </Provider>
    ,document.getElementById('root')
    );
  });
