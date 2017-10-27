import React from 'react';
import { Link } from 'react-router-dom';

import Bio from './elements/bio';
import GalleryContainer from './elements/gallery/container';

class Main extends React.Component {
	render() {
		return (
			<div>
				<Bio />
				<GalleryContainer />
			</div>
		)
	}
}

export default Main;