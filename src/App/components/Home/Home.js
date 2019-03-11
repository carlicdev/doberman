import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';
import {ButtonContainer} from '../Button/Button';

import img1 from '../../images/maindoberman.jpg';
import img2 from '../../images/dobermann1.jpg'
import img3 from '../../images/doberman-camada.jpg';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row featurette">
                    <div className="col-md-7 text-center p-5">
                        <div class="jumbotron text-center">
                            <h1 class="display-4">Main Logo</h1>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo.</p>
                            <Link to="/about">
                                <ButtonContainer>
                                    quienes somos
                                </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Carousel />
                    </div>
                </div>


                <div className="row mt-5 text-center">
                    <div className="col-8 mx-auto col-md-6 col-lg-4 mb-5 p-2">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <Link to="/sementales">
                            <ButtonContainer>
                                Sementales
                            </ButtonContainer>
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-8 mx-auto col-md-6 col-lg-4 mb-5 p-2">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/hembras">
                            <ButtonContainer>
                                Hembras
                            </ButtonContainer>
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-8 mx-auto col-md-6 col-lg-4 mb-5 p-2">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/camadas">
                            <ButtonContainer>
                                Camadas
                            </ButtonContainer>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Home;