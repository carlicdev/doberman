import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
                <Link to="/" className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                        <Link to="/dogs" className="nav-item nav-link">Ejemplares</Link>
                        <Link to="/about" className="nav-item nav-link">Nosotros</Link>
                        <Link to="/contact" className="nav-item nav-link">Contacto</Link>
                   </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;