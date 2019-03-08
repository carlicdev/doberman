import React, { Component } from 'react';

import Header from '../Header/Header';

class Dogs extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Hello from Dogs</h1>
            </React.Fragment>
        );
    }
}

export default Dogs;