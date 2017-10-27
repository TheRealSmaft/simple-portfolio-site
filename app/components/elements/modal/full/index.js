import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { portfolioActions } from '../../../../store/portfolio';

import Piece from '../piece';

import styles from '../../../../styles/modal.css';

class FullModal extends React.Component {
	componentWillMount() {
		this.props.getPortfolioPiece(this.props.match.params.piece);

		document.body.style.overflow = 'hidden';
	}

	componentWillUpdate(nextProps) {
		if(this.props.match.params.piece != nextProps.match.params.piece) {
			this.props.getPortfolioPiece(nextProps.match.params.piece);
		}
	}

	componentWillUnmount() {
		document.body.style.overflow = 'auto';
	}

	generatePieceModal() {
		return (
			<Piece
				className = {styles.portfolioPiece}
				piece = {this.props.piece}
			/>
		)
	}

	render() {
		return (
			<div
				className = {styles.modal}
			>
				<Link
					to = "/"
				>
					X
				</Link>
				<Link
					to = {this.props.prevPiece ? this.props.prevPiece.url : ''}
				>
					Prev
				</Link>
				<Link
					to = {this.props.nextPiece ? this.props.nextPiece.url : ''}
				>
					Next
				</Link>
				{this.props.piece ? this.generatePieceModal() : ''}
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		portfolio: store.portfolio.portfolio,
		piece: store.portfolio.piece,
		nextPiece: store.portfolio.nextPiece,
		prevPiece: store.portfolio.prevPiece
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getPortfolioPiece: portfolioActions.getPortfolioPiece
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FullModal);