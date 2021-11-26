import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import createStore from './redux/configureStore';

const store = createStore();

ReactDOM.hydrate(
  <React.StrictMode>
    <App Router={BrowserRouter} store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
