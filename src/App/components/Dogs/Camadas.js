import React, { Component } from 'react'
import { DogConsumer } from '../../../context';
import Camada from './Camada'

export default class Camadas extends Component {
  render() {
    return (
        <React.Fragment>
                        <div className="jumbotron">
                <h1 className="display-4">Camadas</h1>
                <p className="lead">Lorem ipsum posum ipsum neandertale</p>
            </div>
            <DogConsumer>
              {(value) => {
                  return value.camadasList.map(camada => {
                      return (
                          <Camada key={camada.id} camada={camada} />
                      );
                  })
              }}
          </DogConsumer>
    </React.Fragment>
    )
  }
}
