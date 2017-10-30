import React from 'react';

import Magnifier from '../../magnifier';

import styles from '../../../../styles/modal.css';

class Piece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			magnifiedImage: null,
			imagePosition: null,
			mousePosition: null
		}

		this.bound_clearMagnify = this.clearMagnify.bind(this);
	}

	componentWillMount() {
		this.images = this.generateImages(this.props.piece);
		this.moreInfo = this.generateMoreInfo(this.props.piece);
	}

	componentWillUpdate(nextProps) {
		if(this.props.piece != nextProps.piece) {
			this.images = this.generateImages(nextProps.piece);
			this.moreInfo = this.generateMoreInfo(nextProps.piece);
			this.clearMagnify();
		}
	}

	componentWillUnmount() {
		this.clearMagnify();
	}

	generateImages(p) {
		let images = [];
		for(let i = 0; i < p.images.length; i++) {
			images.push(
				<img
					key = {i}
					className = {p.outline ? styles.outlined : styles.pieceImage}
					onClick = {(e) => this.magnify(e, p.images[i])}
					src = {require('../../../../media/portfolio/' + p.images[i])}
					alt = {p.name + i}
				/>
			)
		}
		return images;
	}

	generateMoreInfo(p) {
		let info = [];

		for(let i = 0; i < p.moreInfo.length; i++) {
			info.push(
				<p
					key = {i}
				>
					{p.moreInfo[i]}
				</p>
			)
		}

		return info;
	}

	magnify(e, img) {

		if(this.state.magnifiedImage === null) {
			let t = e.target;

			let x = e.clientX - t.offsetLeft;
			let y = e.clientY - t.offsetTop;

			this.setState({
				magnifiedImage: img,
				imagePosition: [x, y],
				mousePosition: [e.clientX, e.clientY]
			});
		}

		document.addEventListener('click', this.bound_clearMagnify);
	}

	clearMagnify() {
		if(this.state.magnifiedImage != null) {
			this.setState({
				magnifiedImage: null,
				imagePosition: null
			});
		}

		document.removeEventListener('click', this.bound_clearMagnify);
	}

	render() {
		let p = this.props.piece;

		return (
			<div
				className = {styles.portfolioPiece}
			>
				<h1>
					{p.name}
				</h1>
				{this.images}
				<div>
					<p>
						{p.description}
					</p>
					{this.moreInfo}
				</div>
				<Magnifier 
					className = {styles.magnifier}
					image = {this.state.magnifiedImage}
					imagePosition = {this.state.imagePosition}
					mousePosition = {this.state.mousePosition}
				/>
			</div>
		)
	}
}

export default Piece;