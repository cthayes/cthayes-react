import React from 'react'

class Section extends React.Component {
	render() {return(
		<div className="cd-timeline-block animated">
			<div className="cd-timeline-point">
				<i className="icon ion ion-ios-checkmark-empty"></i>
			</div>
			<div className="cd-timeline-content">
				<div className="content-box">
					<div className="date">{this.props.date}</div>
					<div className="name">{this.props.title}</div>
					<div className="category">{this.props.employer}</div>
					<div dangerouslySetInnerHTML={{__html: this.props.desc}}></div>
				</div>
			</div>
		</div>
	)}
}

export default Section