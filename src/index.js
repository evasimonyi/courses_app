import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import App from './App';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="courses" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
