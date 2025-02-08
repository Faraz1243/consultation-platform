import React, { Component } from 'react'
import logoFb from "./../assets/img/icons/fb.svg"
import logoInsta from "./../assets/img/icons/instagram.svg"
import logoX from "./../assets/img/icons/twitter.svg"
import logoLinkedin from "./../assets/img/icons/linkedin.svg"
// import logoFb from "./../"

export class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget">
                  <h5 className="mb-4">Product</h5>
                  <ul className="footer-menu">
                    <li>
                      <a href="javascript:void(0);">Features</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Case studies</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Reviews</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Updates</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget">
                  <h5 className="mb-4">Support</h5>
                  <ul className="footer-menu">
                    <li>
                      <a href="javascript:void(0);">Getting started</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Help center</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Server status</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Report a bug</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Chat support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget">
                  <h5 className="mb-4">For Provider</h5>
                  <ul className="footer-menu">
                    <li>
                      <a href="about-us.html">About</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact us</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Careers</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq’s</a>
                    </li>
                    <li>
                      <a href="blogs.html">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget">
                  <h5 className="mb-4">Support</h5>
                  <ul className="footer-menu">
                    <li>
                      <a href="javascript:void(0);">Getting started</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Help center</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Other Products</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Report a bug</a>
                    </li>
                    <li>
                      <a href="user-chat.html">Chat support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-xl-4">
                <div className="footer-widget">
                  <div className="card bg-light-200 border-0 mb-3">
                    <div className="card-body">
                      <h5 className="mb-3">SignUp For Subscription</h5>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-lg btn-linear-primary w-100"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap mt-3">
              <ul className="social-icon mb-3">
                <li>
                  <a href="javascript:void(0);">
                    <img src={logoFb} className="img" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src={logoInsta}
                      className="img"
                      alt="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src={logoX}
                      className="img"
                      alt="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src={logoLinkedin}
                      className="img"
                      alt="icon"
                    />
                  </a>
                </li>
              </ul>
          
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <p className="mb-2">
                    Copyright © 2024 - All Rights Reserved Konsult
                  </p>
                  <ul className="menu-links mb-2">
                    <li>
                      <a href="terms-condition.html"> Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      
    )
  }
}

export default Footer
