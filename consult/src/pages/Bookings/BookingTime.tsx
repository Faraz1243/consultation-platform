import React, { Component } from 'react'
import NavBar from '../../components/navbar'
import TinyFooter from '../../components/tinyFooter'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'

export class BookingTime extends Component {
  render() {
    return (
      <div>
        <NavBar noTabs={true} />
        
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <div className="content">
            <div className="container">
            {/* Booking */}
            <div className="row">
                <div className="col-xxl-10 col-xl-11 mx-auto">
                <div className="card border-0 mb-0">
                    <div className="card-body p-3 fieldset-wizard">
                    <div className="row">
                        <Slidebar percentage={25} />
                        <div className="col-lg-9">
                          <BookingTimeBody/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /Booking */}
            </div>
            </div>
        </div>
        {/* /Page Wrapper */}

        <TinyFooter/>
      </div>
    )
  }
}

export default BookingTime

const BookingTimeBody = () => {
    return (<>
        {/* Date & Time */}
        <div className="booking-content">
          <div className="book-card">
            <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
              <div className="d-flex align-items-center mb-2">
                <h6 className="fs-16 me-2 mb-2">Select Date &amp; Time</h6>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="dropdown mb-2">
                  <a
                    href="javascript:void(0);"
                    className="bg-light-500 d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-shopping-cart me-1" />
                    Cart<span className="bg-primary num-count ms-1">1</span>
                  </a>
                  <div className="dropdown-menu dropdown-sm p-3">
                    <h6 className="fs-13 mb-3">Added In Cart (02)</h6>
                    <div className="d-flex align-items-center p-2 bg-light rounded mb-3">
                      <span className="avatar avatar-lg">
                        <img src="assets/img/services/addservice-05.jpg" alt="img" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">Lighting Services</h6>
                        <p className="fs-12">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <span className="text-gray-9">4.9</span> (255 reviews)
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="fw-medium">Lighting Services</h6>
                        <p className="fs-10">30 Min</p>
                      </div>
                      <h6 className="fs-12 fw-medium">$457</h6>
                    </div>
                    <div className="mb-2 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="fw-medium">Outlets &amp; Wiring</h6>
                        <p className="fs-10">30 Min</p>
                      </div>
                      <h6 className="fs-12 fw-medium">$200</h6>
                    </div>
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="fw-medium">Switches Changes</h6>
                        <p className="fs-10">30 Min</p>
                      </div>
                      <h6 className="fs-12 fw-medium">$100</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                      <div>
                        <h6 className="fw-medium">Total</h6>
                      </div>
                      <h6 className="fw-medium">$757</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-5">
                <h6 className="fs-13 fw-medium mb-2">Select date</h6>
                <div className="card border mb-0">
                  <div className="card-body p-3">
                    <div className="datepic" />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <h6 className="fs-13 fw-medium mb-2">Select Time</h6>
                <div className="row g-2">
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item disable">
                      <h6 className="fs-12 fw-medium">07:00 - 07:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item disable">
                      <h6 className="fs-12 fw-medium">07:30 - 08:00</h6>
                      <p className="fs-10">4 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item disable">
                      <h6 className="fs-12 fw-medium">08:00 - 08:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item disable">
                      <h6 className="fs-12 fw-medium">08:30 - 09:00</h6>
                      <p className="fs-10">3 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">09:00 - 09:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">09:30 - 10:00</h6>
                      <p className="fs-10">5 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">10:00 - 10:30</h6>
                      <p className="fs-10">3 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">10:30 - 11:00</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">11:00 - 11:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">11:30 - 12:00</h6>
                      <p className="fs-10">5 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">12:00 - 12:30</h6>
                      <p className="fs-10">4 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">12:30 - 13:00</h6>
                      <p className="fs-10">6 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">13:00 - 13:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">13:30 - 14:00</h6>
                      <p className="fs-10">1 Slot</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">14:00 - 14:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">14:30 - 15:00</h6>
                      <p className="fs-10">3 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">15:00 - 15:30</h6>
                      <p className="fs-10">2 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">15:30 - 16:00</h6>
                      <p className="fs-10">4 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">16:00 - 16:30</h6>
                      <p className="fs-10">3 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">16:30 - 17:00</h6>
                      <p className="fs-10">1 Slots</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="time-item">
                      <h6 className="fs-12 fw-medium">17:00 - 17:30</h6>
                      <p className="fs-10">3 Slots</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-footer d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <Link
                to="/booking/location"
                className="btn btn-sm btn-light d-inline-flex align-items-center prev_btn me-2"
              >
                <i className="ti ti-arrow-left me-1" />
                Prev
              </Link>
              <Link
                to="/booking/personalInfo"
                className="btn btn-sm btn-dark d-inline-flex align-items-center next_btn"
              >
                Next
                <i className="ti ti-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Date & Time */}
      </>
      
    )
}