import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';

class Game extends Component {
	handleRestart = () => {
		this.props.dispatch(RESTART_GAME);
	};

	render() {
		return <GameLayout handleRestart={this.handleRestart} />;
	}
}

export const GameConnected = connect()(Game);
