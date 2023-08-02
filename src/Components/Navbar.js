import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">
              NewsAddicts
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/General">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/World">
                    World
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Bussiness">
                    Bussiness
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Health">
                    Health
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
