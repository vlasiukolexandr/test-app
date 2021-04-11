import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
