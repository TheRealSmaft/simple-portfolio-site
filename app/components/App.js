import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import EmptyModal from './elements/modal/empty';
import FullModal from './elements/modal/full';

import Header from './Header';
import Bio from './elements/bio';
import GalleryContainer from './elements/gallery/container';
import Footer from './Footer';

import styles from '../styles/_global.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Bio />
				<GalleryContainer />
				<Footer />
				<Switch>
					<Route exact path = "/" component = {EmptyModal} />
					<Route path = "/:piece" component = {FullModal} />
				</Switch>
			</div>
		)
	}
}

export default App;