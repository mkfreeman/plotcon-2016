// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import {createStore} from 'redux';
import App from './App.js';
import reducers from './reducers/Reducer.jsx';

// Create object store of reducer states
let store = createStore(reducers);

// Render project page in the root
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.querySelector('#root')
);
