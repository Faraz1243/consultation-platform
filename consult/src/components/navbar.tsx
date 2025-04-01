import React, { Component } from "react";
import Logo from "../assets/img/logo1.png";
import LogoSmall from "../assets/img/logoSmall.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// NAVBAR UPDATE
export class navbar extends Component {
  render() {
    return (
      <header className="header header-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <Link to="/" className="navbar-brand logo">
                <img src={Logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link to="/" className="navbar-brand logo-small">
                <img src={LogoSmall} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={Logo} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  {" "}
                  <i className="fas fa-times" />
                </a>
              </div>
              {this.props.noTabs ? null : (
                <ul className="main-nav">
                  <li className=" megamenu ">
                    <NavLink
                      to="/"
                      className={(isActive) => (isActive ? "active" : "")}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className=" megamenu ">
                    <NavLink
                      to="/user/dashboard"
                      className={(isActive) => (isActive ? "active" : "")}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="/consultants"
                      className={(isActive) => (isActive ? "active" : "")}
                    >
                      Consultants
                    </NavLink>
                  </li>
                  {/* <li className="has-submenu">
                  <NavLink to="/partners" className={(isActive)=>isActive? "active":""}>
                    Partners <i className="fas fa-chevron-down" />
                  </NavLink>
                </li> */}
                  <li className="nav-item">
                    <NavLink
                      to="/ai-agents"
                      className={(isActive) => (isActive ? "active" : "")}
                    >
                      AI Agents
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={(isActive) => (isActive ? "active" : "")}
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login" to="/login">
                  <i className="fa-regular fa-circle-user me-2" />
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default navbar;
