import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting.jsx';
import App from './components/App.jsx';
import Results from './components/Results.jsx';
import { Route, HashRouter, Switch } from 'react-router-dom';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <App>
                  <Route path="/" render={({pair}) => <Voting pair={pair} />} />
                  // <Route path="/results" component={Results} />
                </App>;

ReactDOM.render(
    <HashRouter>{routes}</HashRouter>,
    document.getElementById('app')
);
