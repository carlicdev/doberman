import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Machos from './components/Dogs/Machos';
import Hembras from './components/Dogs/Hembras';
import Camadas from './components/Dogs/Camadas';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sementales" component={Machos} />
          <Route path="/hembras" component={Hembras} />
          <Route path="/camadas" component={Camadas} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
