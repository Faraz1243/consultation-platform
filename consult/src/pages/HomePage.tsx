import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import bg1 from "./../assets/img/bg/bg-wave.png"
import bg2 from "./../assets/img/bg/corner-large.png"
import bg3 from "./../assets/img/bg/corner-small.png"
import mv2 from "./../assets/img/lawyer.jpg"
import mv1 from "./../assets/img/doctor.jpg"
import mv3 from "./../assets/img/services/banner3.png"
import mv4 from "./../assets/img/services/banner4.png"
import p1 from "./../assets/img/providers/provider-18.jpg"
// import mv4 from "./../assets/img/services/banner4.png"

export class HomePage extends Component {
  render() {
    return (
      <>      
        <body className="body-two">
          <div className="main-wrapper">

            <Navbar />

            {/* Hero Section */}
            <section className="hero-section">
              <div className="bg-wave d-none d-md-block">
                <img src={bg1} className="img-fluid" alt="bg" />
              </div>
              <div className="corner-large d-none d-md-block">
                <img
                  src={bg2}
                  className="img-fluid"
                  alt="bg"
                />
              </div>
              <div className="corner-small d-none d-md-block">
                <img
                  src={bg3}
                  className="img-fluid"
                  alt="bg"
                />
              </div>
              <div className="container">
                <div className="home-banner">
                  <div className="row align-items-center w-100">
                    <div className="col-lg-7 col-md-10 mx-auto">
                      <div className="section-search aos" data-aos="fade-up">
                        <h1>Professional Consulting Services  </h1>
                        <p>Search From 100+ Verified Cosultants!</p>
                        <div className="search-box">
                          <form action="search.html">
                            {/* <div className="search-input line">
                              <div className="search-group-icon">
                                <i className="feather-map-pin" />
                              </div>
                              <div className="form-group mb-0">
                                <label>Your Location</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="America"
                                />
                              </div>
                            </div> */}
                            <div className="search-input">
                              <div className="search-group-icon search-icon">
                                <i className="feather-search" />
                              </div>
                              <div className="form-group mb-0">
                                <label>What are you looking for?</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Chartered Accountant etc."
                                />
                              </div>
                            </div>
                            <div className="search-btn">
                              <button
                                className="btn btn-primary btn-lg"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#quote_modal"
                              >
                                Get a Quate
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="banner-imgs d-none d-md-block">
                        <div className="banner-1 shape-1">
                          <img
                            className="img-fluid"
                            alt="banner"
                            src={mv1}
                          />
                        </div>
                        <div className="banner-2 shape-3">
                          <img
                            className="img-fluid"
                            alt="banner"
                            src={mv2}
                          />
                        </div>
                        <div className="banner-3 shape-3">
                          <img
                            className="img-fluid"
                            alt="banner"
                            src={mv3}
                          />
                        </div>
                        <div className="banner-4 shape-2">
                          <img
                            className="img-responsive"
                            alt="banner"
                            src={mv4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Hero Section */}


            {/* Service Section */}
            {/* <section className="service-section service-sec-two">
              <div className="container">
                <div className="section-heading">
                  <div className="row align-items-center">
                    <div className="col-md-6 aos" data-aos="fade-up">
                      <h2>Featured Services</h2>
                      <p>
                        A featured services marketplace typically offers a platform where
                        various service providers can showcase their services to potential
                        customers.
                      </p>
                    </div>
                    <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                      <div className="owl-nav mynav" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div style={{ display: "flex",  }} className="owl-carousel service-slider row">

                      <div style={{ maxWidth: "400px" }} className="service-widget aos" data-aos="fade-up">
                        <div className="service-img">
                          <a href="service-details.html">
                            <img
                              className="img-fluid serv-img"
                              alt="Service Image"
                              src={p1}
                            />
                          </a>
                          <div className="fav-item">
                            <a href="categories.html">
                              <span className="item-cat">Cleaning</span>
                            </a>
                            <a href="javascript:void(0)" className="fav-icon">
                              <i className="feather-heart" />
                            </a>
                          </div>
                          <div className="item-info">
                            <a href="providers.html">
                              <span className="item-img">
                                <img
                                  src={p1}
                                  className="avatar"
                                  alt="User"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="service-content">
                          <h3 className="title">
                            <a href="service-details.html">
                              Electric Panel Repairing Service
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin me-1" />
                            New Jersey, USA
                            <span className="rate">
                              <i className="fas fa-star filled" />
                              4.9
                            </span>
                          </p>
                          <div className="serv-info">
                            <h6>$25.00</h6>
                            <a href="service-details.html" className="btn btn-light">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div style={{ maxWidth: "400px" }} className="service-widget aos" data-aos="fade-up">
                        <div className="service-img">
                          <a href="service-details.html">
                            <img
                              className="img-fluid serv-img"
                              alt="Service Image"
                              src={p1}
                            />
                          </a>
                          <div className="fav-item">
                            <a href="categories.html">
                              <span className="item-cat">Construction</span>
                            </a>
                            <a href="javascript:void(0)" className="fav-icon">
                              <i className="feather-heart" />
                            </a>
                          </div>
                          <div className="item-info">
                            <a href="providers.html">
                              <span className="item-img">
                                <img
                                  src="assets/img/profiles/avatar-02.jpg"
                                  className="avatar"
                                  alt="User"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="service-content">
                          <h3 className="title">
                            <a href="service-details.html">
                              Toughened Glass Fitting Services
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin me-1" />
                            Montana, USA
                            <span className="rate">
                              <i className="fas fa-star filled" />
                              4.9
                            </span>
                          </p>
                          <div className="serv-info">
                            <h6>$45.00</h6>
                            <a href="service-details.html" className="btn btn-light">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div style={{ maxWidth: "400px" }} className="service-widget aos" data-aos="fade-up">
                        <div className="service-img">
                          <a href="service-details.html">
                            <img
                              className="img-fluid serv-img"
                              alt="Service Image"
                              src={p1}
                            />
                          </a>
                          <div className="fav-item">
                            <a href="categories.html">
                              <span className="item-cat">Carpentry</span>
                            </a>
                            <a href="javascript:void(0)" className="fav-icon">
                              <i className="feather-heart" />
                            </a>
                          </div>
                          <div className="item-info">
                            <a href="providers.html">
                              <span className="item-img">
                                <img
                                  src="assets/img/profiles/avatar-03.jpg"
                                  className="avatar"
                                  alt="User"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="service-content">
                          <h3 className="title">
                            <a href="service-details.html">Wooden Carpentry Work</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin me-1" />
                            Montana, USA
                            <span className="rate">
                              <i className="fas fa-star filled" />
                              4.9
                            </span>
                          </p>
                          <div className="serv-info">
                            <h6>$45.00</h6>
                            <a href="service-details.html" className="btn btn-light">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div style={{ maxWidth: "400px" }} className="service-widget aos" data-aos="fade-up">
                        <div className="service-img">
                          <a href="service-details.html">
                            <img
                              className="img-fluid serv-img"
                              alt="Service Image"
                              src={p1}
                            />
                          </a>
                          <div className="fav-item">
                            <a href="categories.html">
                              <span className="item-cat">Construction</span>
                            </a>
                            <a href="javascript:void(0)" className="fav-icon">
                              <i className="feather-heart" />
                            </a>
                          </div>
                          <div className="item-info">
                            <a href="providers.html">
                              <span className="item-img">
                                <img
                                  src="assets/img/profiles/avatar-04.jpg"
                                  className="avatar"
                                  alt="User"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="service-content">
                          <h3 className="title">
                            <a href="service-details.html">Plumbing Services</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin me-1" />
                            Georgia, USA
                            <span className="rate">
                              <i className="fas fa-star filled" />
                              4.9
                            </span>
                          </p>
                          <div className="serv-info">
                            <h6>$45.00</h6>
                            <a href="service-details.html" className="btn btn-light">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-sec d-flex justify-content-center aos"
                    data-aos="fade-up"
                  >
                    <a
                      href="search.html"
                      className="btn btn-dark  d-flex align-items-center justify-content-center"
                    >
                      View All
                      <i className="ti ti-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </section> */}
            {/* /Service Section */}



            <Footer />

          </div>
        </body>
      </>
    )
  }
}

export default HomePage;
