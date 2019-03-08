import React, { Component } from 'react';

import img1 from '../../images/maindoberman.jpg';
import img2 from '../../images/dobermann1.jpg'
import img3 from '../../images/doberman-camada.jpg';

class Carousel extends Component {
    render() {
        return (
           <div className="row">
        <div className="col-10 mx-auto">  
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={img1} alt="img1" className="d-block w-100 img-carousel" alt="img1"/>
                                </div>
                                <div className="carousel-item">
                                <img src={img2} alt="img2" className="d-block w-100 img-carousel" alt="img2"/>
                                </div>
                                <div className="carousel-item">
                                <img src={img3} alt="img3" className="d-block w-100 img-carousel" alt="img3"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                </div>
              </div>
    </div>  
        );
    }
}

export default Carousel;