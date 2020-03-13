import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NewApp from "./NewApp"
import * as serviceWorker from './serviceWorker';
import "./reduxdemo/store"
import {Provider} from "react-redux"
import MyStore from "./reduxdemo/store"

ReactDOM.render(<Provider store={MyStore}>
    <NewApp />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
