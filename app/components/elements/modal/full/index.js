import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { portfolioActions } from '../../../../store/portfolio';

import styles from '../../../../styles/modal.css';

class FullModal extends React.Component {
	componentWillMount() {
		this.props.getPortfolioPiece(this.props.match.params.piece);
	}

	componentWillUpdate(nextProps) {
		if(this.props.match.params.piece != nextProps.match.params.piece) {
			this.props.getPortfolioPiece(nextProps.match.params.piece);
		}
	}

	generatePieceModal() {
		let p = this.props.piece;

		return (
			<div>
				<h1>
					{p.description}
				</h1>
			</div>
		)
	}

	render() {
		return (
			<div
				className = {styles.modal}
			>
				{this.props.piece ? this.generatePieceModal() : ''}
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		portfolio: store.portfolio.portfolio,
		piece: store.portfolio.piece
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getPortfolioPiece: portfolioActions.getPortfolioPiece
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FullModal);