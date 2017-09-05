var React = require('react');
var ReactDOM = require('react-dom');

var Intro = require('./components/Intro.react');
var About = require('./components/About.react');
var Experience = require('./components/Experience.react');
var Education = require('./components/Education.react');
var Footer = require('./components/Footer.react');

ReactDOM.render(<Intro />, document.getElementById('react-intro'));
ReactDOM.render(<About />, document.getElementById('react-about'));
ReactDOM.render(<Experience />, document.getElementById('react-experience'));
ReactDOM.render(<Education />, document.getElementById('react-education'));
ReactDOM.render(<Footer />, document.getElementById('react-footer'));

