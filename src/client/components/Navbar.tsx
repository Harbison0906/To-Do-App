import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


interface NavbarProps extends RouteComponentProps { }

const Navbar: React.FC <NavbarProps> = props => {

  
    return (
      <main className="container navbar-container mw-100">
        <section className="row mt-5">
          <div className="col-12">
            <h2 id="logo" className="text-right">GETUIT</h2>
            {/* <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Your Profile</a>
                <a className="dropdown-item" href="#">Add a Task</a>
              </div>
            </div> */}
          </div>
          <div className="d-flex my-3">
            <Link to="/tasks"><button type="button" className="btn nav-btn mx-3 rounded-sm text-left">Your Tasks</button></Link>
            <Link to="/new_task"><button type="button" className="btn nav-btn mx-3 rounded-sm text-left ">New Task</button></Link>
          </div>
          <div className="d-flex my-3 justify-content-right">
          <Link to="/register"><button type="button" className="btn nav-btn mx-3 rounded-sm text-right">Register</button></Link>
            <Link to="/login"><button type="button" className="btn nav-btn mx-3 rounded-sm text-right">Login</button></Link>
          </div>
        </section>
      </main>

    )
  

}
export default Navbar;
