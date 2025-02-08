import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TinyHeader from '../components/tinyHeader'
import TinyFooter from '../components/tinyFooter'
import auth_bg from "./../assets/img/bg/authentication-bg.png"


// The main login page wrapper
const Login = () => {
  return (
    <div>
      {/* TinyHeader and TinyFooter are presumably header/footer components */}
      <TinyHeader />
      
      <LoginBody />
      
      <TinyFooter />
    </div>
  )
}

export default Login

// The actual login form body
const LoginBody = () => {
  // Local component states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    // Reset error message
    setErrorMessage('')
    setIsLoading(true)

    
    try {
      // Make the POST request
      const response = await fetch('http://66.29.151.197:8001/users/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Convert JS object to JSON
        credentials: 'include', // <--- crucial
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        // If you're using cookies for JWT, you might need:
        // credentials: 'include'
      })

      // Parse JSON response
      const data = await response.json()

      if (response.ok) {
        // Login success
        console.log('Login response:', data)
        if (data.token) {
          localStorage.setItem('access_token', data.token);
          localStorage.setItem('name', data.name);
        } else {
          console.error('No token in response');
        }
        window.location.href = '/'
      } else {
        // Login failed, show an error
        setErrorMessage(data.message || 'Login failed. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mx-auto">
              {/* onSubmit calls handleLogin */}
              <form onSubmit={handleLogin}>
                <div className="d-flex flex-column justify-content-center">
                  <div className="card p-sm-4 my-5">
                    <div className="card-body">
                      <div className="text-center mb-3">
                        <h3 className="mb-2">Welcome</h3>
                        <p>Enter your credentials to access your account</p>
                      </div>
                      {/* Email field */}
                      <div className="mb-3">
                        <label className="form-label">User Name (Email)</label>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      {/* Password field */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <label className="form-label">Password</label>
                          <a
                            href="/forgot-password"
                            className="text-primary fw-medium text-decoration-underline mb-1 fs-14"
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                  
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-linear-primary w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                      </div>
                      {/* Error message display */}
                      {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                        </div>
                      )}
            
            

                      <div className="d-flex justify-content-center">
                        <p>
                          Don’t have an account?{" "}
                          <Link to="/register" className="text-primary">
                            Join us Today
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={auth_bg}
                        className="bg-left-top"
                        alt="Left BG"
                      />
                      <img
                        src={auth_bg}
                        className="bg-right-bottom"
                        alt="Right BG"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  )
}
