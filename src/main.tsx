import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Template from './components/Templete.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Template>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Template>
  </StrictMode>
);
