import React, { Component } from 'react';

import logo from '../../images/bigSlick6.png';

class Footer extends Component {
    render() {
        return (
            <nav className="navbar footer justify-content-center p-1">
                <p className="text-muted ">Website made by
                    <a href="#" >
                        <img src={logo} alt="logo" className="bs-logo" />
                    </a>
                </p>
            </nav>
        );
    }
}

export default Footer;