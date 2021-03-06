//@ts-nocheck
import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
import Tasks from './views/Tasks';
import Profile from './views/Profile';
import Navbar from './components/Navbar';
import Admin from './views/Admin';
import AddTask from './views/addTask';



const App: React.FC<> = props => {

		return (
			<BrowserRouter>
			<Navbar />

				<Switch>
					<Route exact path= "/" component={Login}/>
					<Route exact path= "/register" component={Register}/>
					<Route exact path= "/profile" component={Profile}/>
					<Route exact path= "/new_task" component={AddTask}/>
					<Route exact path= "/tasks" component={Tasks}/>
					<Route exact path= "/tasks/:taskid" component={Admin}/>
				</Switch>
			</BrowserRouter>
		)
}

export default App;
