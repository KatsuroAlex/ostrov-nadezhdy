import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//     <HashRouter>
//       <App />
//     {/* </BrowserRouter>  */}
//     </HashRouter> 
//   </React.StrictMode>
// );