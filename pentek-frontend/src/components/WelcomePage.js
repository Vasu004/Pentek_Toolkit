import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/recon');
  };

  return (
    <div style={{
      backgroundColor: "#0d1117",
      color: "#00ff00",
      fontFamily: "monospace",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <h1>🛡️ Penetration Testing Toolkit</h1>
      <p style={{ maxWidth: "600px", textAlign: "center" }}>
        Welcome to Pentek - a simple yet powerful toolkit that automates key phases of penetration testing like Reconnaissance, Scanning, and Vulnerability Assessment.
      </p>
      <button
        onClick={handleStart}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#238636",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
