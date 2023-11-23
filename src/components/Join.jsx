import axios from 'axios';
import React from 'react';

function Join() {
  function handleSubmit(event) {
    // 기본 새로고침 방지
    event.preventDefault();

    const form = event.target; // 폼 태그 데이터
    const formData = new FormData(form); // 폼 데이터 가져오는 객체

    const url = 'http://localhost:8080/api/member';
    axios.post(url, formData).then((reponse) => {
      if (reponse.status === 200) {
        console.log(reponse);
        console.log('회원가입이 완료되었습니다. ', reponse.data);
        alert('회원가입이 완료되었습니다.');
      }
    });
  }
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
