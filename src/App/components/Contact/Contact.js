import React, { Component } from 'react';

import contact from '../../images/maindoberman.jpg';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5 mb-2">
                    <div className="container">
                        <div className="row contact-background p-0">
                            <div className="col-md-4">
                                <div className="img-container">
                                    <img src={contact} alt="contacto" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container text-center p-5">
                                    <h3>Contacto</h3>
                                    <div className="container p-5">
                                        <ul className="mt-3">
                                            <li className="p-1"><span className="mr-2"><i className="fab fa-whatsapp"></i></span> 55-55-55-55</li>
                                            <li className="p-1"><span className="mr-2"><i className="fas fa-envelope"></i></span> bigslick.dev@gmail.com</li>
                                        </ul>
                                    </div>
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