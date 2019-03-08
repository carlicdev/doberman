import React, { Component } from 'react';

import img1 from '../../images/doberman-camada.jpg';
class Header extends Component {
    render() {
        return (
            <div className="header-container">
            <div class="card bg-dark text-white">
                <img src={img1} class="card-img header-img" alt="..."/>
                <div class="card-img-overlay">
                    <h1 class="card-title">Sementales</h1>
                </div>
            </div>
            </div>
        );
    }
}

export default Header;