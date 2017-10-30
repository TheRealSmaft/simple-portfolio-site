import React from 'react';
import styles from '../styles/header.css';

class Header extends React.Component {
	render() {
		return (
			<header
				className = {styles.header}
			>
				<div
					className = {styles.logoArea}
				>
					<img 
						src = {require('../media/images/logo.svg')}
						alt = "Matthew Brubaker Smith's Logo"
					/>
				</div>
			</header>
		)
	}
}

export default Header;