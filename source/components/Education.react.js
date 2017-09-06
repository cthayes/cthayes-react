import React from 'react'
import { connect } from 'react-redux';

var Section = require('./Education.Section.react');


let createHandlers = function(dispatch) {
  let onData = function(data) {   	
	  dispatch({
		type: 'ADD_EDUCATION', 
		data: data
	})

  };

  return {
    onData
  };
}

class Education extends React.Component {s
	constructor(props) {
	    super(props);
		this.handlers = createHandlers(this.props.dispatch);
	}
  
	componentDidMount() {
		if (this.context.store.getState().educations.length > 0) {
			return
		}
		
		let that = this;
		fetch('http://localhost:8080/education')
			.then(response => response.json() )
			.then(array => that.handlers.onData(array) )
			.catch(err => console.log(err) );			
	}
		
	render() { return(
		<div className="section education" id="education-section">
			<div className="title">
				Education
				<span className="circle"><i className="icon ion ion-university"></i></span>
			</div>
			<div className="cd-timeline">
				{this.context.store.getState().educations.map(function(section, i){
		        	return <Section key={section.id} date={section.date} degree={section.degree} school={section.school} />;
				})}
			</div>
		</div>
	)}
};

Education.contextTypes = {
	store: React.PropTypes.object
}


export default connect()(Education);