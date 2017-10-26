import types from './types';
import portfolio from '../portfolio';

const portfolioReducer = (state = {
	piece: null
}, action) => {
	switch(action.type) {
		case types.GET_PORTFOLIO_PIECE: {
			let piece;

			for(let i = 0; i < portfolio.length; i++) {
				if(portfolio[i].url === action.payload) {
					piece = portfolio[i];
					break;
				}
			}

			state = {
				...state,
				piece: piece
			}
			break;
		}
	}

	return state;
}

export default portfolioReducer;