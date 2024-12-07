/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import IconCloud from "../../components/IconCloud/IconCloud";
import iconSlugs from "../../data/iconSlugs";

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Reimagine Your Digital Future</h6>
              </div>
              <h1 className="mb-10 fw-600">Your Trusted Partner in Software Innovation</h1>
              <p>
              Transform your ideas into reality with our expert team by your side. From stunning websites to cutting-edge mobile apps and impactful digital marketing, we craft tailored solutions with a passion for excellence and a promise of timely delivery.
              </p>
              <Link
                href={`/about/about-light`}
                className="butn bord curve mt-30"
              >
                <span>About Us</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
          <IconCloud iconSlugs={iconSlugs} />
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2