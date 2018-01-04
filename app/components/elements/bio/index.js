import React from 'react';

import SkillSet from '../skillset';

import styles from '../../../styles/bio.css';

class Bio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentAboutParagraph: 0
		}

		this.aboutTextArray = [
		<SkillSet />,
			<p className = {styles.initialAboutParagraph}>Thank you for checking out my portfolio site! My broad skill set runs the gamut from programming and web development to graphic design and animation</p>,
			<p>I am available for freelance work for websites, 2D and 3D graphics, animation, print design, branding / logo design, and just about anything in between. I am also interested in permanent positions, if your offering!</p>,
			
		];

		this.buttonTextArray = [
			"Read More",
			"Check My Skillz",
			"From the Top"
		];
	}

	getNextAboutParagraph() {
		let nextP;

		if(this.state.currentAboutParagraph + 1 >= this.aboutTextArray.length) 
		{
			nextP = 0;
		}
		else
		{
			nextP = this.state.currentAboutParagraph + 1;
		}

		this.setState({
			...this.state,
			currentAboutParagraph: nextP
		});
	}

	render() {
		return(
			<div
				className = {styles.bio}
			>
				<h1>
					Matthew Brubaker Smith {this.props.farts}
				</h1>
				<h3>
					Web&nbsp;Developer &bull; Graphic&nbsp;Designer
				</h3>
				{this.aboutTextArray[this.state.currentAboutParagraph]}
				<button
					onClick = {() => this.getNextAboutParagraph()}
				>
					{this.buttonTextArray[this.state.currentAboutParagraph]}
				</button>
			</div>
		)
	}
}

export default Bio;