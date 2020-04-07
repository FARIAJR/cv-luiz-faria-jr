import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import jQuery
import '../node_modules/jquery/dist/jquery'
// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// font awesome
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './global/vendor/fontawesome-free/css/all.min.css'
// css custom
import './global/css/resume.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
