import types from "./types";

const skillListReducer = (state = {
	show: false
}, action) => {
	switch(action.type) {
		case types.TOGGLE_SKILL_LIST: {
			state = {
				...state,
				show: !state.show
			}
			break;
		}
	}

	return state;
}

export default skillListReducer;