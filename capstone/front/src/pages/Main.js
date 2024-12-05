import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import '../styles/Main.css';
import ImageList from '../components/ImageList';

function Main() {
  const navigate = useNavigate();
  const [selectedWorkspace, setSelectedWorkspace] = useState(null); // 워크스페이스 상태 관리

  const goToLogin = () => {
    navigate('/login');
  };

  // const goToImageList = () => {
  //   if (selectedWorkspace) {
  //     navigate('/imagelist', { state: { workspace: selectedWorkspace } });
  //   } else {
  //     alert('워크스페이스를 선택하세요!');
  //   }
  // };

  return (
    <div className="main-container">
      <div className="sidebar">
        <Dashboard />
      </div>
      <div className="content">
        <div className="navbar">
          <button onClick={goToLogin} className="user-button">로그인</button>
        </div>
        <div className="selected-content-container">
          <img
            className="reverse_logo"
            src={require('../image/reverse_logo.png')}
            alt="logo"
          />
          <ImageList />
        </div>
      </div>
    </div>
  );
}

export default Main;
