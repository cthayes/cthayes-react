var React = require('react');
var Section = require('./Education.Section.react');


module.exports = React.createClass({
	contextTypes: {
		store: React.PropTypes.object
	},
	render() {return(
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
});