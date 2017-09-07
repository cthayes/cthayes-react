import constants from './constants'

let createActions = function(dispatch) {
  let addEducation = function(data) {   	
	  dispatch({
		type: constants.ADD_EDUCATION,
		data: data
	})

  };
  
  let addExperiences = function(data) {   	
	  dispatch({
		type: constants.ADD_EXPERIENCES,
		data: data
	})

  };

  return {
    addEducation,
    addExperiences
  };
}

export default createActions