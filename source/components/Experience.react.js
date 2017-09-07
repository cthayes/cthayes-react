import React from 'react'
import { connect } from 'react-redux';
import createActions from '../redux/actions'

var Section = require('./Experience.Section.react.js');

class Experience extends React.Component {
	constructor(props) {
	    super(props);
		this.actions = createActions(this.props.dispatch);
	}
  
	componentDidMount() {
		// If we already have the data don't make another request
		if (this.context.store.getState().experiences.length > 0) {
			return
		}
		
		fetch('http://localhost:8080/experiences')
			.then(response => response.json() )
			.then(array => this.actions.addExperiences(array) )
			.catch(err => console.log(err) );			
	}
		
	render() { return (
		<div className="section experience" id="experience-section">
			<div className="title">
				Experience
				<span className="circle"><i className="icon ion ion-ios-briefcase"></i></span>
			</div>
			<div className="cd-timeline">
				{this.context.store.getState().experiences.map(function(section, i){
			        return <Section key={section.id} date={section.date} title={section.title} employer={section.employer} desc={section.desc}/>;
			    })}
			</div>
		</div>
	)}
};

Experience.contextTypes = {
	store: React.PropTypes.object
}


export default connect()(Experience)
