import React, { Component } from 'react'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import SidePane from './sidePane'
import i1 from "../../assets/img/providers/provider-20.jpg"
import i2 from "../../assets/img/user/user-11.jpg"
import i3 from "../../assets/icons/bin.png"
import i4 from "../../assets/icons/edit.png"

export class CustomerReviews extends Component {
  render() {
    return (
      <div>
        <NavBar />
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

export default CustomerReviews

const MainContent = () => {
    return (
        <div className="col-xl-9 col-lg-8">
  <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
    <h4 className="mb-3">Reviews</h4>   
  </div>
  <div className="row ">

    <ReviewTile/>
    <ReviewTile/>
    <ReviewTile/>


  </div>

</div>
);
}

const ReviewTile = (props) => {

    return ( <div className="col-xxl-12 col-lg-12">
        <div className="card shadow-none">
          <div className="card-body">
            <div className="d-md-flex align-items-center">
              <div className="review-widget d-sm-flex flex-fill">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex">
                    <span className="review-img me-2">
                      <img
                        src={i1}
                        className="rounded img-fluid"
                        alt="User Image"
                      />
                    </span>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <h6 className="fs-14 me-2">
                            Commercial Painting Services.
                          </h6>
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm me-2">
                          <img
                            src={i2}
                            className="rounded-circle "
                            alt="Img"
                          />
                        </span>
                        <h6 className="fs-13 me-2">Nancy Olson,</h6>
                        <span className="fs-12">July 18, 2024 04:30 pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-icon d-inline-flex" >
                <a href="javascript:void(0);" className="me-2">
                   <img src={i3} alt="" style={{maxHeight: '16px'}}/>
                </a>
                <a href="javascript:void(0);" className="">
                   <img src={i4} alt="" style={{maxHeight: '16px'}}/>
                </a>
              </div>
            </div>
            <div>
              <p className="fs-14">
                The commercial painting service provided outstanding results, with
                precise attention to detail and timely completion. Their
                professionalism and quality of work are top-notch!
              </p>
            </div>
          </div>
        </div>
      </div>);
}