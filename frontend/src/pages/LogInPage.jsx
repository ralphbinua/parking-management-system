import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import "./LogInPage.css";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/users/login", {
        username,
        password,
      });

      // OPTIONAL: Store user to keep logged in
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      navigate("/dashboard"); // Change to whatever page you want
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400) {
        setError("Invalid username or password");
      } else {
        setError("Something went wrong. Try again.");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card login-card border-0 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-5 fw-bold text-primary">ParkEra</h2>
          <h3 className="card-title text-center mb-4 fw-bold">LOGIN</h3>

          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger py-2">{error}</div>}

            <div className="mb-3">
              <label htmlFor="username" className="form-label text-muted">Username</label>
              <input type="text" className="form-control" id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-muted">Password</label>
              <input type="password" className="form-control" id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary fw-bold py-2 w-100">
              LOGIN
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="text-muted small">
              Don't have an account? <a href="/signup" className="text-primary fw-semibold text-decoration-none">Sign up here</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogInPage;
