import React, { Component } from 'react'

export class ConsultantSidepane extends Component {
  render() {
    return (
        <>
        {/* Sidebar */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll"  style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="active">
                  <a href="provider-dashboard.html">
                    <i className="ti ti-layout-grid" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="provider-booking.html">
                    <i className="ti ti-calendar-month" />
                    <span>Bookings </span>
                  </a>
                </li>
                <li>
                  <a href="customer-list.html">
                    <i className="ti ti-user" />
                    <span>Customers</span>
                  </a>
                </li>
                <li>
                  <a href="provider-payout.html">
                    <i className="ti ti-wallet" />
                    <span>Payout</span>
                  </a>
                </li>
                <li>
                  <a href="provider-holiday.html">
                    {/* <i className="feather-calendar" /> */}
                    <i className="ti ti-wallet" />
                    <span>Holidays &amp; Leave</span>
                  </a>
                </li>
                <li>
                  <a href="provider-offers.html">
                    <i className="ti ti-square-percentage" />
                    <span>Offers</span>
                  </a>
                </li>
                <li>
                  <a href="provider-reviews.html">
                    <i className="ti ti-star" />
                    <span>Reviews</span>
                  </a>
                </li>
                <li>
                  <a href="provider-earnings.html">
                    <i className="ti ti-cash-banknote" />
                    <span>Earnings</span>
                  </a>
                </li>
                <li >
                  <a href="settings.html">
                    <i className="ti ti-settings" />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="ti ti-logout-2" />
                    <span>Logout</span>
                  </a>
                </li>
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
