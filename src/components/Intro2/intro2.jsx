/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Ocean TechNoLab</h6>
              </div>
              <h1 className="mb-10 fw-600">Trusted Software Development Company</h1>
              <p>
              We offer expert services in Website, Mobile App Development, and Digital Marketing with a dedicated team committed to excellence and timely delivery.
              </p>
              <Link
                href={`/about/about-dark`}
                className="butn bord curve mt-30"
              >
                <span>About Us</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/slid/001.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2