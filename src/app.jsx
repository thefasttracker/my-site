import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Router, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'

// import './styles/bootstrap.min.css'
import './styles/app.scss'

// //foundation css
// import 'style!css!foundation-sites/dist/css/foundation.min.css'
// $(document).foundation();

// //app css
// import 'style!css!sass!applicationStyles'

import configureStore from './store/configureStore';

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />		
	</Provider>, 
	document.getElementById('app')
);