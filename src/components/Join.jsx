import React from 'react';

function Join() {
  function handleSubmit() {}
  return (
    <div>
      <h2>회원가입</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div>
          <input type='email' name='email' placeholder='email을 입력하세요.' />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
          />
        </div>
        <div>
          <input type='text' name='name' placeholder='사용자명을 입력하세요' />
        </div>
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default Join;
