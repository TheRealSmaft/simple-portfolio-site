import React from 'react';

class Piece extends React.Component {
	componentWillMount() {
		this.generateImages(this.props.piece);
	}

	componentWillUpdate(nextProps) {
		if(this.props.piece != nextProps.piece) {
			this.generateImages(nextProps.piece);
		}
	}

	generateImages(p) {
		this.images = [];
		this.image = null;

		if(p.images) 
		{
			for(let i = 0; i < p.images.length; i++) {
				this.images.push(
					<img
						key = {i}
						src = {require('../../../../media/portfolio/' + p.images[i])}
						alt = {p.name + (i + 1)}
					/>
				)
			}
		}
		else if(p.image) 
		{
			this.image = (
				<img
					src = {require('../../../../media/portfolio/' + p.image)}
					alt = {p.name}
				/>
			)
		}
		else
		{
			this.image = (
				<img
					src = {require('../../../../media/portfolio/' + p.thumb)}
					alt = {p.name}
				/>
			)
		}
	}

	render() {
		let p = this.props.piece;

		return (
			<div
				className = {this.props.className}
			>
				<h1>
					{p.name}
				</h1>
				{this.images}
				{this.image}
			</div>
		)
	}
}

export default Piece;