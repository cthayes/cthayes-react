var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('./IonLink.react');

module.exports = React.createClass({
	render: () => (
		<div className="section started">
				<div className="st-box">
					<div className="st-image"><img src="images/me.png" alt="" /></div>
					<div className="st-title">Christopher Hayes</div>
					<div className="st-subtitle">Software: Engineer, Architect, and Leader</div>
					<div className="st-soc">
						<Link href="https://www.linkedin.com/in/hayesct" ionClassName="ion-social-linkedin" />
						<Link href="https://github.com/cthayes" ionClassName="ion-social-github" />
						<Link href="https://www.facebook.com/thehazeyone" ionClassName="ion-social-facebook" />
						<Link href="mailto:chris@cthayes.net" ionClassName="ion-compose" />
						
						
						{/*
							<Link href="https://twitter.com/cthayes" ionClassName="ion-social-twitter" />
						*/}
					</div>
				</div>
			</div>

	)
});