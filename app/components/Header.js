import React from 'react';

import HeaderAnimations from './elements/header-animations';
import Bio from './elements/bio';

import styles from '../styles/header.css';

class Header extends React.Component {
	render() {
		return (
			<header
				className = {styles.header}
			>
				<Bio />
				<HeaderAnimations />
			</header>
		)
	}
}

export default Header;