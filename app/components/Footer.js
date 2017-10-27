import React from 'react';
import styles from '../styles/footer.css';

class Footer extends React.Component {
	componentWillMount() {
		this.year = new Date().getFullYear();
	}

	render() {
		return(
			<footer
				className = {styles.footer}
			>
				&copy; Matthew Brubaker Smith {this.year}
			</footer>
		)
	}
}

export default Footer;