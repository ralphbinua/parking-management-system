import React from 'react'
import './LogInPage.css'

const LogInPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card login-card border-0 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-5 fw-bold text-primary">ParkEra</h2>

          <h3 className="card-title text-center mb-4 fw-bold">LOGIN</h3>

          <form>
              <div className="mb-3">
                  <label htmlFor="username" className="form-label text-muted">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" />
              </div>

              <div className="mb-3">
                  <label htmlFor="password" className="form-label text-muted">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                          Remember me
                      </label>
                  </div>
                  <a href="#" className="text-decoration-none text-primary small fw-semibold">Forgot Password?</a>
              </div>

              <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary fw-bold py-2">LOGIN</button>
              </div>
          </form>

          <div className="or-divider text-muted small mb-4">
              <span>or</span>
          </div>

          <div className="d-grid mb-4">
              <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center py-2" type="button">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="me-2" />
                  Continue with Google
              </button>
          </div>

          <p className="text-center text-muted small">
              Don't have Account? <a href="signup" className="text-decoration-none text-primary fw-semibold">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogInPage