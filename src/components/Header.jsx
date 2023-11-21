import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function Header() {
  // 컨텍스트에서 인증 정보를 받아와서 인증여부에 따라 렌더링을 다르게 함.
  const { isAuthenticated } = useAuth();
  return (
    <div>
      {!isAuthenticated && <Link to='/login'>로그인</Link>}
      {!isAuthenticated && <Link to='/join'>회원가입</Link>}
      {isAuthenticated && <Link to='/myPage'>회원정보</Link>}
      {isAuthenticated && <Link to='/logout'>로그아웃</Link>}
    </div>
  );
}

export default Header;
