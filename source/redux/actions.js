import constants from './constants'

let createActions = function(dispatch) {
  let addEducation = function(data) {   	
	  dispatch({
		type: constants.ADD_EDUCATION,
		data: data
	})

  };

  return {
    addEducation
  };
}

export default createActions