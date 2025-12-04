import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is used for navigation
import './SignUpPage.css';
import api from "../lib/axios";

const SignUpPage = () => {
  const [full_name, setFull_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!full_name.trim()) {
      newErrors.full_name = 'Full name is required.';
    }
    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});

    try {
      await api.post("/users", {
        full_name,
        username,
        password,
        user_type: 'student'  // Added user_type as 'student'
      });
      alert('Account created successfully!');
      navigate('/'); // Redirect to login or home page
    } catch (error) {
      console.log("Error creating account", error);
      if (error.response && error.response.status === 429) {
        alert("Slow down! You're creating accounts too fast.");
      } else {
        alert("Failed to create account. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card form-card border-0 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4 fw-bold text-primary">ParkEra</h2>

          <h5 className="text-center mb-4 fw-semibold">Create your account</h5>

          <button type="button" className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center mb-3">
              <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google logo" className="me-2" />
              Continue with Google
          </button>

          <div className="or-divider text-uppercase small text-muted mb-3">or</div>

          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="fullName" className="form-label small text-muted">Full Name</label>
                  <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                          </svg>
                      </span>
                      <input type="text" className="form-control border-start-0" id="fullName" placeholder="Enter your full name" value={full_name} onChange={handleInputChange(setFull_name, 'full_name')} required/>
                  </div>
                  {errors.full_name && <div className="text-danger small mt-1">{errors.full_name}</div>}
              </div>

              <div className="mb-3">
                  <label htmlFor="username" className="form-label small text-muted">Username</label>
                  <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-at" viewBox="0 0 16 16">
                              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                          </svg>
                      </span>
                      <input type="text" className="form-control border-start-0" id="username" placeholder="Enter your username" value={username} onChange={handleInputChange(setUsername, 'username')} required/>
                  </div>
                  {errors.username && <div className="text-danger small mt-1">{errors.username}</div>}
              </div>

              <div className="mb-4">
                  <label htmlFor="password" className="form-label small text-muted">Password</label>
                  <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                              <path d="M8 1a2 2 0 0 0-2 2v4h4V3a2 2 0 0 0-2-2m3 6V3a3 3 0 0 0-6 0v4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m-6.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1" />
                          </svg>
                      </span>
                      <input type="password" className="form-control border-start-0" id="password" value={password} onChange={handleInputChange(setPassword, 'password')} required/>
                  </div>
                  {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
          </form>

          <div className="text-center mt-4">
              <small className="text-muted">Already have an account? <a href="/" className="text-decoration-none text-primary fw-semibold">Log in here</a></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
