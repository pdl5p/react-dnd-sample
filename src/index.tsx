import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { applyMiddleware, compose, createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
//import { createBrowserHistory } from 'history'
//import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
//import { routerMiddleware, connectRouter } from 'connected-react-router'

import reducer from './reducers';
import App from './App';

import './styles/index.scss';

interface IWX extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const composeEnhancer = (window as IWX).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer());

const render = () => {
    ReactDOM.render(
        <AppContainer><Provider store={store}><App store={store} /></Provider></AppContainer>,
        document.querySelector("#app"));
}

render();

if (module.hot) {
    module.hot.accept('./App', () => {
        render();
    });
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
        // store.replaceReducer(reducer);
    });
}