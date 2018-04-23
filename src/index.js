import React from 'react'; // Library to create React Component
import ReactDOM from 'react-dom'; // Library to place Component to DOM
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App txt="prop" />, document.getElementById('root'));
registerServiceWorker();
