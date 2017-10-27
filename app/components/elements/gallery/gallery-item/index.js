import React from 'react';
import { Link } from 'react-router-dom';

class GalleryItem extends React.Component {
	render() {
		return (
			<div>
				<Link
					to = {this.props.piece.url}
				>
					{this.props.piece.name}
				</Link>
			</div>
		)
	}
}

export default GalleryItem;