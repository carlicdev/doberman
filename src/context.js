import React, { Component } from 'react';
import { machos, detailMacho } from '../src/data';

// Context
const DogContext = React.createContext();

// Provider
class DogProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machosList: [],
            detailDog: detailMacho,
            modalOpen: false,
            modalDog: detailMacho
        };
    }

    componentDidMount() {
        this.setMachos();
        console.log(this.state.machosList);
    }

    setMachos = () => {
        let tempMachos = [];
        machos.forEach(dog => {
            const singleDog = {...dog};
            tempMachos = [...tempMachos, singleDog];
        });
        this.setState(() => {
            return { machosList: tempMachos }
        });
    }

    render() {
        return (
            <DogContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </DogContext.Provider>
        );
    }
}

// Consumer
const DogConsumer = DogContext.Consumer;

export { DogProvider, DogConsumer };