import React, { Component } from 'react'
import Header from './header'
import ConsultantSidepane from './sidepane'

export class ConsultantSettings extends Component {
  render() {
    return (
        <div className="provider-page">
        <div className="main-wrapper">
            <Header/>
            <ConsultantSidepane/>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <SetingBody/>
                </div>
            </div>

        </div>
      </div>
      
    )
  }
}

export default ConsultantSettings

const SetingBody = ()=>{
  return (
    <>
  {/* Page Wrapper */}
    <div className="content container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h5>Account Settings</h5>
          </div>
        </div>
      </div>
      {/* Profile settings */}
      <div className="row">
        <div className="col-md-10 mx-auto">
          {/* Account Settings */}
          <div className="card mb-0">
            <div className="card-body">
              <h6 className="user-title">Profile Picture</h6>
              <div className="pro-picture">
                <div className="pro-img avatar avatar-xl">
                  <img
                    src="assets/img/user/user-02.jpg"
                    alt="user"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="pro-info">
                  <div className="d-flex mb-2">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-dark btn-sm d-flex align-items-center me-3"
                    >
                      <i className="ti ti-cloud-upload me-1" />
                      Upload
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-light btn-sm d-flex align-items-center"
                    >
                      Remove
                    </a>
                  </div>
                  <p className="fs-14">
                    *image size should be at least 320px big,and less then
                    500kb. Allowed files .png and .jpg.
                  </p>
                </div>
              </div>
              <h6 className="user-title">General Information</h6>
              <div className="general-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Mobile Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <select className="select" style={
                        {
                          border: '1px solid #e3e3e3', 
                          margin: '8px 86px',
                          height: '30px',
                          width: '120px',
                          color: 'rgb(71, 78, 83)',
                        }
                      }
                      >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Date of birth</label>
                      <div className=" input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <input
                          type="text"
                          className="form-control datetimepicker"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Service Details</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="user-title">Address </h6>
              <div className="row address-info">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Postal Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Language</label>
                    <input
                      className="input-tags form-control"
                      type="text"
                      data-role="tagsinput"
                      name="specialist"
                      defaultValue="English,French,spanish"
                      id="specialist"
                    />
                  </div>
                </div>
              </div>
              <div className="acc-submit d-flex justify-content-end">
                <a href="javascript:void(0);" className="btn btn-light me-3">
                  Cancel
                </a>
                <a href="javascript:void(0);" className="btn btn-dark">
                  Save Changes
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Account Settings */}
      </div>
      {/* /profile-settings */}
    </div>
  {/* /Page Wrapper */}
</>

  );
}