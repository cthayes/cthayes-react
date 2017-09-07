import constants from './constants'

const initialState = {
	experiences: [],
	educations: []
}

function reducer(state = initialState, action) {
	let newState = Object.assign({}, state)
	
	switch(action.type) {
		case constants.ADD_EDUCATION:
			newState.educations = action.data
			break;
		case constants.ADD_EXPERIENCES:
			newState.experiences = action.data
			break;
		default:
	}
	return newState;
}

module.exports = reducer;