import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Img from "../assets/img/bg/error-404.png"
import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      <div>
        <NavBar noTabs={true}/>
        <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mx-auto">
          <div className="img-success d-flex justify-content-center mx-auto">
            <img
              src={Img}
              alt="Img"
              className="img-fluid"
            />
          </div>
          <div>
            <h1 className="text-center display-6 mb-2">
              404 Oops! Page Not Found
            </h1>
            <div className="text-center mb-4">
              <span className="text-gray fs-14 ">
                This page doesn't exist or was removed! We suggest you back to
                home.
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                to="/"
                className="btn btn-dark d-flex align-items-center "
              >
                <i className="ti ti-circle-arrow-left me-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Main Wrapper */}
</>

      </div>
    )
  }
}

export default NotFound
