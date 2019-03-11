import React, { Component } from 'react';
import { DogConsumer } from '../../../context';
import DogHembra from './DogHembra'

export default class Hembras extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4">Hembras</h1>
                <p className="lead">Lorem ipsum posum ipsum neandertale</p>
            </div>
        <div className="row">
          <DogConsumer>
              {(value) => {
                  return value.hembrasList.map(dog => {
                      return (
                          <DogHembra key={dog.id} dog={dog} />
                      );
                  })
              }}
          </DogConsumer>
        </div>
    </React.Fragment>
    )
  }
}
