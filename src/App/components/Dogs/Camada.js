import React, { Component } from 'react'

import { DogConsumer } from '../../../context';
import { ButtonContainer } from '../Button/Button';


export default class Camada extends Component {
  render() {
      const { id, name, img, birth, madre, padre, cachorros } = this.props.camada;
    return (
        <div className="col-11 mx-auto col-lg-6 my-3">
        <div class="card mb-3">
        <DogConsumer>
            {(value) => {
                return (
                    <div>
                    <div className="card-header tag-container">{name}</div>
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Por <b>{padre}</b> en <b>{madre}</b></h5>
                        <p class="card-text">Nacidos el {birth}.</p>
                        <p class="card-text"><small class="text-muted">{cachorros.hembras} hembras y {cachorros.machos} machos.</small></p>
                    </div>
                    </div>
                );
            }}
        </DogConsumer>
</div>
      </div>
    )
  }
}
