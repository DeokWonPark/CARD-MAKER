import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/authService'
import Clouldnary from './service/clouldnary'

const auth_service=new AuthService();
const clouldnary=new Clouldnary(process.env.REACT_APP_CLOULDNARY_NAME);
ReactDOM.render(
  <React.StrictMode>
    <App auth_service={auth_service} clouldnary={clouldnary}/>
  </React.StrictMode>,
  document.getElementById('root')
);

