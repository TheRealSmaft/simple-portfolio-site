import React from 'react';

class Magnifier extends React.Component {
	render() {
		return (
			<div
				className = {this.props.className}
				style = {{
					left: this.props.mousePosition != null ? this.props.mousePosition[0] : '',
					top: this.props.mousePosition != null ? this.props.mousePosition[1] : ''
				}}
			>
			{
				this.props.image ? 
				<img
					style = {{
						left: this.props.imagePosition != null ? (this.props.imagePosition[0] * -1.5) : '',
						top: this.props.imagePosition != null ? (this.props.imagePosition[1] * -1.5) : ''
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