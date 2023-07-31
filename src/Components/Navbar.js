import React, { Component } from 'react';
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsAddicts</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Politics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Bollywood</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;