import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import EmptyModal from './elements/modal/empty';
import FullModal from './elements/modal/full';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/_global.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
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