import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import '../styles/ImageList.css';


function ImageList() {
  const location = useLocation();
  const { workspace } = location.state || {}; // 전달된 워크스페이스 데이터

  const [selectedPhoto, setSelectedPhoto] = useState(null); // 클릭한 사진

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // 클릭된 사진 데이터 저장
  };

  return (
    <div className="content">
      <div className="image-list-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <h2 style={{ margin: 0 }}>X-ray Verifier</h2>
          <div style={{ marginLeft: 'auto' }}>
            <button className="open-folder-button">Open New Folder</button>
          </div>
        </div>
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {workspace && (
        <div style={{ marginTop: "20px" }}>
          <h3>선택된 워크스페이스의 파일 목록</h3>
          <ul>
            {workspace.photos.map((photo) => (
              <li
                key={photo.id}
                onClick={() => handlePhotoClick(photo)}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                {photo.fileName}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedPhoto && (
        <div style={{ marginTop: "20px" }}>
          <h3>선택된 사진</h3>
          <img
            src={`http://192.168.0.168:8080/api/photos/${workspace.id}/${selectedPhoto.fileName}`}
            alt={selectedPhoto.fileName}
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageList;
