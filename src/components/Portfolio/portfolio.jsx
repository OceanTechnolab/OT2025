/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Our Recent Web Design &amp; <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All Templates
              </span>
              <span data-filter=".brand">Business</span>
              <span data-filter=".web">Ecommerce</span>
              <span data-filter=".graphic">Services</span>
              <span data-filter=".brand">Creative</span>
              <span data-filter=".web">Blog&Magzine</span>
              <span data-filter=".graphic">Food</span>
              <span data-filter=".graphic">Beauty&Health</span>
            </div>
          </div>

          <div className="gallery full-width">
            {/*Basic 6*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="image-container">
                <Link
                  href={`https://takshinfinity.com/`}
                  className="imago wow"
                  target="blank"
                >
                  <img
                    src="/img/portfolio/portfolio/WorkCategory/ActionFigureCollection.webp"
                    alt="Taksh Infinity"
                  />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Taksh Infinity</h6>
                <span>
                  <Link href="/works3/works3-dark">Taksh Infinity</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link
                  href={`https://mightythread.com/`}
                  className="imago wow"
                  target="blank"
                >
                  <img
                    src="/img/portfolio/portfolio/WorkCategory/ClothingSite2.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Clothing Site</h6>
                <span>
                  <Link href="/works3/works3-dark">Clothing Site</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link
                  href={`https://smallworldimmigration.ca/`}
                  className="imago wow"
                  target="blank"
                >
                  <img
                    src="/img/portfolio/portfolio/WorkCategory/ImmigrationServices3.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Immigration Services</h6>
                <span>
                  <Link href="/works3/works3-dark">Immigration Services</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link
                  href={`https://osseous.in/`}
                  className="imago wow"
                  target="blank"
                >
                  <img
                    src="/img/portfolio/portfolio/WorkCategory/OrthopedicManufacturer4.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Orthopedic Manufacture</h6>
                <span>
                  <Link href="/works3/works3-dark">Orthopedic Manufacture</Link>
                  ,<Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link
                  href={`https://curisls.com/`}
                  className="imago wow"
                  target="blank"
                >
                  <img
                    src="/img/portfolio/portfolio/WorkCategory/PharmaceuticalCompany5.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Pharmaceutical Company</h6>
                <span>
                  <Link href="/works3/works3-dark">Pharmaceutical Company</Link>
                  ,<Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link
                  href={`https://codexdrugs.in/`}
                  className="imago wow"
                  target="blank"
                >
                  <img
                    src="/img/portfolio/portfolio/WorkCategory/HerbalOnlineStore6.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Herbal Products</h6>
                <span>
                  <Link href="/works3/works3-dark">Herbal Products</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
