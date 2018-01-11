import React from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';

import styles from '../../../../styles/skillset.css';

const brainBullet = require('../../../../media/images/skill-list-bullets/brain.svg');
const heartBullet = require('../../../../media/images/skill-list-bullets/heart.svg');
const handBullet = require('../../../../media/images/skill-list-bullets/hand.svg');

class SkillsetList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0
		}
	}

	componentWillUpdate(nextProps) {
		if(nextProps.showSkills != this.props.showSkills) 
		{
			if(nextProps.showSkills)
			{
				this.setState({
					height: "auto"
				})
			}
			else
			{
				this.setState({
					height: 0
				})
			}
		}
	}

	render() {
		return (
			<AnimateHeight
				duration = {1000}
				height = {this.state.height}
			>
				<div
					className = {styles.skillsetContainer}
					style = {{
						opacity: this.props.showSkills ? 1 : 0
					}}
				>
					<div
						className = {styles.skillset}
					>
						<img 
							src = {require("../../../../media/images/brain.svg")}
							alt = "...of the mind."
						/>
						<h3>
							Skills of the Mind
						</h3>
						<ul 
							className = {styles.skillsetList}
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
						</ul>
					</div>
					<div
						className = {styles.skillset}
					>
						<img 
							src = {require("../../../../media/images/heart.svg")}
							alt = "...of the heart."
						/>
						<h3>
							Skills of the Heart
						</h3>
						<ul 
							className = {styles.skillsetList}
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
						</ul>
					</div>
					<div
						className = {styles.skillset}
					>
						<img 
							src = {require("../../../../media/images/hand.svg")}
							alt = "...of the hand."
						/>
						<h3>
							Skills of the Hand
						</h3>
						<ul 
							className = {styles.skillsetList}
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
						</ul>
					</div>
				</div>
			</AnimateHeight>
		)
	}
}

function mapStateToProps(store) {
	return {
		showSkills: store.skillList.show
	}
}

export default connect(mapStateToProps)(SkillsetList);
