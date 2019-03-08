import React, { Component } from 'react';

import img1 from '../../images/maindoberman.jpg';
import img2 from '../../images/dobermann1.jpg'
import img3 from '../../images/doberman-camada.jpg';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row featurette">
                    <div className="col-md-7 text-center p-5 m-auto">
                    <h1 className="mt-5">Historia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc. Nam mi purus, finibus aliquet vestibulum ut, semper eu quam. Donec et sem id massa malesuada vestibulum. Mauris rhoncus magna ac malesuada eleifend.</p>
                     </div>
                    <div className="col-md-5 m-auto">
                        <img src={img3} alt="..." className="img-about" />
                    </div>
                </div>
                <hr/>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2 text-center p-5 m-auto">
                    <h1 className="mt-5">Misión</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc. Nam mi purus, finibus aliquet vestibulum ut, semper eu quam. Donec et sem id massa malesuada vestibulum. Mauris rhoncus magna ac malesuada eleifend.</p>                    </div>
                    <div className="col-md-5 order-md-1 m-auto">
                        <img src={img2} alt="..." className="img-about" />
                    </div>
                </div>
                <hr/>
                <div className="row featurette">
                    <div className="col-md-7 text-center p-5 m-auto">
                    <h1 className="mt-5">Visión</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc. Nam mi purus, finibus aliquet vestibulum ut, semper eu quam. Donec et sem id massa malesuada vestibulum. Mauris rhoncus magna ac malesuada eleifend.</p>                    </div>
                    <div className="col-md-5 m-auto">
                        <img src={img1} alt="..." className="img-about m-auto" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;