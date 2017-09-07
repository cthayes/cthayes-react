import React from 'react'

class IonLink extends React.Component {
	render() { return (
		<a target="blank" href={this.props.href}>
			<span className="circle"><i className={"icon ion " + this.props.ionClassName}></i></span>
		</a>
	)}
};

export default IonLink