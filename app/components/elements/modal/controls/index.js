import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import BM from 'bodymovin';

import styles from '../../../../styles/modal.css';

class ModalControls extends React.Component {
	componentDidMount() {
		this.createAnimation(ReactDOM.findDOMNode(this.refs.prevArrow), 'prev-arrow.json');
		this.createAnimation(ReactDOM.findDOMNode(this.refs.nextArrow), 'next-arrow.json');
		this.createAnimation(ReactDOM.findDOMNode(this.refs.closeButton), 'close-button.json');
	}

	createAnimation(node, json) {
		let animData = {
			container: node,
			renderer: 'svg',
			loop: true,
			autoplay: false,
			animationData: require('../../../../media/animations/modal-controls/' + json)
		};

		let anim = BM.loadAnimation(animData);
		node.addEventListener('mouseenter', () => this.playAnimation(anim));
		node.addEventListener('mouseleave', () => this.stopAnimation(anim));
		node.addEventListener('mouseup', () => this.stopAnimation(anim));
	}

	playAnimation(anim) {
		anim.loop = true;
		anim.play();
	}

	stopAnimation(anim) {
		anim.loop = false;
	}

	render() {
		return (
			<div
				className = {styles.modalMenu}
			>
				<Link
					className = {styles.prevLink}
					to = {this.props.prev}
				>
					<div
						ref = "prevArrow"
					>
					</div>
				</Link>
				<Link
					className = {styles.closeButton}
					to = "/"
				>
					<div
						ref = "closeButton"
					>
					</div>
				</Link>
				<Link
					className = {styles.nextLink}
					to = {this.props.next}
				>
					<div
						ref = "nextArrow"
					>
					</div>
				</Link>
			</div>
		)
	}
}

export default ModalControls;