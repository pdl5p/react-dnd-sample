import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const render = () => {
    ReactDOM.render(<App />, document.querySelector("#app"));
}

render();

if (module.hot) {
    module.hot.accept('./App', () => {
        render();
    })
}