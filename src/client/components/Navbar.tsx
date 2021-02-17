import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavbarState { }
interface NavbarProps { }


export default class Navbar extends React.Component<NavbarProps, NavbarState> {


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">GET2IT</h1>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Your Profile</a>
                <a className="dropdown-item" href="#">Add a Task</a>
              </div>
            </div>
          </div>
        </section>
      </main>

    )
  }

}
