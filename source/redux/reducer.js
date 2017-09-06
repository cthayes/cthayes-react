let actions = require('./actions');
let experiences = require('../data/experiences');

const initialState = {
	experiences: experiences,
	educations: []
}

function reducer(state = initialState, action) {
	let newState = Object.assign({}, state)
	
	switch(action.type) {
		case 'ADD_EDUCATION':
			newState.educations = action.data
			break;
		default:
	}
	return newState;
}

module.exports = reducer;