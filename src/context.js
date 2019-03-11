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
            detailHembra: detailMacho,
            modalOpen: false,
            modalDog: detailMacho
        };
        this.handleDetail = this.handleDetail.bind(this);
        this.handleDetailHembra = this.handleDetailHembra.bind(this);
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

    getDog = (id) => {
        const dog = this.state.machosList.find(dog => dog.id === id);
        return dog;
    }

    getHembra = (id) => {
        const dog = this.state.hembrasList.find(dog => dog.id === id);
        return dog;
    }

    handleDetail = (id) => {
        const dog = this.getDog(id);
        this.setState(() => {
            return {detailDog: dog}
        });
    }

    handleDetailHembra = (id) => {
        const dog = this.getHembra(id);
        this.setState(() => {
            return {detailHembra: dog}
        });
    }

    render() {
        return (
            <DogContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleDetailHembra: this.handleDetailHembra,
            }}>
                {this.props.children}
            </DogContext.Provider>
        );
    }
}

// Consumer
const DogConsumer = DogContext.Consumer;

export { DogProvider, DogConsumer };