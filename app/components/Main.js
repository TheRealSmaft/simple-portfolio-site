import React from 'react';

import { Link } from 'react-router-dom';

class Main extends React.Component {
	render() {
		return (
			<div>
				<p>
					shutup
				</p>
				<Link
					to = "/batavia-events-poster"
				>
					CLUCK
				</Link>
			</div>
		)
	}
}

export default Main;