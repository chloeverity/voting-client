import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var createReactClass = require('create-react-class');

const Results = createReactClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>Hello from results!</div>
  }
});

export default Results;
