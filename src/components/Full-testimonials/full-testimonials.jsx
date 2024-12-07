/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/1.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">True Fx Infotech</h6>
                      <span className="author-details">Digital Marketing Company</span>
                    </div>
                  </div>
                </div>
                <p>
                  Ocean Technolab completely transformed our website into a stunning and user-friendly platform. Their expertise was outstanding. Highly recommended!
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/2.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">District98.org</h6>
                      <span className="author-details">Non-Profit Club of Toastmasters International</span>
                    </div>
                  </div>
                </div>
                <p>
                  District98.org's website development with Ocean Technolab was seamless. They perfectly captured our organization's essence, delivering a modern website.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/3.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">mightythread.com</h6>
                      <span className="author-details">Clothing Store</span>
                    </div>
                  </div>
                </div>
                <p>
                  Ocean Technolab exceeded expectations with their creativity. The team's ecommerce expertise created a beautiful and intuitive online store for us.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/4.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">GreenLight Ventures</h6>
                      <span className="author-details">Startup Incubator</span>
                    </div>
                  </div>
                </div>
                <p>
                  Working with Ocean Technolab was a pleasure. Their custom software helped us streamline processes while boosting efficiency and scalability.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/5.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">EduMentor</h6>
                      <span className="author-details">EdTech Company</span>
                    </div>
                  </div>
                </div>
                <p>
                  Ocean Technolab’s mobile app expertise brought our ideas to life. The app design is sleek, functional, and exceeded all our expectations.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/6.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">PathWell Clinic</h6>
                      <span className="author-details">Healthcare Provider</span>
                    </div>
                  </div>
                </div>
                <p>
                  The Ocean Technolab team created a professional, easy-to-navigate website for our clinic. It’s been well-received by both patients and staff.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/7.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Zenith ERP</h6>
                      <span className="author-details">ERP Solutions Provider</span>
                    </div>
                  </div>
                </div>
                <p>
                  Ocean Technolab’s ERP consulting services were exceptional. They provided us with tailored solutions that improved efficiency and productivity.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/8.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">CityGrocer</h6>
                      <span className="author-details">Ecommerce Store</span>
                    </div>
                  </div>
                </div>
                <p>
                  The ecommerce platform Ocean Technolab built was flawless. It has provided our customers with a much better online shopping experience.
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/9.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">NextGen Finance</h6>
                      <span className="author-details">FinTech Startup</span>
                    </div>
                  </div>
                </div>
                <p>
                  Ocean Technolab’s cloud solutions offered us the scalability and reliability needed to support our expanding user base. Excellent services!
                </p>
              </div>
              <div className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/10.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Bright Minds Academy</h6>
                      <span className="author-details">Learning Institution</span>
                    </div>
                  </div>
                </div>
                <p>
                  Thanks to Ocean Technolab, we now have a robust and feature-rich website that caters perfectly to our students’ and educators’ needs.
                </p>
              </div>

              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
