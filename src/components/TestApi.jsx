import axios from 'axios';
import React, { useState } from 'react';

function TestApi() {
  const [message, setMessage] = useState(null);

  const callApi = () => {
    const url = 'http://localhost:8080/hello';
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
        setMessage(text);
      })
      .catch((e) => console.error(e));
  };

  const callApiAxios = () => {
    const url = 'http://localhost:8080/hello';
    axios.get(url).then((response) => setMessage(response.data));
  };

  return (
    <div>
      <button onClick={callApiAxios}>백엔드에서 불러오기</button>
      <h2>{message}</h2>
    </div>
  );
}

export default TestApi;
