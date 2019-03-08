import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="jumbotron">
            <h1 class="display-4">{this.props.title}</h1>
            <p class="lead">{this.props.text}</p>
        </div>
      </React.Fragment>
    )
  }
}

