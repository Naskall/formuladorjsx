import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';

//import store from './reducers';

//import VideoSelectScreen from './screens/VideoSelectScreen';
//import ConvertScreen from './screens/ConvertScreen';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
      <Header/>,
        <Switch>
          <Route path="/user" component={ConvertScreen} />
          <Route paath="/" component={VideoSelectScreen} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
  
);
