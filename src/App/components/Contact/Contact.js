import React, { Component } from 'react';

import contact from '../../images/doberman-parallax.jpg';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                            <div className="jumbotron">
                <h1 className="display-4">Contacto</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac.</p>
            </div>
                <div className="mb-5">
                <div className="col-md-9 m-auto">
                <div className="card bg-dark border-light justify-content-isnide text-white mb-5">
                    <img src={contact} className="card-img" alt="..." />
                    <div className="card-header tag-container">Contacto</div>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Criadero</h5>
                        <div className="text-center">
                                        <ul className="mt-3">
                                            <li className="p-1"><span className="mr-2"><i className="fab fa-whatsapp fa-3x"></i></span> 55-55-55-55</li>
                                            <li className="p-1"><span className="mr-2"><i className="fas fa-envelope fa-3x"></i></span> bigslick.dev@gmail.com</li>
                                        </ul>
                                    </div>
                    </div>
                </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;