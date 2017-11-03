import React from 'react';

import styles from '../../../styles/rogue.css';

class RogueBrain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posX: this.createRandomOffScreenCoordinate(),
			posY: this.createRandomOffScreenCoordinate(),
			negate: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.moveBrain();
		}, 1000);
	}

	createRandomOffScreenCoordinate() {
		return Math.floor(Math.random() * (100 - 0) + 110);
	}

	moveBrain() {
		this.setState({
			...this.state,
			posX: this.state.negate ? this.createRandomOffScreenCoordinate() * -1 : this.createRandomOffScreenCoordinate(),
			posY: this.state.negate ? this.createRandomOffScreenCoordinate() * -1 : this.createRandomOffScreenCoordinate(),
			negate: !this.state.negate
		})
	}

	render() {
		return (
			<div
				ref = "brain"
				className = {styles.brain}
				style = {{
					left: this.state.posX+ '%',
					top: this.state.posY + '%'
				}}
			>
				<img
					src = {require('../../../media/images/brain.svg')}
					alt = "Rogue Brain!"
				/>
			</div>
		)
	}
}

export default RogueBrain;