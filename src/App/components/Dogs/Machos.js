import React, { Component } from 'react';

import { DogConsumer } from '../../../context';
import Dog from './Dog'

class Machos extends Component {
    render() {
        return (
            <React.Fragment>
            <div class="jumbotron">
                <h1 class="display-4">Sementales</h1>
                <p class="lead">Lorem ipsum posum ipsum neandertale</p>
            </div>
                <div className="row">
                  <DogConsumer>
                      {(value) => {
                          return value.machosList.map(dog => {
                              return (
                                  <Dog key={dog.id} dog={dog} />
                              );
                          })
                      }}
                  </DogConsumer>
                </div>
            </React.Fragment>
        );
    }
}

export default Machos;