import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'
import logoSmall from '../../assets/img/logoSmall.png'

export class Header extends Component {
  render() {
    return (
        <>
        {/* Header */}
        <div className="header provider-header">
          {/* Logo */}
          <div className="header-left active">
            <a href="index.html" className="logo logo-normal">
              <img src={logo} alt="Logo" />
            </a>
            <a href="index.html" className="logo-small">
              <img src={logoSmall} alt="Logo" />
            </a>
            <a id="toggle_btn" href="javascript:void(0);">
              <i className="ti ti-menu-deep" />
            </a>
          </div>
          {/* /Logo */}

          <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <div className="header-user">
            <div className="nav user-menu">

              <div className="d-flex align-items-center">
                <div className="me-2 site-link">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center justify-content-center me-2"
                  >
                    <i className="feather-globe me-1" />
                    Visit Website
                  </a>
                </div>
                <div className="provider-head-links">
                  <div>
                    <a
                      href="javascript:void(0);"
                      id="dark-mode-toggle"
                      className="dark-mode-toggle me-2"
                    >
                      <i className="fa-regular fa-moon" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      id="light-mode-toggle"
                      className="dark-mode-toggle me-2"
                    >
                      <i className="ti ti-sun-filled" />
                    </a>
                  </div>
                </div>
                <div className="provider-head-links">
                  <a
                    href="javascript:void(0);"
                    className="d-flex align-items-center justify-content-center me-2 dropdown-toggle notify-link"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    <i className="feather-bell" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end notification-dropdown p-3">
                    <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                      <h6 className="notification-title">
                        Notifications <span className="fs-16 text-gray"> (2)</span>
                      </h6>
                     
                    </div>
              
           
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        {/* /Header */}
      </>
      
    )
  }
}

export default Header
