import React from 'react'
import { connect } from 'react-redux';
import createActions from '../redux/actions'

import Section from './Education.Section.react'

class Education extends React.Component {
	constructor(props) {
	    super(props);
		this.actions = createActions(this.props.dispatch);
	}
  
	componentDidMount() {
		// If we already have the data don't make another request
		if (this.context.store.getState().educations.length > 0) {
			return
		}
		
		fetch('http://localhost:8080/education')
			.then(response => response.json() )
			.then(array => this.actions.addEducation(array) )
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


export default connect()(Education)