/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
  
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <Link href="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img src={appData.darkLogo} alt="logo" />
            ) : (
              <img src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`} className="dropdown-item">
                  Main Home
                </Link>
                <Link href={`/homepage/home2-dark`} className="dropdown-item">
                  Creative Agency
                </Link>
                <Link href={`/homepage/home5-dark`} className="dropdown-item">
                  Digital Agency
                </Link>
                <Link href={`/homepage/home4-dark`} className="dropdown-item">
                  Business One Page
                </Link>
                <Link href={`/homepage/home3-dark`} className="dropdown-item">
                  Corporate Business
                </Link>
                <Link href={`/homepage/home6-dark`} className="dropdown-item">
                  Modern Agency
                </Link>
                <Link href={`/homepage/home7-dark`} className="dropdown-item">
                  Freelancer
                </Link>
                <Link href={`/homepage/home8-dark`} className="dropdown-item">
                  Architecture
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="blog-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
