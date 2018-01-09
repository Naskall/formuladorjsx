import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import Header from './components/Header/Header';

//Redux
import { Provider } from 'react-redux';
import configureStore from './store/storeConfig';

const store = configureStore();


const app = (
<Provider store={store}>
  <Main/>
</Provider>

);