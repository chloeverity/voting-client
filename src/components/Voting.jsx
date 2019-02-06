import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

var createReactClass = require('create-react-class');

const Voting = createReactClass({
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

export default Voting;
