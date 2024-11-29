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
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`} className="dropdown-item">Main Home</Link>
                <Link href={`/homepage/home2-dark`} className="dropdown-item">Creative Agency</Link>
                <Link href={`/homepage/home5-dark`} className="dropdown-item">Digital Agency</Link>
                <Link href={`/homepage/home4-dark`} className="dropdown-item">Business One Page</Link>
                <Link href={`/homepage/home3-dark`} className="dropdown-item">Corporate Business</Link>
                <Link href={`/homepage/home6-dark`} className="dropdown-item">Modern Agency</Link>
                <Link href={`/homepage/home7-dark`} className="dropdown-item">Freelancer</Link>
                <Link href={`/homepage/home8-dark`} className="dropdown-item">Architecture</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/about/about-dark`} className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`} className="dropdown-item">Showcase Parallax</Link>
                <Link href={`/showcase4/showcase4-dark`} className="dropdown-item">Showcase Carousel</Link>
                <Link href={`/showcase3/showcase3-dark`} className="dropdown-item">Showcase Circle</Link>
                <Link href={`/works/works-dark`} className="dropdown-item">Portfolio Masonry</Link>
                <Link href={`/works2/works2-dark`} className="dropdown-item">Portfolio Filtering</Link>
                <Link href={`/works3/works3-dark`} className="dropdown-item">Portfolio Gallery</Link>
              </div>
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
                <Link href={`/blog/blog-dark`} className="dropdown-item">Blog Standerd</Link>
                <Link href={`/blog-list/blog-list-dark`} className="dropdown-item">Blog List</Link>
                <Link href={`/blog-grid/blog-grid-dark`} className="dropdown-item">Blog Grid</Link>
                <Link href={`/blog-details/blog-details-dark`} className="dropdown-item">Blog Details</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`} className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
