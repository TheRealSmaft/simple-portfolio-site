import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { skillListTypes, skillListActions } from '../../../../store/skill-list';

import styles from '../../../../styles/skillset.css';

class SkillsetToggle extends React.Component {
	showSkills() {
		this.props.toggleSkillList();
	}

	render() {
		return (
			<button
				className = {styles.skillsetToggle}
				onClick = {() => this.showSkills()}
			>
				Check My Skillz
			</button>
		)
	}
}

function mapStateToProps(store) {
	return {
		skillList: store.skillList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		toggleSkillList: skillListActions.toggleSkillList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsetToggle);