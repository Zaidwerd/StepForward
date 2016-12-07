import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App/App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
  ),  document.querySelector('#container'))
