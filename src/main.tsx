import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { WelcomeMsgProvider } from './context/WelcomeMsgProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <WelcomeMsgProvider>
        <App />
      </WelcomeMsgProvider>
    </BrowserRouter>
  </React.StrictMode>
);
