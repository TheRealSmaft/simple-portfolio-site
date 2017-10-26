import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { portfolioActions } from '../../../../store/portfolio';

class FullModal extends React.Component {
	componentWillMount() {
		this.props.getPortfolioPiece(this.props.match.params.piece)
	}

	generatePieceModal() {
		let p = this.props.portfolio.piece;

		return (
			<div>
				<h1>
					{p.name}
				</h1>
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.props.portfolio.piece ? this.generatePieceModal() : ''}
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		portfolio: store.portfolio
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getPortfolioPiece: portfolioActions.getPortfolioPiece
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FullModal);