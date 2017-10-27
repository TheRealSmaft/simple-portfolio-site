import React from 'react';
import { connect } from 'react-redux';

import GalleryItem from '../gallery-item';

class GalleryContainer extends React.Component {
	render() {
		let gallery = [];

		for(let piece of this.props.portfolio) {
			gallery.push(
				<GalleryItem
					key = {piece.url}
					piece = {piece}
				/>
			)
		}

		return (
			<div>
				{gallery}
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		portfolio: store.portfolio.portfolio
	}
}

export default connect(mapStateToProps)(GalleryContainer);