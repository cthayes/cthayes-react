var React = require('react');
module.exports = React.createClass({
	render() { return (
		<div className="section about" id="about-section">
			<div className="content-box">
				<div className="row">
					<div className="col col-m-12 col-t-7 col-d-7">
						<div className="text-box">
							<p><strong>Hello! I’m Christopher Hayes</strong></p>
							<p>I'm a senior software engineer with architecture and leadership experience. I'm passionate about software development with the latest technologies and dedicated to making it perform well. </p>
						</div>
						<div className="bts">
							<a target="_blank" href="https://s3.amazonaws.com/cthayes.public/Christopher_Hayes_Developer.pdf" className="btn">
								<span className="circle">Download Resume</span>
							</a>
							<a target="_blank" href="mailto:chris@cthayes.net" className="btn extra">
								<span className="circle">Contact Me</span>
							</a>
						</div>
					</div>
					<div className="col col-m-12 col-t-5 col-d-5">
						<div className="info-list">
							<ul>
								<li><strong><span>Residence:</span></strong>Baldwin, MD</li>
								<li><strong><span>E-mail:</span></strong>chris@cthayes.net</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	)}
});