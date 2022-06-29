import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Error Page Not Found <br /> Click on Login button to go to Login Page
      </h1>
      <button
        style={{
          padding: "0.5rem 2rem",
          borderRadius: "50px",
          border: "none",
          background: "linear-gradient(10deg, #315dcd, transparent)",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "white",
          cursor: "pointer",
        }}
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default ErrorPage;
