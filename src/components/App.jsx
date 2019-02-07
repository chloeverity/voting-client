import React from 'react';
import {List} from 'immutable';
import {Voting} from './Voting.jsx';


const pair = List.of('Trainspotting','28 Days Later');

export default class App extends React.Component{
    render(){
      return React.cloneElement(this.props.children,{pair:pair});
    }
}
