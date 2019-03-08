import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DogProvider } from './context';

import App from './App/App';

render((
    <DogProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DogProvider>
    ), document.getElementById('root'));