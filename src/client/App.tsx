//@ts-nocheck
import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
import Tasks from './views/Tasks';




export default class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path= "/login" component={Login}/>
					<Route exact path= "/register" component={Register}/>
					<Route exact path= "/" component={Tasks}/>
				</Switch>
			</BrowserRouter>
		)
	}

}

