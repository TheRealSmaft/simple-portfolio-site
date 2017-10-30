import React from 'react';
import { connect } from 'react-redux';

import GalleryItem from '../gallery-item';

import styles from '../../../../styles/gallery.css';

class GalleryContainer extends React.Component {
	render() {
		let gallery = [];

		for(let piece of this.props.portfolio) {
			gallery.push(
				<GalleryItem
					key = {piece.url}
					piece = {piece}
					className = {styles.galleryItem}
				/>
			)
		}

		return (
			<div
				className = {styles.gallery}
			>
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