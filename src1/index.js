import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NewApp from './newApp'
import * as serviceWorker from './serviceWorker';
//import Login from './Login'
import {Provider} from 'react-redux'
import "./Redux/Store"
import RStore from './Redux/Store'


ReactDOM.render(<Provider store={RStore}><NewApp/></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
