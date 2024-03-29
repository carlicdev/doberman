import React, { Component } from 'react'

export default class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

  render() {
    return this.props.children;
  }
}
