import React from 'react'
import ReactDOM from 'react-dom'
import IonLink from './IonLink.react'

class Intro extends React.Component {
	render() {
		return(
			<div className="section started">
				<div className="st-box">
					<div className="st-image"><img src="images/me.png" alt="" /></div>
					<div className="st-title">Christopher Hayes</div>
					<div className="st-subtitle">Software: Engineer, Architect, and Leader</div>
					<div className="st-soc">
						<IonLink href="https://www.linkedin.com/in/hayesct" ionClassName="ion-social-linkedin" />
						<IonLink href="https://github.com/cthayes" ionClassName="ion-social-github" />
						<IonLink href="https://www.facebook.com/thehazeyone" ionClassName="ion-social-facebook" />
						<IonLink href="mailto:chris@cthayes.net" ionClassName="ion-compose" />
						
						
						{/*
							<IonLink href="https://twitter.com/cthayes" ionClassName="ion-social-twitter" />
						*/}
					</div>
				</div>
			</div>
		)
	}
};

export default Intro