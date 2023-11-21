import React from 'react';

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
  };
  return (
    <div>
      <h2>로그인 페이지</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div>
          <input
            id='email'
            type='email'
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
