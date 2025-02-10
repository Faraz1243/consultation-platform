import React, { Component } from 'react'
import Header from './header'
import ConsultantSidepane from './sidepane'

export class ConsultantDashboard extends Component {
  render() {
    return (
        <div className="provider-page">
        <div className="main-wrapper">
            <Header/>
            <ConsultantSidepane/>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <Body/>
                </div>
            </div>

        </div>
      </div>
      
    )
  }
}

export default ConsultantDashboard

const Body = () => {
  return(
    <div className="row justify-content-center">
      <div className="col-xxl-3 col-md-6">
        <div className="row flex-fill">
          <div className="col-12">
            <div className="card prov-widget">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="mb-2">
                    <p className="mb-1">Upcoming Appointments</p>
                    <h5>
                      <span className="counter">12</span>+
                    </h5>
                  </div>
                  <span className="prov-icon bg-info d-flex justify-content-center align-items-center rounded">
                    <i className="ti ti-calendar-check" />
                  </span>
                </div>
                <p className="fs-12">
                  <span className="text-success me-2">
                    12% <i className="ti ti-arrow-badge-up-filled" />
                  </span>
                  from Last Week
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card prov-widget">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="mb-2">
                    <p className="mb-1">Completed Appointments</p>
                    <h5>
                      <span className="counter">68</span>+
                    </h5>
                  </div>
                  <span className="prov-icon bg-success d-flex justify-content-center align-items-center rounded">
                    <i className="ti ti-calendar-check" />
                  </span>
                </div>
                <p className="fs-12">
                  <span className="text-danger me-2">
                    12% <i className="ti ti-arrow-badge-down-filled" />
                  </span>
                  from Last Week
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card prov-widget">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="mb-2">
                    <p className="mb-1">Canceled Appointments</p>
                    <h5>
                      <span className="counter">08</span>+
                    </h5>
                  </div>
                  <span className="prov-icon bg-danger d-flex justify-content-center align-items-center rounded">
                    <i className="ti ti-calendar-check" />
                  </span>
                </div>
                <p className="fs-12">
                  <span className="text-danger me-2">0%</span>from Last Week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-md-6">
        <div className="card flex-fill">
          <div className="card-body">
            <div>
              <div className="d-flex justify-content-center flex-column mb-3">
                <h5 className="text-center">
                  1,500{" "}
                  <span className="text-success">
                    <i className="ti ti-arrow-badge-up-filled" />
                  </span>
                </h5>
                <p className="fs-12 text-center">Total earned last week so far</p>
              </div>
              <div className="d-flex justify-content-around mb-3">
                <div>
                  <p className="mb-0">Total Income</p>
                  <h5>$8145</h5>
                </div>
                <div>
                  <p className="mb-0">Total Due</p>
                  <h5>$8145</h5>
                </div>
              </div>
              <div id="daily-chart" />
              <div className="d-flex justify-content-center flex-column">
                <span className="text-success text-center fs-12 mb-4">
                  Performance is 30% better last month
                </span>
                <a href="provider-earnings.html" className="btn btn-dark">
                  View All Earnings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}