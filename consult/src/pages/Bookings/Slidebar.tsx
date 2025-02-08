import React, { Component } from 'react'

export class BookingSlidebar extends Component {
  render() {
    return (<>
        {/* Booking Sidebar */}
        <div className="col-lg-3 theiaStickySidebar">
          <div className="card bg-dark booking-sidebar mb-4 mb-lg-0">
            <div className="card-body">
              <h6 className="text-white fs-14 mb-2">Service Details</h6>
              <div className="service-info d-flex align-items-center">
                <span className="avatar avatar-md me-2 flex-shrink-0">
                  <img src="assets/img/services/service-02.jpg" alt="img" />
                </span>
                <div>
                  <p className="fs-12 text-white fw-medium mb-1">Spark Services</p>
                  <span className="fs-10">
                    <i className="ti ti-star-filled text-warning me-1" />
                    4.9 (255 reviews)
                  </span>
                </div>
              </div>
              <div className="booking-wizard">
                <h6 className="text-white fs-14 mb-3">Bookings</h6>
                <ul className="wizard-progress" id="bokingwizard">
                  <li className={this.props.percentage === 0 ? "active pb-3" : "pb-3"}>
                    <span>1. Location</span>
                  </li>
                  <li className={this.props.percentage === 25 ? "active pb-3" : "pb-3"}>
                    <span>2. Date &amp; Time</span>
                  </li>
                  <li className={this.props.percentage === 50 ? "active pb-3" : "pb-3"}>
                    <span>3. Personal Information</span>
                  </li>
                  <li className={this.props.percentage === 75 ? "active pb-3" : "pb-3"}>
                    <span>4. Payment</span>
                  </li>
                  <li className={this.props.percentage === 100 ? "active" : ""}>
                    <span>5. Confirmation</span>
                  </li>
                </ul>
              </div>
              <div className="status-report">
                <h6 className="text-white fs-14 mb-2 pb-2">Bookings</h6>
                <p className="fs-10">{this.props.percentage ? this.props.percentage : 0} % complete</p>
              </div>
              <div className="text-center">
                <p className="fs-10 text-white">
                  {/* Already have an account?{" "}
                  <a href="login.html" className="link-primary">
                    Login
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /Booking Sidebar */}
      </>
      
    )
  }
}

export default BookingSlidebar


