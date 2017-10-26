import types from './types';

function getPortfolioPiece(url) {
	return {
		type: types.GET_PORTFOLIO_PIECE,
		payload: url
	}
};

export default {
	getPortfolioPiece
};