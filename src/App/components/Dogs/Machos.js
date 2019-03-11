import React, { Component } from 'react';

import { DogConsumer } from '../../../context';
import Dog from './Dog'

class Machos extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4">Sementales</h1>
                <p className="lead">Lorem ipsum posum ipsum neandertale</p>
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