import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';

export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;
		return (
			<div className="grid grid-cols-3 gap-1 w-72 mx-auto my-5 border border-black">
				{field.map((cellPlayer, index) => (
					<button
						key={index}
						className="flex items-center justify-center w-24 h-24 text-5xl border border-black transition duration-200 ease-in-out transform hover:bg-gray-100 focus:outline-none"
						onClick={() => handleCellClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func.isRequired,
};
