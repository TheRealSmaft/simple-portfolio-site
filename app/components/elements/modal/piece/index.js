import React from 'react';

import Magnifier from '../../magnifier';

import styles from '../../../../styles/modal.css';

class Piece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			magnifiedImage: null,
			imagePosition: null,
			mousePosition: null,
			imageDimensions: null,
			outline: false
		}

		this.bound_clearMagnify = this.clearMagnify.bind(this);
	}

	componentWillMount() {
		this.images = this.generateImages(this.props.piece);
		this.funFacts = this.generateFunFacts(this.props.piece);
	}

	componentWillUpdate(nextProps, nextState) {
		if(this.props.piece != nextProps.piece) {
			this.images = this.generateImages(nextProps.piece);
			this.funFacts = this.generateFunFacts(nextProps.piece);
			this.clearMagnify();
		}
	}

	componentWillUnmount() {
		this.clearMagnify();
	}

	generateImages(p) {
		let images = [];
		for(let i = 0; i < p.images.length; i++) {

			if(p.link) {
				images.push(
					<a
						key = {i}
						href = {p.link}
						target = "_blank"
					>
						<img
							key = {i}
							className = {p.outline ? styles.outlined : styles.pieceImage}
							src = {require('../../../../media/portfolio/' + p.images[i])}
							alt = {p.name + i}
						/>
					</a>
				)
			}
			else 
			{
				images.push(
					<img
						key = {i}
						className = {p.outline ? styles.outlined : styles.pieceImage}
						onClick = {(e) => this.magnify(e, p.images[i])}
						style = {{
							cursor: p.magnifiable ? 'zoom-in' : 'default'
						}}
						src = {require('../../../../media/portfolio/' + p.images[i])}
						alt = {p.name + i}
					/>
				)
			}
		}
		return images;
	}

	generateFunFacts(p) {
		let info = [];

		for(let i = 0; i < p.funFacts.length; i++) {
			info.push(
				<p
					key = {i}
				>
					{p.funFacts[i]}
				</p>
			)
		}

		return info;
	}

	magnify(e, img) {
		if(this.props.piece.magnifiable) {
			if(this.state.magnifiedImage === null) {
				let t = e.target;

				let x = e.clientX - t.offsetLeft;
				let y = e.clientY - t.offsetTop;

				this.setState({
					magnifiedImage: img,
					imagePosition: [x, y],
					mousePosition: [e.clientX, e.clientY],
					imageDimensions: [t.width, t.height],
					outline: this.props.piece.outline
				});
			}

			document.addEventListener('click', this.bound_clearMagnify);
		}
	}

	clearMagnify() {
		if(this.state.magnifiedImage != null) {
			this.setState({
				magnifiedImage: null,
				imagePosition: null,
				mousePosition: null,
				imageDimensions: null,
				outline: false
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
				{
					p.magnifiable ?
					<p>
						Click on the image{p.images.length > 1 ? 's' : ''} to magnify.
					</p>
					: ''
				}
				{
					p.link ?
					<a
						href = {p.link}
						target = "_blank"
					>
						<button>
							Check It Out
						</button>
					</a>
					: ''
				}
				<div
					className = {styles.pieceDetails}
				>
					<h2>
						Project Details
					</h2>
					<hr />
					<h3>
						Challenge
					</h3>
					<p>
						{p.challenge}
					</p>
					<h3>
						Concept
					</h3>
					<p>
						{p.concept}
					</p>
					<h3>
						Design Method
					</h3>
					<p>
						{p.method}
					</p>
					<h3>
						Fun Facts
					</h3>
					{this.funFacts}
				</div>
				<Magnifier 
					className = {styles.magnifier}
					image = {this.state.magnifiedImage}
					imagePosition = {this.state.imagePosition}
					mousePosition = {this.state.mousePosition}
					imageDimensions = {this.state.imageDimensions}
					outline = {this.state.outline}
				/>
			</div>
		)
	}
}

export default Piece;