import React from 'react';
import ReactDOM from 'react-dom';
//import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import WebFont from 'webfontloader';

/*WebFont.load({
    google: {
        families: ['Lobster:300,400,700', 'sans-serif']
    }
})*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

