import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cover from './components/Cover/Cover';
import Home from './components/Home/Home';
import Dogs from './components/Dogs/Dogs';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route path="/home" component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
