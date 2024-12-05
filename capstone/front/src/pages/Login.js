import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
	  console.log(response)
      setMessage("로그인 성공: " + response.status);
    } catch (error) {
      setMessage("로그인 실패: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="login-container">
      <img 
        src={require('../image/colored_logo.png')} 
        alt="logo" 
        className="colored_logo" 
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />
      <h2>Log in</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
        <button type="button" className="signup-button" onClick={() => navigate('/signup')}>Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;