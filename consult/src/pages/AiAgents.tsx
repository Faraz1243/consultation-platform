import React, { Component } from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

export class AiAgents extends Component {
  render() {
    return (
      <div>
        <NavBar />
        
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="customer-chat">
                <div className="row chat-window">
                  {/* Chat User List */}
                  <div className="col-lg-4 chat-cont-left d-flex">
                    <div className="card mb-3 mb-md-0 flex-fill">
                      <div className="chat-header">
                        <div className="mb-3">
                          <h6>Chats</h6>
                        </div>
                        <div className="position-relative mb-0">
                          <input
                            type="text"
                            placeholder="Search For Contacts or Messages"
                            className="form-control"
                          />
                          <div className="search-icon-right">
                            <span className="search_btn">
                              <i className="feather-search" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body chat-users-list chat-scroll pt-0">
                        <div className="chat-header inner-chat-header pt-0">
                          <div>
                            <h6>All Chats</h6>
                          </div>
                        </div>
                        <a
                          href="javascript:void(0);"
                          className="d-flex justify-content-between chat-member active mb-2"
                        >
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-lg online active flex-shrink-0 me-2">
                              <img
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-16 fw-medium mb-1">PharmaBot</h6>
                            </div>
                          </div>
                      
                        </a>
                        <a
                          className="d-flex justify-content-between chat-member mb-2"
                        >
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-lg online flex-shrink-0 me-2">
                              <img
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-16 fw-medium mb-1">Tax Consultant</h6>
                              <p className="fs-14 text-gray text-truncate">
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="d-flex justify-content-between chat-member mb-2"
                        >
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-lg online flex-shrink-0 me-2">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-16 fw-medium mb-1">Legal Advisor</h6>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Chat User List */}
                  {/* Chat Content */}
                  <div className="col-lg-8 chat-cont-right chat-window-long">
                    {/* Chat History */}
                    <div className="card chat-window mb-0 shadow-none">
                      <div className="card-header msg_head">
                        <div className="d-flex bd-highlight">
                          <a
                            id="back_user_list"
                            href="javascript:void(0)"
                            className="back-user-list"
                          >
                            <i className="fas fa-chevron-left" />
                          </a>
                          <div className="avatar avatar-lg online flex-shrink-0 me-2">
                            <img
                              className="rounded-circle"
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="User"
                            />
                          </div>
                          <div>
                            <h6 className="fs-16 fw-medium mb-1">Pharmacist LLM</h6>
                            <p className="fs-14">Online</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center send-action">
                          <a href="javascript:void(0);">
                            <i className="ti ti-search fs-16" />
                          </a>
                          <a href="javascript:void(0);" className="me-0">
                            <i className="ti ti-dots-vertical fs-16" />
                          </a>
                        </div>
                      </div>
                      <div className="card-body msg_card_body chat-scroll pt-0">
                        <ul className="list-unstyled">
                          <li className="sent-message-group">
                            <ul>
                              <li className="media sent d-flex align-items-end">
                                <div className="media-body flex-grow-1">
                                  <div className="msg-box">
                                    <div className="d-flex align-items-center justify-content-end mb-1">
                                      <span className="d-flex align-items-center fs-14">
                                        <i className="ti ti-checks text-success me-2" />
                                        10:45 am
                                      </span>
                                      <i className="ti ti-point-filled mx-1 text-light" />
                                      <p className="fs-14">You</p>
                                    </div>
                                    <div className="position-relative">
                                      <div className="sent-message">
                                        <p className="fs-14">
                                          Hi there! I'm interested in your services.
                                        </p>
                                      </div>
                                      <span className="drop-item message-more-option">
                                        <a
                                          href="javascript:void(0);"
                                          className="more-vertical-bar"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </a>
                                        <small className="dropdown-menu">
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-copy me-2" />
                                            Copy
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-trash-2 me-2" />
                                            Delete
                                          </a>
                                        </small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media sent d-flex align-items-end">
                                <div className="avatar avatar-lg flex-shrink-0">
                                  <img
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="User Image"
                                    className="rounded-circle"
                                  />
                                </div>
                                <div className="media-body flex-grow-1">
                                  <div className="msg-box">
                                    <div className="d-flex align-items-center justify-content-end mb-1">
                                      <span className="d-flex align-items-center fs-14">
                                        <i className="ti ti-checks text-success me-2" />
                                        10:45 am
                                      </span>
                                      <i className="ti ti-point-filled mx-1 text-light" />
                                      <p className="fs-14">You</p>
                                    </div>
                                    <div className="position-relative">
                                      <div className="sent-message">
                                        <p className="fs-14">
                                          Can you tell me more about what you offer?,
                                          Can you explain it breifly...
                                        </p>
                                      </div>
                                      <span className="drop-item message-more-option">
                                        <a
                                          href="javascript:void(0);"
                                          className="more-vertical-bar"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </a>
                                        <small className="dropdown-menu">
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-copy me-2" />
                                            Copy
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-trash-2 me-2" />
                                            Delete
                                          </a>
                                        </small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="media received d-flex align-items-end">
                            <div className="avatar avatar-lg flex-shrink-0">
                              <img
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="d-flex align-items-center mb-1">
                                  <p className="fs-14 mb-0">Aariyan Jose</p>
                                  <i className="ti ti-point-filled mx-1 text-light" />
                                  <span className="d-flex align-items-center fs-14">
                                    10:45 am
                                    <i className="ti ti-checks text-success ms-2" />
                                  </span>
                                </div>
                                <div className="position-relative">
                                  <div className="received-message">
                                    <p className="fs-14">
                                      Hi there! I'm interested in your services.
                                    </p>
                                  </div>
                                  <span className="drop-item message-more-option">
                                    <a
                                      href="javascript:void(0);"
                                      className="more-vertical-bar"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </a>
                                    <small className="dropdown-menu">
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="feather-copy me-2" />
                                        Copy
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="feather-trash-2 me-2" />
                                        Delete
                                      </a>
                                    </small>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="text-center day-badge mb-4">
                            <span className="badge badge-dark rounded-pill mx-auto">
                              Yesterday
                            </span>
                          </li>
                          <li className="media sent d-flex align-items-end">
                            <div className="avatar avatar-lg flex-shrink-0">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="d-flex align-items-center justify-content-end mb-1">
                                  <span className="d-flex align-items-center fs-14">
                                    <i className="ti ti-checks text-success me-2" />
                                    10:45 am
                                  </span>
                                  <i className="ti ti-point-filled mx-1 text-light" />
                                  <p className="fs-14">You</p>
                                </div>
                                <div className="position-relative">
                                  <div className="sent-message">
                                    <p className="fs-14">
                                      Can you tell me more about what you offer?, Can
                                      you explain it breifly...
                                    </p>
                                  </div>
                                  <span className="drop-item message-more-option">
                                    <a
                                      href="javascript:void(0);"
                                      className="more-vertical-bar"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </a>
                                    <small className="dropdown-menu">
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="feather-copy me-2" />
                                        Copy
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="feather-trash-2 me-2" />
                                        Delete
                                      </a>
                                    </small>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="media received d-flex align-items-end">
                            <div className="avatar avatar-lg flex-shrink-0">
                              <img
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="User Image"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="d-flex align-items-center mb-1">
                                  <p className="fs-14 mb-0">Aariyan Jose</p>
                                  <i className="ti ti-point-filled mx-1 text-light" />
                                  <span className="d-flex align-items-center fs-14">
                                    08:00 AM
                                    <i className="ti ti-checks text-success ms-2" />
                                  </span>
                                </div>
                                <div className="position-relative">
                                  <div className="received-message">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar avatar-md rounded-circle bg-white text-dark flex-shrink-0 me-2">
                                        <i className="ti ti-files fs-18" />
                                      </span>
                                      <div>
                                        <p className="mb-0 fs-14">Ecommerce.zip</p>
                                        <span className="fs-14">14.23 KB</span>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="drop-item message-more-option">
                                    <a
                                      href="javascript:void(0);"
                                      className="more-vertical-bar"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </a>
                                    <small className="dropdown-menu">
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="feather-copy me-2" />
                                        Copy
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="feather-trash-2 me-2" />
                                        Delete
                                      </a>
                                    </small>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="sent-message-group">
                            <ul>
                              <li className="media sent d-flex align-items-end">
                                <div className="media-body flex-grow-1">
                                  <div className="msg-box">
                                    <div className="d-flex align-items-center justify-content-end mb-1">
                                      <span className="d-flex align-items-center fs-14">
                                        <i className="ti ti-checks text-success me-2" />
                                        09:15 AM
                                      </span>
                                      <i className="ti ti-point-filled mx-1 text-light" />
                                      <p className="fs-14">You</p>
                                    </div>
                                    <div className="position-relative">
                                      <div className="sent-message">
                                        <p className="fs-14">
                                          Hi there! I'm interested in learning more
                                        </p>
                                      </div>
                                      <span className="drop-item message-more-option">
                                        <a
                                          href="javascript:void(0);"
                                          className="more-vertical-bar"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </a>
                                        <small className="dropdown-menu">
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-copy me-2" />
                                            Copy
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-trash-2 me-2" />
                                            Delete
                                          </a>
                                        </small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media sent d-flex align-items-end">
                                <div className="avatar avatar-lg flex-shrink-0">
                                  <img
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="User Image"
                                    className="rounded-circle"
                                  />
                                </div>
                                <div className="media-body flex-grow-1">
                                  <div className="msg-box">
                                    <div className="d-flex align-items-center justify-content-end mb-1">
                                      <span className="d-flex align-items-center fs-14">
                                        <i className="ti ti-checks text-success me-2" />
                                        09:15 AM
                                      </span>
                                      <i className="ti ti-point-filled mx-1 text-light" />
                                      <p className="fs-14">You</p>
                                    </div>
                                    <div className="position-relative">
                                      <div className="sent-message">
                                        <p className="fs-14">
                                          Send me your Profile Video if Any??
                                        </p>
                                      </div>
                                      <span className="drop-item message-more-option">
                                        <a
                                          href="javascript:void(0);"
                                          className="more-vertical-bar"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </a>
                                        <small className="dropdown-menu">
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-copy me-2" />
                                            Copy
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            <i className="feather-trash-2 me-2" />
                                            Delete
                                          </a>
                                        </small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <div className="input-group">
                          <a href="javascript:void(0);" className="microphone-chat">
                            <i className="ti ti-microphone fs-16" />
                          </a>
                          <input
                            className="form-control type_msg mh-auto empty_check"
                            placeholder="Type Your Message"
                          />
                          <div className="send-action">
                            <a href="javascript:void(0);">
                              <i className="ti ti-mood-smile fs-16" />
                            </a>
                            <a href="javascript:void(0);">
                              <i className="ti ti-folder fs-16" />
                            </a>
                            <a href="javascript:void(0);">
                              <i className="ti ti-dots-vertical fs-16" />
                            </a>
                            <button className="btn btn-primary btn_send">
                              <i className="ti ti-send fs-16" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Chat Content */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}

        <Footer />
      </div>
    )
  }
}

export default AiAgents
