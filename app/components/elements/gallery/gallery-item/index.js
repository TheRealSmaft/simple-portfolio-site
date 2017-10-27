import React from 'react';
import { Link } from 'react-router-dom';

class GalleryItem extends React.Component {
	render() {
		return (
			<div>
				<Link
					to = {this.props.piece.url}
				>
					<img 
						src = {require('../../../../media/portfolio/' + this.props.piece.thumb)}
					/>
				</Link>
			</div>
		)
	}
}

export default GalleryItem;