import React, { Component } from 'react';
import { machos, detailMacho, hembras, camadas } from '../src/data';

// Context
const DogContext = React.createContext();

// Provider
class DogProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machosList: [],
            hembrasList: [],
            camadasList: [],
            detailDog: detailMacho,
            modalOpen: false,
            modalDog: detailMacho
        };
    }

    componentDidMount() {
        this.setMachos();
        this.setHembras();
        this.setCamadas();
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

    setHembras = () => {
        let tempHembras = [];
        hembras.forEach(dog => {
            const singleDog = {...dog};
            tempHembras = [...tempHembras, singleDog];
        });
        this.setState(() => {
            return { hembrasList: tempHembras }
        });
    }

    setCamadas = () => {
        let tempCamadas = [];
        camadas.forEach(camada => {
            const singleCamada = {...camada};
            tempCamadas = [...tempCamadas, singleCamada];
        });
        this.setState(() => {
            return { camadasList: tempCamadas }
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