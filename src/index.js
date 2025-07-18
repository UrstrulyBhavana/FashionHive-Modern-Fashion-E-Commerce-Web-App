import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';

import "./assets/css/style.css"
import "./assets/css/color.css"
import "./assets/css/responsive.css" 
import "./assets/css/animate.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MessengerCustomerChat pageId="105124045291751" appId="385408413223722" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



