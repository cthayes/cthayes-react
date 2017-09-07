import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App.react'
import reducer from './redux/reducer'

const store = createStore(reducer);

const render = () => ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('react-application'));

render();
store.subscribe(render);