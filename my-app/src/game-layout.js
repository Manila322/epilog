import PropTypes from 'prop-types';
import { Field, Information } from './components';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		const { handleRestart } = this.props;
		return (
			<div className="flex flex-col items-center">
				<Information />
				<Field />
				<button
					className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
					onClick={handleRestart}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};
