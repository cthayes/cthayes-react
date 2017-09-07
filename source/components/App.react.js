import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import Intro from './Intro.react'
import About from './About.react'
import Experience from './Experience.react'
import Education from './Education.react'
import Footer from './Footer.react'


class App extends React.Component {
	render() {
		return(
			<div className="page" id="home-section">		
				<div className="started-bg">
					<div id="particles-bg" className="slide"></div>
				</div>	
				<div className="container">
					<Intro />
					<div className="wrapper">
						<Router>
							<div className="section works">
								<div className="filter-menu">
									<div className="filters">
										<div className="btn-group">
											<NavLink to="/" exact={true} className="f_btn">
												<div className="circle">
													<label><input type="radio" name="fl_radio" value="f-mockup" />About</label>
												</div>
											</NavLink>
											<NavLink to="/experience" className="f_btn">
												<div className="circle">
													<label><input type="radio" name="fl_radio" value="f-mockup" />Experience</label>
												</div>
											</NavLink>
											<NavLink  to="/education" className="f_btn">
												<div className="circle">
													<label><input type="radio" name="fl_radio" value="f-graphic" />Education</label>
												</div>
											</NavLink>
										</div>
									</div>
								</div>
								<Route exact path="/" component={About} />
								<Route exact path="/experience" component={Experience} />
								<Route exact path="/education" component={Education} />
							</div>
						</Router>
					</div>
					<Footer />
				</div>
			</div>
		)}
};

export default App