import React, { Component } from 'react'
import NavBar from '../components/navbar'   
import Footer from '../components/footer'
import p1 from "./../assets/img/bg/breadcrumb-bg-02.png"
import dotted from "./../assets/img/bg/dotted.png"
import bg13 from "./../assets/img/bg/bg-13.png"
import hands from "./../assets/img/icons/about-hands.svg"
import aboutImage from "./../assets/img/icons/about-documents.svg"
import bookImage from "./../assets/img/icons/about-book.svg"
import ImgConsultants from "./../assets/img/consultants.jpg"

export class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        

        <>
  {/* Breadcrumb */}
  <div className="breadcrumb-bar text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title mb-2">About Us</h2>
          <nav aria-label="breadcrumb">
          </nav>
        </div>
      </div>
      <div className="breadcrumb-bg">
        <img
          src={p1}
          className="breadcrumb-bg-1"
          alt="Img"
        />
        <img
          src={p1}
          className="breadcrumb-bg-2"
          alt="Img"
        />
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content p-0">
      {/* About */}
      <div className="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img d-none d-md-block">
                <div className="about-exp">
                  <span>12+ years of experiences</span>
                </div>
                <div className="abt-img">
                  <img
                    src={ImgConsultants}
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h6>ABOUT OUR COMPANY</h6>
                <h2>Best Consultations for Catered to your Needs </h2>
                <p>
                At Konsult System, we streamline access to expert consultations across business, law, health, and more through an AI-powered platform. Our advanced AI chatbots and seamless appointment booking ensure clients receive personalized, efficient guidance anytime, anywhere. Whether you're an individual or business, Konsult System offers secure, reliable support tailored to your needs
                </p>
                <p>
                  {/* At Truelysell, our mission is to bridge the gap between
                  service providers and customers by offering a seamless and
                  efficient marketplace experience. We aim to empower both
                  parties by providing a reliable platform where quality,
                  transparency, and customer satisfaction are our top
                  priorities. */}
                </p>
          
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /About */}

      {/* Work Section */}
      <section className="work-section px-0 my-0 work-bg">
        <div className="work-bg-2 d-none d-md-block">
          <img src={dotted} alt="img" className="img-fluid" />
        </div>
        <div className="work-bg-1 d-none d-md-block">
          <img src={bg13} alt="img" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-heading">
                <h2>How It Works</h2>
                <p>
                  Straightforward process designed to make your experience
                  seamless and hassle-free.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex">
              <div className=" card work-box flex-fill">
                <div className="card-body">
                  <div className="work-icon">
                    <span>
                      <img src={hands} alt="img" />
                    </span>
                  </div>
                  <h5>1. Search and Browse</h5>
                  <p>
                    Customers can browse or search for specific products or
                    services using categories, filters, or search bars.
                  </p>
                  <h4>01</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className=" card work-box flex-fill">
                <div className="card-body">
                  <div className="work-icon">
                    <span>
                      <img
                        src={aboutImage}
                        alt="img"
                      />
                    </span>
                  </div>
                  <h5>2 Add to Cart or Book Now</h5>
                  <p>
                    Customers can add items to their shopping cart. For
                    services, they may select a service and proceed to book.
                  </p>
                  <h4>02</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className=" card work-box flex-fill">
                <div className="card-body">
                  <div className="work-icon">
                    <span>
                      <img src={bookImage} alt="img" />
                    </span>
                  </div>
                  <h5>Amazing Places</h5>
                  <p>
                    The Customer fulfills the order by either providing the
                    service to the buyer.
                  </p>
                  <h4>03</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Work Section */}


    </div>
  </div>
  {/* /Page Wrapper */}
</>

        

        <Footer/>
      </div>
    )
  }
}

export default About
