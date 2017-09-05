let React = require('react');
let ReactDOM = require('react-dom');
let createStore = require('redux').createStore;
let Provider = require('react-redux').Provider;

let App = require('./components/App.react');
let reducer = require('./redux/reducer');
const store = createStore(reducer);

const render = () => ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('react-application'));

render();
store.subscribe(render);