import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonContainer } from '../Button/Button';

class Cover extends Component {
    render() {
        return (
            <div className="cover-container">
                <div className="row" id="cover-hero">
                <div classname="container">
                    <Link to="/home">
                        <ButtonContainer className="center-me">Entrar</ButtonContainer>
                    </Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Cover;