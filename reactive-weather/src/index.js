import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// React DOM takes row arguments, name of the component and the location of the place we want to parse our App to.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
