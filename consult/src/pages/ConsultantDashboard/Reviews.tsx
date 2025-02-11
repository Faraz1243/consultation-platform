import React, { Component } from 'react'
import Header from './header'
import ConsultantSidepane from './sidepane'

export class ConsultantReviews extends Component {
  render() {
    return (
        <div className="provider-page">
        <div className="main-wrapper">
            <Header/>
            <ConsultantSidepane/>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <ReviewsBody/>
                </div>
            </div>

        </div>
      </div>
      
    )
  }
}

export default ConsultantReviews

const ReviewsBody = (props) =>{
  return (
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
          <h4>Reviews</h4>
        </div>
      </div>

      {/* reviews */}
      <div className="row ">

        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <div>
                        <div className="d-flex align-items-center">
                          <h6 className="fs-13 me-2">Jeffrey Akridge,</h6>
                          <span className="fs-12">July 11, 2024 11:38 am</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The construction service delivered excellent craftsmanship,
                  completing my home renovation on time with clear communication
                  throughout. Highly recommend for quality and professionalism!
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* reviews end */}

      {/* <div className="d-flex justify-content-between align-items-center">
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
      </div> */}
    </div>

  );
}