import React from 'react';

var createReactClass = require('create-react-class')

const Winner = createReactClass({
  render: function() {
    return <div className="winner">
      Winner is {this.props.winner}!
      </div>
  }
})

export default Winner;
