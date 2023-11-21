import React, { useState } from 'react';
import { useAuth } from './security/AuthContext';

function Login() {
  // 인증 컨텍스트에서 값을 전달받는다.
  const { isAuthenticated, login } = useAuth();

  // 제출 버튼 누를시 수행되는 함수
  const handleSubmit = async (e) => {
    // 기본 새로고침 방지
    e.preventDefault();

    const form = e.target; // 폼 태그 데이터
    const formData = new FormData(form); // 폼 데이터 가져오는 객체

    const email = formData.get('email');
    const password = formData.get('password');

    // 인증 컨텍스트에서 로그인 함수 받아 실행
    login(email, password);
  };
  return (
    <div>
      <h2>로그인 페이지</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='email을 입력하세요.'
          />
        </div>
        <div>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
          />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default Login;
