import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './globalStyle'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <GlobalStyle/>
  </React.StrictMode>,
  rootElement
)