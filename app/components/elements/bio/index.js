import React from 'react';

import styles from '../../../styles/bio.css';

class Bio extends React.Component {
	render() {
		return(
			<div
				className = {styles.bio}
			>
				<h1>
					'Bout it 'Bout it
				</h1>
			</div>
		)
	}
}

export default Bio;