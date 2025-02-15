import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/Home.css';
import './styles/style.css';
import './styles/vendor.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// This file is the entry point of your React application.
// It is responsible for rendering the root component (App) into the DOM.
// It sets up the React application by importing necessary styles and libraries.
// It typically includes the createRoot method from react-dom/client to render the application.