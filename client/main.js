import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {
          sort: {
            score: -1
          }
        }).fetch();
				let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    });
});
