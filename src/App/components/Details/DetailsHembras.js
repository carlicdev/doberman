import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DogConsumer } from '../../../context';
import { ButtonContainer } from '../Button/Button';

export default class Details extends Component {
  render() {
    return (
      <DogConsumer>
          {(value) => {
              const {id, name, img, age, description, info, titles } = value.detailHembra;
              return (
                  <div className="container py-5">
                    {/* title */}
                    <div className="row">
                      <div className="col-10 mx-auto text-center text-slanted my-5">
                        <h1>{name}</h1>
                      </div>
                    </div>
                    {/* ends title */}
                    {/* dog info */}
                    <div className="row">
                      <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} alt="dog" className="img-fluid" />
                      </div>
                      {/* dog text */}
                      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h5>Edad: {age}</h5>
                        <p className="text-muted lead">{description}</p>
                        <p>{info}</p>
                        <h3 className="text-center">Titulos</h3>
                        <p className="lead font-weight-bold">{titles}</p>
                        <div>
                        <Link to="/hembras">
                                  <ButtonContainer details >
                                    volver
                                  </ButtonContainer>
                              </Link>
                            <Link to="/contact">
                              <ButtonContainer details>
                                  contacto
                              </ButtonContainer>
                            </Link>

                        </div>
                      </div>
                    </div>
                  </div>
              );
          }}
      </DogConsumer>
    )
  }
}
