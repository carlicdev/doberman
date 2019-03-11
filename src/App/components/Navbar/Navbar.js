import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
                <Link to="/" className="navbar-brand"><span className="mr-2"><i className="fas fa-home"></i></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ejemplares
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/sementales" className="dropdown-item" >Sementales</Link>
                            <Link to="/hembras" className="dropdown-item" >Hembras</Link>
                            <Link to="/camadas" className="dropdown-item" >Camadas</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-item nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-item nav-link">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;