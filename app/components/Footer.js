import React from 'react';

class Footer extends React.Component {
	componentWillMount() {
		this.year = new Date().getFullYear();
	}

	render() {
		return(
			<div>
				&copy; Matthew Brubaker Smith {this.year}
			</div>
		)
	}
}

export default Footer;