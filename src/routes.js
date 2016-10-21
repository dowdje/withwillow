import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App.js';
import Home from './components/home'
import Memorial from './components/memorial'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/memorial" component={Memorial} />
  </Route>
)
