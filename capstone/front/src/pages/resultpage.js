import React, { useState, useEffect } from 'react';
import '../styles/resultpage.css';
import Dashboard from '../components/Dashboard';
import { useNavigate } from 'react-router-dom';

function ResultPage({ onBack }) {
  const [imageData, setImageData] = useState({});
  const [predictionDetails, setPredictionDetails] = useState([]);
  const [finalResult, setFinalResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage에서 선택된 이미지 정보 가져오기
    const savedImageData = JSON.parse(localStorage.getItem('selectedImage'));
    if (savedImageData) {
      setImageData(savedImageData);
      // 여기에 AI 예측 결과 및 상세 정보를 설정
      setPredictionDetails([
        { message: 'Image processed successfully', error: false },
        { message: 'Fitness score: 0.85', error: false },
        { message: 'BCS score: 4', error: false },
      ]);
      setFinalResult('Prediction Successful');
    }
      console.log(savedImageData);
  }, []);

  const goToLogin = () => {
    navigate('/login');
  };

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
            <div className="result-page">
                <div className="result-header">
                    <h2>{imageData.name || '이미지 없음'}</h2>
                    <button className="start-predictions-button"> Start AI Predictions</button>
                    <button className="back-button" onClick={onBack}>Back</button>
                </div>
                <div className="result-content">
                    <img src={imageData.src} alt={imageData.name || 'default_image'} className="result-image" />
                    <div className="prediction-container">
                    <div className="prediction-details">
                      <h3>&nbsp;Prediction Details</h3>
                      {predictionDetails.map((detail, index) => (
                      <p key={index} className={detail.error ? 'error' : 'normal'}>
                        {detail.message}
                      </p>
                      ))}
                    </div>
                    <div className="final-result-container">
                        <h3>&nbsp;AI Prediction Final Result</h3>
                        <p className="final-result">{finalResult}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
;
}

export default ResultPage;