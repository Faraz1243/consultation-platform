import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class ConsultantSidepane extends Component {
  render() {
    return (
        <>
        {/* Sidebar */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll"  style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <NavLink to="/consultant/dashboard">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Dashboard</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/bookings">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Bookings</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/customers">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Customers </span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/payouts">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Payout</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/holidays">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Holidays</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/offers">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Offers</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/reviews">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Reviews</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/earnings">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Earnings</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/settings">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Settings</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="/consultant/logout">
                  {({ isActive }) => (
                    <li className={isActive ? "active" : ""}>
                      <i className="ti ti-layout-grid" />
                      <span>Logout</span>
                    </li>
                  )}
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        {/* /Sidebar */}
      </>
      
    )
  }
}

export default ConsultantSidepane
