import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Result from './pages/resultpage';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
        <Route path="/:workspaceId" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
