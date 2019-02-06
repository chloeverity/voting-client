import React from 'react';
import {List} from 'immutable';

const pair = List.of("Trainspotting", "28 Days Later");

var createReactClass = require('create-react-class');

const App = createReactClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});

export default App;
