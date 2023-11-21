import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to='/login'>로그인</Link>
      <Link to='/join'>회원가입</Link>
      <Link to='/myPage'>회원정보</Link>
      <Link to='/logout'>로그아웃</Link>
    </div>
  );
}

export default Header;
