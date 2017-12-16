import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import Player from './Player';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render(){
    return (
      <div>
          <TitleBar title={this.props.title} subtitle="Made by Curtis Hammons" />
          <div className="wrapper">
            <PlayerList players={this.props.players}/>
            <AddPlayer/>
          </div>
      </div>
    );
  }
}

App.PropTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
