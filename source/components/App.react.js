let React = require('react');

let Intro = require('./Intro.react');
let About = require('./About.react');
let Experience = require('./Experience.react');
let Education = require('./Education.react');
let Footer = require('./Footer.react');

class App extends React.Component {
	render() {return(
		<div className="page" id="home-section">		
		<div className="started-bg">
			<div id="particles-bg" className="slide"></div>
		</div>	
		<div className="container">
			<Intro />
			<div className="wrapper">
				<About />
				<Experience />
				<Education />
			</div>
			<Footer />
		</div>
	</div>

	)}
}

module.exports = App;