import React, {Component, PropTypes} from 'react'
import { Route, IndexRoute } from 'react-router'


import Main from '../components/Main'
import Timer from '../components/Timer'
import Signup from '../components/Signup'
import Contacts from '../components/Contacts'
import Intro from '../components/Intro'
import About from '../components/About'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={Intro}/>
		<Route path="about" component={About}/>
		<Route path="contacts" component={Contacts}/>
		<Route path="timer" component={Timer}/>
		<Route path="login" component={Login}/>
		<Route path="signup" component={Signup}/>
		<Route path="*" component={NotFound}/>
	</Route>
)