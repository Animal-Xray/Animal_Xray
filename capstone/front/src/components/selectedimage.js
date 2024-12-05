  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import '../styles/selectedimage.css';

  function SelectedImage({src, onClose, imageName, imageScore, imageBcs, imageType, imageCapacity, imageDate}) {
    const navigate = useNavigate();
    if (!src) {
      return null; // src가 없으면 아무것도 렌더링하지 않음
    }

    // useNavigate는 최상위에서 호출해야 함

    // 로컬 스토리지에서 이미지를 가져오고 src 경로를 수정
    const storedData = localStorage.getItem("selectedImage");
    let selectedImage = storedData ? JSON.parse(storedData) : null;
    selectedImage.src = selectedImage.src.replace('/static/media/', '/testimage/');
    console.log("console.log", selectedImage.src); // 수정된 src 경로 확인

    const handleStartPredictions = async (event) => {
      event.preventDefault(); // 새로고침 방지
      onClose();
      try {
        // 분석 요청 API 호출
        await axios.post('http://127.0.0.1:8000/file/', {
          path: selectedImage.src, // 이미지 경로를 서버에 전달
        });

        console.log("Request sent successfully!");
        navigate('/result'); // 'result' 페이지로 이동
      } catch (error) {
        console.error('Error during prediction:', error);
        alert('분석 요청 중 오류가 발생했습니다.');
      }
    };

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>&lt;&nbsp;BACK</button>
          <h2 style={{ color: 'white' }}>{imageName}</h2>
          <h3 style={{ color: 'white' }}>Fitness: {imageScore} / BCS: {imageBcs}</h3>
          <img src={src} alt="Selected" className="modal-image" />
          <button type="button" className="start-predictions-button" onClick={handleStartPredictions}>
            Start AI Predictions
          </button>
        </div>
      </div>
    );
  }

  export default SelectedImage;
