import { combineReducers } from 'redux';

import portfolio from './portfolio'
import skillList from './skill-list'

export default combineReducers({
	portfolio: portfolio,
	skillList: skillList
});