var React = require('react');

module.exports = React.createClass({
	render() { return (
		<a target="blank" href={this.props.href}>
			<span className="circle"><i className={"icon ion " + this.props.ionClassName}></i></span>
		</a>
	)}
});