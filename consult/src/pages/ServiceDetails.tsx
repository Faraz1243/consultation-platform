import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../components/footer";
import p1 from "./../assets/img/bg/breadcrumb-bg-02.png";
import slider1 from "./../assets/img/services/service-slider-01.jpg";
import slider2 from "./../assets/img/services/service-slider-02.jpg";
import slider3 from "./../assets/img/services/service-slider-03.jpg";
import slider4 from "./../assets/img/services/service-slider-04.jpg";
import slider5 from "./../assets/img/services/service-slider-05.jpg";
import slider6 from "./../assets/img/services/service-slider-06.jpg";
import { Link } from "react-router-dom";

export class ServiceDetails extends Component {
  render() {
    return (
      <div>
        <Navbar />

        {/* Breadcrumb */}
        <div className="breadcrumb-bar text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title mb-2">Service Details</h2>
              </div>
            </div>
            <div className="breadcrumb-bg">
              <img src={p1} className="breadcrumb-bg-1" alt="Img" />
              <img src={p1} className="breadcrumb-bg-2" alt="Img" />
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}

        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="row">

                <div className="col-xl-8">
                  <div className="card border-0">
                    <div className="card-body">

                      <div className="service-head mb-2">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <h3 className="mb-2">Criminal Lawyer</h3>
                          <span className="badge badge-purple-transparent mb-2">
                            <i className="ti ti-calendar-check me-1" />
                            6000+ Bookings
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                          <div className="d-flex align-items-center flex-wrap">
                            <p className="me-3 mb-2">
                              <i className="ti ti-map-pin me-2" />
                              18 Boon Lay Way, Singapore{" "}
                              <a
                                href="javascript:void(0);"
                                className="link-primary text-decoration-underline"
                              >
                                View Location
                              </a>
                            </p>
                            <p className="mb-2">
                              <i className="ti ti-star-filled text-warning me-2" />
                              <span className="text-gray-9">4.9</span>(255
                              reviews)
                            </p>
                          </div>
                          <div className="d-flex align-items-center flex-wrap">
                            <a href="javscript:void(0);" className="me-3 mb-2">
                              <i className="ti ti-eye me-2" />
                              3050 Views
                            </a>
                            <a href="javscript:void(0);" className="me-3 mb-2">
                              <i className="ti ti-heart me-2" />
                              Add to Wishlist
                            </a>
                            <a href="javscript:void(0);" className="me-3 mb-2">
                              <i className="ti ti-share me-2" />
                              Share Now
                            </a>
                          </div>
                        </div>
                      </div>


                      {/* Slider */}
                      <div className="service-wrap mb-4">
                        <div className="slider-wrap">
                          <div
                            className="owl-carousel service-carousel nav-center mb-3"
                            id="large-img"
                          >
                            <div className="service-img">
                              <img
                                src={slider1}
                                className="img-fluid"
                                alt="Slider Img"
                              />
                            </div>
                      
                          </div>
                        </div>
                    
                      </div>

                      {/* Service Overview */}
                      <div className="accordion service-accordion">
                        <div className="accordion-item mb-4">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button p-0"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#overview"
                              aria-expanded="false"
                            >
                              Service Overview
                            </button>
                          </h2>
                          <div
                            id="overview"
                            className="accordion-collapse collapse show"
                          >
                            <div className="accordion-body border-0 p-0 pt-3">
                              <div className="more-text">
                                <p>
                                  Provides reliable and professional electrical
                                  solutions for residential and commercial
                                  clients. Our licensed electricians are
                                  dedicated to delivering top-quality service,
                                  ensuring safety, and meeting all your
                                  electrical needs. Committed to providing
                                  high-quality electrical solutions with a focus
                                  on safety and customer satisfaction. Our team
                                  of licensed electricians is equipped to handle
                                  both residential and commercial projects with
                                  expertise and care.
                                </p>
                                <p>
                                  Comprehensive overview of Electrical Services,
                                  including the types of services offered, key
                                  benefits, location, contact details, special
                                  offers, and customer reviews.
                                </p>
                              </div>
                              <a
                                href="javascript:void(0);"
                                className="link-primary text-decoration-underline more-btn mb-4"
                              >
                                Read More
                              </a>
                            
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-4">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button p-0"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#include"
                              aria-expanded="false"
                            >
                              Includes
                            </button>
                          </h2>
                          <div
                            id="include"
                            className="accordion-collapse collapse show"
                          >
                            <div className="accordion-body border-0 p-0 pt-3">
                              <div className="bg-light-200 p-3 pb-2 br-10">
                                <p className="d-inline-flex align-items-center mb-2 me-4">
                                  <i className="feather-check-circle text-success me-2" />
                                  Haircut &amp; Hair Styles
                                </p>
                                <p className="d-inline-flex align-items-center mb-2 me-4">
                                  <i className="feather-check-circle text-success me-2" />
                                  Shampoo &amp; Conditioning
                                </p>
                                <p className="d-inline-flex align-items-center mb-2 me-4">
                                  <i className="feather-check-circle text-success me-2" />
                                  Beard Trim/Shave
                                </p>
                                <p className="d-inline-flex align-items-center mb-2 me-4">
                                  <i className="feather-check-circle text-success me-2" />
                                  Neck Shave
                                </p>
                                <p className="d-inline-flex align-items-center mb-2 me-4">
                                  <i className="feather-check-circle text-success me-2" />
                                  Hot Towel Treatment
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="accordion-item mb-4">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button p-0"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#gallery"
                              aria-expanded="false"
                            >
                              Gallery
                            </button>
                          </h2>
                          <div
                            id="gallery"
                            className="accordion-collapse collapse show"
                          >
                            <div className="accordion-body border-0 p-0 pt-3">
                              <div className="gallery-slider owl-carousel nav-center">
                                <a
                                  href="assets/img/services/service-slider-01.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-01.jpg"
                                    alt="img"
                                  />
                                </a>
                                <a
                                  href="assets/img/services/service-slider-02.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-02.jpg"
                                    alt="img"
                                  />
                                </a>
                                <a
                                  href="assets/img/services/service-slider-03.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-03.jpg"
                                    alt="img"
                                  />
                                </a>
                                <a
                                  href="assets/img/services/service-slider-04.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-04.jpg"
                                    alt="img"
                                  />
                                </a>
                                <a
                                  href="assets/img/services/service-slider-05.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-05.jpg"
                                    alt="img"
                                  />
                                </a>
                                <a
                                  href="assets/img/services/service-slider-06.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-06.jpg"
                                    alt="img"
                                  />
                                </a>
                                <a
                                  href="assets/img/services/service-slider-03.jpg"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src="assets/img/services/service-thumb-03.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      
                   
                      </div>
                    </div>
                  </div>

                  {/* reviews section */}
                  <div className="card border-0 mb-xl-0 mb-4">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <h4 className="mb-3">Reviews (45)</h4>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#add-review"
                          className="btn btn-dark btn-sm mb-3"
                        >
                          Write a Review
                        </a>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="rating-item bg-light-500 text-center mb-3">
                            <h5 className="mb-3">
                              Customer Reviews &amp; Ratings
                            </h5>
                            <div className="d-inline-flex align-items-center justify-content-center">
                              <i className="ti ti-star-filled text-warning me-1" />
                              <i className="ti ti-star-filled text-warning me-1" />
                              <i className="ti ti-star-filled text-warning me-1" />
                              <i className="ti ti-star-filled text-warning me-1" />
                              <i className="ti ti-star-filled text-warning" />
                            </div>
                            <p className="mb-3">(4.9 out of 5.0)</p>
                            <p className="text-gray-9">
                              Based On 2,459 Reviews
                            </p>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="rating-progress mb-3">
                            <div className="d-flex align-items-center mb-2">
                              <p className="me-2 text-nowrap mb-0">
                                5 Star Ratings
                              </p>
                              <div
                                className="progress w-100"
                                role="progressbar"
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "90%" }}
                                />
                              </div>
                              <p className="progress-count ms-2">2,547</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <p className="me-2 text-nowrap mb-0">
                                4 Star Ratings
                              </p>
                              <div
                                className="progress mb-0 w-100"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <p className="progress-count ms-2">1,245</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <p className="me-2 text-nowrap mb-0">
                                3 Star Ratings
                              </p>
                              <div
                                className="progress mb-0 w-100"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "70%" }}
                                />
                              </div>
                              <p className="progress-count ms-2">600</p>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <p className="me-2 text-nowrap mb-0">
                                2 Star Ratings
                              </p>
                              <div
                                className="progress mb-0 w-100"
                                role="progressbar"
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <p className="progress-count ms-2">560</p>
                            </div>
                            <div className="d-flex align-items-center">
                              <p className="me-2 text-nowrap mb-0">
                                1 Star Ratings
                              </p>
                              <div
                                className="progress mb-0 w-100"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "40%" }}
                                />
                              </div>
                              <p className="progress-count ms-2">400</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card review-item mb-3">
                        <div className="card-body p-3">
                          <div className="review-info">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-lg me-2 flex-shrink-0">
                                  <img
                                    src="assets/img/profiles/avatar-01.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-16 fw-medium">
                                    Adrian Hendriques
                                  </h6>
                                  <div className="d-flex align-items-center flex-wrap date-info">
                                    <p className="fs-14 mb-0">2 days ago</p>
                                    <p className="fs-14 mb-0">
                                      Excellent service!
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <span className="badge bg-success d-inline-flex align-items-center mb-2">
                                <i className="ti ti-star-filled me-1" />5
                              </span>
                            </div>
                            <p className="mb-2">
                              The electricians were prompt, professional, and
                              resolved our issues quickly.did a fantastic job
                              upgrading our electrical panel. Highly recommend
                              them for any electrical work.
                            </p>
                            <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                              <div className="d-inline-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  Reply
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  Like
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center"
                                >
                                  <i className="ti ti-thumb-down me-2" />
                                  Dislike
                                </a>
                              </div>
                              <div className="d-inline-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  45
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-down me-2" />
                                  21
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="review-info reply mt-2 p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-lg me-2 flex-shrink-0">
                                  <img
                                    src="assets/img/profiles/avatar-02.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-16 fw-medium">
                                    Stephen Vance
                                  </h6>
                                  <div className="d-flex align-items-center flex-wrap date-info">
                                    <p className="fs-14 mb-0">2 days ago</p>
                                    <p className="fs-14 mb-0">
                                      Excellent service!
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <span className="badge bg-success d-inline-flex align-items-center mb-2">
                                <i className="ti ti-star-filled me-1" />4
                              </span>
                            </div>
                            <p className="mb-2">
                              Thank You!!! For Your Appreciation!!!
                            </p>
                            <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                              <div className="d-inline-flex align-items-center flex-wrap">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  Reply
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  Like
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center"
                                >
                                  <i className="ti ti-thumb-down me-2" />
                                  Dislike
                                </a>
                              </div>
                              <div className="d-inline-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  45
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-down me-2" />
                                  20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card review-item mb-3">
                        <div className="card-body p-3">
                          <div className="review-info">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-lg me-2 flex-shrink-0">
                                  <img
                                    src="assets/img/profiles/avatar-03.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-16 fw-medium">
                                    Don Rosales
                                  </h6>
                                  <div className="d-flex align-items-center flex-wrap date-info">
                                    <p className="fs-14 mb-0">2 days ago</p>
                                    <p className="fs-14 mb-0">Great Service!</p>
                                  </div>
                                </div>
                              </div>
                              <span className="badge bg-danger d-inline-flex align-items-center mb-2">
                                <i className="ti ti-star-filled me-1" />1
                              </span>
                            </div>
                            <p className="mb-2">
                              The quality of work was exceptional, and they left
                              the site clean and tidy. I was impressed by their
                              attention to detail and commitment to safety
                              standards. Highly recommend their services!
                            </p>
                            <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                              <div className="d-inline-flex align-items-center flex-wrap">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  Reply
                                </a>
                              </div>
                              <div className="d-inline-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  15
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-down me-2" />1
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card review-item mb-3">
                        <div className="card-body p-3">
                          <div className="review-info">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-lg me-2 flex-shrink-0">
                                  <img
                                    src="assets/img/profiles/avatar-04.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <div>
                                  <h6 className="fs-16 fw-medium">
                                    Paul Bronk
                                  </h6>
                                  <div className="d-flex align-items-center flex-wrap date-info">
                                    <p className="fs-14 mb-0">2 days ago</p>
                                    <p className="fs-14 mb-0">
                                      Reliable and Trustworthy!
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <span className="badge bg-success d-inline-flex align-items-center mb-2">
                                <i className="ti ti-star-filled me-1" />1
                              </span>
                            </div>
                            <p className="mb-2">
                              The quality of work was exceptional, and they left
                              the site clean and tidy. I was impressed by their
                              attention to detail and commitment to safety
                              standards. Highly recommend their services!
                            </p>
                            <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                              <div className="d-inline-flex align-items-center flex-wrap">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  Reply
                                </a>
                              </div>
                              <div className="d-inline-flex align-items-center">
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-up me-2" />
                                  10
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="d-inline-flex align-items-center me-2"
                                >
                                  <i className="ti ti-thumb-down me-2" />2
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-light btn-sm"
                        >
                          Load More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 theiaStickySidebar">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between border-bottom mb-3">
                        <div className="d-flex align-items-center">
                          <div className="mb-3">
                            <p className="fs-14 mb-0">Starts From</p>
                            <h4>
                              <span className="display-6 fw-bold">$457</span>
                              <span className="text-decoration-line-through text-default">
                                {" "}
                                $875
                              </span>
                            </h4>
                          </div>
                        </div>
                        <span className="badge bg-success mb-3 d-inline-flex align-items-center fw-medium">
                          <i className="ti ti-circle-percentage me-1" />
                          50% Offer
                        </span>
                      </div>
                      <Link
                        to="/booking/location"
                        className="btn btn-lg btn-primary w-100 d-flex align-items-center justify-content-center mb-3"
                      >
                        <i className="ti ti-calendar me-2" />
                        Book Service
                      </Link>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#add-enquiry"
                        className="btn btn-lg btn-outline-light d-flex align-items-center justify-content-center w-100"
                      >
                        <i className="ti ti-mail me-2" />
                        Send Enquiry
                      </a>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body">
                      <h4 className="mb-3">Service Provider</h4>
                      <div className="provider-info text-center bg-light-500 p-3 mb-3">
                        <div className="avatar avatar-xl mb-3">
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="img"
                            className="img-fluid rounded-circle"
                          />
                          <span className="service-active-dot">
                            <i className="ti ti-check" />
                          </span>
                        </div>
                        <h5>Thomas Herzberg</h5>
                        <p className="fs-14">
                          <i className="ti ti-star-filled text-warning me-2" />
                          <span className="text-gray-9 fw-semibold">
                            4.9
                          </span>{" "}
                          (255 reviews)
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">
                          <i className="ti ti-user text-default me-2" />
                          Member Since
                        </h6>
                        <p>14 Apr 2023</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">
                          <i className="ti ti-map-pin me-1" />
                          Address
                        </h6>
                        <p>Hanover, Maryland</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">
                          <i className="ti ti-mail me-1" />
                          Email
                        </h6>
                        <p>thomasxxx@example.com</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">
                          <i className="ti ti-phone me-1" />
                          Phone
                        </h6>
                        <p>+1 888 8XX XXXX</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">
                          <i className="ti ti-file-text me-1" />
                          No of Listings
                        </h6>
                        <p>03</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium">Social Profiles</h6>
                        <div className="d-flex align-items-center">
                          <div className="social-icon">
                            <a href="javascript:void(0);" className="me-2">
                              <img
                                src="assets/img/icons/fb.svg"
                                className="img"
                                alt="icon"
                              />
                            </a>
                            <a href="javascript:void(0);" className="me-2">
                              <img
                                src="assets/img/icons/instagram.svg"
                                className="img"
                                alt="icon"
                              />
                            </a>
                            <a href="javascript:void(0);" className="me-2">
                              <img
                                src="assets/img/icons/twitter.svg"
                                className="img"
                                alt="icon"
                              />
                            </a>
                            <a href="javascript:void(0);" className="me-2">
                              <img
                                src="assets/img/icons/whatsapp.svg"
                                className="img"
                                alt="icon"
                              />
                            </a>
                            <a href="javascript:void(0);" className="me-2">
                              <img
                                src="assets/img/icons/youtube.svg"
                                className="img"
                                alt="icon"
                              />
                            </a>
                            <a href="javascript:void(0);">
                              <img
                                src="assets/img/icons/linkedin.svg"
                                className="img"
                                alt="icon"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row border-top pt-3 g-2">
                        <div className="col-sm-6">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#add-contact"
                            className="btn btn-dark btn-lg fs-14 px-1 w-100"
                          >
                            <i className="ti ti-user me-2" />
                            Contact Provider
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <a
                            href="provider-chat.html"
                            className="btn btn-light btn-lg fs-14 px-1 w-100"
                          >
                            <i className="ti ti-user me-2" />
                            Chat Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body">
                      <h4 className="mb-3">Business Hours</h4>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">Monday</h6>
                        <p>9:30 AM - 7:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">Tuesday</h6>
                        <p>9:30 AM - 7:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">Wednesday</h6>
                        <p>9:30 AM - 7:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">Thursday</h6>
                        <p>9:30 AM - 7:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">Friday</h6>
                        <p>9:30 AM - 7:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-16 fw-medium mb-0">Saturday</h6>
                        <p>9:30 AM - 7:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-0">
                        <h6 className="fs-16 fw-medium mb-0">Sunday</h6>
                        <p className="text-danger">Closed</p>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="text-danger fs-14">
                    <i className="ti ti-pennant-filled me-2" />
                    Report Provider
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ServiceDetails;
