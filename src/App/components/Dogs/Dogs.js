import React, { Component } from 'react';

import { DogConsumer } from '../../../context';
import Dog from './Dog'

class Dogs extends Component {
    render() {
        return (
            <React.Fragment>
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

export default Dogs;