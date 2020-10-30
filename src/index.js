import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {MainLayout} from './components/layouts/MainLayout';
import {Sidebar} from './components/Sidebar';
import {Content} from './components/Content';
ReactDOM.render(
  <React.StrictMode>
   <MainLayout>
     <h1>Hellpo</h1>
     <Sidebar/>
     <Content/>
     </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
