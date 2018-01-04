import React from 'react';

import styles from '../../../styles/bio.css';

const brainBullet = require('../../../media/images/skill-list-bullets/brain.svg');
const heartBullet = require('../../../media/images/skill-list-bullets/heart.svg');
const handBullet = require('../../../media/images/skill-list-bullets/hand.svg');

class SkillSet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSkillList: 0
		}

		this.skillListArray = [
			<div></div>,
			<ul 
				className = {styles.skillSetList}
				style = {{
					listStyleImage: "url(" + brainBullet + ")"
				}}
			>
				<li>
					HTML/CSS
				</li>
				<li>
					Javascript
				</li>
				<li>
					React/Redux
				</li>
				<li>
					LESS/SASS
				</li>
				<li>
					GitHub
				</li>
				<li>
					NPM/Grunt/Webpack
				</li>
				<li>
					WordPress
				</li>
				<li>
					jQuery
				</li>
				<li>
					AngularJS/2
				</li>
				<li>
					PHP/SQL
				</li>
			</ul>,
			<ul 
				className = {styles.skillSetList}
				style = {{
					listStyleImage: "url(" + heartBullet + ")"
				}}
			>
				<li>
					Communication
				</li>
				<li>
					Leadership
				</li>
				<li>
					Customer Service
				</li>
				<li>
					Marketing
				</li>
				<li>
					Public Speaking
				</li>
				<li>
					Copywriting
				</li>
			</ul>,
			<ul 
				className = {styles.skillSetList}
				style = {{
					listStyleImage: "url(" + handBullet + ")"
				}}
			>
				<li>
					Illustrator
				</li>
				<li>
					Photoshop
				</li>
				<li>
					After Effects
				</li>
				<li>
					3D Modeling (Blender)
				</li>
				<li>
					2D / 3D Animation
				</li>
				<li>
					InDesign
				</li>
				<li>
					Illustration
				</li>
				<li>
					Photography
				</li>
			</ul>,
		]
	}

	getSkillList(index) {
		this.setState({
			...this.state,
			currentSkillList: index
		})
	}

	render() {
		return (
			<div>
				<p>
					Click below to see a list of my skills of the mind, heart, and hand.
				</p>
				<div
					className = {styles.skillSetIcons}
				>
					<div
						onClick = {() => this.getSkillList(1)}
					>
						<img 
							src = {require("../../../media/images/brain.svg")}
							alt = "Skills of the mind."
						/>
					</div>
					<div
						onClick = {() => this.getSkillList(2)}
					>
						<img 
							src = {require("../../../media/images/heart.svg")}
							alt = "Skills of the heart."
						/>
					</div>	
					<div
						onClick = {() => this.getSkillList(3)}
					>
						<img 
							src = {require("../../../media/images/hand.svg")}
							alt = "Skills of the hand."
						/>
					</div>	
				</div>
				<div>
					{this.skillListArray[this.state.currentSkillList]}
				</div>
			</div>
		)
	}
}

export default SkillSet;