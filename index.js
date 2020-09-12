import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import appForm from './components/appform';
import { register } from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);

