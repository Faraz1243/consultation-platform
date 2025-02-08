import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatar from '../../assets/img/profiles/avatar-21.jpg'

export class SidePane extends Component {
  render() {
    return (
        <>
      {/* Side Pane */}
      <div className="col-xl-3 col-lg-4 theiaStickySidebar">
        <div className="card user-sidebar mb-4 mb-lg-0">

          <div className="card-header user-sidebar-header mb-4">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <span className="user rounded-circle avatar avatar-xxl mb-2">
                <img
                  src={avatar}
                  className="img-fluid rounded-circle"
                  alt="Img"
                />
              </span>
              <h6 className="mb-2">John Smith</h6>
              <p className="fs-14">Member Since Sep 2021</p>
            </div>
          </div>

          <div className="card-body user-sidebar-body p-0">
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/user/dashboard"
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-layout-grid me-2" />
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/user/bookings"
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-device-mobile me-2" />
                  Bookings
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/user/favourites" 
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-heart me-2" />
                  Favorites
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/user/customer-reviews"
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-star me-2" />
                  Reviews
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/user-chat"
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-star me-2" />
                  Chat
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/settings"
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-star me-2" />
                  Settings
                </NavLink>
              </li>
              <li className="mb-0">                
                <NavLink
                  to="/customer-reviews"
                  className={({ isActive }) => 
                    isActive ? "d-flex align-items-center active" : "d-flex align-items-center"
                  }
                >
                  <i className="ti ti-star me-2" />
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    
      );
  }
}

export default SidePane
