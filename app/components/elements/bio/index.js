import React from 'react';

import styles from '../../../styles/bio.css';

class Bio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentAboutParagraph: 0
		}

		this.aboutTextArray = [
			"My name is Matthew Brubaker Smith and I am a Graphic and Web Designer. Though to be honest, my skill set is more broad and varied than that title conveys.",
			"Fuck you"
		];

		this.buttonTextArray = [
			"Read More",
			"Check My Skillz"
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
				<p>
					{this.aboutTextArray[this.state.currentAboutParagraph]}
				</p>
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