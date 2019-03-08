import React, { Component } from 'react';

import { DogConsumer } from '../../../context';
import { ButtonContainer } from '../Button/Button';

class Dog extends Component {
    render() {
        const { id, name, img, description, age, titles } = this.props.dog;
        return (
            <div className="col-8 mx-auto col-md-6 col-lg-5 my-3">
                <div className="card mb-3">
                    <DogConsumer>
                        {(value) => {
return (
                    <div className="row no-gutters">
                        <div className="col-sm-4">
                            <img src={img} className="card-img" alt={id}/>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p class="card-text"><small class="text-muted"><span>{age}</span> años</small></p>
                                <p className="card-text">{description}</p>
                                <div className="container">
                        <ButtonContainer>pedigree</ButtonContainer>
                        <ButtonContainer>conocer</ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
);
                        }}
                    </DogConsumer>
                </div>
            </div>
        );
    }
}

export default Dog;