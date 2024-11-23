import { connect } from 'react-redux';
import { FieldLayout } from './field-layout';
import { checkEmptyCell, checkWin } from '../../utils';
import { setCurrentPlayer, setField, setStatus } from '../../actions';
import { selectCurrentPlayer, selectField, selectStatus } from '../../selectors';
import { PLAYER, STATUS } from '../../constants';
import { Component } from 'react';

export class FieldContainer extends Component {
	handleCellClick = (cellIndex) => {
		const { status, field, currentPlayer, dispatch } = this.props;
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];
		newField[cellIndex] = currentPlayer;

		this.props.setField(newField);

		if (checkWin(newField, currentPlayer)) {
			this.props.setStatus(STATUS.WIN);
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			this.props.setCurrentPlayer(newCurrentPlayer);
		} else {
			this.props.setStatus(STATUS.DRAW);
		}
	};

	render() {
		const { field } = this.props;
		return <FieldLayout field={field} handleCellClick={this.handleCellClick} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
	field: selectField(state),
});

// Создаем mapDispatchToProps для подключения действий
const mapDispatchToProps = {
	setCurrentPlayer,
	setField,
	setStatus,
};

// Объединяем mapState и mapDispatch
export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
