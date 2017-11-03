import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { portfolioActions } from '../../../../store/portfolio';

import Piece from '../piece';
import ModalControls from '../controls';

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
				piece = {this.props.piece}
			/>
		)
	}

	render() {
		return (
			<div
				className = {styles.modalContainer}
				id = "portfolioModal"
			>
				<ModalControls 
					prev = {this.props.prevPiece ? this.props.prevPiece.url : ''}
					next = {this.props.nextPiece ? this.props.nextPiece.url : ''}
				/>
				<div
					className = {styles.modal}
				>
					{this.props.piece ? this.generatePieceModal() : ''}
				</div>
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