import { connect } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { selectCurrentPlayer, selectStatus } from '../../selectors';
import { InformationLayout } from './information-layout';
import { Component } from 'react';

class InformationContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;

		const playerAction = PLAYER_ACTION[status];
		const playerName = PLAYER_NAME[currentPlayer];

		const information =
			status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

		return <InformationLayout information={information} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);
