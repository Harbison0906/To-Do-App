import * as React from 'react';
import { Link } from 'react-router-dom';


interface NavbarState { }
interface NavbarProps { }


export default class Navbar extends React.Component<NavbarProps, NavbarState> {


  render() {
    return (
      <main className="container navbar-container mw-100">
        <section className="row mt-5">
          <div className="col-12">
            <img src="d32179a79311421d84114744874d2b46.png" alt="getuit logo"/>
            {/* <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Your Profile</a>
                <a className="dropdown-item" href="#">Add a Task</a>
              </div>
            </div> */}
          </div>
          <div className="d-flex justify-content-left my-3">
            <Link to="/new_task"><button type="button" className="btn nav-btn mx-3 rounded-sm">New Task</button></Link>
            <Link to="/register"><button type="button" className="btn nav-btn mx-3 rounded-sm">Register</button></Link>
            <Link to="/tasks"><button type="button" className="btn nav-btn mx-3 rounded-sm">Your Tasks</button></Link>
          </div>
        </section>
      </main>

    )
  }

}
