import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './Demo';
import Rout from './Rout';
import Rout1 from './Rout1';
import {BrowserRouter as Router} from 'react-router-dom'
import DynamicRouting from './DynamicRouting';



ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Demo/> */}
   {/* <Rout/> */}
  
   {/* <Router>
   <Rout1/>
   </Router> */}

   {/* <DynamicRouting/> */}

   

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
