import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProvider } from './Context';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <AppProvider>
  <App />
  </AppProvider>
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <AppProvider>
//   <App />
//   </AppProvider>
//   </React.StrictMode>
// );
