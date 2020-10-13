import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
    //provider is a component that is the parent of everything inside our app
    //as a parent it allows us to get access to all of the things related to the store
    //that we put all the actual code we want to store on our redux state
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
