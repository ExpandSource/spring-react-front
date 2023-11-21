import { createContext, useContext, useState } from 'react';

// 인증 컨텍스트 생성
const AuthContext = createContext();

// 커스텀 훅 으로 외부로 내보내기
export const useAuth = () => useContext(AuthContext);

// 다른 컴포넌트에 공유할 상태 공급자
export const AuthProvider = ({ children }) => {
  // 상태 1. 인증여부
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 전달2 : 로그인 함수
  const login = (username, password) => {
    if (username === 'abcd' && password === '1234') {
      console.log('인증 성공했습니다.');
      setIsAuthenticated(true);
      return true;
    } else {
      console.log('인증 실패했습니다.');
      setIsAuthenticated(false);
      return false;
    }
  };

  // 3. 로그아웃 함수
  const logout = () => {
    console.log('로그아웃 되었습니다.');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
