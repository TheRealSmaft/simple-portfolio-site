import React from 'react';
import ReactDOM from 'react-dom';

import BM from 'bodymovin';

import styles from '../../../styles/header.css';

class HeaderAnimations extends React.Component {
	componentDidMount() {
		let logoNode = ReactDOM.findDOMNode(this.refs.logo);
		logoNode.style.display = "block";

		let animData = {
			container: logoNode,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: require('../../../media/animations/logo-float-up.json')
		};

		let anim = BM.loadAnimation(animData);
		anim.addEventListener('complete', () => this.logoHover(logoNode, anim));
		anim.play();
	}

	logoHover(logoNode, lastAnim) {
		let animData = {
			container: logoNode,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../media/animations/logo-hover.json')
		};

		lastAnim.destroy();

		let anim = BM.loadAnimation(animData);

		this.makeLogoInteractable(anim);
	}

	makeLogoInteractable(lastAnim) {
		let balloon = this.refs.logo.firstChild.childNodes[1].childNodes[1].childNodes[1];
		let anvil = this.refs.logo.firstChild.childNodes[1].childNodes[1].childNodes[0];

		balloon.style['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
		balloon.style['-webkit-tap-highlight-color'] = 'transparent';
		balloon.style.cursor = 'url(' + require('../../../media/images/needle.svg') + '), pointer';
		balloon.addEventListener('click', () => this.popBalloon(balloon, anvil, lastAnim));
	}

	popBalloon(balloon, anvil, lastAnim) {
		balloon.style.cursor = 'auto';

		let animData = {
			container: this.refs.pop,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: require('../../../media/animations/logo-balloon-pop.json')
		};

		let anim = BM.loadAnimation(animData);
		anim.play();

		setTimeout(() => {
			balloon.parentNode.removeChild(balloon);
		}, 700);

		setTimeout(() => {
			anvil.parentNode.style.transition = '500ms';
			anvil.parentNode.style.transform = 'matrix(1,0,0,1,0,200)';
		}, 1000);

		setTimeout(() => {
			this.summonMe(lastAnim, anim); 
		}, 1500);
	}

	summonMe(anim1, anim2) {

		let animData = {
			container: this.refs.logo,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: require('../../../media/animations/portrait/portrait-intro.json')
		}

		anim1.destroy();
		anim2.destroy();

		let anim = BM.loadAnimation(animData);
		anim.addEventListener('complete', () => this.switchPortrait(anim));
		anim.play();
	}

	switchPortrait(lastAnim) {
		let animData1 = {
			container: this.refs.logo,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: require('../../../media/animations/portrait/portrait.json')
		}

		let animData2 = {
			container: this.refs.pop,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: require('../../../media/animations/portrait/portrait-blinking.json')
		}

		lastAnim.destroy();

		let anim1 = BM.loadAnimation(animData1);
		let anim2 = BM.loadAnimation(animData2);

		let portrait = ReactDOM.findDOMNode(this.refs.logo).firstChild.childNodes[1];

		portrait.addEventListener('mouseover', () => this.smile(anim1));
		portrait.addEventListener('mouseleave', () => this.stopSmiling(anim1));
		portrait.addEventListener('touchstart', () => this.smile(anim1));
		portrait.addEventListener('touchend', () => this.stopSmiling(anim1));

		anim2.goToAndPlay(0, true);
		this.blink(anim2);
	}

	smile(anim) {
		anim.setDirection(1);
		anim.play();
	}

	stopSmiling(anim) {
		anim.setDirection(-1);
		anim.play();
	}

	blink(anim) {
		let delay = Math.floor(Math.random() * (6000 - 3000) + 3000);
		setTimeout(() => {
			anim.goToAndPlay(0, true);
			this.blink(anim);
		}, delay);
	}

	render() {
		return (
			<div
				className = {styles.logoArea}
				style = {{
					position: 'relative'
				}}
			>
				<div
					ref = "logo"
					style = {{
						display: "none"
					}}
				>
				</div>
				<div
					ref = "pop"
					style = {{
						position: 'absolute',
						top: '0px',
						left: '0px',
						pointerEvents: 'none'
					}}
				>
				</div>
			</div>
		)
	}
}

export default HeaderAnimations;