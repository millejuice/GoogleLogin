// 예를 들어 Home 컴포넌트에 링크 추가
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';

function Home() {
  return (
    <div>
        <h1>구글 로그인 예제</h1>
      <GoogleLoginButton />
      <h1>Home Page</h1>
      <Link to="/loginSuccess">Login Success</Link>
    </div>
  );
}

export default Home;
