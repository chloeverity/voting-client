import React from 'react';

export default class Winner extends React.PureComponent{
    render(){
        return  <div ref="winner"> Winner is {this.props.winner}!</div>;
    }
}
