import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import EmptyModal from './elements/modal/empty';
import FullModal from './elements/modal/full';

import Header from './Header';
import SkillsetList from './elements/skillset/skillset-list';
import GalleryContainer from './elements/gallery/container';
import Footer from './Footer';

import styles from '../styles/_global.css';
const background = require("../media/images/background.svg");

class App extends React.Component {
	componentWillMount() {
		document.body.style.background = 'url("' + background + ')'
		document.body.style.backgroundSize = "100% 100%";
	}

	render() {
		return (
			<main
				className = {styles.main}
			>
				<Header />
				<SkillsetList />
				<GalleryContainer />
				<Footer />
				<Switch>
					<Route exact path = "/" component = {EmptyModal} />
					<Route path = "/:piece" component = {FullModal} />
				</Switch>
			</main>
		)
	}
}

export default App;