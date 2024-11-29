/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarMobileApp = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
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
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/homepage/home1-dark" className="dropdown-item">
                  Main Home
                </Link>
                <Link href="/homepage/home2-dark" className="dropdown-item">
                  Creative Agency
                </Link>
                <Link href="/homepage/home5-dark" className="dropdown-item">
                  Digital Agency
                </Link>
                <Link href="/homepage/home4-dark" className="dropdown-item">
                  Business One Page
                </Link>
                <Link href="/homepage/home3-dark" className="dropdown-item">
                  Corporate Business
                </Link>
                <Link href="/homepage/home6-dark" className="dropdown-item">
                  Modern Agency
                </Link>
                <Link href="/homepage/home7-dark" className="dropdown-item">
                  Freelancer
                </Link>
                <Link href="/homepage/home8-dark" className="dropdown-item">
                  Architecture
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/services-dark" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/pricing-plan-dark" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/portfolio-dark" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/shop-dark" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileApp;
