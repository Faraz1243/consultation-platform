import React, { Component } from 'react'
import Header from './header'
import ConsultantSidepane from './sidepane'

export class ConsultantBookings

extends Component {
  render() {
    return (
        <div className="provider-page">
        <div className="main-wrapper">
            <Header/>
            <ConsultantSidepane/>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <BookingBody/>
                </div>
            </div>

        </div>
      </div>
      
    )
  }
}

export default ConsultantBookings


const BookingBody = ()=>{
  return (<div className="row">
    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
      <h4>Booking List</h4>
    </div>

    <div className="row justify-content-center">
      <div className="col-xxl-12 col-lg-12">

        <Tile status={"completed"}/>
        <Tile status={"inprogress"}/>
        <Tile status={"cancelled"}/>



      </div>
    </div>

  </div>
  
  );
}

const Tile = (props) =>{
  // user_name = props.name
  // date = props.date
  // time = props.time
  // location = props.location
  var status = props.status



  return(
    <div className="card shadow-none booking-list">
    <div className="card-body d-md-flex align-items-center">
      <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
        <div className="booking-img me-sm-3 mb-3 mb-sm-0">
          <div className="fav-item">
            <a href="javascript:void(0)" className="fav-icon">
              <i className="ti ti-heart" />
            </a>
          </div>
        </div>
        <div className="booking-det-info">
          <h6 className="mb-3">
            <a href="booking-details.html">Car Repair Services</a>
            <span className={statusClass[status]}>{status}</span>
          </h6>
          <ul className="booking-details">
            <li className="d-flex align-items-center mb-2">
              <span className="book-item">Booking Date</span>{" "}
              <small className="me-2">: </small>23 Sep 2022, 10:00-11:00
            </li>
            <li className="d-flex align-items-center mb-2">
              <span className="book-item">Amount</span>{" "}
              <small className="me-2">: </small> $50.00
              <span className="badge badge-soft-primary ms-2">COD</span>
            </li>
            <li className="d-flex align-items-center mb-2">
              <span className="book-item">Location</span>{" "}
              <small className="me-2">: </small>Alabama, USA
            </li>
        
          </ul>
        </div>
      </div>
      <div className="text-end">
        <div className="d-flex align-items-center flex-wrap row-gap-2">
          <a href="javascript:void(0);" className="btn btn-dark me-2">
            Rebook
          </a>
          <a
            href="booking.html"
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add-review"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Review
          </a>
        </div>
        <div className="view-action mt-3 mb-0 me-0 ms-0">
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
          </div>
          <a href="booking-details.html" className="text-primary">
            View Details
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

const statusClass = {
  completed: "badge badge-soft-success ms-2",
  cancelled: "badge badge-soft-danger ms-2",
  inprogress: "badge badge-soft-info ms-2"
}