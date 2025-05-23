import React, { Component } from 'react'
import SidePane from './sidePane'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import ImgProvider from '../../assets/img/providers/provider-13.jpg'

export class UserFavourites extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="row justify-content-center">
              <SidePane/>

              <MainContent/>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default UserFavourites

const MainContent = ()=>{
  return (
    <>
<div className="col-xl-9 col-lg-8">
  <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
    <h4>Favorites</h4>
    <div className="d-flex align-items-center">
      <span className="text-dark me-2">Sort</span>
      <div className="dropdown me-2">
        <a
          href="javascript:void(0);"
          className="dropdown-toggle bg-light-300 "
          data-bs-toggle="dropdown"
        >
          Newly Added
        </a>
        <div className="dropdown-menu">
          <a href="javascript:void(0);" className="dropdown-item active">
            Recently Added
          </a>
        </div>
      </div>
      <a
        href="javascript:void(0);"
        className="tags d-flex justify-content-center align-items-center border  rounded me-2"
      >
        <i className="ti ti-calendar" />
      </a>
      <a
        href="javascript:void(0);"
        className="tags d-flex justify-content-center align-items-center border rounded"
      >
        <i className="ti ti-adjustments-alt" />
      </a>
    </div>
  </div>

  {/* Tiles */}
  <div className="row justify-content-center align-items-center">

    <FavouriteTile/>
    <FavouriteTile/>
    <FavouriteTile/>
    <FavouriteTile/>
    <FavouriteTile/>
    
  </div>

  <div className="d-flex justify-content-between align-items-center">
    <div className="value d-flex align-items-center">
      <span>Show</span>
      <select>
        <option>7</option>
      </select>
      <span>entries</span>
    </div>
    <div className="d-flex align-items-center justify-content-center">
      <span className="me-2 text-gray-9">1 - 07 of 10</span>
      <nav aria-label="Page navigation">
        <ul className="paginations d-flex justify-content-center align-items-center">
          <li className="page-item me-2">
            <a
              className="page-link-1 active d-flex justify-content-center align-items-center "
              href="javascript:void(0);"
            >
              1
            </a>
          </li>
          <li className="page-item me-2">
            <a
              className="page-link-1 d-flex justify-content-center align-items-center "
              href="javascript:void(0);"
            >
              2
            </a>
          </li>
          <li className="page-item ">
            <a
              className="page-link-1 d-flex justify-content-center align-items-center "
              href="javascript:void(0);"
            >
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

    </>
  );
}

const FavouriteTile = (props)=>{
  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card p-0">
        <div className="card-body p-0">
          <div className="img-sec-2 w-100">
            <a href="service-details.html">
              <img
                src={ImgProvider}
                className="img-fluid rounded-top w-100"
                alt="img"
              />
            </a>
            <div className="image-tag d-flex justify-content-end align-items-center">
              <a
                href="javascript:void(0);"
                className="like-icon d-flex justify-content-center align-items-center"
              >
                {/* <i className="ti ti-heart-filled filled" /> */}
                <span>💚</span>
              </a>
              <span className="trend-tag-2">Construction</span>
            </div>
          </div>
          <div className="img-content p-3">
            <h6 className="fs-16 mb-3 text-truncate">
              <a href="service-details.html">Building Construction Services</a>
            </h6>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <span className="avatar avatar-md me-2">
                  <img
                    src="assets/img/user/user-09.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </span>
                <div>
                  <h6 className="fs-14">Roberts</h6>
                  <span className="fs-12">
                    <i className="ti ti-map-pin me-1" />
                    Houston, USA
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="service-details.html"
                  className="btn btn-light btn-sm "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}