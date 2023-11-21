import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Join from './Join';
import MyPage from './MyPage';
import Logout from './Logout';
import Header from './Header';

function AuthApp() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AuthApp;
