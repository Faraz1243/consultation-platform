import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ImgDoctor from "./../assets/img/lawyer.jpg"
import { Link } from 'react-router-dom'

export class Consultants extends Component {

  content = [
  {
    id:1,
    name:"Ali Ahmad",
    title: "Criminal Lawyer",
    field: "Law",
    rating: "4.9",
    rate: "2500"
  },
  {
    id:2,
    name:"Naseeb Amjad",
    title: "Nutritionist",
    field: "Diet",
    rating: "4.9",
    rate: "2500"
  },
  {
    id:3,
    name:"Ali Ahmad",
    title: "Fitness Trainer",
    rating: "4.9",
    field: "Law",
    rate: "2500"
  }
  ]

  render() {
    return (
      <div>
        <NavBar />

        <>{/* <!-- Breadcrumb Area Start --> */}
          <div className="breadcrumb-bar text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <h2 className="breadcrumb-title mb-2">Consultants</h2>
                </div>
              </div>
            </div>
          </div>
        </>

        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="row">
                <SidePane/>
                <MainContent data={this.content}/>
              </div>
            </div>
          </div>
        </div>


        <Footer />      
      </div>
    )
  }
}
export default Consultants

const SidePane = () => {
  return (
    <div className="col-xl-3 col-lg-4 theiaStickySidebar">
    <div className="card mb-4 mb-lg-0">
      <div className="card-body">
        <form action="search.html">
          <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
            <h5>
              <i className="ti ti-filter-check me-2" />
              Filters
            </h5>
            <a href="javascript:void(0);">Reset Filter</a>
          </div>
          <div className="mb-3 pb-3 border-bottom">
            <label className="form-label">Search By Keyword</label>
            <input
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
            />
          </div>
          <div className="accordion border-bottom mb-3">
            <div className="accordion-item mb-3">
              <div
                className="accordion-header"
                id="accordion-headingThree"
              >
                <div
                  className="accordion-button p-0 mb-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapseThree"
                  aria-expanded="true"
                  aria-controls="accordion-collapseThree"
                  role="button"
                >
                  Categories
                </div>
              </div>
              <div
                id="accordion-collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="accordion-headingThree"
              >
                <div className="content-list mb-3" id="fill-more">
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        // defaultChecked=""
                      />
                      All Categories
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      Construction
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      Car Wash
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      Electrical
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      Cleaning
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      Plumbing
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      Designing
                    </label>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  id="more"
                  className="more-view text-primary fs-14"
                >
                  View more <i className="ti ti-chevron-down ms-1" />
                </a>
              </div>
            </div>
          </div>
       
          <div className="accordion border-bottom mb-3">
            <div className="accordion-header" id="accordion-headingFive">
              <div
                className="accordion-button p-0 mb-3"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-collapseFive"
                aria-expanded="true"
                aria-controls="accordion-collapseFive"
                role="button"
              >
                Location
              </div>
            </div>
            <div
              id="accordion-collapseFive"
              className="accordion-collapse collapse show"
              aria-labelledby="accordion-headingFive"
            >
              <div className="mb-3">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select Location"
                  />
                  <span className="icon-addon">
                    <i className="ti ti-map-pin" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion border-bottom mb-3">
            <div className="accordion-header" id="accordion-headingSix">
              <div
                className="accordion-button p-0 mb-3"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-collapseSix"
                aria-expanded="true"
                aria-controls="accordion-collapseSix"
                role="button"
              >
                Price Range
              </div>
            </div>
            <div
              id="accordion-collapseSix"
              className="accordion-collapse collapse show"
              aria-labelledby="accordion-headingSix"
            >
              <div className="filter-range">
                <input type="text" id="range_03" />
              </div>
              <div className="filter-range-amount mb-3">
                <p className="fs-14">
                  Price: <span>$5 - $210</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-item mb-3">
              <div className="accordion-header" id="accordion-headingTwo">
                <div
                  className="accordion-button fs-18 p-0 mb-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapseTwo"
                  aria-expanded="true"
                  aria-controls="accordion-collapseTwo"
                  role="button"
                >
                  Ratings
                </div>
              </div>
              <div
                id="accordion-collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="accordion-headingTwo"
              >
                <div className="mb-3">
                  <div className="form-check mb-2">
                    <label className="form-check-label d-block">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        // defaultChecked=""
                      />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="float-end">(55)</span>
                      </span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label d-block">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <span className="float-end">(48)</span>
                      </span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label d-block">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <span className="float-end">(13)</span>
                      </span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label d-block">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <span className="float-end">(05)</span>
                      </span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <label className="form-check-label d-block">
                      <input
                        className="form-check-input"
                        type="checkbox"
                      />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <i className="fa-regular fa-star filled" />
                        <span className="float-end">(00)</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Search
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}


const MainContent = (props) => {
  const data = props.data
  return(
            <div className="col-xl-9 col-lg-8">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                    <h4>
                      Find your <span className="text-primary">Desired Services</span>
                    </h4>
                    <div className="d-flex align-items-center">
                      <span className="text-dark me-2">Sort</span>
                      <div className="dropdown me-2">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-toggle bg-light-300 "
                          data-bs-toggle="dropdown"
                        >
                          Price Low to High
                        </a>
                        <div className="dropdown-menu">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item active"
                          >
                            Price Low to High
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">
                            Price High to Low
                          </a>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="tags d-flex justify-content-center align-items-center bg-primary rounded me-2"
                      >
                        <i className="ti ti-layout-grid" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="tags d-flex justify-content-center align-items-center border rounded"
                      >
                        <i className="ti ti-list" />
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    
                    
                    {data.map((item) => {
                      return <AddTile name={item.name} title={item.title} field={item.field} rate={item.rate} rating={item.rating}/>
                    })}

                  </div>
                  <nav aria-label="Page navigation">
                    <ul className="paginations d-flex justify-content-center align-items-center">
                      <li className="page-item me-3">
                        <a className="page-link">
                          <i className="ti ti-arrow-left me-2" />
                          Prev
                        </a>
                      </li>
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
                      <li className="page-item me-3">
                        <a
                          className="page-link-1 d-flex justify-content-center align-items-center "
                          href="javascript:void(0);"
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link" href="javascript:void(0);">
                          Next
                          <i className="ti ti-arrow-right ms-2" />
                        </a>
                      </li>
                    </ul>
                  </nav>
            </div>
  );
}

const AddTile = (props) =>{
  const id = props.id
  const name = props.name
  const title = props.title
  const rating = props.rating
  const field = props.field
  const rate = props.rate

  return (
    <div className="col-xl-4 col-md-6">
    <div className="card p-0">
      <div className="card-body p-0">
        <div className="img-sec w-100">
          <Link to="/service-details">
            <img
              src={ImgDoctor}
              className="img-fluid rounded-top w-100"
              alt="img"
            />
          </Link>
          <div className="image-tag d-flex justify-content-end align-items-center">
            <span className="trend-tag">{field}</span>
            <a
              href="javascript:void(0);"
              className="fav-icon like-icon"
            >
              <i className="ti ti-heart" />
            </a>
          </div>
          <span className="image-logo avatar avatar-md border rounded-circle">
            <img
              src={ImgDoctor}
              className="img-fluid rounded-circle "
              alt="logo"
            />
          </span>
        </div>

        <div className="p-3">
          <h5 className="mb-2">
            <a href="service-details.html">{title}</a>
          </h5>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="fs-14 mb-0">
              <i className="ti ti-map-pin me-2" />
              {name}
            </p>
            <span className="rating text-gray fs-14">
              <i className="fa fa-star filled me-1" />
              {rating}
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              $25.00{" "}
              <span className="fs-13 text-gray">
                <del>{rate}/hr</del>
              </span>
            </h5>
            <a
              href="booking.html"
              className="btn bg-primary-transparent"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

}
