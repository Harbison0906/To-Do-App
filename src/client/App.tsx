//@ts-nocheck
import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
import Tasks from './views/Tasks';
import Profile from './views/Profile';
import Navbar from './components/Navbar';
import Details from './views/Details';




export default class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
			<Navbar />
				<Switch>
					<Route exact path= "/login" component={Login}/>
					<Route exact path= "/register" component={Register}/>
					<Route exact path= "/profile" component={Profile}/>
					<Route exact path= "/tasks" component={Tasks}/>
					<Route exact path= "/tasks/:bookid" component={Details}/>
				</Switch>
			</BrowserRouter>
		)
	}

}

