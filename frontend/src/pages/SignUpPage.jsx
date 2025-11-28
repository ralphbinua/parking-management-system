import React from 'react'
import './SignUpPage.css'

const SignUpPage = () => {
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

          <form>
              <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label small text-muted">email address</label>
                  <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm14 3.719-4.323 2.594L14 10.518V6.719zm-9.215 5.518-.75-.45L1.9 11.23a1 1 0 0 0-.9 1.13v.16a1 1 0 0 0 .9.81h12.2a1 1 0 0 0 .9-.81v-.16a1 1 0 0 0-.9-1.13L8.75 8.79l-1.5 1.5-1.5-1.5L2.2 6.719z" />
                          </svg>
                      </span>
                      <input type="email" className="form-control border-start-0" id="emailAddress" placeholder="email@example.com"/>
                  </div>
              </div>

              <div className="mb-4">
                  <label htmlFor="password" className="form-label small text-muted">Password</label>
                  <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                              <path d="M8 1a2 2 0 0 0-2 2v4h4V3a2 2 0 0 0-2-2m3 6V3a3 3 0 0 0-6 0v4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m-6.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1" />
                          </svg>
                      </span>
                      <input type="password" className="form-control border-start-0" id="password"/>
                  </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Create Account</button>
          </form>

          <div className="text-center mt-4">
              <small className="text-muted">Already have an account? <a href="login" className="text-decoration-none text-primary fw-semibold">Log in here</a></small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
