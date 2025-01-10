/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
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
              <img ref={lr} src={appData.lightLogo} alt="ocean Technolab logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="Ocean Technolab Logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
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
              <div className="nav-item">
                <Link href={`/`} className="nav-link">Home</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/About`} className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
                <Link href={`/Our-Work`} className="nav-link">Our Work</Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/blog/blog-light`} className="dropdown-item">Blog Standerd</Link>
                <Link href={`/blog-list/blog-list-light`} className="dropdown-item">Blog List</Link>
                <Link href={`/blog-grid/blog-grid-light`} className="dropdown-item">Blog Grid</Link>
                <Link href={`/blog-details/blog-details-light`} className="dropdown-item">Blog Details</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/contact-us`} className="nav-link">Contact</Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                OceanVerse
              </span>
              <div className="dropdown-menu">
                <Link href={`/Stack-It-Up`} className="dropdown-item">Stack It Up!</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
