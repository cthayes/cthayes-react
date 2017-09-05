let actions = require('./actions');
let experiences = require('../data/experiences');
let education = require('../data/education');

const initialState = {
	experiences: experiences,
	educations: education
}

function reducer(state = initialState, action) {
	return state;
}

module.exports = reducer;