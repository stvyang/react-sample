import React from 'react'; // Library to create React Component
import ReactDOM from 'react-dom'; // Library to place Component to DOM
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'),
);
