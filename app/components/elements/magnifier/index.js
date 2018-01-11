import React from 'react';

class Magnifier extends React.Component {
	componentWillUpdate() {
		this.emptyImage = document.createElement('img');
		this.emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

		this.pm = document.getElementById('portfolioModal');
	}

	dragMag(e) {
		let x;
		let y;

		if(e.changedTouches) {
			x = e.changedTouches[0].clientX;
			y = e.changedTouches[0].clientY;
		}
		else {
			x = e.clientX;
			y = e.clientY;
		}

		this.refs.mag.style.left = x - 150 + this.pm.scrollLeft + 'px';
		this.refs.mag.style.top = y - 150 + this.pm.scrollTop + 'px';

		let leftOffset = x - this.startPos[0] + this.pm.scrollLeft;
		let topOffset = y - this.startPos[1] + this.pm.scrollTop;

		this.refs.magImage.style.left = (this.props.imagePosition[0] + leftOffset + this.pm.scrollLeft) * -2 + 150 + 'px';
		this.refs.magImage.style.top = (this.props.imagePosition[1] + topOffset + this.pm.scrollTop) * -2 + 150 + 'px';
	}

	startDragging(e) {
		document.body.style.touchAction = 'none';
		this.pm.style.overflow = "hidden";

		if(e.dataTransfer) {
			e.dataTransfer.setDragImage(this.emptyImage, 0, 0);
		}

		let x;
		let y;

		if(e.changedTouches) {
			x = e.changedTouches[0].clientX;
			y = e.changedTouches[0].clientY;
		}
		else {
			x = e.clientX;
			y = e.clientY;
		}

		this.startPos = [x + this.pm.scrollLeft, y + this.pm.scrollTop];
	}

	stopDragging(e) {
		document.body.style.touchAction = 'auto';
		this.pm.style.overflow = "auto";

		let x;
		let y;

		if(e.changedTouches) {
			x = e.changedTouches[0].clientX;
			y = e.changedTouches[0].clientY;
		}
		else {
			x = e.clientX;
			y = e.clientY;
		}

		this.refs.mag.style.left = x - 150 + this.pm.scrollLeft + 'px';
		this.refs.mag.style.top = y - 150 + this.pm.scrollTop + 'px';

		let leftOffset = x - this.startPos[0] + this.pm.scrollLeft;
		let topOffset = y - this.startPos[1] + this.pm.scrollTop;

		this.refs.magImage.style.left = (this.props.imagePosition[0] + leftOffset + this.pm.scrollLeft) * -2 + 150 + 'px';
		this.refs.magImage.style.top = (this.props.imagePosition[1] + topOffset + this.pm.scrollTop) * -2 + 150 + 'px';

		this.startPos = null;
	}

	hideMouseCursor() {
		this.refs.mag.style.cursor = 'pointer'
	}

	render() {
		return (
			<div
				ref = "mag"
				className = {this.props.className}
				onDragStart = {(e) => this.startDragging(e)}
				onDrag = {(e) => this.dragMag(e)}
				onDragEnd = {(e) => this.stopDragging(e)}
				onTouchStart = {(e) => this.startDragging(e)}
				onTouchMove = {(e) => this.dragMag(e)}
				onTouchEnd = {(e) => this.stopDragging(e)}
				style = {{
					left: this.props.mousePosition != null ? this.props.mousePosition[0] - 150 + this.pm.scrollLeft + 'px' : -1000,
					top: this.props.mousePosition != null ? this.props.mousePosition[1] - 150 + this.pm.scrollTop + 'px' : -1000
				}}
			>
			{
				this.props.image ? 
				<img
					ref = "magImage"
					style = {{
						left: (this.props.imagePosition[0] + this.pm.scrollLeft) * -2 + 150 + 'px',
						top: (this.props.imagePosition[1] + this.pm.scrollTop) * -2 + 150 + 'px',
						width: this.props.imageDimensions[0] * 2 + 'px',
						height: this.props.imageDimensions[1] * 2 + 'px',
						outline: this.props.outline ? '2px solid black' : 'none'
					}}
					src = {require('../../../media/portfolio/' + this.props.image)}
				/> :
				''
			}
			</div>
		)
	}
}

export default Magnifier;