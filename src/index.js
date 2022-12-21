import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from "recoil"

import './index.css';

import App from './App';

const main = ReactDOM.createRoot(document.getElementById('main'));

main.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);