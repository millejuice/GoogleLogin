import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginSuccess from './LoginSuccess';
import GoogleLoginButton from './GoogleLoginButton';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        {/* 다른 경로들을 여기에 추가할 수 있습니다. */}
      </Routes>
    </div>
  );
}

export default App;
