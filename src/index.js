import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import AuthService from './service/authService';
import ImageUpload from './service/imageUpload';


const authService=new AuthService();
const imageUpload=new ImageUpload();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageUpload={imageUpload}/>
  </React.StrictMode>,
  document.getElementById('root')
);

