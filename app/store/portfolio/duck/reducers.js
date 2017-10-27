import types from './types';
import portfolio from '../portfolio';

const portfolioReducer = (state = {
	portfolio: portfolio,
	piece: null,
	nextPiece: null,
	prevPiece: null
}, action) => {
	switch(action.type) {
		case types.GET_PORTFOLIO_PIECE: {
			let piece;
			let index;
			let port = state.portfolio;

			for(let i = 0; i < port.length; i++) {
				if(port[i].url === action.payload) {
					piece = port[i];
					index = i;
					break;
				}
			}

			state = {
				...state,
				piece: piece,
				nextPiece: index + 1 >= port.length ? port[0] : port[index + 1],
				prevPiece: index === 0 ? port[port.length - 1] : port[index - 1]
			}
			break;
		}
	}

	return state;
}

export default portfolioReducer;