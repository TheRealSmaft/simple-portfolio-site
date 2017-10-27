import types from './types';
import portfolio from '../portfolio';

const portfolioReducer = (state = {
	portfolio: portfolio,
	piece: null
}, action) => {
	switch(action.type) {
		case types.GET_PORTFOLIO_PIECE: {
			let piece;

			for(let i = 0; i < state.portfolio.length; i++) {
				if(state.portfolio[i].url === action.payload) {
					piece = state.portfolio[i];
					break;
				}
			}

			console.log(piece)

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