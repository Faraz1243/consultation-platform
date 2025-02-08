import React, { Component } from 'react'
import NavBar from '../../components/navbar'
import TinyFooter from '../../components/tinyFooter'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'

export class BookingPayment extends Component {
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
                        <Slidebar percentage={75}/>

                        <div className="col-lg-9">
                          <BookingPaymentBody/>
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

export default BookingPayment

const BookingPaymentBody = () => {
    return(
        <div className="booking-content">
            <div className="book-card">
                <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                <div className="d-flex align-items-center mb-2">
                    <h6 className="fs-16 me-2 mb-2">Payment Method</h6>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-secondary d-inline-flex align-items-center prev_btn mb-2"
                    >
                    <i className="ti ti-caret-left-filled me-1" />
                    Back to Cart
                    </a>
                </div>
                </div>
                <div className="row g-3">
                <div className="col-md-6">
                    <h6 className="fs-13 mb-3">Payment Types</h6>
                    <div className="payment-item d-flex align-items-center justify-content-between mb-2">
                    <div className="form-check d-flex align-items-center ps-0">
                        <input
                        className="form-check-input ms-0 mt-0"
                        name="payment"
                        type="radio"
                        id="payment1"
                        />
                        <label className="form-check-label ms-2" htmlFor="payment1">
                        Stripe
                        </label>
                    </div>
                    <div>
                        <img src="assets/img/icons/payment1.svg" alt="payment" />
                    </div>
                    </div>
                    <div className="payment-item d-flex align-items-center justify-content-between mb-2">
                    <div className="form-check d-flex align-items-center ps-0">
                        <input
                        className="form-check-input ms-0 mt-0"
                        name="payment"
                        type="radio"
                        id="payment2"
                        />
                        <label className="form-check-label ms-2" htmlFor="payment2">
                        Paypal
                        </label>
                    </div>
                    <div>
                        <img src="assets/img/icons/payment2.svg" alt="payment" />
                    </div>
                    </div>
                    <div className="payment-item d-flex align-items-center justify-content-between mb-2">
                    <div className="form-check d-flex align-items-center ps-0">
                        <input
                        className="form-check-input ms-0 mt-0"
                        name="payment"
                        type="radio"
                        id="payment3"
                        />
                        <label className="form-check-label ms-2" htmlFor="payment3">
                        Razorpay
                        </label>
                    </div>
                    <div>
                        <img src="assets/img/icons/razor-pay.svg" alt="payment" />
                    </div>
                    </div>
                    <div className="payment-item d-flex align-items-center justify-content-between mb-2">
                    <div className="form-check d-flex align-items-center ps-0">
                        <input
                        className="form-check-input ms-0 mt-0"
                        name="payment"
                        type="radio"
                        id="payment4"
                        />
                        <label className="form-check-label ms-2" htmlFor="payment4">
                        PaySolution
                        </label>
                    </div>
                    <div>
                        <img src="assets/img/icons/pay-solution.svg" alt="payment" />
                    </div>
                    </div>
                    <div className="payment-item d-flex align-items-center justify-content-between mb-0">
                    <div className="form-check d-flex align-items-center ps-0">
                        <input
                        className="form-check-input ms-0 mt-0"
                        name="payment"
                        type="radio"
                        id="payment5"
                        />
                        <label className="form-check-label ms-2" htmlFor="payment5">
                        Square
                        </label>
                    </div>
                    <div>
                        <img src="assets/img/icons/square.svg" alt="payment" />
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card total-card">
                    <div className="card-body p-3 d-flex justify-content-between flex-column">
                        <div>
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
                        </div>
                        <div>
                        <div className="total-wrap">
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                            <h6 className="fw-medium">Sub Total</h6>
                            <p className="text-gray-9">$757</p>
                            </div>
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                            <h6 className="fw-medium">
                                Tax <span className="text-default fw-normal">(GST 5%)</span>
                            </h6>
                            <p className="text-gray-9">$60</p>
                            </div>
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                            <h6 className="fw-medium">
                                Discount <span className="text-default fw-normal">15%</span>
                            </h6>
                            <p className="text-gray-9">$757</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-14">Total</h6>
                            <h6 className="fs-14">$757</h6>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex ">
                            <Link
                            to="/booking/confirmation"
                            className="btn btn-sm btn-dark d-inline-flex align-items-center next_btn"
                            >
                            Pay Now
                            <i className="ti ti-arrow-right ms-1" />
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}