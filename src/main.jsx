import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import Resume from './components/Resume';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
    <App />
  </React.StrictMode>
);