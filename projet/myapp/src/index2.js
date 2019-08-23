// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './components/Store';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
