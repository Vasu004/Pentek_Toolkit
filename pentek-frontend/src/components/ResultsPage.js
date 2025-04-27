import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { runRecon } from '../api/api';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { domain } = location.state || {};
  const [output, setOutput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (domain) {
        try {
          const res = await runRecon(domain);
          setOutput(res.data.output);
        } catch (err) {
          setOutput("Error fetching recon data: " + err.message);
        }
      }
    };
    fetchData();
  }, [domain]);

  const handleBack = () => {
    navigate('/recon');
  };

  return (
    <div style={{
      backgroundColor: "#0d1117",
      color: "#00ff00",
      fontFamily: "monospace",
      height: "100vh",
      padding: "20px",
      overflowY: "auto"
    }}>
      <h1>🔍 Recon Results for: {domain}</h1>

      <button
        onClick={handleBack}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          backgroundColor: "#238636",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      <pre style={{
        backgroundColor: "#161b22",
        color: "#00ff00",
        padding: "20px",
        border: "1px solid #30363d",
        borderRadius: "6px",
        whiteSpace: "pre-wrap",
        marginTop: "20px"
      }}>
        {output}
      </pre>
    </div>
  );
};

export default ResultsPage;
