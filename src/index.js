import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './styles/Style.css';
import Logo from './components/Logo.js';
import DashBoard from './components/DashBoard.js';
import Expenses from './components/Expenses.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Logo />
  <DashBoard />
  <Expenses />
  </>
);
