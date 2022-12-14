import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { TodoContextProvider } from './context';

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <TodoContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodoContextProvider>
);