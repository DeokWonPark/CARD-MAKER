import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/authService'

const auth_service=new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App auth_service={auth_service}/>
  </React.StrictMode>,
  document.getElementById('root')
);

