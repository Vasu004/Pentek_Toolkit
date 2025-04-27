import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReconInputPage = () => {
  const [domain, setDomain] = useState("");
  const navigate = useNavigate();

  const handleReconStart = () => {
    if (domain.trim() !== "") {
      navigate('/results', { state: { domain } });
    }
  };

  return (
    <div style={{
      backgroundColor: "#0d1117",
      color: "#00ff00",
      fontFamily: "monospace",
      height: "100vh",
      padding: "40px"
    }}>
      <h1>Enter Domain for Reconnaissance</h1>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="e.g. testfire.net"
        style={{
          padding: "10px",
          width: "300px",
          backgroundColor: "#161b22",
          color: "#00ff00",
          border: "1px solid #30363d",
          borderRadius: "4px"
        }}
      />
      <br /><br />
      <button
        onClick={handleReconStart}
        style={{
          backgroundColor: "#238636",
          color: "#ffffff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Run Recon
      </button>
    </div>
  );
};

export default ReconInputPage;
