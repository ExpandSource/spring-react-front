import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Join from './Join';
import MyPage from './MyPage';
import Logout from './Logout';
import Header from './Header';
import { AuthProvider } from './security/AuthContext';

function AuthApp() {
  return (
    <div>
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default AuthApp;
