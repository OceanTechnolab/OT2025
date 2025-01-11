/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

// Navbar component definition
const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
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

        {/* Mobile menu toggle button */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <div className="nav-item">
                {/* Link to Home page */}
                <Link href={`/`} className="nav-link">Home</Link>
              </div>
            </li>
            <li className="nav-item">
              {/* Link to About Us page */}
              <Link href={`/About`} className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              {/* Link to Our Work page */}
                <Link href={`/Our-Work`} className="nav-link">Our Work</Link>
            </li>
            <li className="nav-item">
              {/* Link to Blog page */}
              <Link href={`/Blog`} className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              {/* Link to Contact page */}
              <Link href={`/Contact`} className="nav-link">Contact</Link>
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
                {/* Link to Stack It Up! page */}
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
