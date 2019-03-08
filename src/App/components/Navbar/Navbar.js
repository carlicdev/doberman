import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
                <Link to="/" className="navbar-brand" href="#"><span className="mr-2"><i className="fas fa-home fa-2x"></i></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ejemplares
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/dogs" class="dropdown-item" >Machos</Link>
                            <Link to="/dogs" class="dropdown-item" >Hembras</Link>
                            <Link to="/dogs" class="dropdown-item" >Camadas</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                        <Link to="/about" className="nav-item nav-link">Nosotros</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/contact" className="nav-item nav-link">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;