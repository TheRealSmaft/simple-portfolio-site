import React from 'react';

import styles from '../../../styles/bio.css';

class Bio extends React.Component {
	render() {
		return(
			<div
				className = {styles.bio}
			>
				<h1>
					Matthew Brubaker Smith
				</h1>
				<h3>
					Web Developer &bull; Graphic Designer
				</h3>
				<p>
					My name is Matthew Brubaker Smith and I am a Graphic and Web Designer. Though to be honest, my skill set is more broad and varied than that title conveys.
				</p>
			</div>
		)
	}
}

export default Bio;