import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TinyHeader from '../components/tinyHeader'
import auth_bg from "./../assets/img/bg/authentication-bg.png"

const RegisterBody = () => {
  // 1. Define your form state
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  // 2. Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // 3. Submit form to your backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Using fetch:
      const response = await fetch('http://66.29.151.197:8001/users/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        }),
      });
    
      const data = await response.json();
    
      if (!response.ok) {
        // If the response isn't in the 200 range, throw an error with backend's message
        throw new Error(data.error || JSON.stringify(data.errors) || 'Failed to register');
      }
    
      console.log('Success:', data);
      alert('Registration successful');
      // Perform actions like redirect or clearing the form
    } catch (error) {
      console.error('Error:', error.message || error);
      alert("Registration failed: ${error.message || error}");
    }
    
  }

  return (
    <>
      <TinyHeader />
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mx-auto">
              
              {/* 4. Use onSubmit instead of action */}
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-center">
                  <div className="card p-sm-4 my-5">
                    <div className="card-body">
                      <div className="text-center mb-3">
                        <h3 className="mb-2">User Signup</h3>
                        <p>Enter your Data to Create an Account</p>
                      </div>

                      {/* First Name */}
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input 
                          type="text" 
                          name="firstName" 
                          className="form-control" 
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <label className="form-label">Password</label>
                          <p className="text-gray-6 fw-medium  mb-1">
                            Must be 8 Characters at Least
                          </p>
                        </div>
                        <input 
                          type="password" 
                          name="password"
                          className="form-control" 
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Confirm Password */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <label className="form-label">Confirm Password</label>
                        </div>
                        <input 
                          type="password" 
                          name="confirmPassword"
                          className="form-control" 
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Terms of Use */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember_me"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="remember_me"
                            >
                              I agree to{" "}
                              <a
                                href="#!"
                                className="text-primary text-decoration-underline"
                              >
                                Terms of use
                              </a>{" "}
                              &amp;{" "}
                              <a
                                href="#!"
                                className="text-primary text-decoration-underline"
                              >
                                Privacy policy
                              </a>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-linear-primary w-100"
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className=" d-flex justify-content-center">
                        <p>
                          Already have an account?{" "}
                          <Link to="/login" className="text-primary">
                            Sign In
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={auth_bg}
                        className="bg-left-top"
                        alt="Img"
                      />
                      <img
                        src={auth_bg}
                        className="bg-right-bottom"
                        alt="Img"
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

export default RegisterBody