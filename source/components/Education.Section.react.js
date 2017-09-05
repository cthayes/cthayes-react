var React = require('react');

class Section extends React.Component {
	render() {return(
		<div className="cd-timeline-block animated">
			<div className="cd-timeline-point">
				<i className="icon ion ion-ios-checkmark-empty"></i>
			</div>
			<div className="cd-timeline-content">
				<div className="content-box">
					<div className="date">{this.props.date}</div>
					<div className="name">{this.props.degree}</div>
					<div className="category">{this.props.school}</div>
				</div>
			</div>
		</div>	
	)}
}

module.exports = Section;