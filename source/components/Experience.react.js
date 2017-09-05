var React = require('react');
var Section = require('./Experience.Section.react.js');

module.exports = React.createClass({
	contextTypes: {
		store: React.PropTypes.object
	},
	
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
});
