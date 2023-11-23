import React, { useEffect, useState } from 'react';
import { myPageApi } from './api/ApiClient';

function MyPage() {
  const [memberDto, setMemberDto] = useState(null);

  const callApi = async () => {
    const response = await myPageApi();
    console.log(response);

    // 응답받은 데이터 상태값 저장
    setMemberDto(response.data);
  };

  // 페이지가 로드 될때 API 요청하기
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      {memberDto && (
        <div>
          <h2>회원정보</h2>
 ,
          <div>이메일 : {memberDto.email}</div>
          <div>이름 : {memberDto.name}</div>
        </div>
      )}
    </div>
  );
}

export default MyPage;
