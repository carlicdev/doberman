import React, { Component } from 'react'
import { DogConsumer } from '../../../context';
import Camada from './Camada'

export default class Camadas extends Component {
  render() {
    return (
        <React.Fragment>
                        <div class="jumbotron">
                <h1 class="display-4">Camadas</h1>
                <p class="lead">Lorem ipsum posum ipsum neandertale</p>
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
