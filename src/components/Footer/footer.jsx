/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Our Offices</h6>
                    <p>INDIA | AUSTRALIA</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@oceantechnolab.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 94277 02647</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <img src="/img/blog/1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <span className="date">14 sep 2022</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <img src="/img/blog/2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <span className="date">14 sep 2022</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2024, OCEAN TECHNOLAB Template. Made with passion by
                  <Link
                    href="#"
                    target="_blank"
                  >
                    Team Ocean Technolab
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
