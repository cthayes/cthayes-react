var React = require('react');
var Section = require('./Education.Section.react');

var section1 = {
	id: 0,
	date: '2016 - Present',
	degree: 'Master of Science - Engineering Management',
	school: 'University of Maryland Baltimore County'
}

var section2 = {
	id: 1,
	date: '2016 - Present',
	degree: 'Post-Baccalaureate Certificate - Systems Engineering',
	school: 'University of Maryland Baltimore County'
}

var section3 = {
	id: 2,
	date: '2006-2010',
	degree: 'Bachelor of Science - Computer Science',
	school: 'University of Maryland Baltimore County'
}

var sections = [section1, section2, section3];

class Education extends React.Component {
	render() {return(
		<div className="section education" id="education-section">
					<div className="title">
						Education
						<span className="circle"><i className="icon ion ion-university"></i></span>
					</div>
					<div className="cd-timeline">
						{sections.map(function(section, i){
				        	return <Section key={section.id} date={section.date} degree={section.degree} school={section.school} />;
						})}
					</div>
				</div>
	)}
}

module.exports = Education;